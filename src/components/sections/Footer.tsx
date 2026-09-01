import React from 'react';
import Link from 'next/link';
import { Typography } from '../atoms/Typography';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-6 mt-auto">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <Typography variant="h3" className="!text-white mb-4">
              Pangasinan
            </Typography>
            <Typography variant="body" className="!text-white/80 max-w-md">
              Explore Pangasinan&apos;s heritage, culture, natural attractions, and historical destinations. A showcase of the province&apos;s enduring beauty.
            </Typography>
          </div>
          
          <div className="md:justify-self-end">
            <Typography variant="eyebrow" className="!text-white/60 mb-6 block">
              Navigation
            </Typography>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/90 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/heritage" className="text-white/90 hover:text-accent transition-colors">Explore Heritage</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-accent transition-colors">About Pangasinan</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Typography variant="small" className="!text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} Pangasinan Heritage Digital Showcase. Educational Project.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
