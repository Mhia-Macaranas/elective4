'use client';

import React, { useEffect } from 'react';
import { HeritageSite } from '@/types/heritage';
import { Image } from '../atoms/Image';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';

interface HeritageModalProps {
  site: HeritageSite | null;
  isOpen: boolean;
  onClose: () => void;
}

export const HeritageModal: React.FC<HeritageModalProps> = ({ site, isOpen, onClose }) => {
  // Handle escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !site) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-surface rounded-2xl shadow-elevated border border-white/40 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-slide-up">
        {/* Header Image with Gradient */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
          <Image 
            src={site.image} 
            alt={site.imageAlt} 
            fill 
            className="brightness-95"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close dialog"
          >
            <Icon name="close" size={20} />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 text-primary backdrop-blur-sm shadow-subtle">
              {site.category}
            </span>
            {site.historicalPeriod && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/90 text-white backdrop-blur-sm shadow-subtle">
                {site.historicalPeriod}
              </span>
            )}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-1.5 text-accent-light text-xs sm:text-sm font-medium mb-1">
              <Icon name="location" size={16} />
              <span>{site.location}, {site.municipality}</span>
            </div>
            <Typography variant="h2" id="modal-title" className="!text-white text-2xl sm:text-3xl">
              {site.name}
            </Typography>
            {site.tagline && (
              <p className="text-white/80 text-sm italic mt-1 font-display">
                &ldquo;{site.tagline}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          {/* Description */}
          <div>
            <Typography variant="eyebrow" className="mb-2 block text-secondary">
              Heritage & History
            </Typography>
            <Typography variant="body" className="text-text leading-relaxed text-base">
              {site.description}
            </Typography>
          </div>

          {/* Highlights */}
          {site.highlights && site.highlights.length > 0 && (
            <div className="bg-surface-muted/60 p-5 rounded-xl border border-gray-200/60">
              <Typography variant="small" className="font-semibold text-primary uppercase tracking-wider mb-3 block">
                Destination Highlights
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {site.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-text">
                    <span className="text-accent flex-shrink-0">
                      <Icon name="check" size={16} />
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
            {site.bestTime && (
              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-white border border-gray-100 shadow-subtle">
                <div className="p-2 rounded-md bg-accent-light/50 text-accent flex-shrink-0">
                  <Icon name="calendar" size={18} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block">
                    Best Season
                  </span>
                  <p className="text-sm font-medium text-text mt-0.5">
                    {site.bestTime}
                  </p>
                </div>
              </div>
            )}

            {site.travelTip && (
              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-white border border-gray-100 shadow-subtle">
                <div className="p-2 rounded-md bg-secondary-light text-secondary flex-shrink-0">
                  <Icon name="compass" size={18} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block">
                    Traveler Tip
                  </span>
                  <p className="text-sm font-medium text-text mt-0.5">
                    {site.travelTip}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 sm:py-4 bg-surface-muted/80 border-t border-gray-200/60 flex items-center justify-between">
          <span className="text-xs text-text-muted">
            Pangasinan Tourism &bull; {site.municipality}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
