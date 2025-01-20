'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onSearch(newValue);
  };

  return (
    <>
      <Input placeholder="Cari berdasarkan nama..." className="md:w-1/5 w-full" value={searchValue} onChange={handleInputChange} />
    </>
  );
}
