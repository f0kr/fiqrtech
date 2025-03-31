// app/page.jsx
'use client'
import dynamic from 'next/dynamic';
import styles from '../../../styles/page.module.css'
const LoadingCanvas = dynamic(() => import('../components/LoadingCanvas'), {
  ssr: false,
  loading: () => <div className={styles.loader}></div>
});

export default function Home() {
  return (
    <main>
      <LoadingCanvas />
    </main>
  );
}