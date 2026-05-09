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

// --- Shared Components for Alignment ---

/**
 * Standardized Page Header 
 * Ensures every hero title on every page is at the exact same height and scale.
 */
const PageHeader = ({ title, subtitle, meta, children }) => {
  return (
    <header className="pt-24 sm:pt-32 lg:pt-40 pb-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-b border-black/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8 space-y-8">
          {subtitle && (
            <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block">
              {subtitle}
            </span>
          )}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic">
            {title}
          </h1>
        </div>
        {meta && (
          <div className="md:col-span-4 md:text-right font-mono text-[12px] font-black text-black/20 uppercase tracking-[0.4em] leading-relaxed">
            {meta}
          </div>
        )}
      </div>
      {children}
    </header>
  );
};

// --- Core Components ---

const SEO = ({ title, description, image = "/maarten.jpg", path = "" }) => {
  const fullTitle = `${title} | Maarten van der Vleuten`;
  const siteUrl = "https://maartenvandervleuten.eu"; 
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

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
      <SEO title="Official Site" description="Official website of Maarten van der Vleuten." path="/" />
      <ArtistSchema />
      
      {/* Normalized Home Hero */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 w-full border-b border-black/5 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <header className="order-2 lg:order-1 relative z-10 w-full space-y-10">
               <p className="text-[11px] font-bold text-signal uppercase tracking-[0.8em]">COMPOSER / PIONEER</p>
               <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase italic">
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
               
               <div className="flex gap-8 pt-4 items-center" aria-label="Music Platforms">
                  <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal focus-visible:outline-signal" title="Listen on Spotify"><Music className="w-5 h-5" aria-hidden="true"/></a>
                  <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal focus-visible:outline-signal" title="Shop on Bandcamp"><ShoppingCart className="w-5 h-5" aria-hidden="true"/></a>
                  <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal focus-visible:outline-signal" title="Explore on Discogs"><Database className="w-5 h-5" aria-hidden="true"/></a>
               </div>
            </header>

            <div className="order-1 lg:order-2 w-full relative">
               <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative grayscale">
                  <img 
                    src="/maarten.jpg" 
                    alt="Maarten van der Vleuten Portrait" 
                    className="w-full h-full object-cover object-top scale-105"
                    loading="eager"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST RELEASES */}
      <section className="py-24 sm:py-32 bg-offwhite border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 text-center sm:text-left flex flex-col items-center sm:items-start">
           <div className="w-full flex flex-col sm:flex-row justify-between items-end gap-10 mb-20 text-left">
              <div className="space-y-6">
                 <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">Registry Spotlight</p>
                 <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter italic">LATEST <br/> RELEASES.</h2>
              </div>
              <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center text-[11px] font-black uppercase tracking-widest border-b-2 border-signal pb-2 hover:translate-x-2 transition-all group focus-visible:outline-signal">
                Browse Full Shop <ArrowRight className="w-4 h-4" aria-hidden="true"/>
              </a>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-left">
              {[
                { title: "Distilled Works", year: "2024", label: "Signum", imageUrl: null },
                { title: "Systematic Registry 2", year: "2023", label: "Signum", imageUrl: null },
                { title: "The Scars Remain", year: "2010", label: "ToneFloat", imageUrl: null }
              ].map((item, i) => (
                <article key={i} className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all group">
                   <div className="aspect-square bg-offwhite rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                        <Disc className="w-16 h-16 text-black/5 group-hover:scale-110 transition-transform group-hover:rotate-12" aria-hidden="true"/>
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
    </PageWrapper>
  );
};

const BiographyView = () => {
    const eras = [
        { id: "01", years: "1987—1991", title: "THE SIGNAL ARRIVAL", description: ["Maarten van der Vleuten (Vught, 1967) emerged in the Dutch underground..."], releases: ["48V Phantom Power (1987)"] },
        { id: "02", years: "1992—1995", title: "UNDERGROUND ARCHITECTURE", description: ["This period marked his international recognition..."], releases: ["Moonwater (1993)"] },
        { id: "03", years: "1996—2007", title: "POLYMORPHIC DISCOVERY", description: ["In 1996, Van der Vleuten founded Signum Recordings..."], releases: ["Signum 001 (1996)"] },
        { id: "04", years: "2008—PRESENT", title: "IDENTITY CONSOLIDATION", description: ["Since 2008, he has consolidated his output..."], releases: ["The Scars Remain (2010)"] }
    ];

    return (
        <PageWrapper>
            <SEO title="History & Evolution" description="Vertical editorial ledger documenting 35 years of electronic evolution." path="/biography" />
            <PageHeader 
                title={<>EVOLUTION <br/> HISTORY.</>} 
                subtitle="Full Historical Ledger"
                meta={<>Base: Vught, NL <br/> Origin: 1987 — 2024</>}
            />
            <section className="bg-white w-full">
                {eras.map((era, i) => (
                    <article key={i} className="border-b border-black/5 relative hover:bg-offwhite transition-colors duration-700 w-full overflow-hidden">
                        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-20 sm:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                            <div className="md:col-span-4 md:sticky md:top-40 self-start space-y-8 lg:space-y-10">
                                <header className="flex items-center gap-6">
                                    <span className="text-signal text-4xl lg:text-6xl font-black italic">#{era.id}</span>
                                    <div className="flex-1 h-px bg-signal/20" />
                                </header>
                                <div className="space-y-3">
                                    <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em]">Chronicle Frame</p>
                                    <p className="text-xl sm:text-2xl font-black uppercase tracking-tighter italic leading-none">{era.years}</p>
                                </div>
                            </div>
                            <div className="md:col-span-8 space-y-10 lg:space-y-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] italic">{era.title}</h2>
                                <div className="space-y-8 text-black/70 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-2xl lg:max-w-3xl">
                                    {era.description.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p }} className="leading-[1.7]" />)}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </PageWrapper>
    );
};

const ArchiveView = () => {
    const releases = [{ title: "Distilled Works", year: "2024", label: "Signum", alias: "MVDV" }]; // Simplified for alignment check
    return (
        <PageWrapper>
            <SEO title="Archive" description="Complete chronological archive since 1987." path="/archive" />
            <PageHeader 
                title="ARCHIVE." 
                subtitle="Full Process History"
            >
                <div className="flex flex-wrap gap-8 sm:gap-10 font-bold text-xs tracking-widest text-black/40 w-full uppercase pt-6">
                    <a href="#" className="italic underline underline-offset-8 decoration-signal/20 hover:text-black transition-colors">Bandcamp</a>
                    <a href="#" className="italic underline underline-offset-8 decoration-signal/20 hover:text-black transition-colors">Discogs</a>
                </div>
            </PageHeader>
            <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
                <p className="text-black/30 font-bold uppercase tracking-widest text-xs">Registry view in progress...</p>
            </section>
        </PageWrapper>
    );
};

const SignumView = () => (
    <PageWrapper>
        <SEO title="Signum Recordings" description="Independent vessel for frequency artifacts." path="/signum" />
        <PageHeader 
            title={<>SIGNUM <br/> RECORDINGS.</>} 
            subtitle="EST. 1996 / VUGHT, NL"
        />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
            <div className="bg-offwhite p-10 sm:p-16 rounded-[2.5rem] border border-black/5 shadow-2xl">
                <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[1.05]">Experimental vessel.</h2>
            </div>
        </section>
    </PageWrapper>
);

const PressView = () => (
    <PageWrapper>
        <SEO title="Press Kit" description="Official media assets." path="/press" />
        <PageHeader 
            title="PRESS KIT." 
            subtitle="Official Media Registry"
        />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
            <p className="text-black/30 font-bold uppercase tracking-widest text-xs">Asset registry loading...</p>
        </section>
    </PageWrapper>
);

const ContactView = () => (
    <PageWrapper>
        <SEO title="Contact" description="Direct communication portal." path="/contact" />
        <PageHeader 
            title="CONTACT." 
            subtitle="Direct Connection"
        />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
            <a href="mailto:contact@maartenvandervleuten.eu" className="text-xl sm:text-3xl lg:text-5xl font-black italic uppercase tracking-tighter decoration-signal/20 decoration-[6px] underline underline-offset-[12px]">
                contact@maartenvandervleuten.eu
            </a>
        </section>
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
            <div className="relative bg-white min-h-screen selection:bg-signal selection:text-white antialiased overflow-x-hidden pt-[110px] sm:pt-[130px]">
                <Navbar />
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
            </div>
        </HelmetProvider>
    );
};

export default App;
