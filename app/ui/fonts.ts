
//In your fonts.ts file, import a secondary font called Lusitana and pass it to the <p> element in your /app/page.tsx file.

import { Lusitana } from 'next/font/google';

import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
