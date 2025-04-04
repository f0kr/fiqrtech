"use client"

import { useContext } from 'react';
import {FaceNumberContext} from '../../utils/contexts/FaceNumberContext'
import {LoadingContext} from '../../utils/contexts/LoadingContext'
import styles from '../../../../styles/discreption.module.css'
import { useTranslations } from 'next-intl';
export default function Discreption() {
    const t = useTranslations()
    const {faceNumber} = useContext(FaceNumberContext)
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={!isLoading? styles.container: styles.none}>
            <div className={ faceNumber === 1? styles.disc: styles.transition}> <b> <h4>{t('Building the Future, One Line at a Time')}</h4> </b> {t('dev_solutions')}</div>
            <div className={ faceNumber === 2? styles.disc: styles.transition}> <b><h4>{t('Beyond Clicks: Crafting Impact')}</h4></b> {t('marketing_trends')}</div>
            <div className={ faceNumber === 4? styles.disc: styles.transition}> <b><h4>{t('Connecting Brands to the Right Audience')}</h4></b> {t('data_driven')}</div>
            <div className={ faceNumber === 3? styles.disc: styles.transition}> <b><h4>{t('Where Creativity Meets Functionality')}</h4></b> {t('design_experience')}</div>
        
        <div className={styles.depart_container}>
            <div className={ faceNumber === 1? styles.department: styles.transition}>{t('Development')}</div>
            <div className={ faceNumber === 2? styles.department: styles.transition}>{t('Advertising')}</div>
            <div className={ faceNumber === 3? styles.department: styles.transition}>{t('Design')}</div>
            <div className={ faceNumber === 4? styles.department: styles.transition}>{t('Marketing')}</div>
        </div>
        </div>
    );
}

{/* 
            <div className={styles.line_1_container}>
              <div className={styles.line_1}><div className={styles.line_2}></div></div>
            </div>
             */}