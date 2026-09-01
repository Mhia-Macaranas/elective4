import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Image } from '@/components/atoms/Image';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/data/heritageSites';

export default function Home() {
  const featuredSites = heritageSites.filter(site => site.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpg" 
            alt="Beautiful Pangasinan landscape" 
            fill 
            priority
            className="object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Typography variant="eyebrow" className="!text-white mb-4 block tracking-widest drop-shadow-md">
            Pangasinan, Philippines
          </Typography>
          <Typography variant="h1" className="!text-white mb-6 max-w-4xl mx-auto drop-shadow-lg">
            Where Heritage Meets the Sea
          </Typography>
          <Typography variant="body" className="!text-white/90 mb-10 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
            Discover a province rich in history, blessed with natural wonders, and defined by its resilient culture.
          </Typography>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/heritage" variant="primary" className="w-full sm:w-auto">
              Explore Pangasinan
            </Button>
            <Button href="/about" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-primary">
              Discover Heritage
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              Places Worth Discovering
            </Typography>
            <Typography variant="body" className="text-text-muted max-w-2xl mx-auto">
              From pristine coastlines to centuries-old colonial churches, explore some of our most treasured landmarks.
            </Typography>
          </div>
          
          <HeritageGrid sites={featuredSites} />
          
          <div className="mt-16 text-center">
            <Button href="/heritage" variant="outline">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Editorial Feature */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/hundred-islands.jpg" 
                alt="Hundred Islands National Park"
                fill
              />
            </div>
            <div className="w-full md:w-1/2">
              <Typography variant="eyebrow" className="mb-4 block">
                Featured Landmark
              </Typography>
              <Typography variant="h2" className="mb-6">
                Hundred Islands
              </Typography>
              <Typography variant="body" className="text-text-muted mb-8">
                Scattered across the Lingayen Gulf, the Hundred Islands National Park comprises 124 islands at low tide. Believed to be millions of years old, these ancient coral reefs offer a breathtaking maze of limestone islands topped with lush vegetation, surrounded by clear waters perfect for exploration.
              </Typography>
              <Button href="/heritage#hundred-islands">
                Explore Destination
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 md:py-32 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <Typography variant="eyebrow" className="!text-accent mb-4 block">
            Identity & Tradition
          </Typography>
          <Typography variant="h2" className="!text-white mb-8 max-w-3xl mx-auto">
            More Than a Destination
          </Typography>
          <Typography variant="body" className="!text-white/80 max-w-2xl mx-auto mb-16 text-lg">
            Pangasinan&apos;s identity is shaped by its people—warm, resilient, and deeply connected to both land and sea. Our heritage is alive in our crafts, our faith, and our enduring traditions.
          </Typography>
          
          <div className="relative h-[300px] md:h-[500px] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="/images/culture.jpg" 
              alt="Pangasinan Culture"
              fill
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-background text-center">
        <div className="container mx-auto max-w-3xl">
          <Typography variant="h3" className="mb-6">
            Ready to begin your journey?
          </Typography>
          <Typography variant="body" className="text-text-muted mb-8">
            Start exploring the natural wonders and historical landmarks that make Pangasinan truly unique.
          </Typography>
          <Button href="/heritage" variant="primary">
            Explore Heritage Sites
          </Button>
        </div>
      </section>
    </div>
  );
}
