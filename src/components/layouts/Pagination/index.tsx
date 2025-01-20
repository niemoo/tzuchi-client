'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PaginationProps {
  currentPage: number;
  setPage: (currentPage: number) => void;
  lastPage: number;
}

export default function Pagination({ currentPage, setPage, lastPage }: PaginationProps) {
  const [inputValue, setInputValue] = useState(currentPage.toString());

  const handleLastPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setPage(currentPage + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newPage = parseInt(inputValue, 10);
      if (!isNaN(newPage) && newPage > 0 && newPage <= lastPage) {
        setPage(newPage);
      } else {
        setInputValue(currentPage.toString()); // Reset input if invalid
      }
    }
  };

  return (
    <div className="flex gap-5">
      <Button className={`${currentPage === 1 ? 'text-pink-500 bg-transparent' : 'text-pink-600 bg-transparent hover:text-white hover:bg-pink-700'}`} onClick={handleLastPage} disabled={currentPage === 1}>
        {'<'}
      </Button>
      <div className="flex items-center gap-2">
        <Input className="w-12 text-center border border-pink-200" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder={currentPage.toString()} />
        <p> of {lastPage}</p>
      </div>
      <Button className={`text-pink-600 bg-transparent hover:text-white hover:bg-pink-700`} onClick={handleNextPage} disabled={currentPage === lastPage}>
        {'>'}
      </Button>
    </div>
  );
}
