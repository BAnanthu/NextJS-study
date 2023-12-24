import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={inter.className}>
       <div>
      <Head>
        <title>Your App</title>
        <meta name="description" content="Your app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
    </div>
     </body>
    </html>
  )
}
