"use server";

import {
  SignUpSchema,
  SignInSchema,
  SignInValues,
  SignUpValues,
  UpdateUserValues,
  UpdateUserSchema,
} from "@/schemas";
import { hash, verify } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import prisma from "../connectToDB";
import { lucia, validateRequest } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

const NormalizedUsername = (username: string): string => {
  // Convert to lowercase
  let normalizedUsername = username.toLowerCase();
  normalizedUsername = normalizedUsername.trim();
  normalizedUsername = normalizedUsername.replace(/\s+/g, " ");
  return normalizedUsername;
};

const NormalizedEmail = (email: string): string => {
  let normalizedEmail = email.toLowerCase();
  const [localPart, domainPart] = normalizedEmail.split("@");

  const normalizedDomainPart = domainPart.toLowerCase();

  normalizedEmail = `${localPart}@${normalizedDomainPart}`;

  return normalizedEmail;
};

export const getUser = async () => {
  try {
    const session = await validateRequest();

    const myUser = await prisma.user.findFirst({
      where: {
        id: session.user?.id,
      },
      include: {
        Department: true,
        activityLog: true,
        leads: true,
        merchantSplits: true,
        organizationAgents: true,
        tasks: true,
        userClaims: true,
        userLogins: true,
        userRoles: true,
      },
    });

    return myUser;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (
  credentials: SignUpValues,
): Promise<{
  error: string;
}> => {
  try {
    const { email, password, phone, UserName, departmentId } =
      SignUpSchema.parse(credentials);

    const passwordHashed = await hash(password, {
      memoryCost: 19456,
      parallelism: 1,
      timeCost: 2,
      outputLen: 32,
    });

    const genId = generateIdFromEntropySize(10);
    const sessionId = generateIdFromEntropySize(12);

    const existingUsername = await prisma.user.findFirst({
      where: {
        username: UserName,
      },
    });

    if (existingUsername)
      return {
        error: "Username already taken.",
      };

    const existingEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingEmail) return { error: "Email already taken." };

    await prisma.user.create({
      data: {
        id: genId,
        username: UserName,
        normalizedUserName: NormalizedUsername(UserName),
        email,
        normalizedEmail: NormalizedEmail(email),
        passwordHash: passwordHashed,
        phoneNumber: phone,
        emailConfirmed: false,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        departmentId,
      },
    });

    const session = await prisma.session.create({
      data: {
        id: sessionId,
        userId: genId,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 1000),
      },
    });

    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "An error occurred while creating a new user.",
    };
  }
};

export const signIn = async (
  credentials: SignInValues,
): Promise<{ error: string }> => {
  try {
    const { email, username, password } = SignInSchema.parse(credentials);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    });

    if (!existingUser || !existingUser.passwordHash)
      return { error: "Incorrect username or password." };

    const isValidPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!isValidPassword) return { error: "Incorrect username or password" };

    const session = await prisma.session.create({
      data: {
        id: generateIdFromEntropySize(50),
        userId: existingUser.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "Something went wrong. Please, try again.",
    };
  }
};

export const signOut = async (): Promise<{ error: string }> => {
  const { session } = await validateRequest();

  if (!session) throw new Error("Unauthorized");

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/sign-in");
};

export const UserUpdate = async (
  credentials: UpdateUserValues,
): Promise<{ error: string; success: string }> => {
  try {
    const { email, password, phone, username, id } =
      UpdateUserSchema.parse(credentials);

    const updateData: any = {
      email: email.trim(),
      phoneNumber: phone,
      username: username.trim(),
      normalizedUserName: NormalizedUsername(username),
      normalizedEmail: NormalizedEmail(email),
    };

    if (password !== "") {
      const passwordHashed = await hash(password, {
        memoryCost: 19456,
        parallelism: 1,
        timeCost: 2,
        outputLen: 32,
      });

      updateData.passwordHash = passwordHashed;
    }

    await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return redirect("/profile");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "An error occurred while updating!",
      success: "Successfully Updated",
    };
  }
};
