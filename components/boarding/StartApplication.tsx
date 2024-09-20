import React, { useState } from "react";
import Image from "next/image";
import { InputForm, RadioForm } from "../Shared/InstantForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { newBoardingAppliactionSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomButtons from "../Shared/CustomButtons";
import Link from "next/link";

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

  const [route, setRoute] = useState("");

  return (
    <section className="m-auto my-16 w-4/5 max-w-96">
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
            Start the application now, and finish it when you have all you need.
          </p>
          {/* FORM */}
          <div className="space-y-4">
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
            <RadioForm
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
            />
            <div className="flex justify-center gap-2">
              <CustomButtons
                btnType="primary"
                disabled={!merchantName || !email || !route}
              >
                Save it For Later
              </CustomButtons>
              <Link href={route}>
                <CustomButtons
                  btnType="default"
                  disabled={!merchantName || !email || !route}
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
