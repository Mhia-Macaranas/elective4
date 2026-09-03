import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'eyebrow';

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children, 
  className = '', 
  as,
  id 
}) => {
  const styles = {
    h1: 'font-display text-4xl md:text-5xl lg:text-6xl text-text leading-tight',
    h2: 'font-display text-3xl md:text-4xl text-text leading-tight',
    h3: 'font-display text-2xl md:text-3xl text-text leading-snug',
    h4: 'font-display text-xl md:text-2xl text-text leading-snug',
    body: 'font-body text-base md:text-lg text-text leading-relaxed',
    small: 'font-body text-sm text-text-muted',
    eyebrow: 'font-body text-sm font-semibold tracking-wider uppercase text-secondary',
  };

  const Component = as || (
    variant === 'body' ? 'p' : 
    variant === 'small' ? 'span' : 
    variant === 'eyebrow' ? 'span' : 
    variant
  ) as React.ElementType;

  return (
    <Component id={id} className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};
