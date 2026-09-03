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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-elevated border border-gray-200 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-slide-up">
        {/* Header Image with High-Contrast Gradient */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0 bg-primary">
          <Image 
            src={site.image} 
            alt={site.imageAlt} 
            fill 
            className="brightness-95 object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close dialog"
          >
            <Icon name="close" size={20} />
          </button>

          {/* High-Contrast Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary shadow-md">
              {site.category}
            </span>
            {site.historicalPeriod && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/75 text-white backdrop-blur-sm shadow-md border border-white/20">
                {site.historicalPeriod}
              </span>
            )}
          </div>

          {/* Title Overlay with Text Shadow */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-1.5 text-accent-light text-xs sm:text-sm font-semibold mb-1 drop-shadow-sm">
              <Icon name="location" size={16} />
              <span>{site.location}, {site.municipality}</span>
            </div>
            <Typography variant="h2" id="modal-title" className="!text-white text-2xl sm:text-3xl font-bold drop-shadow-md">
              {site.name}
            </Typography>
            {site.tagline && (
              <p className="text-white/90 text-sm italic mt-1 font-display drop-shadow-sm font-medium">
                &ldquo;{site.tagline}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* Modal Body Content with Ultra-Crisp Dark Text */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow bg-white">
          {/* Description */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Heritage & History
            </span>
            <Typography variant="body" className="text-text leading-relaxed text-base">
              {site.description}
            </Typography>
          </div>

          {/* Highlights Checklist */}
          {site.highlights && site.highlights.length > 0 && (
            <div className="bg-surface-muted p-5 rounded-xl border border-gray-200">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">
                Destination Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {site.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-text font-medium">
                    <span className="text-secondary flex-shrink-0">
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
              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-surface-muted/50 border border-gray-200">
                <div className="p-2 rounded-md bg-accent-light text-accent flex-shrink-0">
                  <Icon name="calendar" size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                    Best Season
                  </span>
                  <p className="text-sm font-semibold text-text mt-0.5">
                    {site.bestTime}
                  </p>
                </div>
              </div>
            )}

            {site.travelTip && (
              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-surface-muted/50 border border-gray-200">
                <div className="p-2 rounded-md bg-secondary-light text-secondary flex-shrink-0">
                  <Icon name="compass" size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                    Traveler Tip
                  </span>
                  <p className="text-sm font-semibold text-text mt-0.5">
                    {site.travelTip}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 sm:py-3.5 bg-surface-muted border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs font-medium text-text-muted">
            Pangasinan Tourism &bull; {site.municipality}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-colors shadow-sm"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
