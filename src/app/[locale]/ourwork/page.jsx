import OurWorkComponent from '../../components/sub/ourwork/OurWorkComponent'

export const metadata = {
  title: {
    default: 'Our Work',
    template: '%s | Our Work'
  },
  description: 'FiqrTech is a cutting-edge AI-driven tech company specializing in web development, 3D experiences, UX/UI design, and digital marketing. We build cutting-edge SaaS, AI solutions, and immersive 3D websites for businesses across the Middle East.',
  keywords: ['technology', 'software', 'development', 'solutions'],
  metadataBase: new URL('https://www.fiqrtech.com'),
}

export default function OurWork(){
  return(
    <OurWorkComponent/>
  )
}