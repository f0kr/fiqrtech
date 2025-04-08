"use client"

import { LoadingContext } from '../utils/contexts/LoadingContext'
import Hum from './sub/Hum'
import LangToggle from './sub/LangToggle'
import { Link } from '../../i18n/navigation';
import { useContext } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'


export default function Header() {
  const t = useTranslations()
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={isLoading? 'absolute top-[-10px] pointer-events-none transition-all opacity-0' : 'opacity-100 pointer-events-auto bg-transparent text-white p-2.5 text-center z-50 w-full absolute top-0 right-0 rounded-2xl'}>
      <nav>
        <ul className='flex justify-between items-center ml-4 mr-4'>
          <li className='pb-2 border-b-2 border-solid border-white'><Link href="/"><Image width={30} height={40} src="/logoWhite.png" alt="logo" /></Link></li>
          <LangToggle/>
          <Hum/>
          <li className='hover:-translate-y-1 max-sm:hidden'><Link href="/ourwork">{t('Our Work')}</Link>
          </li>
          
        </ul>
      </nav>
    </div>
    )
}
