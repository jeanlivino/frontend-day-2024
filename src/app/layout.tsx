import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import './fonts.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'FrontEnd Day - Fortaleza 2024',
  description: 'Um dia inteiro para você ampliar suas conexões',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br',
    images: [
      {
        url: 'https://frontendday.descompliqueapps.com.br/wp-content/uploads/2023/08/banner-eventbrite-frontendday-1.png',
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
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
