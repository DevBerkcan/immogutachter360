export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { contactSchema } from '~/lib/schemas';
import { SITE } from '~/lib/site';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Server-Konfigurationsfehler. Bitte rufen Sie uns an.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const contentType = request.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');

  let raw: Record<string, unknown>;
  if (isJson) {
    raw = await request.json();
  } else {
    const formData = await request.formData();
    raw = Object.fromEntries(formData);
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: parsed.error.issues[0]?.message ?? 'Ungültige Eingabe' }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { name, email, phone, reason, message } = parsed.data;

  // Alle User-Eingaben vor HTML-Einbettung escapen
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : null;
  const safeReason = reason ? escapeHtml(reason) : null;
  const safeMessage = message ? escapeHtml(message).replace(/\n/g, '<br>') : null;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `immogutachter360° <noreply@immogutachter360.de>`,
    to: SITE.email,
    replyTo: email,
    subject: `Neue Anfrage: ${safeReason ?? 'Allgemein'} — von ${safeName}`,
    html: `
      <h2>Neue Kontaktanfrage</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${safeName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        ${safePhone ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #eee"><a href="tel:${safePhone}">${safePhone}</a></td></tr>` : ''}
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Anlass</td><td style="padding:8px;border:1px solid #eee">${safeReason ?? '—'}</td></tr>
        ${safeMessage ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nachricht</td><td style="padding:8px;border:1px solid #eee">${safeMessage}</td></tr>` : ''}
      </table>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(
      JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden. Bitte rufen Sie uns an.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (isJson) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return redirect('/kontakt?success=1', 303);
};
