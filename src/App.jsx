import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Music, Disc, BookOpen, ExternalLink, 
  ShoppingCart, Mail, Globe, Play, ChevronRight,
  Archive, FileText, ArrowRight, Zap, Download,
  Camera, Newspaper, Calendar, ArrowUpRight
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SEO = ({ title, description, image = "/maarten.jpg" }) => {
  const fullTitle = `${title} | Maarten van der Vleuten`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

const LegacyBanner = () => (
  <div className="bg-signal text-white py-2 sm:py-3 px-6 text-center relative z-[60] w-full">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">Looking for the legacy archive?</p>
      <a 
        href="http://www.maartenvandervleuten.com/main.htm" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] underline underline-offset-4 hover:opacity-80 transition-opacity flex items-center gap-2"
      >
        Access Old Website <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Biography', path: '/biography' },
    { name: 'Archive', path: '/archive' },
    { name: 'Signum', path: '/signum' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all shadow-sm bg-white border-b border-black/5">
      <LegacyBanner />
      <div className="py-5 sm:py-8 w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          <Link to="/" className="text-xl font-black tracking-tighter text-black uppercase truncate mr-8">
            MAARTEN VAN DER VLEUTEN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-signal whitespace-nowrap",
                  location.pathname === link.path ? "text-signal" : "text-black/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://maartenvandervleuten.bandcamp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-[10px] font-bold tracking-widest bg-black text-white hover:bg-signal transition-all shadow-lg"
            >
              SHOP
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-10 animate-in fade-in duration-300 pointer-events-auto overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
             <span className="font-bold text-black text-sm tracking-widest uppercase italic">Menu</span>
             <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8 text-black" /></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black text-black border-b border-black/5 pb-6 flex justify-between items-center group hover:text-signal transition-colors"
              >
                {link.name}
                <ArrowRight className="w-8 h-8 opacity-10 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-black py-32 px-6 sm:px-10 lg:px-12 border-t border-black/5 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-4xl font-black leading-none uppercase tracking-tighter">MAARTEN <br/> VAN DER VLEUTEN</h2>
            <p className="text-black/40 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] leading-loose max-w-sm">
              Professional composer and recording artist. Pioneer of the Dutch electronic underground since 1987. Founder of Signum Recordings. Vught, Netherlands.
            </p>
          </div>
          
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-10">Navigation</h4>
             <ul className="space-y-5 text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><Link to="/biography" className="hover:text-black transition-colors">Biography</Link></li>
                <li><Link to="/archive" className="hover:text-black transition-colors">Archive</Link></li>
                <li><Link to="/signum" className="hover:text-black transition-colors">Signum Recordings</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-10">Channels</h4>
             <ul className="space-y-5 text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Bandcamp</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Discogs</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-32 pt-10 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-bold text-black/20 uppercase tracking-widest">
           <p>&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
           <div className="flex gap-12 font-mono">
              <span>EST. 1987</span>
              <span>VUGHT, NL</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Views ---

const HomeView = () => {
  return (
    <main className="bg-white overflow-hidden w-full">
      <SEO 
        title="Official Site" 
        description="Official website of Maarten van der Vleuten. Dutch electronic pioneer, composer of cinematic artifacts and experimental frequencies since 1987." 
      />
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-48 w-full border-b border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32 px-1">
            
            {/* Left Content Column */}
            <div className="order-2 lg:order-1 relative z-10 w-full space-y-12">
               <p className="text-[10px] font-bold text-signal uppercase tracking-[0.8em]">COMPOSER / PIONEER</p>
               <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black leading-[0.95] tracking-tighter uppercase italic">
                 MAARTEN <br/> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
               </h1>
               <p className="text-black/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
                 A Dutch electronic pioneer for over 35 years. From industrial techno under numerous aliases to refined cinematic scoring and experimental sound design.
               </p>
               <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/biography" className="px-10 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-signal transition-all shadow-xl">
                    Full Biography
                  </Link>
                  <Link to="/archive" className="px-10 py-5 border-2 border-black text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Discography
                  </Link>
               </div>
            </div>

            {/* Right Image Column */}
            <div className="order-1 lg:order-2 w-full relative">
               <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative grayscale group">
                  <img 
                    src="/maarten.jpg" 
                    alt="Maarten van der Vleuten" 
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-1000"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
                  />
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40" />
               </div>
               <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-signal/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 sm:py-32 lg:py-48 bg-white w-full border-b border-black/5">
         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
               <div className="lg:col-span-8">
                  <p className="text-[10px] font-bold text-signal uppercase tracking-[0.6em] mb-12 italic">Methodology</p>
                  <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-12 italic">
                     Bridging human <br className="hidden sm:block"/> emotion and <br className="hidden sm:block"/> <span className="text-signal">clinical precision.</span>
                  </h2>
                  <div className="space-y-12 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                     <p>
                        Operating from Vught, Maarten's work transcends simple electronic genres. It's a vertical timeline of discovery—a lifelong ritual of signal distillation and atmospheric architecture.
                     </p>
                     <Link to="/biography" className="inline-flex items-center gap-6 text-black font-black uppercase tracking-widest text-[10px] group border-b-2 border-signal pb-2 transition-all">
                        <span>Read full history</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                     </Link>
                  </div>
               </div>
               <div className="lg:col-span-4 lg:pl-16 border-l border-black/5 pt-12 lg:pt-5 space-y-12">
                  <div>
                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-3">Location</p>
                    <p className="text-xl font-black uppercase text-black italic">Vught, NL</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-3">Aliases</p>
                    <p className="text-xl font-black uppercase text-black italic">24+ Identities</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Grid: Secondary Nav */}
      <section className="py-24 sm:py-40 w-full bg-offwhite">
         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
               <div className="bg-white p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group shadow-lg">
                  <div className="w-14 h-14 bg-signal rounded-full flex items-center justify-center text-white mb-10">
                     <Archive className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6 text-black group-hover:text-white transition-colors tracking-tighter italic">Signum <br/> Recordings</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-[13px] leading-relaxed mb-12 font-medium">
                     The independent vessel for experimental frequency artifacts since 1996.
                  </p>
                  <Link to="/signum" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 transition-all group-hover:gap-6">
                     Access Label <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-white p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group shadow-lg">
                  <div className="w-14 h-14 bg-signal rounded-full flex items-center justify-center text-white mb-10">
                     <Music className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6 text-black group-hover:text-white transition-colors tracking-tighter italic">Aliases & <br/> Identitities</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-[13px] leading-relaxed mb-12 font-medium">
                     A complete mapping of 24 historical identities and 35 years of output.
                  </p>
                  <Link to="/biography" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 transition-all group-hover:gap-6">
                     View Timeline <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-white p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group md:col-span-2 lg:col-span-1 shadow-lg">
                  <div className="w-14 h-14 bg-signal rounded-full flex items-center justify-center text-white mb-10">
                     <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6 text-black group-hover:text-white transition-colors tracking-tighter italic">Press <br/> Assets</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-[13px] leading-relaxed mb-12 font-medium">
                     High-resolution portraits and professional narrative kits for press use.
                  </p>
                  <Link to="/press" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 transition-all group-hover:gap-6">
                     Download Kits <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Quote Static */}
      <section className="py-48 bg-black text-white text-center w-full shadow-inner">
         <div className="max-w-4xl mx-auto px-6 w-full space-y-12">
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-tight italic mb-12">
               "No Loops. <br className="sm:hidden"/> <span className="text-signal">Just Evolution.</span>"
            </h2>
            <div className="w-32 h-1.5 bg-signal mx-auto mb-12" />
            <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.6em] whitespace-nowrap italic">Operational Center Vught — Netherlands</p>
         </div>
      </section>
    </main>
  );
};

// BIOGRAPHY VIEW - TIMELINE MODE
const BiographyView = () => (
  <main className="pt-56 lg:pt-64 pb-48 bg-white w-full">
    <SEO 
      title="Timeline & Biography" 
      description="The definitive history of Maarten van der Vleuten. A vertical timeline spanning 1987 to 2024, documenting 24 identities." 
    />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start w-full relative">
        
        {/* Vertical Timeline Content */}
        <div className="order-2 lg:order-1 space-y-32 w-full relative">
           
           {/* Visual Timeline Line - Desktop Only */}
           <div className="hidden lg:block absolute left-0 top-[350px] bottom-0 w-px bg-black/10 -ml-16" />

           <div className="space-y-12">
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none italic">EVOLUTION <br/> HISTORY</h1>
              <div className="w-24 h-2 bg-signal" />
              <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic">Timeline 1987 — 2024</p>
           </div>

           <div className="space-y-48 relative">
              
              <section className="space-y-10 group relative">
                 <div className="absolute -left-[68px] top-2 w-2 h-2 bg-signal rounded-full hidden lg:block" />
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2 italic">ERA I: 1987—1991</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors italic">THE SIGNAL ARRIVAL</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    Maarten van der Vleuten (Vught, 1967) emerged in the Dutch underground during the late eighties. He was architecturely involved in the first wave of electronics, with his first official recordings appearing under the name <strong>48V Phantom Power</strong> and <strong>Vandervleuten</strong> in 1987.
                  </p>
                  <p>
                    Based in his studio in Vught, he quickly established a reputation for high-fidelity sound design, contributing to the first wave of European techno and experimental house.
                  </p>
                 </div>
              </section>

              <section className="space-y-10 group relative">
                 <div className="absolute -left-[68px] top-2 w-2 h-2 bg-black rounded-full hidden lg:block" />
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2 italic">ERA II: 1992—1995</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors italic">UNDERGROUND ARCHITECTURE</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    This period marked his international recognition. Under the alias <strong>In-Existence</strong>, he released the seminal ambient work <strong>Moonwater</strong> (1993) on Apollo Records, a sublabel of the legendary R&S.
                  </p>
                  <p>
                    Parallel to his ambient work, he became a core figure in the techno scene as <strong>Flux</strong>, releasing high-intensity works on Djax-Up-Beats and contributing to the evolution of the hardware-driven sound. 
                  </p>
                  <p>
                    By 1995, his discography had already expanded into over 10 different aliases, populating every corner of the electronic spectrum.
                  </p>
                 </div>
              </section>

              <section className="space-y-10 group relative">
                 <div className="absolute -left-[68px] top-2 w-2 h-2 bg-black rounded-full hidden lg:block" />
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2 italic">ERA III: 1996—2007</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors italic">POLYMORPHIC DISCOVERY</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    In 1996, Van der Vleuten founded <strong>Signum Recordings</strong> as a platform for his most experimental and personal artifacts. During this decade, he operated under a massive network of identities—including Pultec, Error 144, and Dj Zero-T.
                  </p>
                  <p>
                    His work spanned from multidisciplinary theater soundscapes to architectural installations, solidifying his role as a sound architect. 
                  </p>
                  <p>
                    In 2002, the release of <strong>Laiad</strong> showcased a move toward more hybrid, acoustic-synthetic soundscapes that would define his later years.
                  </p>
                 </div>
              </section>

              <section className="space-y-10 group relative">
                 <div className="absolute -left-[68px] top-2 w-2 h-2 bg-signal rounded-full hidden lg:block" />
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2 italic">ERA IV: 2008—PRESENT</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors italic">IDENTITY CONSOLIDATION</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    Since 2008, he has consolidated his output primarily under his own name or the initials <strong>MVDV</strong>. The release of <strong>High Intolerance Towards Low Energies</strong> and <strong>The Scars Remain</strong> marked a move toward a more cinematic language.
                  </p>
                  <p>
                    The 2020s have been defined by the <strong>Systematically Declassified</strong> series—an ongoing archival and newly distilled project that documents the complete evolutionary history of his work.
                  </p>
                  <p>
                    Today, in 2024, Maarten remains active from his Vught studio, bridging human emotion and clinical precision through a constant ritual of sonic distillation.
                  </p>
                 </div>
              </section>

              {/* Identity Hub */}
              <section className="pt-32 border-t-8 border-black space-y-20 relative">
                 <div className="space-y-6">
                    <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none italic">THE ALIASES</h2>
                    <p className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase italic">24 Historical Identities Documented</p>
                 </div>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-16">
                    {[
                      "48V Phantom Power", "Flux", "In-Existence", "Vandervleuten",
                      "Dj Zero-T", "Error 144", "Pultec", "Zimt", "Integrity",
                      "Orpheus", "Gangrene", "Cliche", "Cryptic", "G-Force",
                      "Major Malfunction", "Mental Measuretech", "M.V.D.V.",
                      "Neat", "The Nighttripper", "P.A.T.C.H.", "Sinn", "Vlytron"
                    ].map((alias, i) => (
                      <div key={i} className="group cursor-default">
                         <span className="block text-[9px] font-black text-black/10 group-hover:text-signal mb-1">ID #{i+1}</span>
                         <span className="text-xl sm:text-3xl font-black uppercase tracking-tighter text-black/20 group-hover:text-black transition-colors">{alias}</span>
                      </div>
                    ))}
                 </div>
              </section>
           </div>
        </div>

        {/* Sticky Portrait Overlay */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-48 w-full py-8 lg:py-0">
           <div className="relative group overflow-hidden rounded-[3rem] lg:rounded-[4rem] shadow-2xl bg-offwhite aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/maarten.jpg" 
                alt="Maarten van der Vleuten" 
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
              />
              <div className="absolute inset-0 bg-signal/5 opacity-20 pointer-events-none" />
           </div>
           
           <div className="mt-12 bg-offwhite p-12 rounded-[3rem] border border-black/5 space-y-12 shadow-inner">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-signal italic">Master Info</h4>
              <div className="space-y-6 text-[12px] font-bold uppercase tracking-widest text-black/50">
                 <div className="flex justify-between border-b border-black/5 pb-5">
                    <span>Base Station</span>
                    <span className="text-black">Vught, NL</span>
                 </div>
                 <div className="flex justify-between border-b border-black/5 pb-5">
                    <span>Active Since</span>
                    <span className="text-black">1987</span>
                 </div>
                 <div className="flex justify-between border-b border-black/5 pb-5">
                    <span>Aliases</span>
                    <span className="text-black text-signal">24+ Identities</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  </main>
);

// CATALOGUE VIEW
const ArchiveView = () => {
  const releases = [
    { title: "Metamorphism", year: "1991", label: "Djax-Up-Beats", alias: "Flux" },
    { title: "Moonwater", year: "1993", label: "Apollo", alias: "In-Existence" },
    { title: "The Bio-Terminal", year: "1993", label: "ESP", alias: "Dj Zero-T" },
    { title: "Amenity", year: "1994", label: "Djax-Up-Beats", alias: "Flux" },
    { title: "The Art of Frequency", year: "1996", label: "Signum", alias: "Vandervleuten" },
    { title: "Passiflora", year: "1998", label: "Signum", alias: "Vandervleuten" },
    { title: "Laiad", year: "2002", label: "Signum", alias: "In-Existence" },
    { title: "Vow Of Silence", year: "2005", label: "ToneFloat", alias: "In-Existence" },
    { title: "De Verkenningen", year: "2006", label: "Signum", alias: "In-Existence" },
    { title: "High Intolerance...", year: "2008", label: "ToneFloat", alias: "MVDV" },
    { title: "The Scars Remain", year: "2010", label: "ToneFloat", alias: "MVDV" },
    { title: "Are You Worthy?", year: "2012", label: "ToneFloat", alias: "MVDV" },
    { title: "Vught Distillations", year: "2015", label: "MVDV", alias: "MVDV" },
    { title: "I Break The Waves", year: "2018", label: "ToneFloat", alias: "MVDV" },
    { title: "Systematically Declassified", year: "2020", label: "Signum", alias: "MVDV" },
    { title: "Archived Signal Vol 1", year: "2023", label: "MVDV", alias: "MVDV" },
    { title: "Systematic Registry 2", year: "2023", label: "Signum", alias: "MVDV" },
    { title: "Distilled Works", year: "2024", label: "Signum", alias: "MVDV" },
  ];

  return (
    <main className="pt-56 lg:pt-64 pb-48 bg-offwhite w-full">
      <SEO 
        title="Catalogue & Discography" 
        description="Explore the complete catalogue of Maarten van der Vleuten. A chronological archive of frequency artifacts from 1987 to 2024." 
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="mb-32 w-full space-y-12">
           <p className="text-[10px] font-black text-signal uppercase tracking-[0.5em] italic">Full Archive</p>
           <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full italic">ARCHIVE</h1>
           <div className="flex flex-wrap gap-10 font-bold text-[10px] sm:text-[11px] tracking-widest text-black/30 w-full uppercase pt-6">
              <a href="#" className="hover:text-black transition-colors group flex items-center gap-2 italic underline underline-offset-8 decoration-signal/20">Bandcamp <ArrowUpRight className="w-3 h-3"/></a>
              <a href="#" className="hover:text-black transition-colors group flex items-center gap-2 italic underline underline-offset-8 decoration-signal/20">Discogs <ArrowUpRight className="w-3 h-3"/></a>
           </div>
        </div>

        <div className="space-y-6 max-w-5xl w-full">
           {releases.sort((a,b) => b.year - a.year).map((rel, i) => (
             <div key={i} className="bg-white p-8 sm:p-12 rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-lg w-full border border-black/5">
                <div className="flex items-center gap-10 sm:gap-16 min-w-0 flex-1">
                   <div className="shrink-0 flex flex-col items-center">
                      <span className="text-[11px] sm:text-[12px] font-black text-signal font-mono tracking-widest group-hover:text-white transition-colors">{rel.year}</span>
                      <div className="w-1.5 h-10 bg-black/5 group-hover:bg-white/10 mt-3 rounded-full" />
                   </div>
                   <div className="min-w-0 pr-8">
                      <h4 className="text-xl sm:text-3xl font-black uppercase leading-[1.1] mb-2 group-hover:text-white transition-colors truncate tracking-tighter italic">{rel.title}</h4>
                      <p className="text-[11px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.3em] truncate">{rel.alias} — {rel.label}</p>
                   </div>
                </div>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-offwhite text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-2xl pointer-events-none">
                   <ArrowUpRight className="w-6 h-6 sm:w-8 h-8" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
};

// SIGNUM VIEW
const SignumView = () => (
  <main className="pt-56 lg:pt-64 pb-48 bg-white w-full">
    <SEO 
      title="Signum Recordings" 
      description="About Signum Recordings. The independent label for frequency exploration based in Vught, Netherlands since 1996." 
    />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 w-full">
       <div className="space-y-8 w-full">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-black w-full italic">SIGNUM RECORDINGS</h1>
          <p className="text-[10px] sm:text-[12px] font-black text-signal uppercase tracking-[0.5em] w-full border-b-2 border-signal/10 pb-6 inline-block italic">ESTABLISHED 1996 / VUGHT, NETHERLANDS</p>
       </div>
       
       <div className="bg-offwhite p-12 sm:p-20 lg:p-28 rounded-[3rem] lg:rounded-[5rem] border border-black/5 space-y-20 w-full shadow-2xl">
          <div className="space-y-16 max-w-5xl">
            <p className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-black tracking-tighter uppercase italic">
               An independent vessel for <br className="hidden lg:block"/> experimental frequency artifacts.
            </p>
            <div className="space-y-10 text-black/50 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
               <p>
                  Founded in 1996 as a primary label for non-mainstream sound, Signum Recordings bypasses clinical distribution in favor of direct-to-listener signal transmission. It serves as the master archive for the works of Maarten van der Vleuten.
               </p>
               <p>
                  The label operates as a closed loop system—focused on the preservation and distillation of frequency over cultural trends. Every release is an artifact of a specific era of exploration.
               </p>
            </div>
          </div>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-16 py-8 bg-black text-white font-black uppercase tracking-widest text-[12px] rounded-full hover:bg-signal transition-all shadow-2xl">
             ACCESS LABEL SHOP
          </a>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 pt-20 border-t-4 border-black/5 w-full">
          {[
            { label: "Established", val: "1996" },
            { label: "Operation Center", val: "Vught, NL" },
            { label: "Status", val: "Operational" },
            { label: "Distribution", val: "Direct" }
          ].map((item, i) => (
            <div key={i} className="w-full space-y-5">
               <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.5em] truncate italic">{item.label}</p>
               <p className="text-2xl sm:text-3xl font-black uppercase text-black truncate tracking-tighter italic">{item.val}</p>
            </div>
          ))}
       </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-56 lg:pt-64 pb-48 bg-white w-full">
      <SEO 
        title="Press Kit" 
        description="Official media assets and narratives for Maarten van der Vleuten. Access narratives, portraits and wordmarks." 
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 w-full">
         <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full italic">PRESS KIT</h1>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 max-w-5xl w-full">
            {[
               { title: "Story Set", size: "Narratives (NL/EN) & Full Archive Bio" },
               { title: "Visual Assets", size: "High-Resolution Portrait Gallery" },
               { title: "Identity Marks", size: "Scalable Vector Wordmarks & Brand Matrix" },
               { title: "Complete Pack", size: "Consolidated Archive Bundle [.ZIP]" }
            ].map((item, i) => (
              <div key={i} className="p-12 lg:p-16 bg-offwhite rounded-[3rem] flex flex-col items-start justify-between group hover:bg-black hover:text-white transition-all border border-black/5 w-full shadow-2xl">
                 <div className="w-full space-y-4 mb-12">
                    <h3 className="text-3xl font-black uppercase leading-none truncate tracking-tighter italic">{item.title}</h3>
                    <p className="text-[11px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.3em] leading-relaxed">{item.size}</p>
                 </div>
                 <button className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-2xl">
                    <Download className="w-7 h-7" />
                 </button>
              </div>
            ))}
         </div>
      </div>
   </main>
);

// CONTACT VIEW
const ContactView = () => (
  <main className="pt-56 lg:pt-64 pb-48 bg-white w-full">
    <SEO 
      title="Contact" 
      description="Direct communication portal for Maarten van der Vleuten. Cinema scoring, archive inquiries or studio bookings." 
    />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 w-full overflow-hidden">
       <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full italic">CONTACT</h1>
       
       <div className="space-y-40 w-full">
          <div className="space-y-10 w-full font-bold">
             <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic">Direct Transmission</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-2xl sm:text-5xl lg:text-8xl font-black tracking-tighter hover:text-signal transition-colors break-words leading-none uppercase max-w-full inline-block decoration-signal/10 decoration-[12px] underline underline-offset-[16px] italic">
                contact@maartenvandervleuten.eu
             </a>
          </div>

          <div className="space-y-16 w-full font-black">
             <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic">Channels</p>
             <div className="flex flex-wrap gap-12 sm:gap-32 uppercase text-sm sm:text-2xl tracking-tighter w-full">
                <a href="#" className="text-black/30 hover:text-black transition-colors whitespace-nowrap hover:underline underline-offset-[12px] decoration-signal decoration-4">Instagram</a>
                <a href="#" className="text-black/30 hover:text-black transition-colors whitespace-nowrap hover:underline underline-offset-[12px] decoration-signal decoration-4">Bandcamp</a>
                <a href="#" className="text-black/30 hover:text-black transition-colors whitespace-nowrap hover:underline underline-offset-[12px] decoration-signal decoration-4">Discogs</a>
             </div>
          </div>
       </div>
    </div>
  </main>
);

// --- APP CORE ---

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return (
    <HelmetProvider>
      <div className="relative bg-white min-h-screen selection:bg-signal selection:text-white antialiased overflow-x-hidden pt-[112px] sm:pt-[128px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/biography" element={<BiographyView />} />
          <Route path="/archive" element={<ArchiveView />} />
          <Route path="/signum" element={<SignumView />} />
          <Route path="/press" element={<PressView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
