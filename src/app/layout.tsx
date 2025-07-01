import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import './fonts.css';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'FrontEnd Day - Fortaleza 2025',
  description:
    'Um dia inteiro para você ampliar suas conexões. 20 de Setembro de 2025',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br',
    images: [
      {
        url: '/banner.jpg',
        alt: 'FrontEnd Day - Fortaleza 2025',
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
      <GoogleAnalytics gaId='G-TCEJTMGS4W' />
      <Script
        id='rdStation'
        type='text/javascript'
        strategy='afterInteractive'
        src='https://d335luupugsy2.cloudfront.net/js/loader-scripts/efc6148f-0aab-4757-9726-c580f397f30d-loader.js'
      />

      <Script
        id='clarity-js'
        strategy='afterInteractive'
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ly6n2cheaj");
`,
        }}
      />
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '226302154877929');
fbq('track', 'PageView');
`,
        }}
      />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
