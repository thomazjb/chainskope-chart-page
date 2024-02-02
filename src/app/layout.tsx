import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
       <Head>
        <meta name="description" content="Chainspoke Chart Page Test" />
        <meta name="author" content="Thomaz Juliann Boncompagni" />
      </Head>
      <body className={inter.className}><Navbar></Navbar>{children}</body>
    </html>

  );
}
