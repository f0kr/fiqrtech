

import { Link } from '../../../i18n/navigation';
import { useTranslations } from 'next-intl';
export default function OurWorkBtn() {
    const t = useTranslations()
    return (
        <div className='max-sm:hidden'>
            <button><Link href="/ourwork">{t('Our Work')}</Link></button>
        </div>
    );
}