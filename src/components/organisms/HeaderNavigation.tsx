'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '../molecules/NavigationItem';
import { Icon } from '../atoms/Icon';

export const HeaderNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/heritage', label: 'Explore' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <span className={`font-display font-bold text-2xl tracking-wide ${isScrolled || isMobileMenuOpen ? 'text-primary' : (pathname === '/' ? 'text-white drop-shadow-md' : 'text-primary')}`}>
              Pangasinan
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavigationItem 
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden relative z-10 p-2 focus:outline-none ${isScrolled || isMobileMenuOpen ? 'text-text' : (pathname === '/' ? 'text-white' : 'text-text')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavigationItem 
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
