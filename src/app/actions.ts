'use server';

import { generatePersonalizedPrompts } from '@/ai/flows/generate-personalized-prompts';
import { summarizePromptResponses } from '@/ai/flows/summarize-prompt-responses';
import { getAi } from '@/ai/genkit';
import { type FormSchema } from '@/lib/schemas';
import { formSchema } from '@/lib/schemas';

export type AnalysisResult = {
  prompt: string;
  summary: string;
  brandMentioned: boolean;
};

export type AnalysisOutput = {
  gemini: AnalysisResult[];
};

async function runAnalysisForProvider(
  values: FormSchema
): Promise<AnalysisResult[]> {
  const { geminiApiKey, brandName, competitors, field } = values;
  const competitorsList = competitors.split(',').map((c) => c.trim());

  let prompts: string[];
  const result = await generatePersonalizedPrompts({
    apiKey: geminiApiKey,
    brandName,
    competitors: competitorsList,
    field,
  });
  prompts = result.prompts;
  
  const ai = getAi(geminiApiKey);
  const model = 'googleai/gemini-1.5-flash';

  const analysisPromises = prompts.slice(0, 5).map(async (prompt) => {
    try {
      console.log(`[DEBUG] [gemini] Processing prompt: "${prompt}"`);
      const llmResponse = await ai.generate({
        model: model,
        prompt: prompt,
      });
      const responseText = llmResponse.text;
      
      console.log(`[DEBUG] [gemini] Received response for prompt: "${prompt}"`);
      if (!responseText) {
        console.error(`[DEBUG] [gemini] No text in response for prompt: "${prompt}". Full response:`, JSON.stringify(llmResponse, null, 2));
        return {
          prompt,
          summary: 'Failed to get a valid text response from the AI.',
          brandMentioned: false,
        };
      }

      console.log(`[DEBUG] [gemini] Summarizing response for prompt: "${prompt}"`);
      const analysis = await summarizePromptResponses({
          apiKey: geminiApiKey,
          brandName,
          prompt,
          response: responseText,
      });
      return {
          prompt,
          summary: analysis.summary,
          brandMentioned: analysis.brandMentioned,
      };
    } catch (error) {
        console.error(`[DEBUG] [gemini] Failed to process prompt: "${prompt}"`, error);
        return {
            prompt,
            summary: 'Failed to process this prompt due to an error.',
            brandMentioned: false,
        };
    }
  });

  return Promise.all(analysisPromises);
}


export async function runBrandAnalysis(
  values: FormSchema
): Promise<AnalysisOutput> {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    throw new Error('Invalid input');
  }

  const geminiResults = await runAnalysisForProvider(validatedFields.data);

  return {
    gemini: geminiResults,
  };
}
