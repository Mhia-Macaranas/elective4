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
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-20 px-6">
        {/* Background Image with Ambient Gradient */}
        <div className="absolute inset-0 z-0 bg-primary">
          <Image 
            src="/images/hero.jpg" 
            alt="Scenic coastline of Pangasinan with emerald islets" 
            fill 
            priority
            className="object-center scale-105 transition-transform duration-1000"
          />
          {/* Subtle multi-layer gradient for pristine typography readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-primary" />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          {/* Live Status Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-accent-light text-xs sm:text-sm font-medium mb-6 shadow-subtle animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Pangasinan &bull; Gateway to Northern Luzon &bull; West Philippine Sea</span>
          </div>

          <Typography 
            variant="h1" 
            className="!text-white mb-6 max-w-4xl mx-auto drop-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-tight"
          >
            Where <span className="italic text-accent-light font-normal">Heritage</span> Meets the West Philippine Sea
          </Typography>

          <Typography 
            variant="body" 
            className="!text-white/90 mb-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-body leading-relaxed drop-shadow-sm text-balance"
          >
            Discover an archipelago province defined by 124 ancient coral islets, four centuries of baroque stone sanctuaries, and an enduring legacy of sea salt.
          </Typography>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/heritage" variant="primary" className="w-full sm:w-auto !bg-accent hover:!bg-accent/90 !text-primary font-bold shadow-elevated">
              <span>Start Exploring Landmarks</span>
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
            <Button href="/about" variant="outline" className="w-full sm:w-auto !border-white/60 !text-white hover:!bg-white/20 backdrop-blur-sm">
              <span>Read Province Story</span>
            </Button>
          </div>

          {/* Quick Filter Jump Tags */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-white/80">
            <span className="text-accent uppercase tracking-wider font-semibold mr-1">Trending Destinations:</span>
            {['Hundred Islands', 'Cape Bolinao', 'Manaoag Basilica', 'Balungao Springs', 'Patar Beach'].map((name) => (
              <Link
                key={name}
                href="/heritage"
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROVINCE STATS & IMPACT RIBBON */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl shadow-elevated p-6 sm:p-8 border border-white/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 p-2">
              <span className="text-3xl sm:text-4xl font-display font-bold text-primary block">
                124
              </span>
              <span className="text-xs sm:text-sm font-medium text-text-muted">
                Coral Islets & Coves
              </span>
            </div>

            <div className="space-y-1 p-2 border-l border-gray-200/80">
              <span className="text-3xl sm:text-4xl font-display font-bold text-primary block">
                44
              </span>
              <span className="text-xs sm:text-sm font-medium text-text-muted">
                Historic Towns & 3 Cities
              </span>
            </div>

            <div className="space-y-1 p-2 border-l-0 md:border-l border-gray-200/80">
              <span className="text-3xl sm:text-4xl font-display font-bold text-primary block">
                400+
              </span>
              <span className="text-xs sm:text-sm font-medium text-text-muted">
                Years of Baroque Faith
              </span>
            </div>

            <div className="space-y-1 p-2 border-l border-gray-200/80">
              <span className="text-3xl sm:text-4xl font-display font-bold text-accent block">
                Panag-asinan
              </span>
              <span className="text-xs sm:text-sm font-medium text-text-muted">
                Place of Handcrafted Salt
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs uppercase font-bold tracking-widest mb-3">
                <Icon name="sparkle" size={16} />
                <span>Curated Heritage Collection</span>
              </div>
              <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
                Treasures of Pangasinan
              </Typography>
            </div>
            <p className="text-text-muted max-w-md text-sm leading-relaxed">
              From limestone sea cliffs to centuries-old Dominican sanctuaries, each landmark reveals a distinct chapter of our province&apos;s story.
            </p>
          </div>
          
          <HeritageGrid 
            sites={featuredSites} 
            onSelectSite={(site) => setSelectedSite(site)}
          />
          
          <div className="mt-16 text-center">
            <Button href="/heritage" variant="outline" className="px-8 py-3.5 shadow-subtle hover:shadow-md">
              <span>View All 6 Destinations & Detailed Guides</span>
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. CURATED HERITAGE TRAILS (INTERACTIVE SECTION) */}
      <section className="py-24 px-6 bg-surface border-y border-gray-200/60">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-3">
              Curated Itineraries
            </span>
            <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display mb-4">
              Explore By Heritage Trail
            </Typography>
            <p className="text-text-muted text-sm sm:text-base">
              Choose your travel style to explore tailored routes designed around marine wonders, spiritual pilgrimage, or relaxing inland thermal springs.
            </p>

            {/* Trail Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-full bg-surface-muted border border-gray-200/80 mt-8 max-w-full overflow-x-auto">
              {(Object.keys(trails) as Array<keyof typeof trails>).map((trailKey) => {
                const trail = trails[trailKey];
                const isActive = activeTrail === trailKey;
                return (
                  <button
                    key={trailKey}
                    onClick={() => setActiveTrail(trailKey)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
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
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-gray-200/70 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1 space-y-5">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-light text-primary inline-block">
                  {trails[activeTrail].badge} &bull; {trails[activeTrail].duration}
                </span>
                <Typography variant="h3" className="text-2xl sm:text-3xl text-primary font-display">
                  {trails[activeTrail].title}
                </Typography>
                <p className="text-text-muted text-sm leading-relaxed">
                  {trails[activeTrail].description}
                </p>

                <div className="pt-2 space-y-2 border-t border-gray-100">
                  <span className="text-xs uppercase font-semibold text-text-muted tracking-wider block">
                    Featured Stops On This Trail:
                  </span>
                  {trails[activeTrail].stops.map((stop, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-text font-medium">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                        {idx + 1}
                      </span>
                      <span>{stop}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/heritage"
                    className="inline-flex items-center space-x-2 text-primary font-bold text-sm hover:text-secondary transition-colors"
                  >
                    <span>Explore destinations on this trail</span>
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </div>
              </div>

              {/* Trail Highlight Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trails[activeTrail].sites.map((site) => (
                  <div 
                    key={site.id} 
                    onClick={() => setSelectedSite(site)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-subtle border border-gray-200/70 hover:shadow-card cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
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
                    <div className="p-4 space-y-1.5">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Photo Column */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[420px] sm:h-[550px] w-full rounded-3xl overflow-hidden shadow-elevated border border-white/60">
                <Image 
                  src="/images/hundred-islands.jpg" 
                  alt="Hundred Islands National Park vista" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Fact Card */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-8 sm:-right-6 glass-card p-5 rounded-2xl shadow-elevated max-w-xs border border-white/80">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-accent-light text-accent">
                    <Icon name="waves" size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary block">
                      Ancient Coral Bed
                    </span>
                    <p className="text-xs text-text-muted">
                      Elevated coral limestone formed over 2 million years ago during the Pleistocene epoch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Story Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2 text-secondary text-xs uppercase font-bold tracking-widest">
                <Icon name="compass" size={16} />
                <span>Spotlight Destination</span>
              </div>

              <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display leading-tight">
                Hundred Islands: Nature&apos;s Coral Labyrinth
              </Typography>

              <Typography variant="body" className="text-text-muted text-base leading-relaxed">
                Scattered like emerald jewels across the turquoise expanse of the Lingayen Gulf, the Hundred Islands National Park comprises 124 islands during low tide. 
              </Typography>

              <p className="text-text-muted text-sm leading-relaxed">
                A sanctuary for marine life and sea caves, each islet features distinct mushroom-shaped undercuts sculpted by centuries of crashing tidal waves. Climb to the Governors Island viewpoint for an unforgettable 360-degree panorama of the Philippine Sea.
              </p>

              {/* Key Amenities */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-text font-medium">
                <div className="flex items-center space-x-2">
                  <Icon name="check" size={16} className="text-accent" />
                  <span>Island-to-Island Zipline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="check" size={16} className="text-accent" />
                  <span>Giant Clam Sanctuary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="check" size={16} className="text-accent" />
                  <span>Sea Cave Spelunking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="check" size={16} className="text-accent" />
                  <span>Lucap Motorized Bancas</span>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => {
                    const site = heritageSites.find(s => s.slug === 'hundred-islands');
                    if (site) setSelectedSite(site);
                  }}
                  variant="primary"
                  className="shadow-subtle"
                >
                  <span>Open Full Destination Guide</span>
                  <Icon name="arrow-right" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CULTURAL CHRONICLE: "THE SOUL OF ASIN" */}
      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-accent text-xs uppercase font-bold tracking-widest">
                <Icon name="sparkle" size={16} />
                <span>Identity & Living Heritage</span>
              </div>

              <Typography variant="h2" className="!text-white text-3xl sm:text-4xl lg:text-5xl font-display leading-tight">
                The Soul of <span className="text-accent italic font-normal">Panag-asinan</span>
              </Typography>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-body">
                The name Pangasinan literally means <em className="text-accent-light not-italic font-semibold">&ldquo;the place where salt is made.&rdquo;</em> Long before modern industries, coastal families perfected solar evaporation along the tidal beds of Dasol and Infanta, harvesting coarse sea salt that sustained trade across Northern Luzon.
              </p>

              <p className="text-white/70 text-sm leading-relaxed">
                This resilience extends to local artisanal crafts—from handwoven buri baskets and bamboo furniture in San Carlos to culinary treasures like Dagupan&apos;s world-famous milkfish (Bangus), Calasiao&apos;s bite-sized steamed rice cakes (Puto), and Alaminos longganisa.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-accent text-primary font-bold text-sm hover:bg-accent-light transition-colors shadow-elevated"
                >
                  <span>Discover Province History</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>

            {/* Cultural Imagery */}
            <div className="relative">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-white/20">
                <Image 
                  src="/images/culture.jpg" 
                  alt="Artisanal Pangasinan weaver creating traditional native textiles" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-white/60 italic">
                  Living craftsmanship: Traditional loom weaving and coastal heritage in Pangasinan.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOURNEY INSPIRATION CTA */}
      <section className="py-24 px-6 bg-background text-center relative">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-card rounded-3xl p-10 sm:p-16 border border-gray-200/80 shadow-card space-y-6">
            <span className="w-12 h-12 rounded-full bg-accent-light text-accent flex items-center justify-center mx-auto mb-2">
              <Icon name="compass" size={24} />
            </span>

            <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
              Ready to Experience Pangasinan?
            </Typography>

            <Typography variant="body" className="text-text-muted text-base max-w-xl mx-auto leading-relaxed">
              Explore the complete directory of landmarks with interactive travel notes, seasonal tips, and historical profiles.
            </Typography>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/heritage" variant="primary" className="w-full sm:w-auto px-8 py-3.5 shadow-subtle">
                Browse All Destinations
              </Button>
              <Button href="/about" variant="outline" className="w-full sm:w-auto px-8 py-3.5">
                Learn Historical Background
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
