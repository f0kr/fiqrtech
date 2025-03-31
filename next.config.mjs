/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'


const nextConfig = {
    images: {
      domains: ['images.unsplash.com'], 
    },
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'fiqrtech.com' }], 
          destination: 'https://fiqrtech.com/:path*',
          permanent: true, // 301 redirect
        },
      ];
    },
  };

const withIntlIntl = createNextIntlPlugin()

export default withIntlIntl(nextConfig) ;
