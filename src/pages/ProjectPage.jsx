import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import LazyImage from '../components/LazyImage';

const ProjectPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = useMemo(() => {
    return projectsData.find(p => p.id === parseInt(id, 10));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const images = useMemo(() => {
    if (!project) return [];
    return project.images && project.images.length > 0 
      ? project.images 
      : (project.imagemain ? [project.imagemain] : []);
  }, [project]);

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

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-[13px] uppercase tracking-[0.2em]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Retour aux projets
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 border border-white/20 text-white/60 text-[11px] uppercase tracking-[0.2em]">
              {project.type}
            </span>
            <span className="text-white/40 text-[12px] uppercase tracking-[0.2em]">
              {project.tag}
            </span>
          </div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-light text-white leading-[1.1] mb-6">
            {project.title}
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-white/60 max-w-[800px] font-light">
            {project.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20"
        >
          <div className="w-full lg:w-2/3">
            <div className="relative aspect-[16/9] w-full border border-white/10 overflow-hidden bg-black group shadow-2xl">
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
                    alt={`${project.title} - vue ${currentImageIndex + 1}`} 
                    fallbackTitle={project.title}
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
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                  </button>
                  
                  <button 
                    type="button"
                    onClick={(e) => nextImage(e)} 
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/25 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Image suivante"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
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
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">Images du projet ({images.length})</p>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((img, idx) => (
                    <button 
                      key={idx}
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`relative flex-shrink-0 w-28 md:w-32 aspect-[16/10] border overflow-hidden transition-all duration-300 cursor-pointer ${
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

          <div className="w-full lg:w-1/3 flex flex-col">
            <h3 className="text-[12px] uppercase tracking-[0.3em] text-white/30 mb-8 pb-4 border-b border-white/10">
              Détails
            </h3>

            <div className="flex flex-col gap-6">
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">Période</span>
                <span className="text-[15px] text-white font-light">{project.date}</span>
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-2">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[13px] text-white border border-white/20 px-3 py-1 bg-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.collaborateurs && project.collaborateurs.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-2">Équipe</span>
                  <div className="flex flex-col gap-1">
                    {project.collaborateurs.map((collab, i) => (
                      <a 
                        key={collab} 
                        href={project.linkcollab && project.linkcollab[i] ? project.linkcollab[i] : '#'} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[14px] text-white hover:text-white/60 transition-colors w-fit flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-white rounded-full" />
                        {collab}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {project.visitable && (project.lienSite || (Array.isArray(project.lien) && project.lien.length > 0) || (typeof project.lien === 'string' && project.lien)) && (
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-3">Site web</span>
                  <a 
                    href={project.lienSite || (Array.isArray(project.lien) ? project.lien[0] : project.lien)} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group inline-flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all text-white text-[12px] uppercase tracking-[0.2em] font-medium w-fit"
                  >
                    <span>Visiter le site</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              )}

              {project.objectifs && project.objectifs.length > 0 && (
                <div className="pt-6 border-t border-white/10 mt-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-4">Objectifs</span>
                  <ul className="flex flex-col gap-3">
                    {project.objectifs.map((obj, i) => (
                      <li key={i} className="text-[14px] text-white/80 font-light flex items-start gap-3">
                        <span className="text-[10px] text-white/30 mt-1">0{i+1}</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </motion.div>
        <div className="border-t border-white/10 py-6">
          <span className="text-[15px] uppercase tracking-[0.2em] text-white/40 block mb-4 pb-2">Ma contribution sur le projet</span>
            <p className="whitespace-pre-line">{project.contribution}</p>
        </div>
        <div className="border-t border-white/10 py-6">
          <span className="text-[15px] uppercase tracking-[0.2em] text-white/40 block mb-4 pb-2">Difficultés Rencontrées</span>
            <p className="whitespace-pre-line">{project.difficultés}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
