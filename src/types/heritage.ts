export interface HeritageSite {
  id: string;
  slug: string;
  name: string;
  location: string;
  municipality: string;
  category: 'Nature' | 'Heritage' | 'Culture' | 'Landmarks';
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}
