import React, { useState } from "react";
import Image from "next/image";
import { InputForm } from "../Shared/InstantForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { boardingAgentSettingsSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomButtons from "../Shared/CustomButtons";
import Link from "next/link";
import { Input } from "../ui/input";

const StartApplication = () => {
  const [merchantName, setMerchantName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const linksApplication = [
    {
      id: 1,
      formName: "MerchantApplioationType",
      title: "MiCamp FSP MPA",
      type: "radio",
      placeholder: "MiCamp FSP MPA",
      value: "",
      Route: "/boarding/mBoarding/newFSP",
    },
    {
      id: 2,
      formName: "MerchantApplioationType",
      title: "First Data NORTH Interchange 2502-2",
      type: "radio",
      placeholder: "First Data NORTH Interchange 2502-2",
      value: "",
      Route: "/boarding/mBoarding/newInterchange",
    },
    {
      id: 3,
      formName: "MerchantApplioationType",
      title: "First Data NORTH WAVit 2502-2",
      type: "radio",
      placeholder: "First Data NORTH WAVit 2502-2",
      value: "",
      Route: "/boarding/mBoarding/newWAVit",
    },
    {
      id: 4,
      formName: "MerchantApplioationType",
      title: "OMAHA Processing Application and Agreement",
      type: "radio",
      placeholder: "OMAHA Processing Application and Agreement",
      value: "",
      Route: "/boarding/mBoarding/newOMAHA",
    },
  ];

  const form = useForm<z.infer<typeof boardingAgentSettingsSchema>>({
    resolver: zodResolver(boardingAgentSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof boardingAgentSettingsSchema>) => {
    console.log(value);
  };

  const [linkRoute, setLinkRoute] = useState("");
  const handleFormTypeRoute = (value: string) => {
    setLinkRoute(value);
    // console.log(value);
  };

  return (
    // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
    <section className="m-auto my-16 w-[80%] max-w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2">
          <Image
            className="m-auto flex-none"
            src="/icon/colorful/new-form.svg"
            alt="New Application Logo"
            width={64}
            height={64}
            priority
          />
          <h2 className="mt-5 text-center text-xl font-semibold">
            Start a New Application
          </h2>
          <p className="mb-5 text-center text-xs text-gray-400">
            Start the application now, finish it when you have all you need.
          </p>
          {/* FORM */}
          <div className="space-y-4">
            <InputForm
              control={form.control}
              formName="MerchantDbaName"
              label="Merchant Name (DBA or Trade Name):*"
              placeholder="Merchant Name"
              state={merchantName}
              setState={setMerchantName}
            />
            <InputForm
              control={form.control}
              formName="MerchantEmail"
              label="Email Statements To:*"
              placeholder="example@email.com"
              state={email}
              setState={setEmail}
            />
            {linksApplication.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex content-center items-center gap-2"
                >
                  {/* <InputForm
                    control={form.control}
                    label={""}
                    placeholder={""}
                    type="radio"
                    className="size-fit"
                    formName="FormType"
                    setState={setRadioOne}
                    state={radioOne}
                    // onChange={() => handleFormTypeRoute(item.Route)}
                  /> */}
                  <Input
                    name="ApplicationType"
                    type="radio"
                    className="size-fit"
                    onChange={() => handleFormTypeRoute(item.Route)}
                    disabled={!merchantName || !email}
                  />
                  <p className="mb-1">{item.placeholder}</p>
                </div>
              );
            })}
            <div className="flex justify-center gap-2">
              <CustomButtons
                btnType="primary"
                disabled={!merchantName || !email || !linkRoute}
              >
                Save it For Later
              </CustomButtons>
              <Link href={linkRoute}>
                <CustomButtons
                  btnType="default"
                  disabled={!merchantName || !email || !linkRoute}
                >
                  Start Right Now
                </CustomButtons>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default StartApplication;
