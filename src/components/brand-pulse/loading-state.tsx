import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function LoadingState() {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader className="items-center pb-0">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="mt-1 h-4 w-1/2" />
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <div className="mx-auto my-6 flex aspect-square max-h-[250px] items-center justify-center">
              <Skeleton className="h-[210px] w-[210px] rounded-full" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]"><Skeleton className="h-5 w-20" /></TableHead>
                    <TableHead className="w-[40%]"><Skeleton className="h-5 w-24" /></TableHead>
                    <TableHead className="w-[20%] text-center"><Skeleton className="h-5 w-16 mx-auto" /></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                      <TableCell><Skeleton className="h-8 w-16 mx-auto rounded-full" /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
