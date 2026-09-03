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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/heritage', label: 'Explore Heritage' },
    { href: '/about', label: 'About Pangasinan' },
  ];

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 mx-auto max-w-6xl px-4 sm:px-6 z-50 transition-all duration-300">
      <div 
        className={`glass-pill rounded-full px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 flex items-center justify-between border ${
          isScrolled 
            ? 'shadow-card border-gray-200/80 bg-white/95' 
            : 'shadow-subtle border-white/70 bg-white/85'
        }`}
      >
        {/* Brand Logo with Coastal Glyphs */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-accent shadow-subtle group-hover:scale-105 transition-transform duration-200">
            <span className="font-display font-bold text-xs tracking-tight text-accent">P</span>
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-primary leading-none">
              Pangasinan
            </span>
            <span className="text-[9px] uppercase tracking-widest text-accent font-semibold leading-none mt-0.5">
              Heritage Showcase
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1.5">
          {navLinks.map((link) => (
            <NavigationItem 
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </nav>

        {/* Quick Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <Link
            href="/heritage"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary hover:bg-primary-light text-white shadow-subtle transition-all duration-200 hover:shadow-md"
          >
            <span>Plan Trip</span>
            <Icon name="arrow-up-right" size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full text-primary hover:bg-black/5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 glass-card rounded-2xl shadow-elevated border border-white/60 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavigationItem 
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link
                href="/heritage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary text-white shadow-subtle"
              >
                <span>Explore All Landmarks</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
