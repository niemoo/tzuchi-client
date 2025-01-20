'use server';

export async function getAllUsers(nama: string, page: number, perPage: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/users?nama=${nama}&page=${page}&perPage=${perPage}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      cache: 'no-cache',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
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

export async function registerUserService(formData: FormData) {
  try {
    const data: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (key === 'status_aktif') {
        // Ubah status_aktif dari string ke number
        data[key] = Number(value);
      } else {
        data[key] = value;
      }
    });

    // Kirim data ke server dalam format JSON
    const response = await fetch(`http://localhost:3000/api/register/users`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data), // Mengirim data dalam format JSON
    });

    const res = await response.json();

    return res;
  } catch (err) {
    if (err instanceof Error) {
      console.error('Register User service error:', err.message);
      return { error: err.message };
    }

    console.error('Unexpected error:', err);
    return { error: 'An unexpected error occurred' };
  }
}
