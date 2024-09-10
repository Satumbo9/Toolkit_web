"use client";

import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

interface SessionContextProps {
  user: User;
  session: Session;
}

const SessionContext = createContext<SessionContextProps | null>(null);

export const SessionProvider = ({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContextProps }>) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession must be used within a SessionProvider");
};

export default SessionProvider;
