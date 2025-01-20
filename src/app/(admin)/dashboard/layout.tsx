import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { authHandler } from '@/services/auth/auth-service';
import AdminSidebar from '@/components/layouts/Sidebar/AdminSidebar';
import AdminHeader from '@/components/layouts/Header/AdminHeader';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard',
  },
  description: 'Admin Tzuchi Dashboard.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const token = await authHandler();

  if (!token) {
    redirect('/login');
  }

  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="flex flex-col">
          <AdminHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
