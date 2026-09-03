import React from 'react';
import Link from 'next/link';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-20 pb-12 px-6 mt-auto border-t border-primary-light">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-primary font-bold font-display text-sm">
                P
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Pangasinan
              </span>
            </div>
            <Typography variant="body" className="!text-white/70 text-sm leading-relaxed">
              A curated digital exhibition celebrating the rich coastal horizons, historic stone sanctuaries, and vibrant living traditions of Pangasinan province.
            </Typography>
            <div className="pt-2 flex items-center space-x-2 text-xs text-accent">
              <Icon name="sparkle" size={16} />
              <span className="font-medium tracking-wide">Panag-ASIN-an &bull; Place of Salt</span>
            </div>
          </div>
          
          {/* Col 2: Navigation */}
          <div>
            <Typography variant="eyebrow" className="!text-accent mb-5 block text-xs tracking-widest uppercase">
              Explore Showcase
            </Typography>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>Home & Highlights</span>
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="text-white/80 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>Heritage Destinations</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>About Pangasinan & History</span>
                </Link>
              </li>
              <li>
                <Link href="/heritage?category=Nature" className="text-white/80 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>Islands & Nature Parks</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Iconic Landmarks */}
          <div>
            <Typography variant="eyebrow" className="!text-accent mb-5 block text-xs tracking-widest uppercase">
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

          {/* Col 4: Cultural Fact / Academic Note */}
          <div className="p-6 rounded-2xl bg-primary-light/40 border border-white/10 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-accent flex items-center space-x-1.5">
              <Icon name="info" size={15} />
              <span>Heritage Fact</span>
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Pangasinan is the 3rd largest province in the Philippines, stretching across 5,451 sq km with 44 coastal and river towns and 3 chartered cities.
            </p>
            <div className="pt-2 border-t border-white/10 text-[11px] text-white/50">
              Elective 4: Special Topics in IT &bull; Academic Showcase
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 space-y-3 sm:space-y-0">
          <p>
            &copy; {currentYear} Pangasinan Heritage Digital Showcase. Developed for Educational Tourism Demonstration.
          </p>
          <div className="flex items-center space-x-6 text-white/70">
            <span>Next.js 14 App Router</span>
            <span>&bull;</span>
            <span>Atomic Design System</span>
            <span>&bull;</span>
            <span>Accessibility (WCAG AA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
