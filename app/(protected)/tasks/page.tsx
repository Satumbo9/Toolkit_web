"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CircleCheckIcon,
  ListOrderedIcon,
  Circle,
  CircleAlert,
  PenBoxIcon,
  Trash,
  EllipsisVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NewTask from "@/components/user/NewTask";
import { cn } from "@/lib/utils";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      id: 1,
      title: "Design the new Toolkit Web",
      dueDate: "07/08/2024",
      reminderDate: "07/07/2024",
      category: "General Notes",
      type: "To Do",
      status: "Active",
    },
    {
      id: 2,
      title: "Design the new Toolkit Web",
      dueDate: "07/08/2024",
      reminderDate: "07/07/2024",
      category: "General Notes",
      type: "To Do",
      status: "Pending/Hold",
    },
    {
      id: 3,
      title: "Design the new Toolkit Web",
      dueDate: "07/08/2024",
      reminderDate: "07/07/2024",
      category: "General Notes",
      type: "To Do",
      status: "Completed",
    },
  ];
  return (
    <div className="flex w-full flex-wrap space-x-10">
      <div className={cn(isOpen ? "hidden" : "w-full p-4")}>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Tasks</h1>
          <div className="flex gap-5">
            <Input placeholder="Search for tasks..." />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ListOrderedIcon className="mr-2 size-4" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  Latest
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Oldest
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Still Active
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Pending/Hold
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <Card
              className={cn(
                item.status === "Active"
                  ? "border-l-4 border-blue-500"
                  : item.status === "Pending/Hold"
                    ? "border-l-4 border-red-500"
                    : "border-l-4 border-green-500",
              )}
              key={item.id}
            >
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.status === "Active" ? (
                    <Circle className="mr-4 size-6 text-blue-500" />
                  ) : item.status === "Pending/Hold" ? (
                    <CircleAlert className="mr-4 size-6 text-red-500" />
                  ) : (
                    <CircleCheckIcon className="mr-4 size-6 text-green-500" />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      Due Date: {item.dueDate}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Reminder Date: {item.reminderDate}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Category: {item.category}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Type: {item.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-right">
                  <Badge
                    className={cn(
                      item.status === "Active"
                        ? "bg-blue-500 text-white"
                        : item.status === "Pending/Hold"
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white",
                    )}
                  >
                    {item.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setIsOpen(!isOpen)}>
                        <PenBoxIcon className="mr-2 size-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash className="mr-2 size-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="w-fit">
                Add Task
              </Button>
            </DialogTrigger>
            <DialogContent className="2xl:[1200px] max-lg:max-w-[500px] lg:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>Add a new task</DialogTitle>
              </DialogHeader>
              <NewTask type="New" />
            </DialogContent>
            <DialogDescription />
          </Dialog>
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {isOpen && <NewTask type="Edit" isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Tasks;
