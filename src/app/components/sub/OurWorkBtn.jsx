"use client"

import styles from '../../../../styles/ourworkbtn.module.css'
import { Link } from '../../../i18n/navigation';
import { useContext } from 'react';
import { LoadingContext } from '../../utils/contexts/LoadingContext';
import { useTranslations } from 'next-intl';
export default function OurWorkBtn() {
    const t = useTranslations()
    const { isLoading } = useContext(LoadingContext)
    return (
        <div className={isLoading? styles.none :styles.container}>
            <button><Link href="/ourwork">{t('Our Work')}</Link></button>
        </div>
    );
}