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
            <div className={ faceNumber === 1? styles.disc: styles.transition}> <b>Disc1</b> dolor corrupti quaerat maxime ratione, amet laboriosam molestiae? Ratione deleniti veniam quasi. Ea, quibusdam? Sapiente, in dignissimos. Lorem ipsum dolor sit amet conelle tempore</div>
            <div className={ faceNumber === 2? styles.disc: styles.transition}> <b>Disc2</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nis Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt aut commodi doloribus unde ratione cumque sunt odio facere rem recusandae, odit ab soluta amet, fuga libero in quasi qui?Placeat dolor aliquam eos ipsa incidunt.</div>
            <div className={ faceNumber === 3? styles.disc: styles.transition}> <b>Disc3</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nis Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt aut commodi doloribus unde ratione cumque sunt odio facere rem recusandae, odit ab soluta amet, fuga libero in quasi qui?Placeat dolor aliquam eos ipsa incidunt.</div>
            <div className={ faceNumber === 4? styles.disc: styles.transition}> <b>Disc4</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nis Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt aut commodi doloribus unde ratione cumque sunt odio facere rem recusandae, odit ab soluta amet, fuga libero in quasi qui?Placeat dolor aliquam eos ipsa incidunt.</div>
        
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