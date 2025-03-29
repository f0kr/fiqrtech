/* import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing'; */
import Header from './components/Header';
import Footer from './components/Footer';
import Providers from './providers'
import '../../styles/globals.css';



export default async function RootLayout({children}) {

  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header/>
          {children}
          <Footer />
          </Providers>
      </body>
    </html>
  );
}
