"use server";

import { generateIdFromEntropySize } from "lucia";
import prisma from "../connectToDB";
import { validateRequest } from "@/auth";

export const CreateFormAction = async ({
  title,
  description,
  formCategory,
}: {
  title: string;
  description?: string | undefined;
  formCategory: string;
}) => {
  try {
    const user = await validateRequest();

    const id = generateIdFromEntropySize(5);

    if (!user.user) return new Error();

    const form = await prisma.formBuilder.create({
      data: {
        id,
        userId: user.user.id,
        title,
        descriptions: description,
        formCategory,
      },
    });

    if (!form) {
      throw new Error("Something went wrong");
    }

    return form.id;
  } catch (error) {
    console.log(error);
  }
};

export const GetFormById = async (id: string) => {
  try {
    const session = await validateRequest();

    if (!session.user) throw new Error("Unauthorized user!");

    const result = await prisma.formBuilder.findFirst({
      where: {
        id,
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllForms = async () => {
  try {
    const session = await validateRequest();

    if (!session.user) throw new Error("Unauthorized User!");

    const result = await prisma.formBuilder.findMany({
      where: {
        userId: session.user?.id,
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
