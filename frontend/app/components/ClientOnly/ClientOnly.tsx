"use client";
import React, { ReactNode } from 'react';

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
    return <>{fallback}</>; // also wrap fallback to ensure valid JSX
  }
  
  return <>{children}</>;
}
