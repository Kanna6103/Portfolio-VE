'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Folder, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../hooks/use-theme';
import { categories as categoryData } from '@/data/videos';

/** Convert a category name to its URL slug */
const toSlug = (name: string) => categoryData.find(c => c.name === name)?.slug || name.toLowerCase().replace(/\s+/g, '-');

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}
const projects = [
  // Short Form (5 items)
  {
    id: 1,
    title: 'Concert Promos',
    category: 'Concert Promos',
    thumbnail: '/assets/img1.webp',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },

  // Long Form (5 items)
  {
    id: 2,
    title: 'Creative Reels',
    category: 'Creative Reels',
    thumbnail: '/assets/img2.webp',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  // Ads & VSL (5 items)
  {
    id: 3,
    title: 'Podcasts',
    category: 'Podcasts',
    thumbnail: '/assets/img5.webp',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  // Music Videos (2 items)
  {
    id: 4,
    title: 'Rapid Fire  ',
    category: 'Rapid Fire',
    thumbnail: '/assets/img4.webp',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  // Travel Vlogs (2 items)
  {
    id: 5,
    title: 'Event Highlights',
    category: 'Event Highlights',
    thumbnail: '/assets/img3.webp',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
];



const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'folders' | 'projects'>('folders');
  const [activeFilter, setActiveFilter] = useState('Concert Promos'); // Default based on image
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [hoveredFolderCat, setHoveredFolderCat] = useState<string | null>(null);
  const [hoveredBtnCat, setHoveredBtnCat] = useState<string | null>(null);
  const hoverTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const categories = ['Concert Promos', 'Creative Reels', 'Podcasts', 'Rapid Fire', 'Event Highlights'];

  const filteredProjects = projects.filter(p => p.category === activeFilter);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="section-padding" style={{ 
      position: 'relative', 
      background: 'var(--glass-bg)', 
      backdropFilter: 'var(--glass-blur)', 
      transition: 'background-color 0.4s ease',
      padding: '100px 0'
    }}>
      {/* Ambient Glowing Ball elements - Mesh Glow */}
      <div className="glow-blob" style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        filter: 'blur(150px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      <div className="glow-blob" style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        filter: 'blur(150px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      <div className="glow-blob" style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.2
      }} />
      <div className="container" style={{ width: '90%', maxWidth: 'none', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header and Filters Flex Row */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          textAlign: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '10px' }}>
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '20px' }}>
              A glimpse into our recent editing work and collaborations
            </p>

            {/* Filters / Back Button inside description area */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              {viewMode === 'projects' && (
                <button
                  onClick={() => setViewMode('folders')}
                  className="glass-btn"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  <ChevronLeft size={16} /> Back to Folders
                </button>
              )}
              {viewMode === 'projects' && categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(cat)}
                  className={`glass-btn filter-btn ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Arrows Removed */}
        </div>

        {/* Carousel Grid Container */}
        <div style={{ position: 'relative' }}>
          <div 
            ref={scrollRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              borderRadius: '30px',
              gap: '25px',
              paddingBottom: '35px',
            }}
            className="carousel-track"
          >
            <AnimatePresence>
              {viewMode === 'folders' ? (
                categories.map((cat, index) => {
                  const count = projects.filter(p => p.category === cat).length;
                  return (
                    <m.div
                      key={cat}
                      className="portfolio-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -8, transition: { duration: 0.4 } }}
                      onMouseEnter={() => setHoveredFolderCat(cat)}
                      onMouseLeave={() => setHoveredFolderCat(null)}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      style={{
                        width: '100%',
                        height: '350px',
                        borderRadius: '30px',
                        position: 'relative',
                        cursor: 'default',
                        scrollSnapAlign: 'start',
                        zIndex: 1,
                        padding: '15px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        background: '#111',
                        overflow: 'hidden'
                      }}
                    >
                      <Image 
                        src={projects.find(p => p.category === cat)?.thumbnail || '/assets/placeholder.webp'} 
                        alt={`${cat} category thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover', zIndex: 0, borderRadius: 'inherit' }} 
                      />
                      {/* Dark Overlay gradient for text readability */}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)', zIndex: 1, borderRadius: 'inherit' }} />
                      
                      {/* Static Title (Before Hover) */}
                      <m.div 
                        animate={{ opacity: hoveredFolderCat === cat ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: 'absolute',
                          bottom: '30px',
                          left: '0',
                          right: '0',
                          zIndex: 1,
                          textAlign: 'center'
                        }}
                      >
                         <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.6)', letterSpacing: '-0.02em' }}>
                            {cat}
                         </h3>
                      </m.div>

                      {/* Glass Blur Hover Overlay */}
                      <m.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                          opacity: hoveredFolderCat === cat ? 1 : 0,
                          scale: hoveredFolderCat === cat ? 1 : 0.95
                        }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          background: 'rgba(255, 255, 255, 0)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          zIndex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '15px'
                        }}
                      >
                            {/* Inner Title & Description */}
                            <div style={{ textAlign: 'center', padding: '0 15px' }}>
                               <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.5)', letterSpacing: '-0.02em', marginBottom: '5px' }}>
                                 {cat}
                               </h3>
                               <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', maxWidth: '220px', margin: '0 auto 10px auto', lineHeight: 1.4 }}>
                                 Cinematic visual editing and design for {cat}
                               </p>
                            </div>
                         <Link href={`/content/${toSlug(cat)}`} style={{ textDecoration: 'none' }}>
                           <m.div 
                             style={{
                               display: 'flex',
                               alignItems: 'center',
                               gap: '6px',
                               background: '#ffffff',
                               color: '#000000',
                               padding: '10px 18px',
                               borderRadius: '25px',
                               fontWeight: 700,
                               fontSize: '0.85rem',
                               boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                               cursor: 'pointer'
                             }}
                             whileHover={{ scale: 1.08 }}
                             whileTap={{ scale: 0.95 }}
                             onMouseEnter={() => setHoveredBtnCat(cat)}
                             onMouseLeave={() => setHoveredBtnCat(null)}
                           >
                            <span>View</span>
                            <m.div                               animate={{ rotate: hoveredBtnCat === cat ? -45 : 0 }}
                               transition={{ duration: 0.2, ease: 'easeOut' }}
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                               <ArrowRight size={16} strokeWidth={2.5} />
                            </m.div>
                          </m.div>
                         </Link>
                         </m.div>
                    </m.div>
                  );
                })
              ) : (
                filteredProjects.map((project) => (
                  <Link href={`/content/${toSlug(project.category)}`} key={project.id} style={{ display: 'block', textDecoration: 'none' }}>
                    <m.div
                      className="portfolio-card"
                      initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%',
                      aspectRatio: '4/5',
                      borderRadius: '28px',
                      position: 'relative',
                      cursor: 'default',
                      scrollSnapAlign: 'start',
                      padding: '15px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      background: '#111',
                      overflow: 'visible'
                    }}

                    onMouseEnter={() => {
                      setHoveredProjectId(project.id);
                      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                      hoverTimeoutRef.current = setTimeout(() => {
                        setHoveredProjectId(null);
                      }, 4000);
                    }}
                    onMouseLeave={() => {
                      setHoveredProjectId(null);
                      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                    }}
                  >
                    {/* Top Title Label */}
                    <span style={{ position: 'absolute', top: '-22px', left: '0', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 500, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' }}>
                       {project.title}
                    </span>
                    {hoveredProjectId === project.id ? (
                       <video 
                         src={project.videoUrl} 
                         autoPlay 
                         muted 
                         playsInline 
                         loop 
                         style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, borderRadius: 'inherit' }} 
                       />
                    ) : (
                       <img 
                         src={project.thumbnail} 
                         alt={project.title}
                         style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, borderRadius: 'inherit' }} 
                       />
                    )}
                    {/* Dark Overlay gradient for text readability */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)', zIndex: 1, borderRadius: 'inherit' }} />

                    {/* Title Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '25px',
                      left: '25px',
                      right: '25px',
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                       <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.4)', lineHeight: 1.2 }}>
                         {project.title}
                       </h3>
                       <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', width: 'fit-content', padding: '3px 8px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         {project.category}
                       </span>
                    </div>
                  </m.div>
                 </Link>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>


        {/* CSS for Carousel and Glassy Hover Button Overrides */}
        <style>{`
          .carousel-track::-webkit-scrollbar {
            display: none;
          }
          .carousel-track > div:hover .play-btn {
            transform: translate(-50%, -50%) scale(1.1);
          }
          
          /* Text Gradient Header */
          .text-gradient {
            background: linear-gradient(to right, #FFB600, #f8ff70) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            display: inline-block;
          }
          
          /* Glassy Button Base styles */
          .glass-btn {
            background: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid var(--surface-border) !important;
            color: var(--text-primary) !important;
            cursor: pointer;
            transition: all 0.3s ease !important;
          }
          .glass-btn:hover {
            background: rgba(255, 255, 255, 0.12) !important;
            transform: translateY(-2px);
            border-color: var(--accent-color) !important;
          }

          /* Filter Button Overrides */
          .filter-btn {
            padding: 8px 24px !important;
            border-radius: 30px !important;
            font-size: 0.95rem !important;
            font-weight: 500 !important;
          }
          .filter-btn.active {
            background: var(--accent-color) !important;
            color: #ffffff !important;
            border: none !important;
          }

          /* Arrow Button Overrides */
          .arrow-btn {
            padding: 0 !important;
            width: 45px !important;
            height: 45px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 50% !important;
            font-size: 1.2rem !important;
          }
          .arrow-btn:hover {
            background: var(--accent-color) !important;
            color: #ffffff !important;
          }
          .arrow-btn:active {
            transform: scale(0.95);
          }
        `}</style>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              aria-label="Close video"
              onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={24} />
            </button>
            
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '1200px',
                aspectRatio: '16/9',
                background: 'var(--modal-content-bg)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            >
              {/* Using a standard HTML5 video player for the placeholder */}
              <video 
                src={selectedVideo.videoUrl} 
                controls 
                autoPlay 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
