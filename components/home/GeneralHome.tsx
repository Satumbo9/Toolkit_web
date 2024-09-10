import React from "react";
import MicampDescription from "@/components/home/MicampDescription";
import Tasks from "@/components/home/tasks";
import HomeTable from "@/components/Shared/DataTable/HomeTable";
import SideDetails from "@/components/Shared/DataTable/SideDetails";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const GeneralHome = () => {
  // const [testState, setTestState] = React.useState<string>("");
  return (
    <div>
      <main className="grid flex-1 items-start gap-4 px-12 max-sm:mb-3 max-sm:px-6 sm:mb-3 sm:py-0 md:gap-8 lg:mb-0 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 max-sm:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Today</CardDescription>
                <CardTitle className="sm:text-2xl lg:text-4xl">
                  $1,329
                </CardTitle>
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
                <CardTitle className="sm:text-2xl lg:text-4xl">
                  $7,898
                </CardTitle>
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
                <CardTitle className="sm:text-2xl lg:text-4xl">
                  $1,329
                </CardTitle>
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
        </div>
        <div className="hidden sm:block">
          <SideDetails />
        </div>
      </main>
      <div className="mb-5 px-12">
        <Tasks />
        <MicampDescription />

        {/* Radio input form example */}
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <RadioForm
              control={form.control}
              formName="name"
              label="Name"
              options={[
                { label: "Test1", value: "test1" },
                { label: "Test2", value: "test2" },
              ]}
              state={testState}
              setState={setTestState}
            />
          </form>
        </Form> */}
      </div>
    </div>
  );
};

export default GeneralHome;
