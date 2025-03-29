import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Providers from './providers'
import '../../../styles/globals.css';


export const metadata =  {
  title: {
    default: 'FiqrTech - Your Trusted Tech Partner',
    template: '%s | FiqrTech'
  },
  description: 'FiqrTech provides innovative technology solutions for businesses of all sizes.',
  keywords: ['technology', 'software', 'development', 'solutions'],
  metadataBase: new URL('https://fiqrtech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FiqrTech - Your Trusted Tech Partner',
    description: 'FiqrTech provides innovative technology solutions for businesses of all sizes.',
    url: 'https://fiqrtech.com',
    siteName: 'FiqrTech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiqrTech - Your Trusted Tech Partner',
    description: 'FiqrTech provides innovative technology solutions for businesses of all sizes.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}


export default async function RootLayout({children, params}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
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
