import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold pb-6 bg-gradient-to-br from-blue-600 to-purple-600  tracking-tighter pr-2 text-transparent bg-clip-text">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link href='/'>
        <Button className="cursor-pointer">Return Home</Button>
      </Link>
    </div>
  );
}

export default NotFound
