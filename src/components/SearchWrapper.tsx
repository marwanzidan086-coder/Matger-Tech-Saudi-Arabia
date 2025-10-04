'use client';

import { Suspense } from 'react';
import Search from './Search';

export default function SearchWrapper() {
  return (
    <Suspense fallback={null}>
      <Search />
    </Suspense>
  );
}
