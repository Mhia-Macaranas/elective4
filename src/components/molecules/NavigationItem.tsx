import React from 'react';
import Link from 'next/link';

interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ href, label, isActive, onClick }) => {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
        isActive 
          ? 'text-primary bg-accent-light/60 font-semibold shadow-subtle' 
          : 'text-text-muted hover:text-primary hover:bg-black/5'
      }`}
    >
      {label}
    </Link>
  );
};
