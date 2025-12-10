'use client';

import '@/styles/globals.css'
import { useEffect } from 'react';
import { initializeDarkMode } from '@/utils/darkmode';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initializeDarkMode();
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}