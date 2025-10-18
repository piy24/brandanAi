// src/ai/flows/generate-personalized-prompts.ts
'use server';

/**
 * @fileOverview Generates 100 unique, personalized prompts for brand reputation analysis.
 *
 * - generatePersonalizedPrompts - Generates the prompts.
 * - GeneratePersonalizedPromptsInput - The input type for the function.
 * - GeneratePersonalizedPromptsOutput - The return type for the function.
 */

import {getAi} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedPromptsInputSchema = z.object({
  apiKey: z.string().describe('The user-provided API key for Gemini.'),
  brandName: z.string().describe('The name of the brand to analyze.'),
  competitors: z.array(z.string()).describe('A list of competitor brand names.'),
  field: z.string().describe('The industry field to analyze.'),
});
export type GeneratePersonalizedPromptsInput = z.infer<
  typeof GeneratePersonalizedPromptsInputSchema
>;

const GeneratePersonalizedPromptsOutputSchema = z.object({
  prompts: z.array(z.string()).describe('A list of 100 unique, personalized prompts.'),
});
export type GeneratePersonalizedPromptsOutput = z.infer<
  typeof GeneratePersonalizedPromptsOutputSchema
>;

export async function generatePersonalizedPrompts(
  input: GeneratePersonalizedPromptsInput
): Promise<GeneratePersonalizedPromptsOutput> {
  const ai = getAi(input.apiKey);

  const generatePersonalizedPromptsPrompt = ai.definePrompt({
    name: 'generatePersonalizedPromptsPrompt',
    input: {schema: GeneratePersonalizedPromptsInputSchema},
    output: {schema: GeneratePersonalizedPromptsOutputSchema},
    prompt: `You are an expert marketing assistant. Your job is to generate 100 unique, general questions a user might ask an AI about the {{field}} industry.

The questions should be about finding the best products, brands, or solutions within that field. The goal is to see which brands, including potentially "{{brandName}}", are recommended for a general user.

Please include a mix of the following types of questions:
- "What is the best brand for {{field}}?"
- "What is the best product in {{field}} under $1000?"
- "What is the best product in the {{field}} with no budget?"
- "What are my options for a product in the {{field}} industry?"
- "What do you recommend I get for {{field}}?"
- "Who are the key players in the {{field}} space?"
- "What are the most innovative companies in {{field}}?"

The prompts should be diverse and explore different facets of the industry. Make sure each prompt is unique.

Field: {{field}}
Brand to keep in mind: {{brandName}}`,
    model: 'googleai/gemini-1.5-flash',
  });

  const generatePersonalizedPromptsFlow = ai.defineFlow(
    {
      name: 'generatePersonalizedPromptsFlow',
      inputSchema: GeneratePersonalizedPromptsInputSchema,
      outputSchema: GeneratePersonalizedPromptsOutputSchema,
    },
    async (flowInput) => {
      const {output} = await generatePersonalizedPromptsPrompt(flowInput);
      return output!;
    }
  );

  return generatePersonalizedPromptsFlow(input);
}
