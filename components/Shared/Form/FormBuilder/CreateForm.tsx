"use client";

import React, { useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { InputForm, SelectForm, TextAreaForm } from "../../InstantForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import LoadingButton from "../../LoadingButton";
import { useToast } from "@/components/ui/use-toast";
import { CreateFormAction } from "@/constants/actions/form.action";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z.string().min(1, { message: "Minimum 1 character!" }).max(125),
  description: z.string().optional(),
  formCategory: z.string(),
});

const CreateForm = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      formCategory: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      startTransition(async () => {
        try {
          const createForm = await CreateFormAction(values);
          toast({
            title: "Success!",
            description: "Your form has been created successfully.",
          });

          router.push(`/builder/${createForm}`);
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description:
          "Something went wrong with creating a form, please try again.",
        variant: "destructive",
      });
    }
  };

  const Category = [
    {
      id: "1",
      title: "Contact",
    },
    {
      id: "2",
      title: "Bank Information",
    },
    {
      id: "3",
      title: "Programming Request",
    },
  ];

  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="group flex h-[190px] w-full flex-col items-center justify-center gap-4 border border-dashed border-primary/20 bg-background hover:cursor-pointer hover:border-primary"
          >
            <FilePlus
              size={16}
              className="size-8 text-muted-foreground group-hover:text-primary"
            />
            <p className="text-xl font-bold text-muted-foreground group-hover:text-primary">
              Create new form
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create form</DialogTitle>
            <DialogDescription>Create your new form</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <InputForm
                control={form.control}
                formName="title"
                label="Title (Required)"
              />
              <SelectForm
                control={form.control}
                formName="formCategory"
                content={Category}
                label="Category"
                displayKey={"title"}
                valueKey={"id"}
                placeholder="Select form category"
              />
              <TextAreaForm
                control={form.control}
                formName="description"
                label="Description (Optional)"
                placeholder="Write your description here"
                className="min-h-36"
              />

              <LoadingButton
                loading={isPending}
                type="submit"
                className="w-full"
                disabled={!form.formState.isValid || isPending}
              >
                Continue
              </LoadingButton>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CreateForm;
