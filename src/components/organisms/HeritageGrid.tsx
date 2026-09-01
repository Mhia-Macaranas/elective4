import React from 'react';
import { HeritageCard } from '../molecules/HeritageCard';
import { HeritageSite } from '../../types/heritage';
import { Typography } from '../atoms/Typography';

interface HeritageGridProps {
  sites: HeritageSite[];
  emptyMessage?: string;
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({ 
  sites, 
  emptyMessage = 'No destinations found.' 
}) => {
  if (!sites || sites.length === 0) {
    return (
      <div className="py-12 text-center">
        <Typography variant="body" className="text-text-muted">
          {emptyMessage}
        </Typography>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sites.map((site) => (
        <HeritageCard key={site.id} site={site} />
      ))}
    </div>
  );
};
