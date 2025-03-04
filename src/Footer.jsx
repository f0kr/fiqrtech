import { LoadingContext } from './contexts/LoadingContext'
import styles from './styles/footer.module.css'
import { useContext } from 'react';

export default function Footer() {
    const {isLoading} = useContext(LoadingContext)
    return (
        <ul className={isLoading? styles.footerInvisible: styles.footerVisible}>
        <li><img src="public/icons8-facebook.svg" alt="facebook"/></li>
        <li><img src="public/icons8-instagram.svg" alt="instagram"/></li>
        <li><img src="public/icons8-whatsapp.svg" alt="whatsapp"/></li>
        <li><img src="public/icons8-telegram.svg" alt="telegram"/></li>
      </ul>
    )
}