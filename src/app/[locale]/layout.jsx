import '../globals.css'
import {NextIntlClientProvider, hasLocale, useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
/* import Header from '../components/Header';
import Footer from '../components/Footer'; */
import Providers from './providers' 
import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';

const Header = dynamic(() => import('../components/Header'));
const Footer = dynamic(() => import('../components/Footer'));


export async function generateMetadata({ params: {locale}}){
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return{
    title: {
      default: 'FiqrTech - Your Trusted Tech Partner',
      template: '%s | FiqrTech'
    },
    description: t('desc'),
    keywords: t('keywords'),
    metadataBase: new URL('https://www.fiqrtech.com'),
    alternates: {
      canonical: '/',
    },
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
    openGraph: {
      title: 'FiqrTech - Your Trusted Tech Partner',
      description: t('desc'),
      url: 'https://www.fiqrtech.com',
      siteName: 'FiqrTech',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'fb:app_id' : '1168044524914647'
    },
  }
}




export default async function RootLayout({children, params}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FiqrTech",
    "url": "https://fiqrtech.com",
    "logo": "https://fiqrtech.com/logo.png",
    "description": "Iraq's first AI-powered 3D web development company",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IQ"
    }
  };
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
      <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </head>
      <body className='m-0  overflow-x-hidden h-lvh w-dvw select-none'>
        <Providers>
        <NextIntlClientProvider>
          <Header/>
          {children}
          <Footer />
          </NextIntlClientProvider>
          </Providers>
      </body>
    </html>
  );
}
