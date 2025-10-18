'use client';

import { useState } from 'react';

import { PageHeader } from '@/components/brand-pulse/page-header';
import { InputForm } from '@/components/brand-pulse/input-form';
import type { FormSchema } from '@/lib/schemas';
import { ResultsView } from '@/components/brand-pulse/results-view';
import { runBrandAnalysis, type AnalysisResult } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { LoadingState } from '@/components/brand-pulse/loading-state';

export type AnalysisOutput = {
  gemini: AnalysisResult[];
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisOutput | null>(null);
  const [brandName, setBrandName] = useState('');
  const { toast } = useToast();

  const handleAnalysis = async (values: FormSchema) => {
    setIsLoading(true);
    setResults(null);
    setBrandName(values.brandName);
    try {
      const analysisResults = await runBrandAnalysis(values);
      setResults(analysisResults);
      toast({
        title: 'Analysis Complete',
        description: `Analyzed prompts for ${values.brandName} on Gemini.`,
      });
    } catch (e) {
      console.error(e);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="container mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 md:py-16">
        <PageHeader />
        <InputForm onSubmit={handleAnalysis} isLoading={isLoading} />
        {isLoading && <LoadingState />}
        {results && brandName && (
          <ResultsView
            results={results.gemini}
            brandName={brandName}
          />
        )}
      </div>
    </div>
  );
}
