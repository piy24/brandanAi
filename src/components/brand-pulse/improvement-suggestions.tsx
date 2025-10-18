import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookCheck, Goal, SearchCheck } from 'lucide-react';

export function ImprovementSuggestions() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>How to Improve Your Brand's Score</CardTitle>
        <CardDescription>
          A framework for improving your brand's mention rate and sentiment in
          AI responses (Generative Engine Optimization).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">
                    Build an Authoritative Digital Footprint
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Establish expertise, experience, and trustworthiness (E-E-A-T).
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    Create High-Quality, In-Depth Content:
                  </span>{' '}
                  Produce comprehensive content (white papers, case studies,
                  guides) that provides value and answers user questions.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Establish Thought Leadership:
                  </span>{' '}
                  Position key individuals as experts through contributions to
                  industry publications and panels.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Secure Reputable Mentions & Links:
                  </span>{' '}
                  Engage in digital PR to get featured on trusted news outlets
                  and blogs, creating positive associations for the AI.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Manage Online Reputation:
                  </span>{' '}
                  Actively monitor and respond to reviews on platforms like
                  Google Business Profile, Trustpilot, and Yelp.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Goal className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Optimize Content for AI Consumption</h3>
                  <p className="text-sm text-muted-foreground">
                    Structure content to be easily parsed and understood by AI.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    Use Clear and Logical Structure:
                  </span>{' '}
                  Organize content with a clear hierarchy (H1, H2, H3) and use lists and tables for easy data extraction.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Incorporate Structured Data:
                  </span>{' '}
                  Use schema markup (FAQ, Product, HowTo) to explicitly label your content for the AI.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Focus on Conversational Queries:
                  </span>{' '}
                  Write content that directly answers natural language questions a person would ask an AI assistant.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Answer the "What, Why, and How":
                  </span>{' '}
                  Explain the context, purpose, and benefits behind your products and information, not just the facts.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <SearchCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">
                    Track and Analyze Your Brand's Presence
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Directly "interview" the AIs to measure your progress.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
               <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    Prompt LLMs with Relevant Queries:
                  </span>{' '}
                  Regularly test how different LLMs respond to queries about your industry, brand, and products.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Analyze the Responses:
                  </span>{' '}
                  Log the mention rate, placement (beginning, middle), sentiment (positive, neutral, negative), and cited sources.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Benchmark Against Competitors:
                  </span>{' '}
                  Perform the same analysis for your key competitors to identify what works for them and find opportunities.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
