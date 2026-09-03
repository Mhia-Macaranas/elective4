'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import { HeritageModal } from '@/components/molecules/HeritageModal';
import { heritageSites } from '@/data/heritageSites';
import { HeritageSite } from '@/types/heritage';

export default function HeritagePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('All');
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);

  const categories = ['All', 'Nature', 'Heritage', 'Landmarks'];
  const municipalities = ['All', 'Alaminos', 'Bolinao', 'Balungao', 'Manaoag'];

  // Handle URL hash on load (e.g. /heritage#hundred-islands)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const slug = window.location.hash.replace('#', '');
      const matched = heritageSites.find(s => s.slug === slug);
      if (matched) {
        setSelectedSite(matched);
      }
    }
  }, []);

  const filteredSites = useMemo(() => {
    return heritageSites.filter(site => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        site.name.toLowerCase().includes(query) || 
        site.location.toLowerCase().includes(query) ||
        site.municipality.toLowerCase().includes(query) ||
        site.description.toLowerCase().includes(query);
      
      const matchesCategory = activeCategory === 'All' || site.category === activeCategory;
      const matchesMunicipality = selectedMunicipality === 'All' || site.municipality === selectedMunicipality;

      return matchesSearch && matchesCategory && matchesMunicipality;
    });
  }, [searchQuery, activeCategory, selectedMunicipality]);

  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      {/* 1. Page Header & Explorer Controls */}
      <section className="pt-8 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-secondary text-xs uppercase font-bold tracking-widest">
            <Icon name="compass" size={16} />
            <span>Interactive Province Directory</span>
          </div>

          <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-display text-primary">
            Explore Pangasinan Heritage
          </Typography>

          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Search our curated archive of natural wonders, historic baroque sanctuaries, and coastal destinations across the province.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <span className="absolute left-4 text-text-muted">
                <Icon name="search" size={20} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by landmark name, municipality, or keyword..."
                className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-gray-200/90 shadow-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm sm:text-base text-text transition-all"
                aria-label="Search destinations"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-text-muted hover:text-primary p-1"
                  aria-label="Clear search input"
                >
                  <Icon name="close" size={18} />
                </button>
              )}
            </div>
          </div>
          
          {/* Dual Filtering Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeCategory === category 
                      ? 'bg-primary text-white shadow-subtle' 
                      : 'bg-white text-text-muted border border-gray-200/80 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Municipality Dropdown */}
            <div className="relative">
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white text-text border border-gray-200/80 shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent appearance-none pr-8 cursor-pointer"
                aria-label="Filter by municipality"
              >
                {municipalities.map(mun => (
                  <option key={mun} value={mun}>
                    {mun === 'All' ? 'All Towns & Municipalities' : mun}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                &darr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Destination Grid Showcase */}
      <section className="px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Results Summary Bar */}
          <div className="mb-8 pb-4 border-b border-gray-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-text-muted">
            <span className="font-medium">
              Showing <strong className="text-primary">{filteredSites.length}</strong> of {heritageSites.length} registered provincial destinations
            </span>
            {(searchQuery || activeCategory !== 'All' || selectedMunicipality !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setSelectedMunicipality('All');
                }}
                className="text-accent hover:underline font-semibold self-start sm:self-auto"
              >
                Reset All Filters
              </button>
            )}
          </div>
          
          <HeritageGrid 
            sites={filteredSites} 
            onSelectSite={(site) => setSelectedSite(site)}
            emptyMessage="No landmarks match your search query or selected filters. Try searching for 'Islands', 'Church', or resetting your filters."
          />
        </div>
      </section>

      {/* Interactive Detail Modal */}
      <HeritageModal 
        site={selectedSite} 
        isOpen={!!selectedSite} 
        onClose={() => setSelectedSite(null)} 
      />
    </div>
  );
}
