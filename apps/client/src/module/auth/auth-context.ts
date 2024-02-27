import { createContext, useContext } from 'react';
import { UseAuth } from '@client/module/auth/auth-hook.ts';

export const AuthContext = createContext<UseAuth | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }

  return context;
}
