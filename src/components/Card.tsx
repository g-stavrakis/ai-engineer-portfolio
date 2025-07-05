import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-200 dark:border-zinc-800',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 