import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Music, Disc, BookOpen, ExternalLink, 
  ShoppingCart, Mail, Globe, Play, ChevronRight,
  Archive, FileText, ArrowRight, Zap, Download,
  Instagram, Twitter, Linkedin, Facebook, Camera,
  Newspaper, Calendar, ArrowUpRight
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Biography', path: '/biography' },
    { name: 'Archive', path: '/archive' },
    { name: 'Visuals', path: '/visuals' },
    { name: 'Journal', path: '/journal' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl",
      isScrolled ? "bg-white/95 backdrop-blur-xl border border-black/10 py-3 rounded-full shadow-2xl" : "bg-transparent py-4"
    )}>
      <div className="flex items-center justify-between px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-black group flex items-center gap-2">
          <div className="w-6 h-6 bg-signal rounded-full flex items-center justify-center text-white text-[10px]">M</div>
          <span className="hidden sm:inline">MAARTEN VAN DER VLEUTEN</span>
          <span className="sm:hidden">MVDV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:text-signal relative pb-1 overflow-hidden",
                location.pathname === link.path ? "text-signal" : "text-black/50"
              )}
            >
              {link.name}
              <div className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-signal transition-all duration-500",
                location.pathname === link.path ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
          <a 
            href="https://maartenvandervleuten.bandcamp.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-magnetic bg-black text-white px-5 py-2 rounded-full text-[10px] font-bold flex items-center gap-2 group tracking-widest"
          >
            <span>SHOP</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border border-black/5 mt-3 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-black border-b border-black/5 pb-4 flex justify-between items-center group"
              >
                {link.name}
                <ArrowRight className="w-6 h-6 text-black/20 group-hover:text-signal transition-colors" />
              </Link>
            ))}
            <a 
              href="https://maartenvandervleuten.bandcamp.com/" 
              className="bg-signal text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] shadow-xl shadow-signal/20"
            >
              BANDCAMP SHOP <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-8 lg:px-24 rounded-t-[4rem] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 lg:gap-32 pb-24 border-b border-white/5">
        <div className="max-w-xl">
          <Link to="/" className="text-4xl lg:text-7xl font-bold font-sans tracking-tighter mb-8 inline-block leading-none">
            MAARTEN <br/> VAN DER VLEUTEN
          </Link>
          <p className="text-white/40 max-w-md font-mono text-xs leading-loose uppercase tracking-[0.2em]">
            Since 1987. Dutch electronic pioneer. Multi-disciplinary composer. Curator of the Signum sound archive.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 w-full md:w-auto">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8 font-mono">Structure</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest text-white/40 uppercase">
              <li><Link to="/biography" className="hover:text-white transition-colors">Biography</Link></li>
              <li><Link to="/archive" className="hover:text-white transition-colors">Archive</Link></li>
              <li><Link to="/visuals" className="hover:text-white transition-colors">Visuals</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8 font-mono">Inquiry</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest text-white/40 uppercase">
              <li><Link to="/press" className="hover:text-white transition-colors">Press Kit</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:contact@maartenvandervleuten.eu" className="text-white font-bold underline decoration-signal decoration-2 underline-offset-4">Direct Mail</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-signal rounded-full animate-pulse shadow-[0_0_12px_rgba(153,1,0,0.8)]"></div>
          <span>Archive Live — All nodes operational</span>
        </div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Instagram</a>
           <a href="#" className="hover:text-white transition-colors">Twitter</a>
           <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
      </div>
    </footer>
  );
};

// --- Page Fragments ---

const SectionHeader = ({ subtitle, title, alignment = "left" }) => (
  <div className={cn("mb-20", alignment === "center" ? "text-center" : "text-left")}>
    <p className="text-[10px] font-mono uppercase tracking-[0.6em] text-signal font-bold mb-4">{subtitle}</p>
    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none uppercase">{title}<span className="text-signal">.</span></h2>
  </div>
);

// --- Page Views ---

// HOME VIEW
const HomeView = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Cinematic Hero */}
      <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-center px-8 lg:px-24 bg-black">
        <div className="absolute inset-0 z-0 grayscale opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1594437000305-64906f368095?auto=format&fit=crop&q=80&w=2670" 
            alt="Studio Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          <div className="fade-up inline-flex items-center gap-4 px-6 py-2 rounded-full bg-signal/10 backdrop-blur-xl border border-signal/30 text-signal mb-12 shadow-2xl shadow-signal/5">
            <Zap className="w-4 h-4 fill-signal" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] font-mono italic">Pioneer Presence Vol. 38</span>
          </div>
          
          <h1 className="fade-up flex flex-col leading-[0.8] mb-16">
            <span className="text-6xl md:text-9xl lg:text-[14rem] font-bold text-white tracking-tighter mix-blend-difference uppercase">
              SONIC
            </span>
            <span className="text-8xl md:text-[12rem] lg:text-[20rem] font-serif italic text-signal -mt-4 md:-mt-10 lg:-mt-20 mix-blend-screen leading-none">
              Artifacts.
            </span>
          </h1>

          <div className="fade-up flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-20">
            <Link 
              to="/archive" 
              className="btn-magnetic px-12 py-7 bg-white text-black font-bold rounded-full flex items-center gap-4 group text-xs uppercase tracking-[0.3em] shadow-2xl shadow-black/20 transition-all hover:scale-105"
            >
              <span>ACCESS THE ARCHIVE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
            <div className="max-w-md">
              <p className="text-white/40 font-mono text-[11px] uppercase tracking-[0.3em] leading-loose">
                Exploring the boundaries between technology and human frequency since 1987.
              </p>
            </div>
          </div>
        </div>

        {/* Global Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <div className="w-px h-16 bg-gradient-to-b from-white/20 to-signal animate-pulse" />
           <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/20">Scroll for Context</span>
        </div>
      </section>

      {/* Featured News / Journal Feed (Peggy Gou / Russo Inspiration) */}
      <section className="py-40 bg-white px-8 lg:px-24">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
               <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-signal mb-6">Current Output</p>
                  <h2 className="text-6xl lg:text-9xl font-bold tracking-tighter leading-none uppercase">JOURNAL<span className="text-signal">.</span></h2>
               </div>
               <Link to="/journal" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-signal transition-colors">
                  <span>View All Updates</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
               {/* Latest News Item */}
               <div className="group space-y-10">
                  <div className="aspect-[16/9] bg-offwhite rounded-cinema overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1542128962-9d50ad7bfdc1?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                     <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-6">
                     <div className="flex gap-4 text-[10px] font-mono font-bold uppercase tracking-widest text-black/30">
                        <span>May 2026</span>
                        <span className="text-signal">/ Release Announcement</span>
                     </div>
                     <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-tight uppercase group-hover:text-signal transition-colors">New Era Vinyl: A Forest / Love Will Tear Us Apart</h3>
                     <p className="text-black/50 text-lg leading-relaxed max-w-xl">
                        First official vinyl release on Signum in over five years. A clinical re-imagining of post-punk artifacts through a high-frequency lens.
                     </p>
                     <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black border-b-2 border-signal pb-2 group-hover:gap-6 transition-all">
                        <span>Pre-order on Bandcamp</span>
                        <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               </div>

               {/* Grid of smaller updates */}
               <div className="space-y-12">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-8 group border-b border-black/5 pb-12 last:border-0">
                       <div className="w-32 aspect-square bg-offwhite rounded-2xl overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all">
                          <img src={`https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80&auto=format&fit=crop&random=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                       </div>
                       <div className="space-y-4">
                          <span className="text-[10px] font-mono font-bold text-black/20 uppercase tracking-widest italic">{2026 - i} / ARCHIVE NODE</span>
                          <h4 className="text-2xl font-bold tracking-tighter leading-tight uppercase group-hover:text-signal transition-colors">RE-ACCESSING THE PASSION FRUIT SESSIONS</h4>
                          <Link to="/journal" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors flex items-center gap-2">
                             READ ENTRY <ChevronRight className="w-3 h-3" />
                          </Link>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Featured Features Section */}
      <section className="py-40 bg-offwhite px-8 lg:px-24 rounded-t-[4rem] -mt-10 relative z-20">
         <div className="max-w-7xl mx-auto space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
               <div className="order-2 md:order-1">
                  <SectionHeader subtitle="The Curator" title="SIGNUM RECORDINGS" />
                  <p className="text-xl text-black/60 leading-relaxed mb-12 max-w-xl">
                     Founded in 1996, Signum serves as a curated archive for experimental, ambient, and non-mainstream sound artifacts. Every release is a documentation of a specific frequency era.
                  </p>
                  <Link 
                    to="/signum" 
                    className="btn-magnetic px-10 py-5 border-2 border-black text-black font-bold rounded-full uppercase tracking-[0.3em] text-[10px] inline-flex items-center gap-3"
                  >
                    <span>LABEL REGISTRY</span>
                    <Archive className="w-4 h-4" />
                  </Link>
               </div>
               <div className="order-1 md:order-2 bg-white p-4 rounded-cinema shadow-2xl relative overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover rounded-cinema grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-all" />
               </div>
            </div>
         </div>
      </section>

      {/* Manifesto Snapshot */}
      <section className="py-64 bg-black text-white px-8 lg:px-24 text-center overflow-hidden relative">
         <div className="absolute inset-0 opacity-[0.02] grayscale invert pointer-events-none">
            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover" />
         </div>
         <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.8em] text-signal mb-16 animate-pulse">Biological Signal Detected</p>
            <h2 className="text-5xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-none uppercase mb-16 whitespace-nowrap">
               NO <span className="text-white/20">LOOPS.</span> JUST <span className="text-signal">EVOLUTION.</span>
            </h2>
            <Link to="/biography" className="btn-magnetic px-12 py-6 bg-signal text-white rounded-full font-bold uppercase tracking-[0.4em] text-xs shadow-2xl shadow-signal/40">
               <span>Understand the Philosophy</span>
            </Link>
         </div>
      </section>
    </>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-paper min-h-screen">
    <div className="max-w-7xl mx-auto">
      <SectionHeader subtitle="Sonic Narrative" title="Biography" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-5 sticky top-48">
           <div className="bg-white p-3 rounded-cinema shadow-2xl overflow-hidden aspect-[4/5] grayscale relative group">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670" alt="Maarten van der Vleuten" className="w-full h-full object-cover rounded-cinema" />
              <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-10 left-10 text-white z-20">
                 <p className="text-[10px] font-mono uppercase tracking-widest font-bold border-b border-signal pb-2">Est. 1967 — Vught, residency</p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-7 space-y-24">
           <div className="space-y-12">
              <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">The Polymorphic <br/> <span className="text-signal">Era (1987—2007)</span></h3>
              <div className="space-y-8 text-black/60 text-lg lg:text-xl leading-relaxed font-medium">
                <p>
                  Maarten van der Vleuten emerged as a seminal figure in the Dutch electronic scene during the late 1980s. A pioneer of the raw, clinical techno that would define a generation.
                </p>
                <p>
                  For two decades, he operated as a sonic ghost, releasing under dozens of aliases—<span className="text-black font-bold uppercase tracking-widest text-sm underline decoration-signal decoration-2 underline-offset-4">Flux, In-Existence, Vandervleuten, DJ Zero-T</span>—for the most influential labels in history: R&S Records, Apollo, and Djax-Up-Beats.
                </p>
              </div>
           </div>

           <div className="h-px bg-black/10" />

           <div className="space-y-12">
              <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">The Consolidation  <br/> <span className="text-signal">(2008—PRESENT)</span></h3>
              <div className="space-y-8 text-black/60 text-lg lg:text-xl leading-relaxed font-medium">
                <p>
                  In 2008, Van der Vleuten stripped away the aliases to record exclusively under his own name. This shift signaled a move toward multidisciplinary composition—architecting soundscapes for film, performance, and experimental digital media.
                </p>
                <p>
                  Today, he curates the Signum archive, focused on "New Era Electronics" and independent audio artifacts that defy traditional club structures.
                </p>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-8 lg:gap-16 pt-12">
              <div className="space-y-4">
                 <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/30 font-bold">Key Imprints</p>
                 <ul className="text-sm font-bold uppercase tracking-widest space-y-2">
                    <li>R&S RECORDS</li>
                    <li>APOLLO</li>
                    <li>DJAX-UP-BEATS</li>
                    <li>SIGNUM</li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/30 font-bold">Residency</p>
                 <p className="text-sm font-bold uppercase tracking-widest">vught, netherlands</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </main>
);

// ARCHIVE VIEW (Discography / Shop hybrid)
const ArchiveView = () => {
  const releases = [
    { title: "Parts of the Process", year: "2018", cat: "SIG040", type: "CDr", url: "https://maartenvandervleuten.bandcamp.com/" },
    { title: "Beer, Boots & Pussy", year: "2019", cat: "SIG041", type: "Digital", url: "https://maartenvandervleuten.bandcamp.com/" },
    { title: "ECT For Piano", year: "2009", cat: "SIG022", type: "CD", url: "https://maartenvandervleuten.bandcamp.com/" },
    { title: "Kurt's Zimmer", year: "2007", cat: "SIG018", type: "Box Set", url: "https://maartenvandervleuten.bandcamp.com/" },
    { title: "Flux: Laiad", year: "2002", cat: "SIG011", type: "Vinyl", url: "https://maartenvandervleuten.bandcamp.com/" },
    { title: "In-Fieri: Archive 01", year: "1996", cat: "SIG001", type: "Vinyl", url: "https://maartenvandervleuten.bandcamp.com/" },
  ];

  return (
    <main className="pt-48 pb-32 px-8 lg:px-24 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
           <SectionHeader subtitle="Sonic registry" title="Archive" />
           <div className="flex gap-4 mb-20">
              <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="btn-magnetic px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                 <span>Bandcamp</span>
                 <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.discogs.com/artist/164-Maarten-Van-Der-Vleuten" target="_blank" className="btn-magnetic px-8 py-4 border-2 border-black text-black rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                 <span>Discogs</span>
                 <ExternalLink className="w-3 h-3" />
              </a>
           </div>
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl">
           <table className="w-full text-left">
              <thead className="bg-black text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/40">
                 <tr>
                    <th className="px-10 py-8">Year</th>
                    <th className="px-10 py-8">Cat#</th>
                    <th className="px-10 py-8">Title</th>
                    <th className="px-10 py-8 hidden md:table-cell">Format</th>
                    <th className="px-10 py-8 text-right">Access</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                 {releases.map((r, i) => (
                   <tr key={i} className="group hover:bg-offwhite transition-colors">
                      <td className="px-10 py-10 text-[10px] font-mono font-bold text-black/30 group-hover:text-signal transition-colors">{r.year}</td>
                      <td className="px-10 py-10 text-[10px] font-mono font-bold text-black tracking-widest">{r.cat}</td>
                      <td className="px-10 py-10 font-bold uppercase tracking-tighter text-2xl group-hover:translate-x-3 transition-transform">{r.title}</td>
                      <td className="px-10 py-10 text-[10px] font-mono uppercase tracking-widest text-black/40 hidden md:table-cell">{r.type}</td>
                      <td className="px-10 py-10 text-right">
                         <a href={r.url} target="_blank" className="btn-magnetic p-4 bg-black rounded-full text-white inline-block">
                            <ArrowUpRight className="w-4 h-4" />
                         </a>
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </main>
  );
};

// VISUALS VIEW (Peggy Gou Inspiration - Large Images)
const VisualsView = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2670", title: "Archive Depth", size: "col-span-2" },
    { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670", title: "Human/Frequency", size: "col-span-1" },
    { url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2670", title: "Modular Chain", size: "col-span-1" },
    { url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2670", title: "Wave Structure", size: "col-span-2" },
  ];

  return (
    <main className="pt-48 pb-32 px-8 lg:px-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Visual nodes" title="Gallery" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
           {images.map((img, i) => (
             <div key={i} className={cn("group overflow-hidden rounded-cinema bg-offwhite shadow-2xl relative scroll-reveal", img.size)}>
                <img src={img.url} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-10 left-10 text-white z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   <p className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold italic">{img.title}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
};

// JOURNAL VIEW (News / Feed)
const JournalView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-offwhite min-h-screen">
    <div className="max-w-4xl mx-auto">
       <SectionHeader subtitle="Live feed" title="Journal" />
       
       <div className="space-y-40">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group space-y-12">
               <div className="flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-signal/40">
                  <span>Entry v.0{i}</span>
                  <div className="h-px flex-1 bg-black/5" />
                  <span>April 2026</span>
               </div>
               <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none uppercase group-hover:text-signal transition-colors">Digital Decimation Protocol: The 2026 Shift</h2>
               <div className="aspect-[2/1] bg-white p-3 rounded-cinema shadow-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={`https://images.unsplash.com/photo-1550684848-fac1c5b4e853?random=${i}&w=1600&q=80&auto=format&fit=crop`} className="w-full h-full object-cover rounded-cinema group-hover:scale-105 transition-all duration-1000" />
               </div>
               <div className="space-y-8 text-black/50 text-xl leading-relaxed max-w-2xl font-medium">
                  <p>
                    Analyzing the intersection of biological rhythm and absolute digital precision. The upcoming release cycle explores destructured loops that refuse to repeat in a linear fashion.
                  </p>
                  <p>
                    Stay connected to the Signum archive for real-time artifact detection.
                  </p>
               </div>
               <div className="pt-10 flex gap-6">
                  <span className="px-4 py-2 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">#SESSIONS</span>
                  <span className="px-4 py-2 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">#SIGNUM</span>
               </div>
            </article>
          ))}
       </div>
    </div>
  </main>
);

// SIGNUM VIEW
const SignumView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-black text-white min-h-screen">
    <div className="max-w-6xl mx-auto">
      <SectionHeader subtitle="Independent node" title="Signum Recordings" />
      
      <div className="bg-white/5 p-16 lg:p-24 rounded-cinema border border-white/10 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none grayscale group-hover:opacity-10 transition-opacity">
            <Archive size={400} />
         </div>
         <div className="relative z-10 space-y-12">
            <p className="text-signal font-mono font-bold uppercase tracking-[0.5em] italic">Established 1996</p>
            <h3 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">A Laboratory <br/> <span className="text-white/20">for frequency exploration.</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-end">
               <p className="text-white/40 text-lg lg:text-xl leading-relaxed font-medium">
                 Signum was founded as a platform for the non-mainstream. A digital and physical sanctuary for experiments in ambient, industrial, and avant-garde soundscapes.
               </p>
               <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="btn-magnetic px-10 py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest text-[10px] w-fit flex items-center gap-3">
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-4 h-4" />
               </a>
            </div>
         </div>
      </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-48 pb-32 px-8 lg:px-24 bg-offwhite min-h-screen">
      <div className="max-w-5xl mx-auto">
         <SectionHeader subtitle="Asset node" title="Press Kit" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
               { icon: FileText, title: "Official Biography", desc: "Complete narrative and credits registry." },
               { icon: Camera, title: "Visual Assets", desc: "High-resolution portraits and studio imagery." },
               { icon: Disc, title: "Logo System", desc: "Multi-format official Signum and MVDV marks." },
               { icon: Archive, title: "Full Press Pack", desc: "Consolidated archive (250MB ZIP)." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-cinema border border-black/5 hover:border-signal/20 transition-all group overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <item.icon size={120} />
                 </div>
                 <item.icon className="text-signal w-10 h-10 mb-8" />
                 <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
                 <p className="text-black/40 text-sm font-medium mb-10 leading-relaxed">{item.desc}</p>
                 <button className="btn-magnetic w-full py-5 bg-black text-white rounded-full flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                    <span>Download</span>
                    <Download className="w-4 h-4" />
                 </button>
              </div>
            ))}
         </div>
      </div>
   </main>
);

// CONTACT VIEW
const ContactView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
       <div>
          <SectionHeader subtitle="Inquiry node" title="Contact" />
          <p className="text-2xl text-black/50 leading-relaxed mb-16 font-medium">
             For cinematic scoring, archive access, and live performance inquiries. <br/> Access the direct mailbox below.
          </p>
          <div className="space-y-12">
             <div className="group border-b border-black/5 pb-12">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-signal mb-4">Core Communications</p>
                <a href="mailto:contact@maartenvandervleuten.eu" className="text-3xl lg:text-5xl font-bold tracking-tighter hover:text-signal transition-colors uppercase">contact@maartenvandervleuten.eu</a>
             </div>
             <div className="group border-b border-black/5 pb-12">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-signal mb-4">Archive Socials</p>
                <div className="flex gap-10">
                   <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-signal transition-colors">Instagram</a>
                   <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-signal transition-colors">Twitter</a>
                   <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-signal transition-colors">Facebook</a>
                </div>
             </div>
          </div>
       </div>

       <div className="bg-paper p-16 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[600px] border border-black/5 group">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-black pointer-events-none group-hover:opacity-[0.08] transition-opacity">
             <Mail size={400} />
          </div>
          <div className="space-y-4">
             <p className="text-signal font-mono font-bold uppercase tracking-[0.5em] italic">Protocol Ready</p>
             <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">SUBMIT <br/> <span className="text-black/20">DIRECT MESSAGE.</span></h3>
          </div>
          <div className="space-y-12">
             {[1, 2, 3].map(i => (
               <div key={i} className="h-px bg-black/10 w-full" />
             ))}
          </div>
          <button className="btn-magnetic w-full py-8 bg-black text-white rounded-full font-bold uppercase tracking-[0.4em] text-xs shadow-2xl shadow-black/20">
             <span>INITIALIZE COMMUNICATION</span>
          </button>
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
    <div className="relative bg-offwhite min-h-screen selection:bg-signal selection:text-white antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/biography" element={<BiographyView />} />
        <Route path="/archive" element={<ArchiveView />} />
        <Route path="/visuals" element={<VisualsView />} />
        <Route path="/journal" element={<JournalView />} />
        <Route path="/signum" element={<SignumView />} />
        <Route path="/press" element={<PressView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
