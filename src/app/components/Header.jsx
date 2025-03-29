"use client"

import { LoadingContext } from '../utils/contexts/LoadingContext'
import Hum from './sub/Hum'
/* import LangToggle from './sub/LangToggle' */
/* import { Link } from '../../i18n/navigation'; */
import Link from 'next/link'
import styles from '../../../styles/header.module.css'
import { useContext } from 'react'

import Image from 'next/image'
export default function Header() {

    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={ isLoading?styles.headerInvisible: styles.headerVisible}>
      <nav>
        <ul>
          <li className={styles.logo}><Link href="/"><Image width={30} height={40} src="/logoWhite.png" alt="logo" /></Link></li>
          {/* <LangToggle/> */}
          <Hum/>
          <li className={styles.ourWork}><Link href="#">Our Work</Link>
          <Link href="#"><div className={styles.arrow}></div></Link>
          </li>
          
        </ul>
      </nav>
    </div>
    )
}
