'use client';

import React, { useState, useMemo } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { SearchForm } from '@/components/molecules/SearchForm';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/data/heritageSites';

export default function HeritagePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Nature', 'Heritage', 'Culture', 'Landmarks'];

  const filteredSites = useMemo(() => {
    return heritageSites.filter(site => {
      const matchesSearch = 
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.municipality.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || site.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-12 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Typography variant="h1" className="mb-6">
            Explore Pangasinan
          </Typography>
          <Typography variant="body" className="text-text-muted mb-10 text-lg">
            Discover a curated collection of cultural landmarks, natural destinations, and heritage sites across the province.
          </Typography>
          
          <SearchForm 
            onSearch={setSearchQuery} 
            placeholder="Search destinations by name or location..." 
          />
          
          {/* Subtle Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-text-muted border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6 flex justify-between items-center">
            <Typography variant="body" className="text-text-muted text-sm font-medium">
              Showing {filteredSites.length} destination{filteredSites.length !== 1 ? 's' : ''}
            </Typography>
          </div>
          
          <HeritageGrid 
            sites={filteredSites} 
            emptyMessage="No destinations found matching your criteria. Try another search or category."
          />
        </div>
      </section>
    </div>
  );
}
