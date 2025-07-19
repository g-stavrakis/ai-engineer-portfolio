import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      tabIndex={props.tabIndex ?? 0}
      className={cn(
        'bg-white dark:bg-zinc-900 rounded-xl shadow transition-all duration-200 border border-zinc-200 dark:border-zinc-800',
        'hover:shadow-xl hover:scale-[1.03] focus:scale-[1.03] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 