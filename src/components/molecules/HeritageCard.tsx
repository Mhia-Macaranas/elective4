'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Image } from '../atoms/Image';
import { Icon } from '../atoms/Icon';
import { HeritageSite } from '../../types/heritage';

interface HeritageCardProps {
  site: HeritageSite;
  onSelect?: (site: HeritageSite) => void;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({ site, onSelect }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(site);
    }
  };

  return (
    <article 
      onClick={handleClick}
      className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-gray-200/80 hover:border-accent/50 cursor-pointer"
    >
      {/* Image Container with Ambient Gradient and Zoom Effect */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-primary/10">
        <Image 
          src={site.image} 
          alt={site.imageAlt} 
          fill 
          className="transition-transform duration-700 ease-out group-hover:scale-105" 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Pill with Solid High-Contrast White Background */}
        <div className="absolute top-3.5 left-3.5 flex gap-2">
          <span className="bg-white text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md border border-gray-100">
            {site.category}
          </span>
        </div>

        {/* Municipality Pill with High-Contrast Dark Backdrop */}
        <div className="absolute top-3.5 right-3.5">
          <span className="bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-white/20">
            {site.municipality}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-secondary mb-2 space-x-1.5">
          <Icon name="location" size={15} />
          <span className="font-semibold text-secondary text-xs tracking-wide">
            {site.location}
          </span>
        </div>

        <Typography variant="h3" className="text-xl font-bold mb-1.5 text-primary group-hover:text-secondary transition-colors duration-200">
          {site.name}
        </Typography>

        {site.tagline && (
          <p className="text-xs italic text-accent font-display mb-3 font-semibold">
            {site.tagline}
          </p>
        )}

        <Typography variant="body" className="mb-6 flex-grow line-clamp-3 text-text-muted text-sm leading-relaxed">
          {site.shortDescription}
        </Typography>

        {/* Card Footer with Clear Action */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-medium text-text-muted">
            {site.bestTime ? 'Best in dry season' : 'Open year-round'}
          </span>
          <div className="inline-flex items-center space-x-1 text-primary font-bold text-sm group-hover:text-accent transition-colors duration-200">
            <span>Discover Story</span>
            <Icon name="arrow-up-right" size={15} className="transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </article>
  );
};
