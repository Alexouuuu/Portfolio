import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { postersData } from '../data/posters';
import LazyImage from '../components/LazyImage';

const PosterPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const poster = useMemo(() => {
    return postersData.find(p => p.id === parseInt(id, 10));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const images = useMemo(() => {
    if (!poster) return [];
    return poster.images && poster.images.length > 0 
      ? poster.images 
      : (poster.imagemain ? [poster.imagemain] : []);
  }, [poster]);

  const nextImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const prevImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (images.length <= 1) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, prevImage, nextImage]);

  if (!poster) {
    return <Navigate to="/posters" replace />;
  }

  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <Link to="/posters" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-[13px] uppercase tracking-[0.2em]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour aux posters
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-[3/4] w-full border border-white/10 overflow-hidden bg-black group shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full"
                >
                  <LazyImage
                    src={images[currentImageIndex]}
                    alt={`${poster.titre} - vue ${currentImageIndex + 1}`}
                    fallbackTitle={poster.titre}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button 
                    type="button"
                    onClick={(e) => prevImage(e)} 
                    className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/25 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Image précédente"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => nextImage(e)} 
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/25 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Image suivante"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  
                  <div className="absolute top-4 right-4 z-30 bg-black/80 backdrop-blur-sm border border-white/15 px-3 py-1 text-[11px] text-white/80 font-mono tracking-wider">
                    0{currentImageIndex + 1} / 0{images.length}
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 pointer-events-auto">
                    {images.map((_, idx) => (
                      <button 
                        key={idx}
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/70 w-2.5'}`}
                        aria-label={`Aller à la vue ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">Vues du poster ({images.length})</p>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((img, idx) => (
                    <button 
                      key={idx}
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`relative flex-shrink-0 w-24 md:w-28 aspect-[3/4] border overflow-hidden transition-all duration-300 cursor-pointer ${
                        idx === currentImageIndex 
                          ? 'border-white opacity-100 ring-2 ring-white scale-[1.02]' 
                          : 'border-white/15 opacity-40 hover:opacity-90 hover:border-white/40'
                      }`}
                      aria-label={`Sélectionner l'image ${idx + 1}`}
                    >
                      <LazyImage 
                        src={img} 
                        alt={`Miniature ${idx + 1}`} 
                        fallbackTitle={`${idx + 1}`}
                        className="w-full h-full object-cover" 
                      />
                      {idx === currentImageIndex && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[11px] text-white/40 uppercase tracking-[0.3em] font-mono">{poster.marque}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-[11px] text-white/40 uppercase tracking-[0.3em] font-mono">{poster.modele}</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-light text-white leading-[1.1] mb-6">
                {poster.titre}
              </h1>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <span className="text-white/60 text-[12px] uppercase tracking-[0.2em] font-mono">
                  {poster.date}
                </span>
              </div>

              {/* Fiche détaillée */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Modèle</h3>
                  <p className="text-white text-[15px] font-light">{poster.modele}</p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Marque</h3>
                  <p className="text-white text-[15px] font-light">{poster.marque}</p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Date</h3>
                  <p className="text-white text-[15px] font-light font-mono">{poster.date}</p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Logiciel utilisé</h3>
                  <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 text-white text-[13px] font-mono">
                    {poster.logiciel}
                  </div>
                </div>

                {poster.description && (
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Description</h3>
                    <p className="text-[15px] leading-relaxed text-white/70 font-light whitespace-pre-line">
                      {poster.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PosterPage;
