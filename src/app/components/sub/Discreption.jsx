"use client"

import styles from '../../../../styles/discreption.module.css'
import { useContext } from 'react';
import {FaceNumberContext} from '../../utils/contexts/FaceNumberContext'
import {LoadingContext} from '../../utils/contexts/LoadingContext'
import { DragContext } from '../../utils/contexts/DragContext';
export default function Discreption() {
    const {faceNumber} = useContext(FaceNumberContext)
    const {isLoading} = useContext(LoadingContext)
    const {draged} = useContext(DragContext)
    return (
        <div className={!isLoading? styles.container: styles.none}>
            <div className={ faceNumber === 1? styles.disc: styles.transition}> <b> <h4>Building the Future, One Line at a Time</h4> </b> Our developers don’t just write code—they craft solutions. From AI-powered platforms to immersive 3D experiences, we turn ideas into scalable, secure, and cutting-edge realities. Ready to bring your vision to life?</div>
            <div className={ faceNumber === 2? styles.disc: styles.transition}> <b><h4>Beyond Clicks: Crafting Impact</h4></b> We don’t chase trends; we set them. Targeted campaigns, creative storytelling, and ROI-focused execution ensure your message stands out. Let’s make noise together.</div>
            <div className={ faceNumber === 4? styles.disc: styles.transition}> <b><h4>Connecting Brands to the Right Audience</h4></b> Data-driven strategies, compelling storytelling, and measurable results—we don’t just market; we build relationships that grow your business. Your audience is waiting.</div>
            <div className={ faceNumber === 3? styles.disc: styles.transition}> <b><h4>Where Creativity Meets Functionality</h4></b> Every pixel has purpose. Our designers blend aesthetics with usability to create interfaces that captivate and convert. Let’s design something unforgettable.</div>
        
        <div className={styles.depart_container}>
            <div className={ faceNumber === 1? styles.department: styles.transition}>Development</div>
            <div className={ faceNumber === 2? styles.department: styles.transition}>Advertising</div>
            <div className={ faceNumber === 3? styles.department: styles.transition}>Design</div>
            <div className={ faceNumber === 4? styles.department: styles.transition}>Marketing</div>
        </div>

            <div className={!draged? styles.drag_indicator: styles.none}>
              <div className={styles.arrow_container}>
              <div className={styles.arrow_left}></div>
              <div className={styles.arrow_right}></div>
              </div>
              <p>Drag Cube</p>
            </div>
        </div>
    );
}

{/* 
            <div className={styles.line_1_container}>
              <div className={styles.line_1}><div className={styles.line_2}></div></div>
            </div>
             */}