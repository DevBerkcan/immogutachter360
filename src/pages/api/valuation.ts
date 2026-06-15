export const prerender = false;

import type { APIRoute } from 'astro';
import { valuationSchema } from '~/lib/schemas';
import { createTransporter, MAIL_FROM, MAIL_TO } from '~/lib/mailer';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.SMTP_PASS) {
    return new Response(
      JSON.stringify({ error: 'Server-Konfigurationsfehler. Bitte versuchen Sie es erneut.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Ungültige Anfrage' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parsed = valuationSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: parsed.error.issues[0]?.message ?? 'Ungültige Eingabe' }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const d = parsed.data;

  const safeType      = escapeHtml(d.type);
  const safeAddress   = escapeHtml(d.address);
  const safeSize      = d.size      ? escapeHtml(String(d.size))  : null;
  const safeYear      = d.year      ? escapeHtml(String(d.year))  : null;
  const safeCondition = d.condition ? escapeHtml(d.condition)     : null;
  const safeReason    = d.reason    ? escapeHtml(d.reason)        : null;
  const safeName      = escapeHtml(d.name);
  const safeEmail     = escapeHtml(d.email);
  const safePhone     = d.phone     ? escapeHtml(d.phone)         : null;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: d.email,
      subject: `Online-Bewertung: ${safeType} — ${safeAddress}`,
      html: `
        <h2>Neue Online-Bewertungsanfrage</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Objekttyp</td><td style="padding:8px;border:1px solid #eee">${safeType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Adresse</td><td style="padding:8px;border:1px solid #eee">${safeAddress}</td></tr>
          ${safeSize      ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Wohnfläche</td><td style="padding:8px;border:1px solid #eee">${safeSize} m²</td></tr>` : ''}
          ${safeYear      ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Baujahr</td><td style="padding:8px;border:1px solid #eee">${safeYear}</td></tr>` : ''}
          ${safeCondition ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Zustand</td><td style="padding:8px;border:1px solid #eee">${safeCondition}</td></tr>` : ''}
          ${safeReason    ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Anlass</td><td style="padding:8px;border:1px solid #eee">${safeReason}</td></tr>` : ''}
          <tr><td colspan="2" style="padding:8px;border:1px solid #eee;background:#f9f9f9;font-weight:bold">Kontaktdaten</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${safeName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          ${safePhone ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #eee"><a href="tel:${safePhone}">${safePhone}</a></td></tr>` : ''}
        </table>
      `,
    });
  } catch (err) {
    console.error('SMTP error:', err);
    return new Response(
      JSON.stringify({ error: 'Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
