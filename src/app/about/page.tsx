import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Image } from '@/components/atoms/Image';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export default function AboutPage() {
  const timelineEvents = [
    {
      era: 'Pre-Colonial Era (c. 1400s)',
      title: 'Kingdom of Caboloan & Maritime Trade',
      badge: 'Ancient Roots',
      description: 'Before Spanish arrival, Pangasinan flourished as Caboloan (land of bolo bamboo), an autonomous kingdom that engaged in vibrant maritime commerce with Chinese, Japanese, and Southeast Asian merchant junks. Regional folklore also celebrates the legend of Princess Urduja, a valiant matriarch warrior who led women archers in defence of the coast.',
    },
    {
      era: 'Spanish Colonial Mission (1572 – 1609)',
      title: 'Coral Stone Bastions & Dominican Faith',
      badge: 'Baroque Heritage',
      description: 'Augustinian friar Juan de Salcedo explored the Lingayen Gulf in 1572. By 1609, missionaries established stone and coral sanctuaries including St. James the Great in Bolinao and the shrine in Manaoag, employing local craftsmanship to construct enduring "Earthquake Baroque" architecture.',
    },
    {
      era: 'World War II (January 1945)',
      title: 'The Historic Lingayen Gulf Landings',
      badge: 'Liberation History',
      description: 'On January 9, 1945, General Douglas MacArthur led the Allied Sixth Army in a monumental amphibious landing across the Lingayen Gulf beachhead, mobilizing 68,000 troops to liberate Northern Luzon and Manila from wartime occupation.',
    },
    {
      era: 'Modern Era (21st Century)',
      title: 'Agro-Tourism & Living Coastal Heritage',
      badge: 'Living Tradition',
      description: 'Today, Pangasinan thrives as the culinary and coastal crown of the Ilocos Region. Protected marine sanctuaries at Hundred Islands, solar salt farms in Dasol, and the world-renowned Bangus industry stand as living testaments to cultural preservation and ecological tourism.',
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. EDITORIAL INTRO HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center pt-28 pb-20 px-6">
        <div className="absolute inset-0 z-0 bg-primary">
          <Image 
            src="/images/about-hero.jpg" 
            alt="Historical coastal heritage of Pangasinan" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-black/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-accent-light text-xs font-semibold uppercase tracking-widest">
            <span>Province Narrative & Heritage</span>
          </div>

          <Typography variant="h1" className="!text-white text-4xl sm:text-5xl md:text-6xl font-display leading-tight drop-shadow-md">
            The Chronicle of <span className="text-accent-light italic font-normal">Pangasinan</span>
          </Typography>

          <Typography variant="body" className="!text-white/90 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-body">
            A fertile crescent where ancient salt beds, turquoise archipelagos, and centuries of devout faith converge into an enduring story.
          </Typography>
        </div>
      </section>

      {/* 2. THE ORIGIN: "PANAG-ASIN-AN" */}
      <section className="py-24 px-6 bg-surface border-b border-gray-200/60">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <span className="text-accent text-xs uppercase font-bold tracking-widest block">
            Etymology & Identity
          </span>
          <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
            The Land Where Salt Is Made
          </Typography>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            The name <strong className="text-primary font-semibold">Pangasinan</strong> originates from the root prefix <em className="text-primary italic">panag-</em> and noun <em className="text-primary italic">asin</em>, directly translating to <strong className="text-accent">&ldquo;the place of salt-making.&rdquo;</strong>
          </p>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Along the shallow, sun-drenched coastal shallows of Dasol, Infanta, and Lingayen, generation after generation of <span className="text-primary font-medium">asinero</span> families channeled sea water into pristine earthen clay crystallizers. Using only the northern sun and coastal breezes, they harvested glistening mineral salt that seasoned the dishes of the entire Philippine archipelago.
          </p>
        </div>
      </section>

      {/* 3. HISTORICAL TIMELINE */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-secondary text-xs uppercase font-bold tracking-widest block">
              Historical Milestones
            </span>
            <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
              Four Centuries of Resilience
            </Typography>
            <p className="text-text-muted text-sm sm:text-base">
              Explore key eras that shaped the architectural, spiritual, and maritime landscape of the province.
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-gray-200/80 before:-translate-x-1/2">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-accent text-primary flex items-center justify-center z-10 shadow-subtle">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-card border border-gray-200/70 hover:shadow-elevated transition-shadow">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-light text-primary mb-3">
                        {event.badge}
                      </span>
                      <span className="text-xs font-semibold text-secondary block mb-1">
                        {event.era}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PILLARS OF PANGASINENSE LIVING CULTURE */}
      <section className="py-24 px-6 bg-surface border-t border-gray-200/60">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs uppercase font-bold tracking-widest block">
              Living Heritage
            </span>
            <Typography variant="h2" className="text-3xl sm:text-4xl text-primary font-display">
              Pillars of Provincial Life
            </Typography>
            <p className="text-text-muted text-sm sm:text-base">
              The soul of Pangasinan lives not just in stone monuments, but in daily craft, culinary tradition, and diverse landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Gastronomy */}
            <div className="glass-card p-8 rounded-2xl shadow-card border border-gray-200/70 space-y-4 hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                <Icon name="sparkle" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary">
                Renowned Gastronomy
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Home to the world-famous Dagupan Boneless Bangus (milkfish), savory garlicky Alaminos longganisa, pillowy Calasiao Puto (steamed rice cakes), and coconut-wrapped Tupig charcoal roasted over husk coals.
              </p>
            </div>

            {/* Card 2: Craftsmanship */}
            <div className="glass-card p-8 rounded-2xl shadow-card border border-gray-200/70 space-y-4 hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary-light text-secondary flex items-center justify-center">
                <Icon name="compass" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary">
                Artisanal Craftsmanship
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Rooted in indigenous materials, master artisans in San Carlos and coastal municipalities weave durable buri palm mats, bamboo furniture, and traditional rattan fish traps passed down through centuries.
              </p>
            </div>

            {/* Card 3: Geography */}
            <div className="glass-card p-8 rounded-2xl shadow-card border border-gray-200/70 space-y-4 hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Icon name="waves" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary">
                Vast Coastal Horizons
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Stretching over 285 kilometers of coastline facing the West Philippine Sea, bordered by the mighty Agno River basin, fertile agricultural plains, and dramatic limestone sea arches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE CTA BANNER */}
      <section className="py-24 px-6 bg-primary text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10 space-y-6">
          <Typography variant="h2" className="!text-white text-3xl sm:text-4xl font-display">
            Discover These Stories in Person
          </Typography>
          <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            Every stone church, thermal spring, and white-sand cove in our showcase carries four centuries of living history.
          </p>
          <div className="pt-2">
            <Button href="/heritage" variant="primary" className="!bg-accent hover:!bg-accent/90 !text-primary font-bold px-8 py-3.5 shadow-elevated">
              <span>Explore All Heritage Destinations</span>
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
