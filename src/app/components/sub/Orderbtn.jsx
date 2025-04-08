"use client"

import { Link } from '../../../i18n/navigation';
import { useContext } from 'react';
import { LoadingContext } from '../../utils/contexts/LoadingContext';
import { useTranslations } from 'next-intl';
export default function Orderbtn() {
    const t = useTranslations()
    const { isLoading } = useContext(LoadingContext)
    return (
        <div className={isLoading? "hidden": "absolute bottom-[10%] left-[10%] bg-transparent z-50 flex justify-center items-center" }>
            <button className='bg-[#007bff] text-white pr-3 pl-3 pt-6 pb-6'><Link href="/order">{t("Order")}</Link></button>
        </div>
    );
}