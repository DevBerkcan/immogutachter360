import { defineMiddleware } from 'astro:middleware';

// In-memory rate limiter (resets on cold start — adequate for serverless)
const requestCounts = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW_MS = 60_000; // 1 Minute

const ALLOWED_ORIGINS = [
  'https://www.immogutachter360.de',
  'https://immogutachter360.de',
  'http://localhost:4321',
  'http://localhost:4322',
];

export const onRequest = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith('/api/')) return next();

  // CSRF: Origin-Header prüfen
  const origin = context.request.headers.get('origin') ?? '';
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response(JSON.stringify({ error: 'Ungültige Anfrage' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Rate Limiting: max. 5 Anfragen pro IP pro Minute
  const ip =
    context.request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    context.request.headers.get('x-real-ip') ??
    'unknown';

  const now = Date.now();
  const entry = requestCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else if (entry.count >= LIMIT) {
    return new Response(
      JSON.stringify({ error: 'Zu viele Anfragen. Bitte warten Sie eine Minute.' }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
        },
      }
    );
  } else {
    entry.count++;
  }

  return next();
});
