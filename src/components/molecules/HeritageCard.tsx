import React from 'react';
import Link from 'next/link';
import { Typography } from '../atoms/Typography';
import { Image } from '../atoms/Image';
import { Icon } from '../atoms/Icon';
import { HeritageSite } from '../../types/heritage';

interface HeritageCardProps {
  site: HeritageSite;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({ site }) => {
  return (
    <Link href={`/heritage#${site.slug}`} className="group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={site.image} 
          alt={site.imageAlt} 
          fill 
          className="transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {site.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-text-muted mb-2 space-x-1">
          <Icon name="location" size={14} />
          <Typography variant="small">{site.location}</Typography>
        </div>
        <Typography variant="h4" className="mb-3 group-hover:text-primary transition-colors">
          {site.name}
        </Typography>
        <Typography variant="body" className="mb-6 flex-grow line-clamp-3 text-text-muted text-sm md:text-base">
          {site.shortDescription}
        </Typography>
        <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:underline">
          <span>Explore</span>
          <Icon name="arrow-right" size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};
