import React, { useState } from "react";
import Image from "next/image";
import { InputForm } from "../Shared/InstantForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { newBoardingAppliactionSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomButtons from "../Shared/CustomButtons";
import Link from "next/link";
import { Info } from "lucide-react";

const StartApplication = () => {
  const [merchantName, setMerchantName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const form = useForm<z.infer<typeof newBoardingAppliactionSchema>>({
    resolver: zodResolver(newBoardingAppliactionSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof newBoardingAppliactionSchema>) => {
    console.log(value);
  };

  const [route] = useState("/boarding/mBoarding/newFSP");

  return (
    <section className="m-auto my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex">
            <div className="w-1/3">
              <div className="m-auto max-w-xl gap-3 rounded-xl border bg-gray-50 px-6 py-14 shadow-md dark:bg-black">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/new-form.svg"
                  alt="New Application Logo"
                  width={64}
                  height={64}
                  priority
                />
                <h2 className="mt-5 text-center text-xl font-semibold text-sky-500">
                  Start a New Application
                </h2>
                <p className="mb-5 text-center text-xs text-gray-400">
                  Start the application now, and finish it when you have all you
                  need.
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
                  {/* <RadioForm
              control={form.control}
              formName="ApplicationType"
              label=""
              options={[
                {
                  label: "MiCamp FSP MPA",
                  value: "/boarding/mBoarding/newFSP",
                },
                {
                  label: "Fisrt Data NORTH Interchange 2502-2",
                  value: "/boarding/mBoarding/newInterchange",
                },
                {
                  label: "Fisrt Data NORTH WAVit 2502-2",
                  value: "/boarding/mBoarding/newWAVit",
                },
                {
                  label: "OMAHA Processing Application and Agreement",
                  value: "/boarding/mBoarding/newOMAHA",
                },
              ]}
              state={route}
              setState={setRoute}
              className="size-4"
              disabled={!merchantName || !email}
            /> */}
                  <div className="flex justify-center gap-2">
                    <CustomButtons
                      btnType="primary"
                      disabled={!merchantName || !email}
                    >
                      Save it For Later
                    </CustomButtons>
                    <Link href={route}>
                      <CustomButtons
                        btnType="default"
                        disabled={!merchantName || !email}
                        // disabled={!merchantName || !email || !route}
                      >
                        Start Right Now
                      </CustomButtons>
                    </Link>
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
            <div className="h-full w-2/3">
              <Image
                className="m-auto flex-none"
                src="/public/images/dark-blue-bg.png"
                alt="Logo"
                width={60}
                height={60}
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
