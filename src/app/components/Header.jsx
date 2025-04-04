"use client"

import { LoadingContext } from '../utils/contexts/LoadingContext'
import Hum from './sub/Hum'
import LangToggle from './sub/LangToggle'
import { Link } from '../../i18n/navigation';
import { useContext } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from '../../../styles/header.module.css'


export default function Header() {
  const t = useTranslations()
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={ isLoading?styles.headerInvisible: styles.headerVisible}>
      <nav>
        <ul>
          <li className={styles.logo}><Link href="/"><Image width={30} height={40} src="/logoWhite.png" alt="logo" /></Link></li>
          <LangToggle/>
          <Hum/>
          <li className={styles.ourWork}><Link href="/ourwork">{t('Our Work')}</Link>
          <Link href="/ourwork"><div className={styles.arrow}></div></Link>
          </li>
          
        </ul>
      </nav>
    </div>
    )
}
