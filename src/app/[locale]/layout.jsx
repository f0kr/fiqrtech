import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Providers from './providers'
import '../../../styles/globals.css';



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
