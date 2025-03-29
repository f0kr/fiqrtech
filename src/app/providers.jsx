"use client";

import { LoadingProvider } from './utils/contexts/LoadingContext';
import { AnimationLoadProvider } from './utils/contexts/AnimationLoad';
import { FaceNumberProvider } from './utils/contexts/FaceNumberContext';
import { DragProvider } from './utils/contexts/DragContext';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }) {
  return (
    <LoadingProvider>
    <DragProvider>
      <FaceNumberProvider>
        <AnimationLoadProvider>

              {children}
              <Toaster />

        </AnimationLoadProvider>
      </FaceNumberProvider>
    </DragProvider>
    </LoadingProvider>
  );
}