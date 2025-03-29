/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'


const nextConfig = {
    images: {
      domains: ['images.unsplash.com'], // Replace with your allowed image domain(s)
    },
  };

const withIntlIntl = createNextIntlPlugin()

export default withIntlIntl(nextConfig) ;
