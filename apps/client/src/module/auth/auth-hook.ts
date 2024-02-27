import { addSeconds } from 'date-fns';
import { useLocalStorage } from 'usehooks-ts';
import { authClient } from './auth-client.ts';

export interface AuthStatus {
  accessTokenExpiresAt: Date;
  accessToken: string;
  refreshToken: string;
}

export interface UseAuth {
  auth: AuthStatus | null;

  login(username: string, password: string): Promise<void>;

  logout(): Promise<void>;

  refreshToken(): Promise<void>;
}

export const useAuth = () => {
  const [auth, setAuth] = useLocalStorage<AuthStatus | null>('auth', null);

  const login = async (username: string, password: string) => {
    const res = await authClient.login(username, password);

    setAuth({
      accessTokenExpiresAt: addSeconds(new Date(), res.expiresIn),
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    });
  };

  const logout = async () => {
    await authClient.logout();
    setAuth(null);
  };

  const refreshToken = async () => {
    const res = await authClient.refreshToken(auth?.accessToken ?? '');
    setAuth({
      accessTokenExpiresAt: addSeconds(new Date(), res.expiresIn),
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    });
  };

  return { auth, login, logout, refreshToken };
};
