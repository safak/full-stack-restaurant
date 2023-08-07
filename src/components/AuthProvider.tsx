"use client";
import { SessionProvider } from "next-auth/react"

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
