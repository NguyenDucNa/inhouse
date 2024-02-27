export interface AuthJwtResult {
  tokenType: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}

const AUTH_URL = import.meta.env.VITE_AUTH_URL as string;

class AuthClient {
  async login(username: string, password: string): Promise<AuthJwtResult> {
    const res = await fetch(`${AUTH_URL}/direct/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return (await res.json()) as AuthJwtResult;
  }

  async refreshToken(refreshToken: string): Promise<AuthJwtResult> {
    const res = await fetch(`${AUTH_URL}/direct/refreshToken`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${refreshToken}`,
      },
    });

    if (res.ok) {
      return (await res.json()) as AuthJwtResult;
    } else {
      throw new Error(res.statusText);
    }
  }

  async logout(): Promise<AuthJwtResult> {
    const res = await fetch(`${AUTH_URL}/logout`, {
      method: 'POST',
      credentials: 'same-origin',
    });

    if (res.ok) {
      return (await res.json()) as AuthJwtResult;
    } else {
      throw new Error(res.statusText);
    }
  }
}

export const authClient = new AuthClient();
