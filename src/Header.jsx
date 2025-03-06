import { LoadingContext } from './contexts/LoadingContext'
import { Link } from 'react-router-dom'
import styles from './styles/header.module.css'
import { useContext } from 'react'
export default function Header() {
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={ isLoading?styles.headerInvisible: styles.headerVisible}>
      <nav>
        <ul>
          <li className={styles.logo}><Link to="/"><img src="/logoWhite.png" alt="logo" /></Link></li>
          <li className={styles.ourWork}><Link to="/ourwork">Our Work</Link>
          <div className={styles.arrow}></div>
          </li>
          
        </ul>
      </nav>
    </div>
    )
}
