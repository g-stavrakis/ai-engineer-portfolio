import React from 'react';
import { cn } from '../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('max-w-5xl mx-auto px-4', className)} {...props}>
      {children}
    </div>
  );
};

export default Container; 