import React from "react";
import CreateForm from "./CreateForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatRelativeDate, formatTimeAgo } from "@/lib/utils";
import { ArrowBigRight, Eye, FileCheck, PencilLine } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { GetAllForms } from "@/constants/actions/form.action";

// const tabs = [
//   {
//     id: "1",
//     title: "Contact",
//     value: "contact",
//   },
//   {
//     id: "2",
//     title: "Bank Information",
//     value: "bankInformation",
//   },
//   {
//     id: "3",
//     title: "Programming Request",
//     value: "programmingRequest",
//   },
// ];

const FormBuilder = async () => {
  const result = await GetAllForms();
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateForm />

        {result?.map((item) => {
          return (
            <Card className="shadow-md" key={item.id}>
              <CardHeader>
                <div className="flex flex-row items-center justify-between">
                  <CardTitle>{item?.title}</CardTitle>
                  <Badge variant={!item?.published ? "destructive" : "success"}>
                    {!item?.published ? "Draft" : "Public"}
                  </Badge>
                </div>
                <CardDescription className="flex items-center justify-between">
                  <label className="text-muted-foreground">
                    {formatRelativeDate(item?.createdAt || new Date())} (
                    {formatTimeAgo(item.createdAt)})
                  </label>

                  <span className="flex items-center gap-2">
                    <span className="flex items-center gap-2">
                      <Eye />
                      <label>{item?.visits}</label>
                    </span>
                    <span className="flex items-center gap-2">
                      <FileCheck />
                      <label>{item?.submissions}</label>
                    </span>
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
                {item?.descriptions || "No descriptions"}
              </CardContent>
              <CardFooter>
                {item?.published ? (
                  <Link
                    href={`/forms/${item?.id}`}
                    className={buttonVariants({
                      variant: "secondary",
                      className: "w-full",
                    })}
                  >
                    View Submissions
                    <ArrowBigRight />
                  </Link>
                ) : (
                  <Link
                    href={`/builder/${item?.id}`}
                    className={buttonVariants({
                      variant: "secondary",
                      className: "w-full",
                    })}
                  >
                    Edit
                    <PencilLine />
                  </Link>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FormBuilder;
