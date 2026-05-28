export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  videos: Video[];
}

/**
 * INSTRUCTIONS TO ADD YOUR OWN VIDEOS:
 * 
 * 1. Place your video files in: public/videos/<category-slug>/
 *    Example: public/videos/concert-promos/promo1.mp4
 * 
 * 2. Place thumbnail images in: public/assets/thumbnails/
 *    Example: public/assets/thumbnails/promo1-thumb.webp
 * 
 * 3. Add entries to the `videos` array inside the matching category below.
 *    Each video needs: id (unique number), title, thumbnail path, and videoUrl path.
 */

export const categories: Category[] = [
  {
    slug: 'concert-promos',
    name: 'Concert Promos',
    description: 'High-energy promotional videos for concerts and live events.',
    thumbnail: '/assets/img1.webp',
    videos: [
      { id: 1, title: 'Neon Nights Promo', thumbnail: '/assets/img1.webp', videoUrl: '/videos/concert-promos/sample1.mp4' },
      { id: 2, title: 'Summer Fest Teaser', thumbnail: '/assets/img1.webp', videoUrl: '/videos/concert-promos/sample2.mp4' },
    ]
  },
  {
    slug: 'creative-reels',
    name: 'Creative Reels',
    description: 'Short-form creative content for social media and branding.',
    thumbnail: '/assets/img2.webp',
    videos: [
      { id: 3, title: 'Brand Identity Reel', thumbnail: '/assets/img2.webp', videoUrl: '/videos/creative-reels/sample1.mp4' },
      { id: 4, title: 'Product Showcase', thumbnail: '/assets/img2.webp', videoUrl: '/videos/creative-reels/sample2.mp4' },
    ]
  },
  {
    slug: 'podcasts',
    name: 'Podcasts',
    description: 'Professional podcast editing with dynamic visuals and overlays.',
    thumbnail: '/assets/img5.webp',
    videos: [
      { id: 5, title: 'Tech Talk Ep. 1', thumbnail: '/assets/img5.webp', videoUrl: '/videos/podcasts/sample1.mp4' },
      { id: 6, title: 'Creative Minds Ep. 3', thumbnail: '/assets/img5.webp', videoUrl: '/videos/podcasts/sample2.mp4' },
    ]
  },
  {
    slug: 'rapid-fire',
    name: 'Rapid Fire',
    description: 'Fast-paced, attention-grabbing edits for maximum engagement.',
    thumbnail: '/assets/img4.webp',
    videos: [
      { id: 7, title: 'Quick Cuts Montage', thumbnail: '/assets/img4.webp', videoUrl: '/videos/rapid-fire/sample1.mp4' },
      { id: 8, title: 'Hype Reel', thumbnail: '/assets/img4.webp', videoUrl: '/videos/rapid-fire/sample2.mp4' },
    ]
  },
  {
    slug: 'event-highlights',
    name: 'Event Highlights',
    description: 'Highlight reels that capture the best moments of any event.',
    thumbnail: '/assets/img3.webp',
    videos: [
      { id: 9, title: 'Annual Gala 2025', thumbnail: '/assets/img3.webp', videoUrl: '/videos/event-highlights/sample1.mp4' },
      { id: 10, title: 'Launch Party Recap', thumbnail: '/assets/img3.webp', videoUrl: '/videos/event-highlights/sample2.mp4' },
    ]
  },
];

/** Helper to find a category by its slug */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
