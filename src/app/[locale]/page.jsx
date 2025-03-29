// app/page.jsx
"use client";
import dynamic from 'next/dynamic';

const LoadingCanvas = dynamic(() => import('../components/LoadingCanvas'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <main>
      <LoadingCanvas />
    </main>
  );
}