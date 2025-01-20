'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AdminSidebar() {
  const currentPath = usePathname();

  return (
    <nav className="hidden border-r  md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Tzuchi</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link href="/dashboard" className={clsx('flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary', currentPath === '/dashboard' && 'text-white bg-[#15803d]')}>
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="#" className={clsx('flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary', currentPath === '/dashboard/a' && 'text-white bg-[#15803d]')}>
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 transition-all hover:text-primary">
              <Package className="h-4 w-4" />
              Products{' '}
            </Link>
            <Link href="/dashboard/users" className={clsx('flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary', currentPath === '/dashboard/users' && 'text-white bg-[#15803d]')}>
              <Users className="h-4 w-4" />
              Siswa
            </Link>
            <Link href="/dashboard/kelas" className={clsx('flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary', currentPath === '/dashboard/a' && 'text-white bg-[#15803d]')}>
              <LineChart className="h-4 w-4" />
              Kelas
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
