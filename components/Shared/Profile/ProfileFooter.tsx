"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProfileFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      initial={{ width: "50px" }}
      animate={{ width: isOpen ? "150px" : "50px" }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="mt-5 inline-flex h-fit items-center overflow-hidden max-lg:absolute max-lg:right-40 max-lg:top-72"
    >
      <Button>
        <Link href="/" className="flex w-fit">
          <ArrowBigLeftDash className="mr-3 text-white dark:text-zinc-900" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Home
          </motion.h2>
        </Link>
      </Button>
    </motion.section>
  );
};

export default ProfileFooter;
