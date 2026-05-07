export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { valuationSchema } from '~/lib/schemas';
import { SITE } from '~/lib/site';

export const POST: APIRoute = async ({ request }) => {
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

  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: `immogutachter360° <noreply@immogutachter360.de>`,
    to: SITE.email,
    replyTo: d.email,
    subject: `Online-Bewertung: ${d.type} — ${d.address}`,
    html: `
      <h2>Neue Online-Bewertungsanfrage</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Objekttyp</td><td style="padding:8px;border:1px solid #eee">${d.type}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Adresse</td><td style="padding:8px;border:1px solid #eee">${d.address}</td></tr>
        ${d.size ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Wohnfläche</td><td style="padding:8px;border:1px solid #eee">${d.size} m²</td></tr>` : ''}
        ${d.year ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Baujahr</td><td style="padding:8px;border:1px solid #eee">${d.year}</td></tr>` : ''}
        ${d.condition ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Zustand</td><td style="padding:8px;border:1px solid #eee">${d.condition}</td></tr>` : ''}
        ${d.reason ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Anlass</td><td style="padding:8px;border:1px solid #eee">${d.reason}</td></tr>` : ''}
        <tr><td colspan="2" style="padding:8px;border:1px solid #eee;background:#f9f9f9;font-weight:bold">Kontaktdaten</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${d.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${d.email}">${d.email}</a></td></tr>
        ${d.phone ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #eee"><a href="tel:${d.phone}">${d.phone}</a></td></tr>` : ''}
      </table>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
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
