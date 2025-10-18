import { CheckCircle2, XCircle } from 'lucide-react';

import { AnalysisResult } from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '../ui/scroll-area';

interface AnalysisTableProps {
  results: AnalysisResult[];
}

export function AnalysisTable({ results }: AnalysisTableProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Detailed Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[460px] rounded-md border">
          <Table>
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                <TableHead className="w-[40%]">Prompt</TableHead>
                <TableHead className="w-[40%]">AI Summary</TableHead>
                <TableHead className="w-[20%] text-center">Mentioned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-sm align-top">{result.prompt}</TableCell>
                  <TableCell className="text-muted-foreground text-sm align-top">{result.summary}</TableCell>
                  <TableCell className="align-top">
                    <div className="flex justify-center">
                    {result.brandMentioned ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Yes
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800">
                        <XCircle className="mr-2 h-4 w-4" />
                        No
                      </Badge>
                    )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
