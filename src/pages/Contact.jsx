import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
  const [emailText, setEmailText] = React.useState("Révéler l'adresse e-mail");
  const [emailHref, setEmailHref] = React.useState("#");

  const handleEmailReveal = (e) => {
    if (emailHref === "#") {
      e.preventDefault();
      const user = "alexchisiu";
      const domain = "gmail.com";
      const email = `${user}@${domain}`;
      setEmailText(email);
      setEmailHref(`mailto:${email}`);
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-[13px] uppercase tracking-[0.2em]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] mb-4"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] text-white/40 mb-20 max-w-[500px]"
        >
          Prêt à démarrer un projet ? Discutons-en.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <a 
              href={emailHref} 
              onClick={handleEmailReveal} 
              className="group flex items-center gap-4 mb-10 text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[15px]">{emailText}</span>
            </a>

            <div className="mb-12">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.05em] mb-6 pb-4 border-b border-white/10">Réseaux</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/alexou7575/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/sebastian-chisiu-a115bb338/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/Alexouuuu" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.05em] mb-6 pb-4 border-b border-white/10">Curriculum Vitae</h3>
              <a href="/cv.pdf" download="CV_Sebastian_Chisiu.pdf" className="p-ghost-btn text-[14px] w-[50%]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger CV
              </a>
              <a href="/calendrier_alternance.pdf" download="Calendrier_alternance.pdf" className="p-ghost-btn text-[14px] w-[50%] mt-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger calendrier alternance
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-white/50 mb-3 block">Nom</label>
              <input type="text" placeholder="Votre nom" className="w-full px-0 py-4 border-b border-white/15 text-white text-[15px] bg-transparent focus:outline-none focus:border-white transition-colors placeholder:text-white/20" />
            </div>
            <div>
              <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-white/50 mb-3 block">Email</label>
              <input type="email" placeholder="votre@email.com" className="w-full px-0 py-4 border-b border-white/15 text-white text-[15px] bg-transparent focus:outline-none focus:border-white transition-colors placeholder:text-white/20" />
            </div>
            <div>
              <label className="text-[13px] font-bold uppercase tracking-[0.05em] text-white/50 mb-3 block">Message</label>
              <textarea rows="5" placeholder="Votre message..." className="w-full px-0 py-4 border-b border-white/15 text-white text-[15px] bg-transparent focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/20" />
            </div>
            <button type="submit" className="p-ghost-btn mt-4">
              Envoyer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
