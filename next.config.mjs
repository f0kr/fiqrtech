/** @type {import('next').NextConfig} */
import createNextIntPlugin from 'next-intl/plugin'


const nextConfig = {
    images: {
      domains: ['images.unsplash.com'], // Replace with your allowed image domain(s)
    },
  };

const withIntlIntl = createNextIntPlugin()

export default withIntlIntl(nextConfig) ;
