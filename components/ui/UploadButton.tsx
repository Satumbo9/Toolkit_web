"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDropzone } from "react-dropzone";
import { UploadIcon, X, TextIcon } from "lucide-react";
import { Input } from "../ui/input";

const UploadFileBtn = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.ms-excel": [".xls", ".xlsx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    multiple: false,
  });

  const removeFile = () => {
    setSelectedFile(null);
  };
  return (
    <div>
      <div
        {...getRootProps()}
        className={`h-10 cursor-pointer content-center rounded-md border bg-zinc-100 px-10 pb-0.5 text-sm font-semibold transition-all delay-100 ease-in-out hover:border-sky-500 hover:text-sky-500 hover:opacity-80 dark:bg-black dark:text-white dark:hover:text-sky-500`}
      >
        <Input {...getInputProps()} />
        <div className="flex flex-col items-center">
          {selectedFile ? (
            <div className="flex w-fit items-center overflow-hidden">
              <TextIcon className="mr-2 size-6 text-gray-500" />
              <p className="line-clamp-1 truncate">{selectedFile.name}</p>
              <Button onClick={removeFile} className="ml-2">
                <X className="size-5 text-red-500" />
              </Button>
            </div>
          ) : (
            <div className="flex size-full items-center justify-center gap-3">
              <UploadIcon className="my-1 line-clamp-1 size-5 text-center" />
              <p>{isDragActive ? "Drop the files here" : "Upload File"}</p>
            </div>
          )}
        </div>
      </div>
      {selectedFile && (
        <Button disabled className="mt-4">
          Upload File
        </Button>
      )}
    </div>
  );
};

export default UploadFileBtn;
