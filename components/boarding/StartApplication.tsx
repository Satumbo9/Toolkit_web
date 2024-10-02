"use client";
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";
import { InputForm } from "../Shared/InstantForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { newBoardingAppliactionSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomButtons from "../Shared/CustomButtons";
import { FilePlus2, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const StartApplication = () => {
  const router = useRouter();
  const [merchantName, setMerchantName] = React.useState<string>("");

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

  const route = "/boarding/mBoarding/newApplication";
  const handleClick = () => {
    router.push(route);
  };
  const handleClickManual = () => {
    router.push("/boarding/mBoarding/newManualEntry");
  };

  return (
    <section className="-m-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="rounded-tr-lg bg-auto py-14" id="div-image">
            <div className="content-center justify-center">
              <div className="m-auto max-w-sm gap-3 rounded-xl bg-white bg-opacity-85 p-6 shadow-md dark:bg-black dark:bg-opacity-70">
                <FilePlus2 className="m-auto size-10" />
                <h2 className="mt-5 text-center font-sans text-3xl font-bold text-sky-500">
                  GET STARTED!
                </h2>
                <p className="m-auto mb-5 w-full text-center text-sm text-gray-500">
                  Fill out the name and start a new application.
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
                  <div className="m-auto w-3/4 justify-center gap-2">
                    <CustomButtons
                      className="w-full"
                      btnType="default"
                      type="submit"
                      disabled={!merchantName}
                      onClick={() => handleClick()}
                    >
                      Start Application
                    </CustomButtons>
                  </div>
                  <div className="m-auto w-3/4 justify-center gap-2">
                    <CustomButtons
                      className="w-full"
                      btnType="primary"
                      type="submit"
                      disabled={!merchantName}
                      onClick={handleClickManual}
                    >
                      Start a Pre-Signed Form
                    </CustomButtons>
                  </div>
                  <div className="mb-5 hidden text-center">
                    <Link
                      href={"/boarding/mBoarding/newManualEntry"}
                      className="m-auto my-5 cursor-pointer text-center text-sky-500"
                    >
                      Pre Signed Form
                    </Link>
                  </div>
                </div>
                <div className="group relative mt-5 flex justify-center gap-2">
                  <Info />
                  <p>What now?</p>
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
          </div>
        </form>
      </Form>
    </section>
  );
};

export default StartApplication;
