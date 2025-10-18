// SummarizePromptResponses.ts
'use server';

/**
 * @fileOverview Summarizes prompt responses to highlight brand mentions and provide context.
 *
 * - summarizePromptResponses - A function that summarizes the LLM responses for each prompt, indicating whether the brand was mentioned.
 * - SummarizePromptResponsesInput - The input type for the summarizePromptResponses function.
 * - SummarizePromptResponsesOutput - The return type for the summarizePromptResponses function.
 */

import {getAi} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePromptResponsesInputSchema = z.object({
  apiKey: z.string().describe('The user-provided API key for Gemini.'),
  brandName: z.string().describe('The name of the brand to analyze.'),
  prompt: z.string().describe('The prompt that was used to generate the response.'),
  response: z.string().describe('The LLM response to summarize.'),
});

export type SummarizePromptResponsesInput = z.infer<
  typeof SummarizePromptResponsesInputSchema
>;

const SummarizePromptResponsesOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the prompt response.'),
  brandMentioned: z
    .boolean()
    .describe('Indicates whether the brand was mentioned in the response.'),
});

export type SummarizePromptResponsesOutput = z.infer<
  typeof SummarizePromptResponsesOutputSchema
>;

export async function summarizePromptResponses(
  input: SummarizePromptResponsesInput
): Promise<SummarizePromptResponsesOutput> {
  const ai = getAi(input.apiKey);

  const summarizePromptResponsesPrompt = ai.definePrompt({
    name: 'summarizePromptResponsesPrompt',
    input: {schema: SummarizePromptResponsesInputSchema},
    output: {schema: SummarizePromptResponsesOutputSchema},
    prompt: `You are an AI assistant tasked with summarizing LLM responses to prompts about brands and providing a brand mention analysis.

  Analyze the following LLM response to the given prompt:

  Prompt: {{prompt}}
  Response: {{response}}

  Provide a concise summary (maximum 50 words) of the response, highlighting the main points and context.  Also, determine if the brand "{{brandName}}" was mentioned in the response.

  Your output should be a JSON object with "summary" and "brandMentioned" fields.
  `,
    model: 'googleai/gemini-1.5-flash',
    config: {
      safetySettings: [
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_NONE',
        },
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_NONE',
        },
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_NONE',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_NONE',
        },
      ],
    },
  });

  const summarizePromptResponsesFlow = ai.defineFlow(
    {
      name: 'summarizePromptResponsesFlow',
      inputSchema: SummarizePromptResponsesInputSchema,
      outputSchema: SummarizePromptResponsesOutputSchema,
    },
    async (flowInput) => {
      const {output} = await summarizePromptResponsesPrompt(flowInput);
      return output!;
    }
  );

  return summarizePromptResponsesFlow(input);
}
