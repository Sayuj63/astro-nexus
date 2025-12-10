'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AuroraText({
  children,
  className = '',
  colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#a855f7'], // Using cosmic brand colors
  speed = 1,
}: AuroraTextProps) {
  const gradientColors = colors.join(', ');
  
  return (
    <span
      className={cn(
        'relative inline-block bg-gradient-to-r bg-clip-text text-transparent animate-pulse-glow',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(45deg, ${gradientColors})`,
        backgroundSize: '300% 300%',
        animation: `aurora ${3 / speed}s ease-in-out infinite`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </span>
  );
}