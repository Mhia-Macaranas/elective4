'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Image } from '@/components/atoms/Image';
import { Icon } from '@/components/atoms/Icon';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import { HeritageModal } from '@/components/molecules/HeritageModal';
import { heritageSites } from '@/data/heritageSites';
import { HeritageSite } from '@/types/heritage';

export default function Home() {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const [activeTrail, setActiveTrail] = useState<'coastal' | 'pilgrim' | 'nature'>('coastal');

  const featuredSites = heritageSites.filter(site => site.featured).slice(0, 3);

  const trails = {
    coastal: {
      title: 'The Coastal Odyssey',
      duration: '2 to 3 Days',
      badge: 'Marine & Coastlines',
      description: 'Hop through ancient limestone islets, walk along golden sand shores, and gaze at sunsets from centuries-old maritime lighthouses.',
      stops: ['Hundred Islands National Park', 'Cape Bolinao Lighthouse', 'Patar White Beach'],
      sites: heritageSites.filter(s => ['hundred-islands', 'bolinao-lighthouse', 'patar-white-beach'].includes(s.slug))
    },
    pilgrim: {
      title: "The Pilgrim's Passage",
      duration: '1 to 2 Days',
      badge: 'Faith & Heritage',
      description: 'Journey through centuries of enduring devotion, visiting revered Marian sanctuaries and 17th-century coral stone fortress churches.',
      stops: ['Minor Basilica of Our Lady of Manaoag', 'St. James the Great Parish Bolinao'],
      sites: heritageSites.filter(s => ['minor-basilica-of-our-lady-of-manaoag', 'st-james-the-great-parish'].includes(s.slug))
    },
    nature: {
      title: 'The Verdant Heartland',
      duration: '1 to 2 Days',
      badge: 'Wellness & Foothills',
      description: 'Soak in therapeutic sulfuric springs beneath an extinct volcano and experience the tranquil agricultural heartland of eastern Pangasinan.',
      stops: ['Balungao Hot Spring & Eco-Trail', 'Eastern Mountain Ridges'],
      sites: heritageSites.filter(s => ['balungao-hot-spring', 'hundred-islands'].includes(s.slug))
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6">
        {/* Background Image with Ambient Gradient */}
        <div className="absolute inset-0 z-0 bg-primary">
          <Image 
            src="/images/hero.jpg" 
            alt="Scenic coastline of Pangasinan with emerald islets" 
            fill 
            priority
            className="object-cover scale-105"
          />
          {/* Subtle multi-layer gradient for gentle atmospheric shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-primary/80" />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-accent-light text-xs font-medium tracking-wider uppercase shadow-subtle animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Pangasinan &bull; West Philippine Sea</span>
          </div>

          <Typography 
            variant="h1" 
            className="!text-white max-w-3xl mx-auto drop-shadow-md text-4xl sm:text-5xl md:text-6xl font-display leading-[1.15] tracking-tight"
          >
            Where <span className="italic text-accent-light font-normal">Heritage</span> Meets the Sea
          </Typography>

          <Typography 
            variant="body" 
            className="!text-white/85 max-w-xl mx-auto text-base sm:text-lg font-body leading-relaxed drop-shadow-sm text-balance"
          >
            Discover an archipelago province defined by 124 ancient coral islets, centuries of baroque stone sanctuaries, and an enduring legacy of sea salt.
          </Typography>

          {/* Clean, Focused Action */}
          <div className="pt-2 flex justify-center">
            <Button 
              href="/heritage" 
              variant="primary" 
              className="!bg-accent hover:!bg-accent/90 !text-primary font-semibold px-8 py-3.5 rounded-full shadow-elevated"
            >
              <span>Explore Destinations</span>
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. PROVINCE STATS & IMPACT RIBBON */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card rounded-2xl shadow-card p-6 sm:p-7 border border-white/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-bold text-primary block">
                124
              </span>
              <span className="text-xs font-medium text-text-muted">
                Coral Islets & Coves
              </span>
            </div>

            <div className="space-y-1 border-l border-gray-200/60">
              <span className="text-3xl sm:text-4xl font-display font-bold text-primary block">
                44
              </span>
              <span className="text-xs font-medium text-text-muted">
                Towns & 3 Cities
              </span>
            </div>

            <div className="space-y-1 border-l-0 md:border-l border-gray-200/60">
              <span className="text-3xl sm:text-4xl font-display font-bold text-primary block">
                400+
              </span>
              <span className="text-xs font-medium text-text-muted">
                Years of Baroque Faith
              </span>
            </div>

            <div className="space-y-1 border-l border-gray-200/60">
              <span className="text-3xl sm:text-4xl font-display font-bold text-accent block">
                Asin
              </span>
              <span className="text-xs font-medium text-text-muted">
                Land of Natural Salt
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs uppercase font-bold tracking-widest mb-2.5">
                <Icon name="sparkle" size={15} />
                <span>Treasured Landmarks</span>
              </div>
              <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
                Featured Destinations
              </Typography>
            </div>
            <p className="text-text-muted max-w-md text-sm leading-relaxed">
              From limestone sea cliffs to centuries-old Dominican sanctuaries, explore the landmarks that define our province.
            </p>
          </div>
          
          <HeritageGrid 
            sites={featuredSites} 
            onSelectSite={(site) => setSelectedSite(site)}
          />
          
          <div className="mt-14 text-center">
            <Link 
              href="/heritage" 
              className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-secondary border-b border-primary/30 hover:border-secondary pb-0.5 transition-colors"
            >
              <span>View all destinations</span>
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CURATED HERITAGE TRAILS (INTERACTIVE SECTION) */}
      <section className="py-24 px-6 bg-surface border-y border-gray-200/60">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest block">
              Curated Itineraries
            </span>
            <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
              Explore By Heritage Trail
            </Typography>
            <p className="text-text-muted text-sm leading-relaxed">
              Select a journey designed around marine wonders, spiritual pilgrimage, or inland thermal springs.
            </p>

            {/* Trail Switcher Tabs */}
            <div className="inline-flex p-1 rounded-full bg-surface-muted border border-gray-200/80 mt-6 max-w-full overflow-x-auto">
              {(Object.keys(trails) as Array<keyof typeof trails>).map((trailKey) => {
                const trail = trails[trailKey];
                const isActive = activeTrail === trailKey;
                return (
                  <button
                    key={trailKey}
                    onClick={() => setActiveTrail(trailKey)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                      isActive 
                        ? 'bg-primary text-white shadow-subtle' 
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {trail.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Trail Showcase Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-gray-200/70 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 space-y-4">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-light text-primary inline-block">
                  {trails[activeTrail].badge} &bull; {trails[activeTrail].duration}
                </span>
                <Typography variant="h3" className="text-2xl font-display text-primary">
                  {trails[activeTrail].title}
                </Typography>
                <p className="text-text-muted text-sm leading-relaxed">
                  {trails[activeTrail].description}
                </p>

                <div className="pt-2 space-y-2 border-t border-gray-100">
                  <span className="text-xs uppercase font-semibold text-text-muted tracking-wider block">
                    Stops On This Trail:
                  </span>
                  {trails[activeTrail].stops.map((stop, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-text font-medium">
                      <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{stop}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trail Highlight Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {trails[activeTrail].sites.map((site) => (
                  <div 
                    key={site.id} 
                    onClick={() => setSelectedSite(site)}
                    className="group bg-white rounded-xl overflow-hidden shadow-subtle border border-gray-200/70 hover:shadow-card cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image 
                        src={site.image} 
                        alt={site.imageAlt} 
                        fill 
                        className="group-hover:scale-105 transition-transform duration-500" 
                        sizes="(max-width: 640px) 100vw, 350px"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-primary backdrop-blur-sm">
                          {site.municipality}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="font-display font-bold text-base text-primary group-hover:text-secondary transition-colors">
                        {site.name}
                      </h4>
                      <p className="text-xs text-text-muted line-clamp-2">
                        {site.shortDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL FEATURE: HUNDRED ISLANDS SPOTLIGHT */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Photo Column */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-card border border-white/60">
                <Image 
                  src="/images/hundred-islands.jpg" 
                  alt="Hundred Islands National Park vista" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Fact Card */}
              <div className="absolute -bottom-5 -right-2 sm:bottom-6 sm:-right-4 glass-card p-4 rounded-xl shadow-card max-w-xs border border-white/80">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent-light text-accent">
                    <Icon name="waves" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary block">
                      Ancient Coral Bed
                    </span>
                    <p className="text-[11px] text-text-muted leading-tight mt-0.5">
                      Elevated coral limestone formed over 2 million years ago during the Pleistocene epoch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Story Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center space-x-2 text-secondary text-xs uppercase font-bold tracking-widest">
                <Icon name="compass" size={15} />
                <span>Spotlight Destination</span>
              </div>

              <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display leading-tight">
                Hundred Islands: Nature&apos;s Coral Labyrinth
              </Typography>

              <Typography variant="body" className="text-text-muted text-sm sm:text-base leading-relaxed">
                Scattered across the turquoise expanse of the Lingayen Gulf, the Hundred Islands National Park comprises 124 islands during low tide. 
              </Typography>

              <p className="text-text-muted text-sm leading-relaxed">
                A sanctuary for marine life and sea caves, each islet features distinct mushroom-shaped undercuts sculpted by centuries of crashing tidal waves. Climb to the Governors Island viewpoint for a 360-degree panorama of the Philippine Sea.
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => {
                    const site = heritageSites.find(s => s.slug === 'hundred-islands');
                    if (site) setSelectedSite(site);
                  }}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group"
                >
                  <span>Read full destination story</span>
                  <Icon name="arrow-right" size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CULTURAL CHRONICLE: "THE SOUL OF ASIN" */}
      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="flex items-center space-x-2 text-accent text-xs uppercase font-bold tracking-widest">
                <Icon name="sparkle" size={15} />
                <span>Identity & Living Heritage</span>
              </div>

              <Typography variant="h2" className="!text-white text-3xl sm:text-4xl font-display leading-tight">
                The Soul of <span className="text-accent italic font-normal">Panag-asinan</span>
              </Typography>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-body">
                The name Pangasinan literally means <em className="text-accent-light not-italic font-semibold">&ldquo;the place where salt is made.&rdquo;</em> Long before modern industries, coastal families perfected solar evaporation along the tidal beds of Dasol and Infanta, harvesting coarse sea salt that sustained trade across Northern Luzon.
              </p>

              <p className="text-white/70 text-sm leading-relaxed">
                This resilience extends to local artisanal crafts—from handwoven buri baskets and bamboo furniture in San Carlos to culinary treasures like Dagupan&apos;s milkfish (Bangus), Calasiao&apos;s steamed rice cakes (Puto), and Alaminos longganisa.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-medium text-sm transition-colors"
                >
                  <span>Learn about our historical milestones</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>

            {/* Cultural Imagery */}
            <div className="relative">
              <div className="relative h-[340px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-card border border-white/15">
                <Image 
                  src="/images/culture.jpg" 
                  alt="Artisanal Pangasinan weaver creating traditional native textiles" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOURNEY INSPIRATION CTA */}
      <section className="py-24 px-6 bg-background text-center relative">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-card rounded-2xl p-8 sm:p-12 border border-gray-200/80 shadow-card space-y-5">
            <Typography variant="h2" className="text-2xl sm:text-3xl text-primary font-display">
              Ready to Experience Pangasinan?
            </Typography>

            <Typography variant="body" className="text-text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Explore the complete directory of landmarks with travel notes, seasonal tips, and historical profiles.
            </Typography>

            <div className="pt-2">
              <Button href="/heritage" variant="primary" className="rounded-full px-8 py-3">
                Browse All Destinations
              </Button>
            </div>
          </div>
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
