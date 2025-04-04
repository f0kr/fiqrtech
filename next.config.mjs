/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'


const nextConfig = {
    images: {
      domains: ['images.unsplash.com'], 
    },
  };

const withIntlIntl = createNextIntlPlugin()

export default withIntlIntl(nextConfig) ;
