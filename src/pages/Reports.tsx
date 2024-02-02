import React from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link';
const RootLayout = dynamic(() => import('@/app/layout'), { ssr: false })

export default function Reports() {
  return (
    <RootLayout>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">Hello!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">This content does not exist because this it&apos;s a mock-up project!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/Boards"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go to the mocked-up page
            </Link>
          </div>
        </div>
      </main>
    </RootLayout>
  )
}

