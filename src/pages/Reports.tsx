import React from 'react';
import dynamic from 'next/dynamic'

const RootLayout = dynamic(() => import('@/app/layout'), { ssr: false })

export default function Reports() {
  return (
    <RootLayout>
      {<h1>Reports</h1>}
    </RootLayout>
  )
}