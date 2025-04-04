"use client"

import { Link } from '../../../i18n/navigation';
import { useContext } from 'react';
import { LoadingContext } from '../../utils/contexts/LoadingContext';
import styles from '../../../../styles/orderbtn.module.css'
import { useTranslations } from 'next-intl';
export default function Orderbtn() {
    const t = useTranslations()
    const { isLoading } = useContext(LoadingContext)
    return (
        <div className={isLoading? styles.none :styles.container}>
            <button><Link href="/order">{t("Order")}</Link></button>
        </div>
    );
}