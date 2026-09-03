import React from 'react';
import { HeritageCard } from '../molecules/HeritageCard';
import { HeritageSite } from '../../types/heritage';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

interface HeritageGridProps {
  sites: HeritageSite[];
  emptyMessage?: string;
  onSelectSite?: (site: HeritageSite) => void;
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({ 
  sites, 
  emptyMessage = 'No destinations found.',
  onSelectSite
}) => {
  if (sites.length === 0) {
    return (
      <div className="text-center py-20 px-6 bg-surface-muted/60 rounded-2xl border border-dashed border-gray-300 max-w-xl mx-auto my-8">
        <div className="w-12 h-12 rounded-full bg-accent-light text-accent flex items-center justify-center mx-auto mb-4">
          <Icon name="search" size={24} />
        </div>
        <Typography variant="h3" className="text-xl mb-2 text-primary">
          No Landmarks Found
        </Typography>
        <Typography variant="body" className="text-text-muted text-sm max-w-md mx-auto">
          {emptyMessage}
        </Typography>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sites.map((site) => (
        <HeritageCard 
          key={site.id} 
          site={site} 
          onSelect={onSelectSite}
        />
      ))}
    </div>
  );
};
