import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  glassEffect = false 
}) => {
  const baseClasses = 'rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl';
  const glassClasses = glassEffect 
    ? 'bg-white/10 backdrop-blur-lg border border-white/20' 
    : 'bg-white';
  
  return (
    <div className={`${baseClasses} ${glassClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;