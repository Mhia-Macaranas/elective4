import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Image } from '@/components/atoms/Image';
import { Button } from '@/components/atoms/Button';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Intro Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-hero.jpg" 
            alt="Coastal view of Pangasinan" 
            fill 
            priority
            className="object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <Typography variant="eyebrow" className="!text-white mb-4 block tracking-widest">
            Our Story
          </Typography>
          <Typography variant="h1" className="!text-white drop-shadow-md mb-6">
            About Pangasinan
          </Typography>
          <Typography variant="body" className="!text-white/90 max-w-2xl mx-auto text-lg drop-shadow-sm">
            A province defined by its vast coastlines, historic towns, and enduring cultural heritage.
          </Typography>
        </div>
      </section>

      {/* Province Story */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <Typography variant="eyebrow" className="mb-4 block">
            The Name
          </Typography>
          <Typography variant="h2" className="mb-8">
            Land of Salt
          </Typography>
          <Typography variant="body" className="text-text-muted mb-6 text-lg">
            The name &quot;Pangasinan&quot; is derived from the root word &quot;asin&quot; (salt), translating to &quot;place of salt-making.&quot; This reflects the province&apos;s historical role as a major producer of salt along its extensive coastal areas.
          </Typography>
          <Typography variant="body" className="text-text-muted text-lg">
            Today, Pangasinan is much more than its coastal industries. It is a vibrant crescent-shaped province that serves as a gateway to Northern Luzon, offering a rich tapestry of language, food, and historical significance.
          </Typography>
        </div>
      </section>

      {/* Landscape / Culture */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/manaoag-church.jpg" 
                alt="Manaoag Church" 
                fill 
              />
            </div>
            
            <div className="order-1 md:order-2">
              <Typography variant="eyebrow" className="mb-4 block">
                Faith & Architecture
              </Typography>
              <Typography variant="h3" className="mb-6">
                Enduring Landmarks
              </Typography>
              <Typography variant="body" className="text-text-muted mb-6">
                The province is home to numerous colonial-era churches and heritage structures that have stood the test of time. From the ancient coral stone walls of St. James the Great Parish in Bolinao to the revered shrines in Manaoag, these landmarks are central to the Pangasinense identity.
              </Typography>
              <Typography variant="body" className="text-text-muted">
                These structures not only serve as places of worship but also as architectural testaments to the centuries of history that have shaped the region.
              </Typography>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <Typography variant="eyebrow" className="mb-4 block">
                Natural Wonders
              </Typography>
              <Typography variant="h3" className="mb-6">
                Coastal & Inland Beauty
              </Typography>
              <Typography variant="body" className="text-text-muted mb-6">
                Pangasinan boasts an incredibly diverse landscape. The western coast features stunning white sand beaches and dramatic limestone cliffs, while the central and eastern portions offer rolling hills, agricultural plains, and therapeutic natural springs.
              </Typography>
              <Typography variant="body" className="text-text-muted">
                This diverse geography provides a wide array of natural attractions, making the province a premier destination for nature lovers and adventurers alike.
              </Typography>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/patar-beach.jpg" 
                alt="Patar Beach" 
                fill 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore CTA */}
      <section className="py-24 px-6 bg-primary text-center">
        <div className="container mx-auto max-w-2xl">
          <Typography variant="h2" className="!text-white mb-6">
            Start exploring Pangasinan
          </Typography>
          <Typography variant="body" className="!text-white/80 mb-10 text-lg">
            Ready to discover these destinations for yourself? Browse our collection of heritage sites and natural wonders.
          </Typography>
          <Button href="/heritage" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
            View Heritage Sites
          </Button>
        </div>
      </section>
    </div>
  );
}
