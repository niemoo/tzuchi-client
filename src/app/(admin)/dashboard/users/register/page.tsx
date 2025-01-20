import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import RegisterUserForm from '@/components/layouts/Form/RegisterUserForm';

export const metadata: Metadata = {
  title: 'Tambah Siswa',
};

export default function DashboardUsersRegister() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <Link href="/dashboard/users">
            <Button className="flex gap-2 bg-blue-600 hover:bg-blue-700">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Kembali
            </Button>
          </Link>
        </div>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Tambah Siswa</h1>
        </div>

        <RegisterUserForm />
      </main>
    </>
  );
}
