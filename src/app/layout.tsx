import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

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
      <GoogleAnalytics gaId='G-TCEJTMGS4W' />
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
