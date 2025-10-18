import { AnalysisResult } from '@/app/actions';
import { MentionScore } from './mention-score';
import { AnalysisTable } from './analysis-table';
import { ImprovementSuggestions } from './improvement-suggestions';

interface ResultsViewProps {
  results: AnalysisResult[];
  brandName: string;
}

export function ResultsView({ results, brandName }: ResultsViewProps) {
  const mentionCount = results.filter((r) => r.brandMentioned).length;
  const totalPrompts = results.length;

  return (
    <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-1 flex flex-col gap-8">
        <MentionScore
            mentionCount={mentionCount}
            totalPrompts={totalPrompts}
            provider="Gemini"
        />
        </div>
        <div className="lg:col-span-2">
        <AnalysisTable results={results} />
        </div>
        <div className="lg:col-span-3">
          <ImprovementSuggestions />
        </div>
    </div>
  );
}
