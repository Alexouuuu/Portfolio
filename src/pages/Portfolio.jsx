import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import LazyImage from '../components/LazyImage';

const PROJECTS_PER_PAGE = 9;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');
  const [sortKey, setSortKey] = useState('importance');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = ['Tout', ...new Set(projectsData.map(project => project.tag))];

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortKey, searchQuery]);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    let result = projectsData.filter((project) => {
      const matchesCategory = activeFilter === 'Tout' || project.tag === activeFilter;
      if (!matchesCategory) return false;

      if (!query) return true;

      const titleMatch = project.title?.toLowerCase().includes(query);
      const descMatch = project.description?.toLowerCase().includes(query);
      const tagMatch = project.tag?.toLowerCase().includes(query);
      const typeMatch = project.type?.toLowerCase().includes(query);
      const techMatch = project.technologies?.some(t => t.toLowerCase().includes(query));
      const objMatch = project.objectifs?.some(o => o.toLowerCase().includes(query));

      return titleMatch || descMatch || tagMatch || typeMatch || techMatch || objMatch;
    });

    const parseProjectDate = (dateStr) => {
      if (!dateStr) return 0;
      const monthMap = {
        'janvier': 1, 'février': 2, 'fevrier': 2, 'mars': 3, 'avril': 4,
        'mai': 5, 'juin': 6, 'juillet': 7, 'août': 8, 'aout': 8,
        'septembre': 9, 'octobre': 10, 'novembre': 11, 'décembre': 12, 'decembre': 12
      };
      const parts = dateStr.toLowerCase().trim().split(' ');
      if (parts.length === 2) {
        const month = monthMap[parts[0]] || 1;
        const year = parseInt(parts[1], 10) || 2025;
        return year * 100 + month;
      }
      return 0;
    };

    result.sort((a, b) => {
      if (sortKey === 'importance') return (a.importance || 99) - (b.importance || 99);
      if (sortKey === 'nom') return (a.title || '').localeCompare(b.title || '');
      if (sortKey === 'date') return parseProjectDate(b.date) - parseProjectDate(a.date);
      return 0;
    });

    return result;
  }, [activeFilter, sortKey, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE) || 1;
  const validCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedProjects = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [filteredProjects, validCurrentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setActiveFilter('Tout');
    setCurrentPage(1);
  };

  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        <Link to="/" className="page-back">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] mb-4 text-white"
            >
              Mes Projets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[16px] text-white/40 max-w-[500px]"
            >
              Développement web, design et projets personnels.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/posters" className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-colors text-white text-[11px] md:text-[13px] uppercase tracking-widest w-fit">
              Mes posters automobiles
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un projet (titre, techno, mot-clé...)"
              className="w-full bg-[#181818] border border-white/15 focus:border-white text-white text-[14px] pl-12 pr-10 py-3.5 outline-none transition-all placeholder:text-white/30 font-light"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label="Effacer la recherche"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6 border-b border-white/10 pb-6">
          
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide w-full lg:w-auto pb-2 lg:pb-0">
            {allTags.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-[13px] tracking-wide border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 flex-shrink-0">
            <span className="text-[12px] text-white/40 font-light uppercase tracking-wider">
              {filteredProjects.length} {filteredProjects.length > 1 ? 'projets' : 'projet'}
              {totalPages > 1 && (
                <span className="text-white/30 ml-1.5 font-mono">
                  (Page {validCurrentPage}/{totalPages})
                </span>
              )}
            </span>

            <div className="flex items-center gap-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 hidden md:block">Trier par:</span>
              <button onClick={() => setSortKey('importance')} className={`text-[12px] uppercase tracking-wide transition-colors cursor-pointer ${sortKey === 'importance' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}>Pertinence</button>
              <button onClick={() => setSortKey('nom')} className={`text-[12px] uppercase tracking-wide transition-colors cursor-pointer ${sortKey === 'nom' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}>Nom</button>
              <button onClick={() => setSortKey('date')} className={`text-[12px] uppercase tracking-wide transition-colors cursor-pointer ${sortKey === 'date' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}>Date</button>
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center border border-white/10 bg-[#151515] p-8">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-4 text-white/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl text-white font-light mb-2">Aucun projet trouvé</h3>
            <p className="text-white/40 text-[14px] max-w-md mb-6 font-light">
              Aucun résultat ne correspond à votre recherche {searchQuery && <span>« <strong className="text-white">{searchQuery}</strong> »</span>} {activeFilter !== 'Tout' && <span>dans la catégorie « <strong className="text-white">{activeFilter}</strong> »</span>}.
            </p>
            <button
              onClick={handleResetSearch}
              className="px-6 py-2.5 bg-white text-black text-[12px] uppercase tracking-widest hover:bg-white/90 transition-colors cursor-pointer font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence>
                {paginatedProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link to={`/project/${project.id}`} className="p-card group cursor-pointer relative overflow-hidden block h-full border border-white/10 bg-black">
                      <div className="aspect-[3/3] w-full bg-[#111111]">
                        <LazyImage
                          src={project.imagemain}
                          alt={project.title}
                          fallbackTitle={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="p-tag bg-white/10 text-white backdrop-blur-sm border-white/10">
                            {project.type}
                          </span>
                          {project.technologies && project.technologies.slice(0, 2).map((tech) => (
                            <span key={tech} className="p-tag bg-white/5 text-white/70 backdrop-blur-sm border-white/5 text-[12px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 block mb-2">
                              {project.tag} • {project.date}
                            </span>
                            <span className="text-[20px] md:text-[24px] text-white font-light">
                              {project.title}
                            </span>
                          </div>
                          
                          <svg className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination si plus de 9 projets */}
            {totalPages > 1 && (
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
                <span className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-light">
                  Page {validCurrentPage} sur {totalPages} • {filteredProjects.length} projets
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(validCurrentPage - 1)}
                    disabled={validCurrentPage === 1}
                    className={`px-4 py-2 text-[12px] uppercase tracking-[0.15em] border transition-all ${
                      validCurrentPage === 1
                        ? 'border-white/10 text-white/20 cursor-not-allowed'
                        : 'border-white/20 text-white/70 hover:text-white hover:border-white cursor-pointer'
                    }`}
                  >
                    Précédent
                  </button>

                  <div className="flex items-center gap-1.5 mx-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 text-[12px] font-mono transition-all cursor-pointer ${
                          validCurrentPage === pageNum
                            ? 'bg-white text-black font-semibold border border-white'
                            : 'border border-white/15 text-white/50 hover:text-white hover:border-white/40'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(validCurrentPage + 1)}
                    disabled={validCurrentPage === totalPages}
                    className={`px-4 py-2 text-[12px] uppercase tracking-[0.15em] border transition-all ${
                      validCurrentPage === totalPages
                        ? 'border-white/10 text-white/20 cursor-not-allowed'
                        : 'border-white/20 text-white/70 hover:text-white hover:border-white cursor-pointer'
                    }`}
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </div>

    </section>
  );
};

export default Portfolio;
