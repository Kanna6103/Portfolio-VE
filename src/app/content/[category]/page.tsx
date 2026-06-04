'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, X, Clock, Film } from 'lucide-react';
import { getCategoryBySlug } from '@/data/videos';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.category as string;
  const category = getCategoryBySlug(slug);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (!category) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>Category Not Found</h1>
        <Link href="/#work" style={{ color: 'var(--accent-color)', textDecoration: 'underline', fontSize: '1.1rem' }}>← Back to Portfolio</Link>
      </main>
    );
  }

  return (
    <main className="category-page" style={{ minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)', position: 'relative', overflow: 'hidden' }}>

      {/* ============================================= */}
      {/* HERO BANNER */}
      {/* ============================================= */}
      <div style={{ position: 'relative', width: '100%', height: '55vh', maxHeight: '350px', overflow: 'hidden' }}>
        {/* Background Image */}
        <Image
          src={category.thumbnail}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'brightness(0.4) saturate(1.2)' }}
        />
        {/* Gradient Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, var(--bg-color) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(147,51,234,0.15) 0%, transparent 60%)', zIndex: 1 }} />

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, height: '100%', maxWidth: '1300px', margin: '0 auto', padding: '0 30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '50px' }}>
          
          {/* Back Button */}
          <m.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/#work" className="cat-back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: '10px', transition: 'all 0.3s ease', fontSize: '0.9rem', fontWeight: 500 }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>
                <ArrowLeft size={16} />
              </div>
              <span style={{ letterSpacing: '1.5px', textTransform: 'uppercase' }}>Back to Portfolio</span>
            </Link>
          </m.div>

          {/* Category Title Area */}
          <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent-color)', borderRadius: '2px' }} />
              <span style={{ color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                Category
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '15px', letterSpacing: '-0.03em' }}>
              {category.name}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', maxWidth: '550px', lineHeight: 1.7 }}>
              {category.description}
            </p>
          </m.div>

          {/* Stats Row */}
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ display: 'flex', gap: '30px', marginTop: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              <Film size={16} style={{ color: 'var(--accent-color)' }} />
              <span><strong style={{ color: 'rgba(255,255,255,0.9)' }}>{category.videos.length}</strong> Videos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              <Clock size={16} style={{ color: 'var(--accent-color)' }} />
              <span>Recently Updated</span>
            </div>
          </m.div>

        </div>
      </div>

      {/* ============================================= */}
      {/* VIDEO GRID SECTION */}
      {/* ============================================= */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 30px 100px 30px', position: 'relative', zIndex: 10 }}>
        
        {/* Section Label */}
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '35px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            All Videos
          </h2>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {category.videos.length} {category.videos.length === 1 ? 'item' : 'items'}
          </span>
        </m.div>

        {/* Video Grid */}
        <div className="cat-video-grid">
          {category.videos.map((video, index) => (
            <m.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="cat-video-card"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              {/* Thumbnail */}
              <div className="cat-video-thumb-wrap">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease' }}
                  className="cat-thumb-img"
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)', zIndex: 1, transition: 'opacity 0.3s ease' }} />
                
                {/* Play Button */}
                <m.div
                  animate={{ scale: hoveredId === video.id ? 1.1 : 1, opacity: hoveredId === video.id ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
                >
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '50%',
                    background: hoveredId === video.id ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: hoveredId === video.id ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: hoveredId === video.id ? '0 8px 30px rgba(147, 51, 234, 0.4)' : 'none'
                  }}>
                    <Play size={22} fill="#fff" color="#fff" style={{ marginLeft: '3px' }} />
                  </div>
                </m.div>

                {/* Card Index Badge */}
                <div style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 2, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', borderRadius: '8px', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div style={{ padding: '18px 5px 5px 5px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px', letterSpacing: '-0.01em', transition: 'color 0.3s ease' }} className="cat-card-title">
                  {video.title}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {category.name}
                </span>
              </div>
            </m.div>
          ))}
        </div>

        {/* Empty State */}
        {category.videos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '100px 20px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)' }}>
            <Film size={48} style={{ color: 'var(--text-secondary)', marginBottom: '20px', opacity: 0.4 }} />
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>No videos in this category yet</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.6 }}>Add videos to <code style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>src/data/videos.ts</code></p>
          </div>
        )}
      </div>

      {/* ============================================= */}
      {/* VIDEO MODAL */}
      {/* ============================================= */}
      <AnimatePresence>
        {selectedVideo && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={() => setSelectedVideo(null)}
          >
            <button
              aria-label="Close video"
              onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
              style={{ position: 'absolute', top: '25px', right: '25px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease', zIndex: 10001 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'rotate(0deg)'; }}
            >
              <X size={22} />
            </button>
            <m.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ width: '100%', maxWidth: '1100px', aspectRatio: '16/9', background: '#000', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)' }}
            >
              <video src={selectedVideo} controls autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ============================================= */}
      {/* STYLES */}
      {/* ============================================= */}
      <style>{`
        .cat-back-link:hover {
          color: #fff !important;
        }
        .cat-back-link:hover div {
          background: var(--accent-color) !important;
          border-color: var(--accent-color) !important;
        }

        .cat-video-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cat-video-card {
          cursor: pointer;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cat-video-card:hover {
          transform: translateY(-6px);
        }

        .cat-video-card:hover .cat-card-title {
          color: var(--accent-color) !important;
        }

        .cat-video-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .cat-video-card:hover .cat-thumb-img {
          transform: scale(1.08) !important;
          filter: brightness(1.1) !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cat-video-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }
        }

        @media (max-width: 640px) {
          .cat-video-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </main>
  );
}
