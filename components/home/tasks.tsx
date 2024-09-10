import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Tasks from "@/app/(protected)/tasks/page";

const Task = () => {
  return (
    <section>
      <Card className="my-5">
        <CardContent>
          <Tasks />
        </CardContent>
      </Card>
    </section>
  );
};

export default Task;
