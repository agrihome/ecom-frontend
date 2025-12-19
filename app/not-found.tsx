// app/not-found.js

import Link from 'next/link';
import ViewAllButton from '@/components/ViewAllButton';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(80vh-100px)] p-10'>
      <h1 className='sm:text-8xl text-5xl font-light'>Not Found</h1>
      <p className='text-gray-600 mt-5 text-center'>Your visited page not found. You may go home page.</p>
      <Link href="/" className='mt-10'>
        <ViewAllButton text="Return Home" />
      </Link>
    </div>
  );
}

