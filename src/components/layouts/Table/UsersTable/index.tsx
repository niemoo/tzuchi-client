'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import UsersDataTable from '@/components/layouts/DataTable/UsersDataTable';
import SearchBar from '@/components/layouts/SearchBar';
import Pagination from '@/components/layouts/Pagination';

export default function UsersTable() {
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleSearch = (name: string) => {
    setSearchName(name);
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleTotalPage = (page: number) => {
    setTotalPage(page);
  };

  return (
    <>
      <div className="flex gap-3 justify-between">
        <SearchBar onSearch={handleSearch} />
        <Link href="/dashboard/users/register">
          <Button className="flex gap-2 bg-green-600 hover:bg-green-700">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="md:block hidden">Tambah siswa</p>
          </Button>
        </Link>
      </div>

      <UsersDataTable nama={searchName} page={currentPage} totalPage={handleTotalPage} />
      <div className="flex justify-end">
        <Pagination currentPage={currentPage} setPage={handlePage} lastPage={totalPage} />
      </div>
    </>
  );
}
