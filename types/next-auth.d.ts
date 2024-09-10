import { Role, Group } from "@prisma/client";

declare module "next-auth" {
  export interface Session {
    user: {
      id: string;
      email: string;
      role: Role;
      group: Group;
    };
  }

  export interface JWT {
    sub: string;
    email: string;
    role: Role;
    group: Group;
    firstname: string;
    lastname: string;
  }
}
