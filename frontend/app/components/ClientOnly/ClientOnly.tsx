"use client";
import React, { ReactNode } from 'react';

// This wrapper ensures the component only renders on the client side
// It's a simpler approach than adding dynamic imports in multiple places
interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return fallback;
  }
  
  return children;
}