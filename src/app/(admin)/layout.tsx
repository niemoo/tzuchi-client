import AdminSidebar from '@/components/layouts/Sidebar/AdminSidebar';
import AdminHeader from '@/components/layouts/Header/AdminHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
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
