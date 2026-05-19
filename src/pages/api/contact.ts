export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { contactSchema } from '~/lib/schemas';
import { SITE } from '~/lib/site';

export const POST: APIRoute = async ({ request, redirect }) => {
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

  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: `immogutachter360° <noreply@immogutachter360.de>`,
    to: SITE.email,
    replyTo: email,
    subject: `Neue Anfrage: ${reason ?? 'Allgemein'} — von ${name}`,
    html: `
      <h2>Neue Kontaktanfrage</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #eee"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Anlass</td><td style="padding:8px;border:1px solid #eee">${reason ?? '—'}</td></tr>
        ${message ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nachricht</td><td style="padding:8px;border:1px solid #eee">${message.replace(/\n/g, '<br/>')}</td></tr>` : ''}
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
