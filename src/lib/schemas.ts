import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  reason: z.enum(['Verkauf', 'Kauf', 'Erbe', 'Scheidung', 'Steuer', 'Versicherung', 'Anderes']).optional(),
  message: z.string().optional(),
  consent: z.literal('on', { errorMap: () => ({ message: 'Bitte stimmen Sie der Datenverarbeitung zu' }) }),
});

export const valuationSchema = z.object({
  type: z.string().min(1),
  address: z.string().min(5, 'Bitte geben Sie eine vollständige Adresse an'),
  size: z.string().optional(),
  year: z.string().optional(),
  condition: z.string().optional(),
  reason: z.string().optional(),
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, 'Bitte stimmen Sie der Datenverarbeitung zu'),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ValuationInput = z.infer<typeof valuationSchema>;
