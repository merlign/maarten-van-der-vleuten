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
        <div className="md:hidden fixed inset-0 bg-white z-[60] flex flex-col p-10 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-16">
             <span className="font-bold text-black text-sm tracking-widest uppercase italic">The Registry</span>
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
      {/* Refined Splitted Hero */}
      <section className="relative py-24 sm:py-32 lg:py-48 w-full border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">
            
            {/* Left Content Column */}
            <div className="order-2 lg:order-1 relative z-10 w-full space-y-12">
               <p className="text-[10px] font-bold text-signal uppercase tracking-[0.8em]">COMPOSER / PIONEER</p>
               <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black leading-[0.95] tracking-tighter uppercase">
                 MAARTEN <br/> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
               </h1>
               <p className="text-black/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
                 A Dutch electronic pioneer for over 35 years. From industrial techno under numerous aliases to refined cinematic scoring and experimental sound design.
               </p>
               <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/biography" className="px-10 py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-all shadow-xl">
                    Biography
                  </Link>
                  <Link to="/archive" className="px-10 py-5 border-2 border-black text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Full Archive
                  </Link>
               </div>
            </div>

            {/* Right Image Column */}
            <div className="order-1 lg:order-2 w-full relative">
               <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative grayscale">
                  <img 
                    src="/maarten.jpg" 
                    alt="Maarten van der Vleuten" 
                    className="w-full h-full object-cover object-top scale-105"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
                  />
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40" />
               </div>
               <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-signal/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Output - Latest Release */}
      <section className="py-24 sm:py-32 lg:py-48 bg-white w-full border-b border-black/5">
         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
               <div className="lg:col-span-6 order-2 lg:order-1 space-y-12 w-full">
                  <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Current Project</p>
                  <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none w-full">Systematically <br className="hidden sm:block"/> Declassified.</h2>
                  <p className="text-black/50 text-lg sm:text-xl leading-relaxed font-medium w-full">
                    The ongoing series documenting the evolution of frequency and signal. A curated collection of archived artifacts and newly distilled compositions. High-fidelity electronics direct from Vught.
                  </p>
                  <div className="pt-6">
                    <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="px-12 py-6 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-all shadow-2xl inline-block">
                      LISTEN ON BANDCAMP
                    </a>
                  </div>
               </div>
               <div className="lg:col-span-6 order-1 lg:order-2 w-full">
                  <div className="aspect-square w-full max-w-lg mx-auto bg-offwhite p-0 rounded-[3rem] lg:rounded-[4rem] shadow-2xl relative overflow-hidden group">
                     <img 
                       src="/maarten.jpg" 
                       className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000" 
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Quotes & Philosophy */}
      <section className="py-24 sm:py-32 lg:py-40 bg-black text-white text-center w-full shadow-inner">
         <div className="max-w-4xl mx-auto px-6 w-full space-y-12">
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-tight italic mb-12 w-full">
               "No Loops. <br className="sm:hidden"/> <span className="text-signal">Just Evolution.</span>"
            </h2>
            <div className="w-32 h-1.5 bg-signal mx-auto mb-12" />
            <p className="text-white/20 text-[11px] font-bold uppercase tracking-[0.6em] whitespace-nowrap italic">Vught, Netherlands — Signal Center</p>
         </div>
      </section>

      {/* Grid: Nav Cards */}
      <section className="py-24 sm:py-40 w-full bg-white">
         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
               <div className="bg-offwhite p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group w-full shadow-sm">
                  <div className="w-14 h-14 bg-signal rounded-full flex items-center justify-center text-white mb-10">
                     <Archive className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6 w-full text-black group-hover:text-white transition-colors">Signum <br/> Recordings</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-[13px] leading-relaxed mb-12 w-full font-medium">
                     The independent node founded in 1996 for non-mainstream frequency artifacts.
                  </p>
                  <Link to="/signum" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 transition-all group-hover:gap-6">
                     Access Label <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-offwhite p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group w-full shadow-sm">
                  <div className="w-14 h-14 bg-signal rounded-full flex items-center justify-center text-white mb-10">
                     <Music className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6 w-full text-black group-hover:text-white transition-colors">The Alias <br/> Network</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-[13px] leading-relaxed mb-12 w-full font-medium">
                     A complete registry of over 24 identities reflecting his 35-year sonic career.
                  </p>
                  <Link to="/biography" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 transition-all group-hover:gap-6">
                     View Registry <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-offwhite p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group md:col-span-2 lg:col-span-1 w-full shadow-sm">
                  <div className="w-14 h-14 bg-signal rounded-full flex items-center justify-center text-white mb-10">
                     <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6 w-full text-black group-hover:text-white transition-colors">Press & <br/> Assets</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-[13px] leading-relaxed mb-12 w-full font-medium">
                     High-resolution portraits and official professional narrative notes.
                  </p>
                  <Link to="/press" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 transition-all group-hover:gap-6">
                     Download <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-56 lg:pt-64 pb-48 bg-white w-full">
    <SEO 
      title="Biography" 
      description="The definitive history of Maarten van der Vleuten. From the early days of 48V Phantom Power and Flux to the current MVDV distillation." 
    />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start w-full">
        
        {/* Biography Content */}
        <div className="order-2 lg:order-1 space-y-32 w-full">
           <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">BIOGRAPHY</h1>
              <div className="w-24 h-2 bg-signal" />
           </div>

           <div className="space-y-32">
              <section className="space-y-10 group">
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2">ERA I: 1967—1991</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors">THE SIGNAL ARRIVAL</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    Maarten van der Vleuten (Vught, 1967) emerged in the Dutch underground during the late eighties. He was architecturely involved in the first wave of electronics, with his first official recordings appearing under the name <strong>48V Phantom Power</strong> in 1987.
                  </p>
                  <p>
                    Based in his studio in Vught, he quickly established a reputation for high-fidelity sound design, contributing to the first wave of European techno and experimental house.
                  </p>
                 </div>
              </section>

              <section className="space-y-10 group">
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2">ERA II: 1992—1995</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors">UNDERGROUND ARCHITECTURE</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    This period marked his international recognition. Under the alias <strong>In-Existence</strong>, he released the seminal ambient work <strong>Moonwater</strong> (1993) on Apollo Records, a sublabel of the legendary R&S.
                  </p>
                  <p>
                    Parallel to his ambient work, he became a core figure in the techno scene as <strong>Flux</strong>, releasing high-intensity works on Djax-Up-Beats and contributing to the evolution of the hardware-driven sound.
                  </p>
                 </div>
              </section>

              <section className="space-y-10 group">
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2">ERA III: 1996—2007</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors">POLYMORPHIC DISCOVERY</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    In 1996, Van der Vleuten founded <strong>Signum Recordings</strong> as a platform for his most experimental and personal artifacts. During this decade, he operated under over 24 different identities—including Vandervleuten, Pultec, and Error 144—populating the catalogs of Klang Elektronik and See Saw.
                  </p>
                  <p>
                    His work spanned from multidisciplinary theater soundscapes to architectural installations, solidifying his role as a sound architect rather than just a music producer.
                  </p>
                 </div>
              </section>

              <section className="space-y-10 group">
                 <span className="text-signal font-mono text-[11px] font-black tracking-[0.5em] uppercase border-b-2 border-signal/20 pb-2">ERA IV: 2008—PRESENT</span>
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-signal transition-colors">IDENTITY CONSOLIDATION</h3>
                 <div className="space-y-8 text-black/60 text-lg sm:text-xl leading-relaxed font-medium">
                  <p>
                    In 2008, he announced a pivot to release exclusively under his own name or the initials <strong>MVDV</strong>. The release of <strong>High Intolerance Towards Low Energies</strong> marked a move toward a more cinematic, mature, and conceptually driven sonic language.
                  </p>
                  <p>
                    Today, his work focuses on distilled compositions and audio archives, continuing to bridge the gap between human emotion and clinical precision from his home base in Vught.
                  </p>
                 </div>
              </section>

              {/* The Alias Registry */}
              <section className="pt-24 border-t-4 border-black space-y-16">
                 <div className="space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">THE ALIAS <br/> NETWORK</h2>
                    <p className="text-signal font-mono text-[11px] font-black tracking-[0.4em] uppercase">24 Registry Nodes Documented</p>
                 </div>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
                    {[
                      "48V Phantom Power", "Flux", "In-Existence", "Vandervleuten",
                      "Dj Zero-T", "Error 144", "Pultec", "Zimt", "Integrity",
                      "Orpheus", "Gangrene", "Cliche", "Cryptic", "G-Force",
                      "Major Malfunction", "Mental Measuretech", "M.V.D.V.",
                      "Neat", "The Nighttripper", "P.A.T.C.H.", "Sinn", "Vlytron"
                    ].map((alias, i) => (
                      <div key={i} className="group cursor-default">
                         <span className="block text-[8px] font-bold text-black/20 group-hover:text-signal mb-1">NODE #{i+1}</span>
                         <span className="text-lg sm:text-2xl font-black uppercase tracking-tighter text-black/30 group-hover:text-black transition-colors">{alias}</span>
                      </div>
                    ))}
                 </div>
              </section>
           </div>
        </div>

        {/* Right: Focused Portrait */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-48 w-full py-8 lg:py-0">
           <div className="relative group overflow-hidden rounded-[3rem] lg:rounded-[4rem] shadow-2xl bg-offwhite aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/maarten.jpg" 
                alt="Maarten van der Vleuten" 
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
              />
              <div className="absolute inset-0 bg-signal/10 opacity-10 group-hover:opacity-0 transition-opacity" />
           </div>
           
           <div className="mt-12 bg-offwhite p-12 rounded-[3rem] border border-black/5 space-y-10 shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-signal italic">Master Registry</h4>
              <div className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-black/50">
                 <div className="flex justify-between border-b border-black/5 pb-4">
                    <span>Operational Base</span>
                    <span className="text-black">Vught, NL</span>
                 </div>
                 <div className="flex justify-between border-b border-black/5 pb-4">
                    <span>Established</span>
                    <span className="text-black">1987</span>
                 </div>
                 <div className="flex justify-between border-b border-black/5 pb-4">
                    <span>Network Nodes</span>
                    <span className="text-black">24+ Identities</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  </main>
);

// ARCHIVE VIEW
const ArchiveView = () => {
  const releases = [
    { title: "Moonwater", year: "1993", label: "Apollo", alias: "In-Existence" },
    { title: "Laiad", year: "2002", label: "Signum", alias: "Flux" },
    { title: "Vow Of Silence", year: "2005", label: "ToneFloat", alias: "In-Existence" },
    { title: "De Verkenningen", year: "2006", label: "Signum", alias: "In-Existence" },
    { title: "High Intolerance...", year: "2008", label: "ToneFloat", alias: "MVDV" },
    { title: "The Scars Remain", year: "2010", label: "ToneFloat", alias: "MVDV" },
    { title: "Are You Worthy?", year: "2012", label: "ToneFloat", alias: "MVDV" },
    { title: "I Break The Waves", year: "2018", label: "MVDV", alias: "MVDV" },
    { title: "Systematically Declassified", year: "2020", label: "Signum", alias: "MVDV" },
    { title: "Archived Signal Vol 1", year: "2023", label: "MVDV", alias: "MVDV" },
  ];

  return (
    <main className="pt-56 lg:pt-64 pb-48 bg-offwhite w-full">
      <SEO 
        title="Catalogue" 
        description="A curated selection of the discography of Maarten van der Vleuten. Over 35 years of electronic frequency artifacts." 
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="mb-32 w-full space-y-10">
           <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full">CATALOGUE</h1>
           <div className="flex flex-wrap gap-8 sm:gap-12 font-bold text-[10px] sm:text-[11px] tracking-widest text-black/30 w-full uppercase">
              <a href="#" className="hover:text-signal transition-colors group flex items-center gap-2 italic underline underline-offset-4 decoration-signal/20">Bandcamp <ArrowUpRight className="w-3 h-3"/></a>
              <a href="#" className="hover:text-signal transition-colors group flex items-center gap-2 italic underline underline-offset-4 decoration-signal/20">Discogs <ArrowUpRight className="w-3 h-3"/></a>
           </div>
        </div>

        <div className="space-y-6 max-w-5xl w-full">
           {releases.map((rel, i) => (
             <div key={i} className="bg-white p-8 sm:p-12 rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-sm w-full border border-black/5">
                <div className="flex items-center gap-8 sm:gap-16 min-w-0 flex-1">
                   <div className="shrink-0 flex flex-col items-center">
                      <span className="text-[10px] sm:text-[11px] font-black text-signal font-mono tracking-widest">{rel.year}</span>
                      <div className="w-1 h-8 bg-black/5 group-hover:bg-white/10 mt-2 rounded-full" />
                   </div>
                   <div className="min-w-0 pr-6">
                      <h4 className="text-xl sm:text-3xl font-black uppercase leading-[1.1] mb-2 group-hover:text-white transition-colors truncate tracking-tighter">{rel.title}</h4>
                      <p className="text-[10px] sm:text-[11px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.2em] truncate">{rel.alias} — {rel.label}</p>
                   </div>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-offwhite text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-lg pointer-events-none">
                   <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
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
      description="About Signum Recordings. The independent vessel for the experimental electronic output of Maarten van der Vleuten since 1996." 
    />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 w-full">
       <div className="space-y-8 w-full">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-black w-full">SIGNUM RECORDINGS</h1>
          <p className="text-[10px] sm:text-[12px] font-black text-signal uppercase tracking-[0.5em] w-full border-b-2 border-signal/10 pb-4 inline-block italic">ESTABLISHED 1996 / VUGHT, NETHERLANDS</p>
       </div>
       
       <div className="bg-offwhite p-12 sm:p-20 lg:p-24 rounded-[3rem] lg:rounded-[5rem] border border-black/5 space-y-16 w-full shadow-2xl">
          <div className="space-y-12 max-w-5xl">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.1] text-black tracking-tighter uppercase">
               An independent vessel for <br className="hidden lg:block"/> experimental frequency artifacts.
            </p>
            <p className="text-black/50 text-lg sm:text-2xl leading-relaxed font-medium">
               Founded in 1996 as a primary node for non-mainstream sound, Signum Recordings bypasses clinical distribution in favor of direct-to-listener signal transmission. It serves as the master registry for the works of Maarten van der Vleuten.
            </p>
          </div>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-14 py-7 bg-black text-white font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-signal transition-all shadow-2xl">
             ACCESS ARCHIVE REGISTRY
          </a>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 pt-16 border-t-2 border-black/5 w-full">
          {[
            { label: "Status", val: "Operational" },
            { label: "Founded", val: "1996" },
            { label: "Origin", val: "Vught" },
            { label: "Network", val: "Closed" }
          ].map((item, i) => (
            <div key={i} className="w-full space-y-4">
               <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] truncate italic">{item.label}</p>
               <p className="text-xl sm:text-2xl font-black uppercase text-black truncate tracking-tighter">{item.val}</p>
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
        title="Press" 
        description="Official press kit and media assets for Maarten van der Vleuten. Biography, high-res portraits, and identity marks." 
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 w-full">
         <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full">ASSET REGISTRY</h1>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 max-w-5xl w-full">
            {[
               { title: "Story Set", size: "Biography (NL/EN) & Era Narrative" },
               { title: "Visual Artifacts", size: "High-Resolution Portrait Gallery" },
               { title: "Official Marks", size: "Identity Wordmarks [SVG/PNG]" },
               { title: "Full Repository", size: "Consolidated Asset Archive [.ZIP]" }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-offwhite rounded-[3rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all border border-black/5 w-full shadow-lg">
                 <div className="min-w-0 pr-8">
                    <h3 className="text-2xl font-black uppercase leading-none mb-3 truncate tracking-tighter">{item.title}</h3>
                    <p className="text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.2em] truncate">{item.size}</p>
                 </div>
                 <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-xl">
                    <Download className="w-6 h-6" />
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
      description="Get in touch with Maarten van der Vleuten for cinematic scoring, archive requests or studio bookings." 
    />
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32 w-full overflow-hidden">
       <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none w-full">INQUIRY</h1>
       
       <div className="space-y-32 w-full font-bold">
          <div className="space-y-8 w-full">
             <p className="text-[11px] font-black text-signal uppercase tracking-[0.5em] italic">Direct Transmission</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-2xl sm:text-5xl lg:text-7xl font-black tracking-tighter hover:text-signal transition-colors break-words leading-none uppercase max-w-full inline-block decoration-signal/10 decoration-8 underline underline-offset-[12px]">
                contact@maartenvandervleuten.eu
             </a>
          </div>

          <div className="space-y-12 w-full">
             <p className="text-[11px] font-black text-signal uppercase tracking-[0.5em] italic">Registry Channels</p>
             <div className="flex flex-wrap gap-12 sm:gap-24 font-black text-black/30 uppercase text-sm sm:text-xl tracking-tighter w-full">
                <a href="#" className="hover:text-black transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-signal">Instagram</a>
                <a href="#" className="hover:text-black transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-signal">Bandcamp</a>
                <a href="#" className="hover:text-black transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-signal">Discogs</a>
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
