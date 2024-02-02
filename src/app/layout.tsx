import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body className={inter.className}><Navbar></Navbar>{children}</body>
    </html>

  );
}
