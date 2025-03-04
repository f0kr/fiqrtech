import { LoadingContext } from './contexts/LoadingContext'
import styles from './styles/header.module.css'
import { useContext } from 'react'
export default function Header() {
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={ isLoading?styles.headerInvisible: styles.headerVisible}>
      <nav>
        <ul>
          <li className={styles.logo}><a href="/"><img src="../public/logoWhite.png" alt="logo" /></a></li>
          <li className={styles.ourWork}><a href="/ourwork">Our Work</a></li>
        </ul>
      </nav>
    </div>
    )
}