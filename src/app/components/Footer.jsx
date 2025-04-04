"use client"
import Image from 'next/image';
import { LoadingContext } from '../utils/contexts/LoadingContext'
import { useContext } from 'react'
import styles from '../../../styles/footer.module.css'

export default function Footer() {
    const {isLoading} = useContext(LoadingContext)
    return (
        <ul className={isLoading? styles.footerInvisible: styles.footerVisible}>
        <li><a href="https://www.facebook.com/people/fiqrtech/61571065922543/" target='_blank' rel='noopener noreferrer'><Image height={50} width={50} src="/icons8-facebook.svg" alt="facebook"/></a></li>
        <li><a href="https://www.instagram.com/fiqrtech" target='_blank' rel='noopener noreferrer'><Image height={50} width={50} src="/icons8-instagram.svg" alt="instagram"/></a></li>
        <li><a href="https://wa.me/9647880311000" target='_blank' rel='noopener noreferrer'><Image height={50} width={50} src="/icons8-whatsapp.svg" alt="whatsapp"/></a></li>
        <li><a href="https://t.me/fiqrtech" target='_blank' rel='noopener noreferrer'><Image height={50} width={50} src="/icons8-telegram.svg" alt="telegram"/></a></li>
      </ul>
    )
}