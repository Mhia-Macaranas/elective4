import React from 'react';
import Link from 'next/link';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-10 px-6 mt-auto border-t border-primary-light">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold font-display text-xs">
                P
              </span>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Pangasinan
              </span>
            </div>
            <Typography variant="body" className="!text-white/70 text-sm leading-relaxed">
              A curated digital exhibition celebrating the coastal horizons, historic stone sanctuaries, and living traditions of Pangasinan province.
            </Typography>
            <div className="flex items-center space-x-2 text-xs text-accent pt-1">
              <Icon name="sparkle" size={14} />
              <span className="font-medium tracking-wide">Panag-ASIN-an &bull; Place of Salt</span>
            </div>
          </div>
          
          {/* Col 2: Navigation */}
          <div>
            <Typography variant="eyebrow" className="!text-accent mb-4 block text-xs tracking-widest uppercase font-semibold">
              Explore Showcase
            </Typography>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  Home & Highlights
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="text-white/80 hover:text-accent transition-colors">
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Pangasinan & History
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Iconic Landmarks */}
          <div>
            <Typography variant="eyebrow" className="!text-accent mb-4 block text-xs tracking-widest uppercase font-semibold">
              Treasured Sites
            </Typography>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/heritage#hundred-islands" className="text-white/80 hover:text-accent transition-colors">
                  Hundred Islands (Alaminos)
                </Link>
              </li>
              <li>
                <Link href="/heritage#bolinao-lighthouse" className="text-white/80 hover:text-accent transition-colors">
                  Cape Bolinao Lighthouse (Bolinao)
                </Link>
              </li>
              <li>
                <Link href="/heritage#minor-basilica-of-our-lady-of-manaoag" className="text-white/80 hover:text-accent transition-colors">
                  Minor Basilica (Manaoag)
                </Link>
              </li>
              <li>
                <Link href="/heritage#patar-white-beach" className="text-white/80 hover:text-accent transition-colors">
                  Patar White Beach (Bolinao)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 space-y-2 sm:space-y-0">
          <p>
            &copy; {currentYear} Pangasinan Heritage Digital Showcase. Preserving the culture, history, and natural wonders of Pangasinan.
          </p>
          <div className="text-white/50 text-[11px]">
            Tourism & Cultural Showcase
          </div>
        </div>
      </div>
    </footer>
  );
};
