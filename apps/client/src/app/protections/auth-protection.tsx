import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@client/module/auth/auth-context.ts';

export function AuthProtection(props: { children: ReactNode }) {
  const authContext = useAuthContext();

  if (authContext.auth) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="login" />;
  }
}
