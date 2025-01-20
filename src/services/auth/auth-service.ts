'use server';

import { cookies } from 'next/headers';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface LoginParam {
  email: string;
  password: string;
}

export async function loginService({ email, password }: LoginParam) {
  try {
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      cookies().set('token', data.data.token, {
        secure: true,
        httpOnly: true,
      });
    }

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error('Login service error:', err.message);
      return { error: err.message };
    }

    console.error('Unexpected error:', err);
    return { error: 'An unexpected error occurred' };
  }
}

export async function getUserToken() {
  const token = cookies().get('token');

  if (!token) {
    return null;
  }

  return token.value;
}

export async function authHandler() {
  const token = await getUserToken();

  if (!token) {
    return null;
  }

  const decoded = jwtDecode<JwtPayload>(token);

  if (!decoded.exp) {
    return null;
  }

  const currentTime = Math.floor(Date.now() / 1000);

  if (decoded.exp < currentTime) {
    return null;
  }

  return decoded;
}

export async function logoutService() {
  cookies().delete('token');
  const message = 'Logout berhasil';

  return message;
}
