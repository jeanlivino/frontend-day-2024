import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './fonts.css';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'FrontEnd Day - Fortaleza 2024',
  description:
    'Um dia inteiro para você ampliar suas conexões. 14 de Setembro de 2024',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br',
    images: [
      {
        url: 'https://frontendday.descompliqueapps.com.br/2024/wp-content/uploads/2024/06/banner-fend.png',
        alt: 'FrontEnd Day - Fortaleza 2024',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
