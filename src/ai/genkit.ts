import {genkit, type Genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';


export const ai = genkit({
  plugins: [googleAI()],
});

// We need a separate function to initialize Genkit with a per-request API key.
export function getAi(apiKey: string): Genkit {
  return genkit({
    plugins: [googleAI({apiKey})],
  });
}
