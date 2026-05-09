import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Music, Disc, BookOpen, ExternalLink, 
  ShoppingCart, Mail, Globe, Play, ChevronRight,
  Archive as ArchiveIcon, FileText, ArrowRight, Zap, Download,
  Camera, Newspaper, Calendar, ArrowUpRight,
  ArrowLeft, ArrowRight as ArrowRightIcon,
  PlayCircle, Layers, Database, ShieldCheck
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Components ---

/**
 * SEO & Meta Management
 * Optimized for Google Readability, Social Sharing (OG/Twitter), and Canonical linking.
 */
const SEO = ({ title, description, image = "/maarten.jpg", path = "" }) => {
  const fullTitle = `${title} | Maarten van der Vleuten`;
  const siteUrl = "https://maartenvandervleuten.eu"; // Final domain placeholder
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Safety & Bot Control */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

/**
 * Structured Data (JSON-LD) for SEO Perfection
 * Helps Google understand Maarten as a Person / Artist.
 */
const ArtistSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maarten van der Vleuten",
    "alternateName": ["MVDV", "Flux", "In-Existence"],
    "jobTitle": "Composer, Recording Artist",
    "url": "https://maartenvandervleuten.eu",
    "sameAs": [
      "https://maartenvandervleuten.bandcamp.com/",
      "https://www.discogs.com/artist/11-Maarten-van-der-Vleuten"
    ]
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const LegacyBanner = () => (
  <aside className="bg-signal text-white py-2.5 px-6 text-center relative z-[60] w-full border-b border-white/10" aria-label="Legacy Archive Access">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Looking for the legacy archive?</p>
      <a 
        href="http://www.maartenvandervleuten.com/main.htm" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[11px] font-black uppercase tracking-[0.2em] underline underline-offset-4 hover:opacity-80 transition-opacity flex items-center gap-2"
      >
        Access Old Website <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </a>
    </div>
  </aside>
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all shadow-sm bg-white/95 backdrop-blur-md border-b border-black/5">
      <LegacyBanner />
      <nav className="py-5 sm:py-6 w-full" aria-label="Main Navigation">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase truncate mr-8 focus-visible:outline-signal" aria-label="Home">
            MAARTEN VAN DER VLEUTEN
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-signal whitespace-nowrap focus-visible:outline-signal",
                    location.pathname === link.path ? "text-signal" : "text-black/60"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
                <a 
                href="https://maartenvandervleuten.bandcamp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full text-[11px] font-bold tracking-widest bg-black text-white hover:bg-signal transition-all shadow-lg active:scale-95 focus-visible:outline-signal"
                >
                SHOP
                </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-black hover:text-signal transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="Toggle Menu">
            {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 bg-white z-[60] flex flex-col p-8 sm:p-12 animate-in fade-in duration-300 pointer-events-auto overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
             <span className="font-bold text-black text-[11px] tracking-widest uppercase italic border-b border-signal">Navigation Portal</span>
             <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu" className="hover:rotate-90 transition-transform"><X className="w-6 h-6 text-black" /></button>
          </div>
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl sm:text-4xl font-black text-black border-b border-black/5 pb-4 flex justify-between items-center group hover:text-signal transition-colors italic tracking-tighter"
                >
                    {link.name}
                    <ArrowRight className="w-6 h-6 opacity-10 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-16">
             <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="w-full py-5 bg-black text-white text-center rounded-full text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-signal transition-colors">
               Shop Bandcamp <ExternalLink className="w-3 h-3" aria-hidden="true"/>
             </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-black py-20 sm:py-24 px-6 sm:px-10 lg:px-12 border-t border-black/5 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-black leading-none uppercase tracking-tighter italic">MAARTEN <br/> VAN DER VLEUTEN</h2>
            <p className="text-black/40 text-[12px] font-mono uppercase tracking-[0.1em] leading-relaxed max-w-sm">
              Professional composer and recording artist. Pioneer of the Dutch electronic underground since 1987. Founder of Signum Recordings.
            </p>
          </div>
          
          <div className="space-y-8">
             <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-signal">Navigation</h3>
             <ul className="space-y-4 text-xs sm:text-sm font-bold text-black/40 uppercase tracking-widest">
                <li><Link to="/biography" className="hover:text-black transition-colors focus-visible:outline-signal">Biography</Link></li>
                <li><Link to="/archive" className="hover:text-black transition-colors focus-visible:outline-signal">Archive</Link></li>
                <li><Link to="/signum" className="hover:text-black transition-colors focus-visible:outline-signal">Signum Recordings</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors focus-visible:outline-signal">Contact</Link></li>
             </ul>
          </div>

          <div className="space-y-8">
             <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-signal">Channels</h3>
             <ul className="space-y-4 text-xs sm:text-sm font-bold text-black/40 uppercase tracking-widest">
                <li><a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors focus-visible:outline-signal">Spotify</a></li>
                <li><a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors focus-visible:outline-signal">Bandcamp</a></li>
                <li><a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors focus-visible:outline-signal">Discogs</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] font-bold text-black/20 uppercase tracking-widest">
           <p role="contentinfo">&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
           <div className="flex gap-10 font-mono" aria-label="Origin Metadata">
              <span>EST. 1987</span>
              <span>VUGHT, NL</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

// --- View Layout Wrapper for Page Transitions ---
const PageWrapper = ({ children }) => {
    return (
        <article className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-both">
            {children}
        </article>
    );
};

// --- Page Views ---

const HomeView = () => {
  return (
    <PageWrapper>
      <SEO 
        title="Official Site" 
        description="Official website of Maarten van der Vleuten. Dutch electronic pioneer, composer of cinematic artifacts and experimental frequencies since 1987." 
        path="/"
      />
      <ArtistSchema />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-40 w-full border-b border-black/5 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column */}
            <header className="order-2 lg:order-1 relative z-10 w-full space-y-10">
               <p className="text-[11px] font-bold text-signal uppercase tracking-[0.8em]">COMPOSER / PIONEER</p>
               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-[0.95] tracking-tighter uppercase italic">
                 MAARTEN <br/> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
               </h1>
               <p className="text-black/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
                 A Dutch electronic pioneer for over 35 years. From industrial techno under numerous aliases to refined cinematic scoring and experimental sound design.
               </p>
               <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/biography" className="px-8 py-4 bg-black text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-signal transition-all shadow-xl focus-visible:outline-signal active:scale-95">
                    Evolution History
                  </Link>
                  <Link to="/archive" className="px-8 py-4 border-2 border-black text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all focus-visible:outline-signal active:scale-95">
                    Archive
                  </Link>
               </div>
               
               {/* Quick Social Hub */}
               <div className="flex gap-8 pt-4 items-center" aria-label="Music Platforms">
                  <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal focus-visible:outline-signal" title="Listen on Spotify"><Music className="w-5 h-5" aria-hidden="true"/></a>
                  <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal focus-visible:outline-signal" title="Shop on Bandcamp"><ShoppingCart className="w-5 h-5" aria-hidden="true"/></a>
                  <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal focus-visible:outline-signal" title="Explore on Discogs"><Database className="w-5 h-5" aria-hidden="true"/></a>
               </div>
            </header>

            {/* Right Image Column */}
            <div className="order-1 lg:order-2 w-full relative">
               <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative grayscale group">
                  <img 
                    src="/maarten.jpg" 
                    alt="Maarten van der Vleuten Portrait" 
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-1000"
                    loading="eager"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST RELEASES / SHOP SECTION */}
      <section className="py-24 sm:py-32 bg-offwhite border-b border-black/5" aria-labelledby="latest-releases-heading">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
           <div className="flex flex-col sm:flex-row justify-between items-end gap-10 mb-20">
              <div className="space-y-6">
                 <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">Registry Spotlight</p>
                 <h2 id="latest-releases-heading" className="text-4xl sm:text-5xl font-black uppercase tracking-tighter italic">LATEST <br/> RELEASES.</h2>
              </div>
              <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center text-[11px] font-black uppercase tracking-widest border-b-2 border-signal pb-2 hover:translate-x-2 transition-all group focus-visible:outline-signal">
                Browse Full Shop <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"/>
              </a>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Distilled Works", year: "2024", label: "Signum", imageUrl: null },
                { title: "Systematic Registry 2", year: "2023", label: "Signum", imageUrl: null },
                { title: "The Scars Remain", year: "2010", label: "ToneFloat", imageUrl: null }
              ].map((item, i) => (
                <article key={i} className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all group">
                   <div className="aspect-square bg-offwhite rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={`${item.title} cover art`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      ) : (
                        <Disc className="w-16 h-16 text-black/5 group-hover:scale-110 transition-transform group-hover:rotate-12" aria-hidden="true"/>
                      )}
                      <div className="absolute top-6 right-6 px-3 py-1 bg-black text-white text-[10px] font-black rounded-full italic">{item.year}</div>
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic leading-tight">{item.title}</h3>
                   <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] mb-8">{item.label} Recordings</p>
                   <a href="#" className="w-full py-4 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-signal transition-colors shadow-lg active:scale-95 focus-visible:outline-signal">
                      Buy on Bandcamp <ExternalLink className="w-3 h-3" aria-hidden="true"/>
                   </a>
                </article>
              ))}
           </div>
        </div>
      </section>

       {/* Narrative Section */}
       <section className="py-20 sm:py-24 lg:py-32 bg-white w-full border-b border-black/5" aria-labelledby="methodology-heading">
         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
               <div className="md:col-span-8">
                  <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] mb-10 italic">Methodology</p>
                  <h2 id="methodology-heading" className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-10 italic">
                     Bridging human <br className="hidden sm:block"/> emotion and <br className="hidden sm:block"/> <span className="text-signal">clinical precision.</span>
                  </h2>
                  <div className="space-y-10 text-black/60 text-lg sm:text-xl leading-relaxed font-medium max-w-2xl">
                     <p>
                        Maarten's work transcends simple electronic genres. It's a vertical timeline of discovery—a lifelong ritual of signal distillation and atmospheric architecture.
                     </p>
                     <Link to="/biography" className="inline-flex items-center gap-5 text-black font-black uppercase tracking-widest text-[11px] group border-b-2 border-signal pb-2 transition-all focus-visible:outline-signal">
                        <span>Read full history</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" aria-hidden="true" />
                     </Link>
                  </div>
               </div>
               <div className="md:col-span-4 md:pl-16 md:border-l border-black/5 pt-10 md:pt-4 space-y-10">
                  <div>
                    <h4 className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em] mb-2">Origin Registry</h4>
                    <p className="text-xl font-black uppercase text-black italic">Vught, NL</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em] mb-2">Network Nodes</h4>
                    <p className="text-xl font-black uppercase text-black italic">24+ Identities</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </PageWrapper>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => {
  const eras = [
    {
      id: "01",
      years: "1987—1991",
      title: "THE SIGNAL ARRIVAL",
      description: [
        "Maarten van der Vleuten (Vught, 1967) emerged in the Dutch underground during the late eighties. He was architecturely involved in the first wave of electronics, with his first official recordings appearing under the name <strong>48V Phantom Power</strong> and <strong>Vandervleuten</strong> in 1987.",
        "Establishing a reputation for high-fidelity sound design, he contributed to the first wave of European techno and experimental house from his initial recording sessions."
      ],
      releases: ["48V Phantom Power (1987)", "Vught Sessions (1989)", "Early Waves (1990)"]
    },
    {
      id: "02",
      years: "1992—1995",
      title: "UNDERGROUND ARCHITECTURE",
      description: [
        "This period marked his international recognition. Under the alias <strong>In-Existence</strong>, he released the seminal ambient work <strong>Moonwater</strong> (1993) on Apollo Records, a sublabel of the legendary R&S.",
        "Parallel to his ambient work, he became a core figure in the techno scene as <strong>Flux</strong>, releasing high-intensity works on Djax-Up-Beats and contributing to the evolution of the hardware-driven sound.",
        "By 1995, his discography had already expanded into over 10 different aliases, populating every corner of the electronic spectrum."
      ],
      releases: ["Moonwater (1993)", "Metamorphism (1991)", "Flux Amenity (1994)"]
    },
    {
      id: "03",
      years: "1996—2007",
      title: "POLYMORPHIC DISCOVERY",
      description: [
        "In 1996, Van der Vleuten founded <strong>Signum Recordings</strong> as a platform for his most experimental and personal artifacts. During this decade, he operated under a massive network of identities—including Pultec, Error 144, and Dj Zero-T.",
        "In 2002, the release of <strong>Laiad</strong> showcased a move toward more hybrid, acoustic-synthetic soundscapes that would define his later years."
      ],
      releases: ["Signum 001 (1996)", "Laiad (2002)", "Archive Artifacts (2005)"]
    },
    {
      id: "04",
      years: "2008—PRESENT",
      title: "IDENTITY CONSOLIDATION",
      description: [
        "Since 2008, he has consolidated his output primarily under his own name or the initials <strong>MVDV</strong>. The release of <strong>High Intolerance Towards Low Energies</strong> and <strong>The Scars Remain</strong> marked a move toward a more cinematic language.",
        "Modern artifacts like the <strong>Systematically Declassified</strong> series document the complete evolutionary history of his work.",
        "Maarten remains active through a constant ritual of sonic distillation, bridging human emotion and clinical precision."
      ],
      releases: ["The Scars Remain (2010)", "Systematically Declassified (2020)", "Current Signal (2024)"]
    }
  ];

  return (
    <PageWrapper>
      <SEO 
        title="History & Evolution" 
        description="The definitive history of Maarten van der Vleuten. A vertical editorial ledger documenting 35 years of electronic evolution." 
        path="/biography"
      />
      
      {/* Editorial Header */}
      <header className="pt-48 lg:pt-56 pb-24 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
           <div className="md:col-span-8 space-y-8">
              <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block">Full Historical Ledger</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic">EVOLUTION <br/> HISTORY.</h1>
           </div>
           <div className="md:col-span-4 md:text-right font-mono text-[12px] font-black text-black/20 uppercase tracking-[0.4em] leading-relaxed">
              Base: Vught, NL <br/> Origin: 1987 — 2024
           </div>
        </div>
      </header>

      {/* THE VERTICAL TIMELINE DESIGN */}
      <section className="bg-white w-full">
        {eras.map((era, i) => (
          <article key={i} className="border-b border-black/5 relative hover:bg-offwhite transition-colors duration-700 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-20 sm:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
              
              {/* Sticky Meta Column */}
              <div className="md:col-span-4 md:sticky md:top-40 self-start space-y-8 lg:space-y-10">
                 <header className="flex items-center gap-6">
                    <span className="text-signal text-4xl lg:text-6xl font-black italic">#{era.id}</span>
                    <div className="flex-1 h-px bg-signal/20" />
                 </header>
                 <div className="space-y-3">
                    <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em]">Chronicle Frame</p>
                    <p className="text-xl sm:text-2xl font-black uppercase tracking-tighter italic leading-none">{era.years}</p>
                 </div>
                 <div className="hidden md:block pt-8">
                    <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em] mb-6">Key Registry</p>
                    <ul className="space-y-4">
                       {era.releases.map((rel, j) => (
                         <li key={j} className="text-xs font-bold text-black uppercase tracking-widest flex items-center gap-3 leading-snug lg:text-[13px]">
                            <Disc className="w-3 h-3 text-signal shrink-0" aria-hidden="true" /> {rel}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-8 space-y-10 lg:space-y-12">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] italic">{era.title}</h2>
                 <div className="space-y-8 text-black/70 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-2xl lg:max-w-3xl">
                    {era.description.map((p, j) => (
                      <p key={j} dangerouslySetInnerHTML={{ __html: p }} className="leading-[1.7]" />
                    ))}
                 </div>
                 
                 {/* Mobile release list */}
                 <div className="md:hidden pt-8 border-t border-black/5 space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Registry Nodes</p>
                    <ul className="grid grid-cols-1 gap-4">
                    {era.releases.map((rel, j) => (
                        <li key={j} className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
                            <Disc className="w-3.5 h-3.5 text-signal shrink-0" aria-hidden="true" /> {rel}
                        </li>
                    ))}
                    </ul>
                 </div>
              </div>
            </div>
            {/* Background Graphic */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.02] -z-10 translate-x-1/4 translate-y-1/4">
               <span className="text-[25vw] font-black leading-none italic select-none" aria-hidden="true">#{era.id}</span>
            </div>
          </article>
        ))}
      </section>

      {/* Alias Hub */}
      <section className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full" aria-labelledby="alias-registry-heading">
         <div className="space-y-20 sm:space-y-24">
            <div className="space-y-8 max-w-4xl">
               <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block">Identity Hub</span>
               <h2 id="alias-registry-heading" className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-tight italic">THE ALIASES.</h2>
               <p className="text-black/50 text-lg font-medium leading-relaxed italic max-w-xl">
                  Documenting 24 unique identities across 35 years of frequency artifacts.
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-y-16">
                {[
                  "48V Phantom Power", "Flux", "In-Existence", "Vandervleuten",
                  "Dj Zero-T", "Error 144", "Pultec", "Zimt", "Integrity",
                  "Orpheus", "Gangrene", "Cliche", "Cryptic", "G-Force",
                  "Major Malfunction", "Mental Measuretech", "M.V.D.V.",
                  "Neat", "The Nighttripper", "P.A.T.C.H.", "Sinn", "Vlytron", "Zero"
                ].map((alias, i) => (
                  <div key={i} className="group cursor-default border-t border-black/5 pt-6">
                     <span className="block text-[10px] font-black text-black/20 group-hover:text-signal transition-colors mb-2">NODE #{i+1}</span>
                     <span className="text-base lg:text-lg font-black uppercase tracking-tighter text-black/30 group-hover:text-black transition-colors leading-[1.1]">{alias}</span>
                  </div>
                ))}
            </div>
         </div>
      </section>
    </PageWrapper>
  );
};

// ARCHIVE VIEW
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
    <PageWrapper>
      <SEO title="Archive" description="Complete chronological archive of Maarten van der Vleuten's electronic output since 1987." path="/archive" />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <header className="mb-20 sm:mb-24 w-full space-y-10 focus:outline-none">
           <p className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic">Full Process History</p>
           <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none w-full italic">ARCHIVE.</h1>
           <div className="flex flex-wrap gap-8 sm:gap-10 font-bold text-xs tracking-widest text-black/40 w-full uppercase pt-6">
              <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-signal/20 hover:text-black focus-visible:outline-signal transition-colors">Bandcamp</a>
              <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-signal/20 hover:text-black focus-visible:outline-signal transition-colors">Discogs</a>
           </div>
        </header>

        <section className="grid grid-cols-1 gap-5 max-w-5xl w-full" aria-label="Releases Archive">
           {releases.sort((a,b) => b.year - a.year).map((rel, i) => (
             <article key={i} className="bg-white p-7 sm:p-10 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between group hover:bg-black hover:text-white transition-all shadow-lg w-full border border-black/5 gap-6 sm:gap-10">
                <div className="flex items-center gap-8 sm:gap-12 w-full sm:min-w-0 flex-1">
                   <header className="shrink-0 flex flex-col items-center">
                      <span className="text-[13px] sm:text-[14px] font-black text-signal font-mono tracking-widest group-hover:text-white">{rel.year}</span>
                      <div className="w-1 h-8 bg-black/5 group-hover:bg-white/10 mt-2 rounded-full" aria-hidden="true" />
                   </header>
                   <div className="min-w-0">
                      <h4 className="text-xl sm:text-2xl font-black uppercase leading-[1.2] mb-1.5 group-hover:text-white tracking-tighter italic break-words">{rel.title}</h4>
                      <p className="text-[11px] sm:text-[12px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.2em]">{rel.alias} — {rel.label}</p>
                   </div>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-offwhite text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-2xl">
                   <ArrowUpRight className="w-5 h-5 sm:w-6 h-6" aria-hidden="true" />
                </div>
             </article>
           ))}
        </section>
      </div>
    </PageWrapper>
  );
};

// SIGNUM VIEW
const SignumView = () => (
    <PageWrapper>
        <SEO title="Signum Recordings" description="The independent label for frequency exploration based in Vught, Netherlands since 1996." path="/signum" />
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20 sm:space-y-32">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-black italic">SIGNUM <br/> RECORDINGS.</h1>
                <p className="text-xs sm:text-sm font-black text-signal uppercase tracking-[0.4em] w-full border-b-2 border-signal/10 pb-8 inline-block italic">EST. 1996 / VUGHT, NL</p>
            </div>
            
            {/* LOGO PORTAL SPACE */}
            <aside className="lg:pt-4" aria-label="Label Branding">
                <div className="aspect-square w-full max-w-[280px] sm:max-w-[400px] bg-offwhite border border-black/5 rounded-full flex flex-col items-center justify-center relative overflow-hidden group">
                    <Disc className="w-20 h-20 text-black/5 absolute animate-spin-slow group-hover:text-signal/10 transition-colors" aria-hidden="true" />
                    <div className="text-center relative z-10 px-10">
                        <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-4 italic">Signum Identifier</p>
                        <p className="text-sm font-black uppercase italic text-black/10">[ Reserved for Label Logo ]</p>
                    </div>
                </div>
            </aside>
        </header>
        
        <section className="bg-offwhite p-10 sm:p-16 lg:p-24 rounded-[2.5rem] lg:rounded-[4rem] border border-black/5 space-y-16 shadow-2xl">
            <div className="space-y-12 max-w-5xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-black tracking-tighter uppercase italic">
                An independent vessel for <br className="hidden lg:block"/> experimental artifacts.
                </h2>
                <p className="text-black/50 text-lg sm:text-xl leading-relaxed font-medium max-w-3xl">
                Founded in 1996 as a primary label for non-mainstream sound, Signum Recordings bypasses clinical distribution in favor of direct-to-listener signal transmission.
                </p>
            </div>
            <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex px-10 py-5 bg-black text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-signal transition-all shadow-xl focus-visible:outline-signal active:scale-95">
                ACCESS LABEL SHOP
            </a>
        </section>
        </div>
    </PageWrapper>
);

// PRESS VIEW
const PressView = () => (
    <PageWrapper>
        <SEO title="Press Kit" description="Official media assets and narratives for Maarten van der Vleuten." path="/press" />
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20 sm:space-y-24">
            <header className="flex flex-col sm:flex-row justify-between items-end gap-10">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none italic">PRESS KIT.</h1>
                <Link to="/archive" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-signal hover:border-signal transition-all focus-visible:outline-signal">
                View Full Archive <ArrowRight className="w-3 h-3" aria-hidden="true"/>
                </Link>
            </header>
            <p className="max-w-2xl text-black/50 text-lg font-medium leading-relaxed italic border-l-4 border-signal pl-8">
                To update toolkit material: Upload new artifacts (PDF, High-Res JPG, ZIP) to the <strong>/public/press/</strong> directory and link them in the Registry below.
            </p>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-5xl" aria-label="Downloadable Assets">
                {[
                { title: "Story Set", size: "Narratives (NL/EN) & History", link: "/press/mvdv_biography.pdf" },
                { title: "Visual Assets", size: "High-Resolution Portraits", link: "/press/photogallery.zip" },
                { title: "Identity Marks", size: "Vector Wordmarks [SVG/PNG]", link: "/press/mv_dv_logos.zip" },
                { title: "Complete Pack", size: "Archive Bundle [.ZIP]", link: "/press/mvdv_full_presskit.zip" }
                ].map((item, i) => (
                <a key={i} href={item.link} className="p-10 lg:p-12 bg-offwhite rounded-[2.5rem] flex flex-col items-start justify-between group hover:bg-black hover:text-white transition-all border border-black/5 shadow-2xl focus-visible:outline-signal active:scale-95">
                    <div className="w-full space-y-4 mb-10">
                        <h3 className="text-3xl font-black uppercase leading-none tracking-tighter italic">{item.title}</h3>
                        <p className="text-xs font-bold text-black/40 group-hover:text-white/40 uppercase tracking-[0.2em] leading-relaxed">{item.size}</p>
                    </div>
                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-2xl">
                        <Download className="w-6 h-6" aria-hidden="true" />
                    </div>
                </a>
                ))}
            </section>
        </div>
    </PageWrapper>
);

// CONTACT VIEW
const ContactView = () => (
    <PageWrapper>
        <SEO title="Contact" description="Direct communication portal for Maarten van der Vleuten." path="/contact" />
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20 sm:space-y-24 overflow-hidden">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">CONTACT.</h1>
        <article className="space-y-24 sm:space-y-28 w-full">
            <header className="space-y-10 w-full">
                <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none">Direct Connection</p>
                <a href="mailto:contact@maartenvandervleuten.eu" className="text-xl sm:text-3xl lg:text-5xl font-black tracking-tighter hover:text-signal transition-colors break-all leading-[1.1] uppercase max-w-full inline-block decoration-signal/20 decoration-[6px] underline underline-offset-[12px] italic lg:underline-offset-[16px] lg:decoration-[10px] focus-visible:outline-signal">
                    contact@maartenvandervleuten.eu
                </a>
            </header>
            
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-black/5" aria-label="Social and External Channels">
                <div>
                    <h3 className="text-[11px] font-black uppercase text-black/20 tracking-[0.4em] mb-6 italic leading-none">Distilled Listen</h3>
                    <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-black uppercase italic hover:text-signal transition-colors focus-visible:outline-signal">
                        <Music className="w-5 h-5" aria-hidden="true"/> Spotify
                    </a>
                </div>
                <div>
                    <h3 className="text-[11px] font-black uppercase text-black/20 tracking-[0.4em] mb-6 italic leading-none">Label Registry</h3>
                    <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-black uppercase italic hover:text-signal transition-colors focus-visible:outline-signal">
                        <Database className="w-5 h-5" aria-hidden="true"/> Discogs
                    </a>
                </div>
                <div>
                    <h3 className="text-[11px] font-black uppercase text-black/20 tracking-[0.4em] mb-6 italic leading-none">Studio Shop</h3>
                    <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-black uppercase italic hover:text-signal transition-colors focus-visible:outline-signal">
                        <ShoppingCart className="w-5 h-5" aria-hidden="true"/> Bandcamp
                    </a>
                </div>
                <div>
                    <h3 className="text-[11px] font-black uppercase text-black/20 tracking-[0.4em] mb-6 italic leading-none">Visual Portal</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-black uppercase italic hover:text-signal transition-colors focus-visible:outline-signal">
                        <Camera className="w-5 h-5" aria-hidden="true"/> Instagram
                    </a>
                </div>
            </section>
        </article>
        </div>
    </PageWrapper>
);

// --- APP CORE ---

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <HelmetProvider>
      <div className="relative bg-white min-h-screen selection:bg-signal selection:text-white antialiased overflow-x-hidden pt-[130px] sm:pt-[150px]">
        <header>
            <Navbar />
        </header>
        <main id="main-content">
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/biography" element={<BiographyView />} />
                <Route path="/archive" element={<ArchiveView />} />
                <Route path="/signum" element={<SignumView />} />
                <Route path="/press" element={<PressView />} />
                <Route path="/contact" element={<ContactView />} />
            </Routes>
        </main>
        <Footer />
        <div className="fixed bottom-8 right-8 z-[100] pointer-events-none opacity-20 hidden lg:block" aria-hidden="true">
            <ShieldCheck className="w-6 h-6 text-black"/>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
