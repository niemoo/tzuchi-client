'use client';

import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { loginService } from '@/services/auth/auth-service';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const data = await loginService({ email, password });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        router.push('/dashboard');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" className="mx-auto w-1/2 border border-gray-500 py-3 px-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Login</h3>
        <hr className="my-3" />
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="text" placeholder="Input your email" ref={emailRef} required />
        </div>
        <div className="mt-5">
          <Label htmlFor="password">Password</Label>
          <Input type="text" placeholder="Input your password" ref={passwordRef} required />
        </div>
        <div className="flex justify-end mt-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}
