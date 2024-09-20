import React from "react";
import Theme from "./Theme";

const WelcomeBar = ({ user }: any) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between p-12 max-sm:text-center">
        <div className="text-dark100_light900">
          <h1 className="text-[38px]">
            Welcome <span className="text-sky-500">&nbsp;{user}</span>
          </h1>
          <p className="text-[1.2rem]">
            Toolkit web, better, faster, and more precise than ever before.
          </p>
        </div>
        <div className="max-sm:hidden">
          <Theme />
        </div>
      </div>
    </>
  );
};

export default WelcomeBar;
