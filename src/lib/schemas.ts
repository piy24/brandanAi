import { z } from 'zod';

export const formSchema = z.object({
  geminiApiKey: z.string().min(1, 'Gemini API Key is required.'),
  brandName: z.string().min(1, 'Brand name is required.'),
  competitors: z.string().min(1, 'At least one competitor is required.'),
  field: z.string().min(1, 'Industry field is required.'),
});

export type FormSchema = z.infer<typeof formSchema>;
