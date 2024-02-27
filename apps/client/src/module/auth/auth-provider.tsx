import { ReactNode } from "react";
import { useAuth } from "@client/module/auth/auth-hook.ts";
import { AuthContext } from "@client/module/auth/auth-context.ts";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
