import { Metadata } from 'next';
import UsersTable from '@/components/layouts/Table/UsersTable';

export const metadata: Metadata = {
  title: 'Siswa',
};

export default function DashboardUsers() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Siswa</h1>
      </div>

      <UsersTable />
    </main>
  );
}
