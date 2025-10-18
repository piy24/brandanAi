'use client';

import { Pie, PieChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';

interface MentionScoreProps {
  mentionCount: number;
  totalPrompts: number;
  provider: 'Gemini' | 'OpenAI';
}

const chartConfig = {
  mentioned: {
    label: 'Mentioned',
    color: 'hsl(var(--chart-1))',
  },
  notMentioned: {
    label: 'Not Mentioned',
    color: 'hsl(var(--muted))',
  },
} satisfies ChartConfig;

export function MentionScore({ mentionCount, totalPrompts, provider }: MentionScoreProps) {
  const percentage = totalPrompts > 0 ? (mentionCount / totalPrompts) * 100 : 0;
  const chartData = [
    { name: 'mentioned', value: mentionCount, fill: 'var(--color-mentioned)' },
    { name: 'notMentioned', value: totalPrompts - mentionCount, fill: 'var(--color-notMentioned)' },
  ];

  return (
    <Card className="relative flex flex-col shadow-lg">
      <CardHeader className="items-center pb-0">
        <CardTitle>{provider} Mention Score</CardTitle>
        <CardDescription>Brand presence in AI responses</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius="80%"
              strokeWidth={5}
              startAngle={90}
              endAngle={450}
            >
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
            <span className="text-4xl font-bold tracking-tighter text-primary">
                {Math.round(percentage)}%
            </span>
        </div>
      </div>
      <CardFooter className="flex-col gap-2 pt-16 text-sm">
        <div className="leading-none text-muted-foreground text-center">
          Mentioned in{' '}
          <span className="font-medium text-foreground">{mentionCount}</span> of{' '}
          <span className="font-medium text-foreground">{totalPrompts}</span> prompts
        </div>
      </CardFooter>
    </Card>
  );
}
