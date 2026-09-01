import React from 'react';
import Link from 'next/link';
import { Typography } from '../atoms/Typography';

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
      className={`group relative py-2 ${isActive ? 'text-primary font-medium' : 'text-text-muted hover:text-primary transition-colors'}`}
    >
      <Typography variant="body" className="!text-inherit">
        {label}
      </Typography>
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
    </Link>
  );
};
