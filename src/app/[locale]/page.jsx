// app/page.jsx
"use client";
import dynamic from 'next/dynamic';
const LoadingCanvas = dynamic(() => import('../components/LoadingCanvas'));

export default function Home() {
  return (
    <main>
      <LoadingCanvas />
    </main>
  );
}