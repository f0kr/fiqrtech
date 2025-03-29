"use client"

import styles from '../../../../styles/ourworkbtn.module.css'
/* import { Link } from '../../../i18n/navigation'; */
import Link from 'next/link';
import { useContext } from 'react';
import { LoadingContext } from '../../utils/contexts/LoadingContext';
export default function OurWorkBtn() {
    const { isLoading } = useContext(LoadingContext)
    return (
        <div className={isLoading? styles.none :styles.container}>
            <button><Link href="#">Our Work</Link></button>
        </div>
    );
}