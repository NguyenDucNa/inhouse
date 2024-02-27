import { AuthStatus } from '@client/module/auth/auth-hook.ts';
import { authClient } from '@client/module/auth/auth-client.ts';

export function getAuthStatus(): AuthStatus | null {
  const authRaw = localStorage.getItem('auth');

  if (!authRaw) {
    return null;
  } else {
    return JSON.parse(authRaw) as AuthStatus;
  }
}

export function saveAuthStatus(authStatus: AuthStatus) {
  localStorage.setItem('auth', JSON.stringify(authStatus));
}

export async function getValidAccessToken(): Promise<string | null> {
  const authStatus = getAuthStatus();
  if (!authStatus) {
    return null;
  }

  let accessToken = authStatus.accessToken;

  // If the token is expired, we refresh it
  const now = new Date().getTime();
  const expiresAt = new Date(authStatus.accessTokenExpiresAt);
  if (now > expiresAt.getTime()) {
    try {
      const result = await authClient.refreshToken(authStatus.refreshToken);
      accessToken = result.accessToken;

      saveAuthStatus({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        accessTokenExpiresAt: new Date(now + result.expiresIn * 1000),
      });
    } catch {
      clearAuthStatus();
      return null;
    }
  }

  return accessToken;
}

export function clearAuthStatus() {
  localStorage.removeItem('auth');
}
