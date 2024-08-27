import HomeTable from "@/components/Shared/DataTable/HomeTable";
import SideDetails from "@/components/Shared/DataTable/SideDetails";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default async function Home() {
  return (
    <main className="grid flex-1 items-start gap-4 px-12 max-sm:mb-3 max-sm:px-6 sm:mb-3 sm:py-0 md:gap-8 lg:mb-0 lg:grid-cols-2 2xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 max-sm:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Today</CardDescription>
              <CardTitle className="sm:text-2xl lg:text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from yesterday
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="sm:text-2xl lg:text-4xl">$7,898</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +35% from last week
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="sm:text-2xl lg:text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Datatable */}
        <HomeTable />
        <Card className="my-5">
          <CardHeader className="px-7">
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
      <div className="hidden sm:block">
        <SideDetails />
      </div>
    </main>
  );
}
