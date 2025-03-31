import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Providers from './providers'
import '../../../styles/globals.css';

export function generateMetadata(){
  return{
    title: {
      default: 'FiqrTech - Your Trusted Tech Partner',
      template: '%s | FiqrTech'
    },
    description: 'FiqrTech is the first AI-driven tech company in Iraq specializing in web development, 3D experiences, UX/UI design, and digital marketing. We build cutting-edge SaaS, AI solutions, and immersive 3D websites for businesses across the Middle East.',
    keywords: ['technology', 'software', 'development', 'solutions'],
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
      description: 'FiqrTech is the first AI-driven tech company in Iraq specializing in web development, 3D experiences, UX/UI design, and digital marketing. We build cutting-edge SaaS, AI solutions, and immersive 3D websites for businesses across the Middle East.',
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
