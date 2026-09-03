export interface HeritageSite {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  location: string;
  municipality: string;
  category: 'Nature' | 'Heritage' | 'Culture' | 'Landmarks';
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  highlights?: string[];
  bestTime?: string;
  travelTip?: string;
  historicalPeriod?: string;
}
