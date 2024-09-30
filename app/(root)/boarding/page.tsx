"use client";

import BoardingAdminShortcuts from "@/components/boarding/BoardingAdminShortcuts";
import { BoardingShortcuts } from "@/components/boarding/BoardingShortcuts";
import ThemeIcon from "@/components/ThemeIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Page = () => {
  const text1 = `MiCamp Solutions is a leading payment processing company, 
  known for exceptional customer service and innovative financial solutions. 
  As a 6-time Inc. 5000 award winner, MiCamp processes $50 billion annually, 
  serving over 50,000 clients. They offer secure and seamless transaction experiences, 
  tailored to diverse business needs. With competitive residual structures for ISO-boarded 
  accounts and a focus on long-term partnerships, MiCamp leverages cutting-edge technology 
  to deliver reliable and efficient payment solutions, helping businesses operate smoothly 
  and grow confidently.`;

  // const text2 = `Their commitment to excellence is evident in their competitive
  //           residual structures for ISO-boarded accounts and their dedication to
  //           fostering long-term partnerships with clients. By leveraging
  //           cutting-edge technology and a customer-centric approach, MiCamp
  //           Solutions consistently delivers reliable and efficient payment
  //           processing solutions, ensuring businesses can operate smoothly and
  //           grow confidently.`;
  
  const divMicamp = document.getElementById("divMicamp");
  const theme = useTheme();
  
  if (divMicamp) {
    divMicamp.style.backgroundImage = "url('/images/micamp-entrance.webp')";
    divMicamp.style.backgroundSize = "cover";
    
    if(theme.theme === "light"){
      divMicamp.style.boxShadow = "inset 600px 600px 30px 30px rgb(255 255 255 / 0.55)";
    } else {
      divMicamp.style.boxShadow = "inset 600px 600px 30px 30px rgb(0 0 0 / 0.75)";
    }

  }
  
  return (
    <section className="">
      <div className="-mx-5 -mt-5 flex gap-0 max-lg:flex-col ">
        <div className="flex-1 content-center max-lg:min-h-60" id="divMicamp">
          <div className="">
            <Image
              alt=""
              src={ThemeIcon()}
              width={400}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="flex-1 bg-zinc-100 py-10 dark:bg-zinc-800 max-lg:text-center">
          <h1 className="px-8 text-6xl font-semibold text-sky-500">WELCOME!</h1>
          <h3 className="px-8 text-xl font-semibold">MiCamp Agent Portal</h3>
          <div className="my-5 flex justify-center gap-10 px-8 text-lg max-xl:flex-wrap">
            <div className="w-full">
              <p className="flex-auto">{text1}</p>
            </div>
            {/* <div className="flex-none border max-lg:hidden"></div> */}
            {/* <p className="flex-auto text-start">{text2}</p> */}
          </div>
          <span className="flex w-full justify-center">
            <hr className="w-[35rem] border" />
          </span>
          <p className="my-7 px-8 text-lg">
            Thank you for choosing <strong>MiCamp Solutions</strong> – your
            trusted partner in business!
          </p>
        </div>
      </div>
      <br />
      <br />
      <BoardingShortcuts />

      <h2 className="my-7 text-center text-2xl font-bold">
        &#9919; Admins Only
      </h2>
      <BoardingAdminShortcuts />
    </section>
  );
};

export default Page;
