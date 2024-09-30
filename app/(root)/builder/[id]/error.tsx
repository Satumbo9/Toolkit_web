"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const ErrorFormBuilder = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-9xl">
        <p>Form not found</p>
        <Image
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVhc3gzMmJrMjEydXY3dm83bTdpbXZveWhsMDRyYjlxNWp5eno1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d4bn3nUNo6XpUZ4A/giphy.webp"
          alt="gif"
          width={300}
          height={300}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default ErrorFormBuilder;
