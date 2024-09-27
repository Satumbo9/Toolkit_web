"use client";
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";
import Image from "next/image";
import { InputForm } from "../Shared/InstantForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { newBoardingAppliactionSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomButtons from "../Shared/CustomButtons";
import { FilePlus2, Info } from "lucide-react";
import { useRouter } from "next/navigation";

const StartApplication = () => {
  const router = useRouter();
  const [merchantName, setMerchantName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const form = useForm<z.infer<typeof newBoardingAppliactionSchema>>({
    resolver: zodResolver(newBoardingAppliactionSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof newBoardingAppliactionSchema>) => {
    console.log(value);
  };

  const selected = document.getElementById("div-image");
  if (selected) {
    selected.style.backgroundImage = "url('/images/boarding-wallpaper.png')";
    selected.style.backgroundSize = "cover";
  }

  const route = "/boarding/mBoarding/newFSP";

  const handleClick = () => {
    router.push(route);
  };
  return (
    <section className="-m-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="rounded-tr-lg bg-auto py-14" id="div-image">
            <div className="content-center justify-center">
              <div className="m-auto max-w-sm gap-3 rounded-xl bg-white bg-opacity-85 px-6 py-10 shadow-md dark:bg-black dark:bg-opacity-70">
                <FilePlus2 className="m-auto size-10" />
                <h2 className="mt-5 text-center font-sans text-3xl font-bold text-sky-500">
                  GET STARTED!
                </h2>
                <p className="m-auto mb-5 w-full text-center text-sm text-gray-500">
                  Start your application process by completing the following
                  steps.
                </p>
                {/* FORM */}
                <div className="space-y-6">
                  <InputForm
                    control={form.control}
                    formName="Name"
                    label="Merchant Name (DBA or Trade Name):*"
                    placeholder="Merchant Name"
                    state={merchantName}
                    setState={setMerchantName}
                  />
                  <InputForm
                    control={form.control}
                    formName="Email"
                    label="Merchant Email:*"
                    placeholder="example@email.com"
                    state={email}
                    setState={setEmail}
                  />
                  <div className="flex justify-center gap-2">
                    <CustomButtons
                      className="w-full px-10"
                      btnType="default"
                      type="submit"
                      disabled={!merchantName || !email}
                      onClick={() => handleClick()}
                      // disabled={!merchantName || !email || !route}
                    >
                      Start Application
                    </CustomButtons>
                  </div>
                </div>
                <div className="group relative my-4 flex justify-center gap-2">
                  <Info />
                  <p>What now? </p>
                  <div className="absolute mt-8 hidden max-w-96 rounded bg-gray-800 p-4 text-sm text-white shadow-lg group-hover:block dark:bg-gray-600">
                    <h1 className="my-3 text-center text-lg">
                      Here, we gonna leave instructions to the users.
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequatur, dolorum incidunt aspernatur vero modi
                      pariatur nemo, veniam optio provident, et aperiam
                      doloremque enim laborum nobis fugiat? Quisquam, laudantium
                      placeat? Tempore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden h-max w-4/6">
              <Image
                className="size-full flex-none rounded-tr-lg"
                src="/images/dark-blue-bg.png"
                alt="sss"
                width={1050}
                height={600}
                fill={false}
                priority
              />
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default StartApplication;
