import styles from './styles/ourwork.module.css'
import { Link } from 'react-router-dom';
export default function OurWorkPage() {
    return (
        <div className={styles.pageContainer}>
            <div>Page Under Construction</div>
            <button> <Link to="/">Back</Link> </button>
        </div>
    );
}