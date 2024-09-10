"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputForm } from "../InstantForm";
import { UpdateUserSchema } from "@/schemas";
import { useToast } from "@/components/ui/use-toast";
import { UserUpdate } from "@/constants/actions/user.action";

const ProfileBody = ({ user }: any) => {
  const { toast } = useToast();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      id: user.id,
      email: user.email || "",
      password: "",
      username: user.username || "",
      phone: user.phoneNumber || "",
    },
  });

  const SubmitUpdate = async (data: z.infer<typeof UpdateUserSchema>) => {
    console.log(data);
    await UserUpdate(data);

    toast({
      title: "Successfully Updated",
      description: "Your user information has been successfully updated.",
    });
  };

  return (
    <section>
      <div className="w-full space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how the Toolkit describe you.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="h-px w-full shrink-0 bg-border"
        />

        <div className="grid grid-cols-3 gap-5 max-xl:flex max-xl:flex-col">
          <Card className="sticky col-span-1 h-fit overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 shadow-lg dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
            <CardHeader></CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-7">
                <Avatar className="size-36 transition-transform duration-300 ease-in-out hover:scale-110">
                  <AvatarImage src={user?.image} />
                  <AvatarFallback className="text-4xl">
                    {user.username?.[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-center">
                  <span className="text-xl">{user.username}</span>
                  <span className="text-sm text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="col-span-2">
            <Form {...form}>
              <form
                className="space-y-5"
                onSubmit={form.handleSubmit(SubmitUpdate)}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Edit your email here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InputForm
                      control={form.control}
                      formName="email"
                      label=""
                      placeholder="example@micamp.com"
                      type="email"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Username</CardTitle>
                    <CardDescription>Edit your username here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InputForm
                      control={form.control}
                      formName="username"
                      label=""
                      placeholder="Your username"
                      type="text"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InputForm
                      control={form.control}
                      formName="password"
                      label="New Password"
                      placeholder="**********"
                      type="password"
                    />
                    <InputForm
                      control={form.control}
                      formName="password"
                      label="Confirm Password"
                      placeholder="**********"
                      type="password"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Phone Number</CardTitle>
                    <CardDescription>
                      Change your phone number here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InputForm
                      control={form.control}
                      formName="phone"
                      label="Phone Number"
                      placeholder="Your phone number"
                      type="tel"
                    />
                  </CardContent>
                </Card>

                <div className="flex max-lg:justify-center">
                  <Button type="submit">Update Profile</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBody;
