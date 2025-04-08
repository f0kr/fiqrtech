"use client"

import { useContext } from 'react';
import {FaceNumberContext} from '../../utils/contexts/FaceNumberContext'
import {LoadingContext} from '../../utils/contexts/LoadingContext'
import { useTranslations } from 'next-intl';
export default function Discreption() {
    const t = useTranslations()
    const {faceNumber} = useContext(FaceNumberContext)
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className={isLoading? 'hidden': ""}>
        <div className={'absolute top-[25%] left-[63%] m-2 flex flex-col justify-center items-center max-sm:absolute max-sm:top-[10%] max-sm:left-0 max-sm:m-0 max-sm:w-full'}>
            <div className={ faceNumber === 1? 'text-center text-white backdrop-blur-[2px] rounded-2xl shadow-cyan-950 p-5 border-[0.5px] border-solid border-[#ffffff4d] hover:drop-shadow-lg transition-all ' : 'hidden'}> <b> <h4>{t('Building the Future, One Line at a Time')}</h4> </b> {t('dev_solutions')}</div>
            <div className={ faceNumber === 2? 'text-center text-white backdrop-blur-[2px] rounded-2xl shadow-cyan-950 p-5 border-[0.5px] border-solid border-[#ffffff4d] hover:drop-shadow-lg transition-all ' : 'hidden'}> <b><h4>{t('Beyond Clicks: Crafting Impact')}</h4></b> {t('marketing_trends')}</div>
            <div className={ faceNumber === 4? 'text-center text-white backdrop-blur-[2px] rounded-2xl shadow-cyan-950 p-5 border-[0.5px] border-solid border-[#ffffff4d]  hover:drop-shadow-lg transition-all ' : 'hidden'}> <b><h4>{t('Connecting Brands to the Right Audience')}</h4></b> {t('data_driven')}</div>
            <div className={ faceNumber === 3? 'text-center text-white backdrop-blur-[2px] rounded-2xl shadow-cyan-950 p-5 border-[0.5px] border-solid border-[#ffffff4d]  hover:drop-shadow-lg transition-all ' : 'hidden'}> <b><h4>{t('Where Creativity Meets Functionality')}</h4></b> {t('design_experience')}</div>
        
        <div className='max-sm:hidden'>
            <div className={faceNumber === 1? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Development')}</div>
            <div className={faceNumber === 2? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Advertising')}</div>
            <div className={faceNumber === 3? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Design')}</div>
            <div className={faceNumber === 4? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Marketing')}</div>
        </div>
        </div>
        <div className=' hidden max-sm:absolute max-sm:bottom-[20%] left-[0%] max-sm:flex justify-center items-center text-center w-full'>
            <div className={faceNumber === 1? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Development')}</div>
            <div className={faceNumber === 2? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Advertising')}</div>
            <div className={faceNumber === 3? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Design')}</div>
            <div className={faceNumber === 4? 'w-fit text-center text-4xl text-shadow-zinc-950 font-medium p-5 text-[#ccc]': 'hidden'}>{t('Marketing')}</div>
        </div>
        </div>
    );
}