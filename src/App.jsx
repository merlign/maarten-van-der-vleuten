import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Music, Disc, BookOpen, ExternalLink, 
  ShoppingCart, Mail, Globe, Play, ChevronRight,
  Archive, FileText, ArrowRight, Zap, Download,
  Camera, Newspaper, Calendar, ArrowUpRight,
  ArrowLeft, ArrowRight as ArrowRightIcon
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
  <div className="bg-signal text-white py-2 sm:py-3 px-6 text-center relative z-[60] w-full border-b border-white/10">
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
                        Maarten's work transcends simple electronic genres. It's a vertical timeline of discovery—a lifelong ritual of signal distillation and atmospheric architecture.
                     </p>
                     <Link to="/biography" className="inline-flex items-center gap-6 text-black font-black uppercase tracking-widest text-[10px] group border-b-2 border-signal pb-2 transition-all">
                        <span>Read full history</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                     </Link>
                  </div>
               </div>
               <div className="lg:col-span-4 lg:pl-16 border-l border-black/5 pt-12 lg:pt-5 space-y-12">
                  <div>
                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-3">Origin</p>
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
    </main>
  );
};

// NEW BIOGRAPHY VIEW - STICKY VERTICAL LEDGER DESIGN
const BiographyView = () => {
  const eras = [
    {
      id: "01",
      years: "1987—1991",
      title: "THE SIGNAL ARRIVAL",
      description: [
        "Maarten van der Vleuten emerged in the Dutch electronic underground in 1987. His initial works under masks such as <strong>48V Phantom Power</strong> and <strong>Vandervleuten</strong> signaled the arrival of a producer focused on the architecture of sound rather than the trends of the dance floor.",
        "Operating from a meticulously tuned studio environment, he contributed to the first waves of European techno, establishing a high-fidelity aesthetic that would remain his signature for over three decades."
      ],
      releases: ["48V Phantom Power (1987)", "Vught Sessions (1989)", "Early Waves (1990)"]
    },
    {
      id: "02",
      years: "1992—1995",
      title: "UNDERGROUND ARCHITECTURE",
      description: [
        "International recognition followed with the seminal ambient work <strong>Moonwater</strong> (1993) on Apollo/R&S. This era saw a polymorphic expansion of his output, defining the sound of the hardware-driven underground.",
        "As <strong>Flux</strong>, he pushed the boundaries of high-intensity techno on labels like Djax-Up-Beats, while his alias network grew to document every frequency within the electronic spectrum."
      ],
      releases: ["Moonwater (1993)", "Metamorphism (1991)", "Flux Amenity (1994)"]
    },
    {
      id: "03",
      years: "1996—2007",
      title: "POLYMORPHIC DISCOVERY",
      description: [
        "The founding of <strong>Signum Recordings</strong> in 1996 provided a permanent vessel for his most experimental artifacts. This decade was defined by a massive network of identities documenting multidisciplinary explorations.",
        "His work moved into theater soundscapes and architectural installations, culminating in the acoustic-synthetic hybrid soundscapes of <strong>Laiad</strong> in 2002."
      ],
      releases: ["Signum 001 (1996)", "Laiad (2002)", "Archive Artifacts (2005)"]
    },
    {
      id: "04",
      years: "2008—PRESENT",
      title: "IDENTITY CONSOLIDATION",
      description: [
        "In the modern era, Maarten has consolidated his output under his own name and the <strong>MVDV</strong> initials. His recent works explore a more cinematic, distilled language focused on the human-emotional spectrum.",
        "The ongoing <strong>Systematically Declassified</strong> series serves as a definitive archival project, bridging the gap between his pioneer roots and his contemporary sonic methodology."
      ],
      releases: ["The Scars Remain (2010)", "Systematically Declassified (2020)", "Current Signal (2024)"]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <SEO 
        title="History & Evolution" 
        description="The definitive history of Maarten van der Vleuten. A vertical editorial ledger documenting 35 years of electronic evolution." 
      />
      
      {/* Editorial Header */}
      <header className="pt-56 lg:pt-64 pb-32 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
           <div className="lg:col-span-8 space-y-12">
              <span className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic">Full Historical Ledger</span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic">EVOLUTION <br/> HISTORY.</h1>
           </div>
           <div className="lg:col-span-4 lg:text-right font-mono text-[11px] font-black text-black/20 uppercase tracking-[0.4em]">
              Vught, Netherlands <br/> 1987 — 2024
           </div>
        </div>
      </header>

      {/* THE NEW VERTICAL TIMELINE DESIGN */}
      <section className="bg-white">
        {eras.map((era, i) => (
          <div key={i} className="border-b border-black/5 relative hover:bg-offwhite transition-colors duration-700">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-32 lg:py-48 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
              
              {/* Sticky Meta Column */}
              <div className="lg:col-span-4 lg:sticky lg:top-48 self-start space-y-12">
                 <div className="flex items-center gap-6">
                    <span className="text-signal text-5xl lg:text-7xl font-black italic">{era.id}</span>
                    <div className="w-12 h-px bg-signal/30" />
                 </div>
                 <div className="space-y-4">
                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.6em]">Era Frame</p>
                    <p className="text-2xl font-black uppercase tracking-tighter italic">{era.years}</p>
                 </div>
                 <div className="hidden lg:block pt-12">
                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.6em] mb-8">Key Release Registry</p>
                    <ul className="space-y-4">
                       {era.releases.map((rel, j) => (
                         <li key={j} className="text-[11px] font-bold text-black uppercase tracking-widest flex items-center gap-3">
                            <Disc className="w-3 h-3 text-signal" /> {rel}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-8 space-y-16">
                 <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none italic">{era.title}</h2>
                 <div className="space-y-10 text-black/60 text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium max-w-4xl">
                    {era.description.map((p, j) => (
                      <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                 </div>
                 <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-black/5">
                    <div>
                       <p className="text-[9px] font-black uppercase tracking-widest text-black/20 mb-4">Registry Nodes</p>
                       <ul className="space-y-3">
                        {era.releases.map((rel, j) => (
                          <li key={j} className="text-[10px] font-bold uppercase tracking-widest">{rel}</li>
                        ))}
                       </ul>
                    </div>
                 </div>
              </div>
            </div>
            {/* Background Graphic */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.02] -z-10">
               <span className="text-[40vw] font-black leading-none italic select-none">#{era.id}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Alias Hub */}
      <section className="py-48 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
         <div className="space-y-32">
            <div className="space-y-8 max-w-4xl">
               <span className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic">Identity Registry</span>
               <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-tight italic">THE <br className="sm:hidden"/> ALIASES.</h2>
               <p className="text-black/40 text-lg font-medium leading-relaxed italic">
                  Documenting 24 unique identities across 35 years of frequency artifacts.
               </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
                {[
                  "48V Phantom Power", "Flux", "In-Existence", "Vandervleuten",
                  "Dj Zero-T", "Error 144", "Pultec", "Zimt", "Integrity",
                  "Orpheus", "Gangrene", "Cliche", "Cryptic", "G-Force",
                  "Major Malfunction", "Mental Measuretech", "M.V.D.V.",
                  "Neat", "The Nighttripper", "P.A.T.C.H.", "Sinn", "Vlytron", "Zero"
                ].map((alias, i) => (
                  <div key={i} className="group cursor-default border-t border-black/5 pt-8">
                     <span className="block text-[9px] font-black text-black/10 group-hover:text-signal transition-colors mb-2">NODE #{i+1}</span>
                     <span className="text-lg lg:text-xl font-black uppercase tracking-tighter text-black/30 group-hover:text-black transition-colors">{alias}</span>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* Visual Break / CTAs */}
      <section className="bg-black py-48 w-full shadow-inner overflow-hidden relative">
         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-tight italic">
                    Access the <br/> complete <br className="hidden sm:block"/> <span className="text-signal text-5xl sm:text-7xl">media kit.</span>
                  </h3>
                  <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.4em] italic mb-12">Narrative nodes & visual artifacts for publication</p>
                  <Link to="/press" className="inline-flex px-12 py-6 bg-signal text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                    Download Kit
                  </Link>
               </div>
               <div className="aspect-square bg-white/5 rounded-full blur-3xl absolute -right-48 -top-48 w-[40rem] -z-10" />
            </div>
         </div>
      </section>
    </main>
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
    <main className="pt-56 lg:pt-64 pb-48 bg-offwhite w-full">
      <SEO title="Archive" description="Complete chronological archive of Maarten van der Vleuten's electronic output since 1987." />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="mb-32 w-full space-y-12">
           <p className="text-[10px] font-black text-signal uppercase tracking-[0.5em] italic">Full History</p>
           <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full italic">ARCHIVE</h1>
           <div className="flex flex-wrap gap-10 font-bold text-[10px] sm:text-[11px] tracking-widest text-black/30 w-full uppercase pt-6">
              <span className="italic underline underline-offset-8 decoration-signal/20 cursor-pointer">Bandcamp</span>
              <span className="italic underline underline-offset-8 decoration-signal/20 cursor-pointer">Discogs</span>
           </div>
        </div>

        <div className="space-y-6 max-w-5xl w-full">
           {releases.sort((a,b) => b.year - a.year).map((rel, i) => (
             <div key={i} className="bg-white p-8 sm:p-12 rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-lg w-full border border-black/5">
                <div className="flex items-center gap-10 sm:gap-16 min-w-0 flex-1">
                   <div className="shrink-0 flex flex-col items-center">
                      <span className="text-[11px] sm:text-[12px] font-black text-signal font-mono tracking-widest group-hover:text-white">{rel.year}</span>
                      <div className="w-1.5 h-10 bg-black/5 group-hover:bg-white/10 mt-3 rounded-full" />
                   </div>
                   <div className="min-w-0 pr-8">
                      <h4 className="text-xl sm:text-3xl font-black uppercase leading-[1.1] mb-2 group-hover:text-white truncate tracking-tighter italic">{rel.title}</h4>
                      <p className="text-[11px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.3em] truncate">{rel.alias} — {rel.label}</p>
                   </div>
                </div>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-offwhite text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-2xl">
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
    <SEO title="Signum Recordings" description="The independent label for frequency exploration based in Vught, Netherlands since 1996." />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32">
       <div className="space-y-8 w-full">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-black italic">SIGNUM RECORDINGS</h1>
          <p className="text-[10px] sm:text-[12px] font-black text-signal uppercase tracking-[0.5em] w-full border-b-2 border-signal/10 pb-6 inline-block italic">ESTABLISHED 1996 / VUGHT, NL</p>
       </div>
       
       <div className="bg-offwhite p-12 sm:p-20 lg:p-28 rounded-[3rem] lg:rounded-[5rem] border border-black/5 space-y-20 shadow-2xl">
          <div className="space-y-16 max-w-5xl">
            <p className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-black tracking-tighter uppercase italic">
               An independent vessel for <br className="hidden lg:block"/> experimental frequency artifacts.
            </p>
            <p className="text-black/50 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
               Founded in 1996 as a primary label for non-mainstream sound, Signum Recordings bypasses clinical distribution in favor of direct-to-listener signal transmission.
            </p>
          </div>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-16 py-8 bg-black text-white font-black uppercase tracking-widest text-[12px] rounded-full hover:bg-signal transition-all shadow-2xl">
             ACCESS LABEL SHOP
          </a>
       </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-56 lg:pt-64 pb-48 bg-white w-full">
      <SEO title="Press Kit" description="Official media assets and narratives for Maarten van der Vleuten." />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32">
         <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">PRESS KIT</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl">
            {[
               { title: "Story Set", size: "Narratives (NL/EN) & Full History" },
               { title: "Visual Assets", size: "High-Resolution Portrait Gallery" },
               { title: "Identity Marks", size: "Vector Wordmarks [SVG/PNG]" },
               { title: "Complete Pack", size: "Archive Bundle [.ZIP]" }
            ].map((item, i) => (
              <div key={i} className="p-12 lg:p-16 bg-offwhite rounded-[3rem] flex flex-col items-start justify-between group hover:bg-black hover:text-white transition-all border border-black/5 shadow-2xl">
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
    <SEO title="Contact" description="Direct communication portal for Maarten van der Vleuten." />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 overflow-hidden">
       <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">CONTACT</h1>
       <div className="space-y-40 w-full">
          <div className="space-y-10 w-full">
             <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic">Direct Signal Transmission</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-2xl sm:text-5xl lg:text-8xl font-black tracking-tighter hover:text-signal transition-colors break-words leading-none uppercase max-w-full inline-block decoration-signal/10 decoration-[12px] underline underline-offset-[16px] italic">
                contact@maartenvandervleuten.eu
             </a>
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
