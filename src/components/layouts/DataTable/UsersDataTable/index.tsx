'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { getAllUsers } from '@/services/users-service/users-service';
import { Button } from '@/components/ui/button';

interface userProps {
  nama: string;
  page: number;
  totalPage: (totalPage: number) => void;
}

type User = {
  NIS: string;
  nama: string;
  kelas: string;
  gender: string;
  status_aktif: number;
};

export default function UsersDataTable({ nama, page, totalPage }: userProps) {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers(nama, page, 3);

        setData(response.data);
        totalPage(response.totalPages);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nama, page]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Table>
        <TableCaption>List semua siswa.</TableCaption>
        <TableHeader className="bg-green-600">
          <TableHead className="w-[100px] text-left text-white">NIS</TableHead>
          <TableHead className="text-left text-white">Nama lengkap</TableHead>
          <TableHead className="text-left text-white">Kelas</TableHead>
          <TableHead className="text-left text-white">Jenis kelamin</TableHead>
          <TableHead className="text-right text-white">Status</TableHead>
          <TableHead className="text-right text-white"></TableHead>
        </TableHeader>
        <TableBody>
          {data.map((user: User) => (
            <TableRow key={user.NIS}>
              <TableCell className="font-medium text-left">{user.NIS}</TableCell>
              <TableCell className="text-left">{user.nama}</TableCell>
              <TableCell className="text-left">{user.kelas}</TableCell>
              <TableCell className="text-left">{user.gender}</TableCell>
              <TableCell className="text-right">{user.status_aktif === 1 ? 'Aktif' : 'Tidak Aktif'}</TableCell>
              <Button></Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
