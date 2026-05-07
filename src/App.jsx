import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
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

const LegacyBanner = () => (
  <div className="bg-signal text-white py-3 px-6 text-center relative z-[60]">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Looking for the legacy archive?</p>
      <a 
        href="http://www.maartenvandervleuten.com/main.htm" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[10px] font-black uppercase tracking-[0.2em] underline underline-offset-4 hover:opacity-80 transition-opacity flex items-center gap-2"
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
    <nav className="fixed top-0 left-0 w-full z-50 transition-all">
      <LegacyBanner />
      <div className="bg-white border-b border-black/5 py-4 sm:py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 flex items-center justify-between">
          <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase">
            Maarten van der Vleuten
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-signal",
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
              className="px-5 py-2 rounded-full text-[10px] font-bold tracking-widest bg-black text-white hover:bg-signal transition-all"
            >
              SHOP
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[60] flex flex-col p-8 sm:p-12 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-12">
             <span className="font-bold text-black text-sm tracking-widest uppercase">Menu</span>
             <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8 text-black" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-black border-b border-black/5 pb-4 flex justify-between items-center"
              >
                {link.name}
                <ArrowRight className="w-6 h-6 opacity-20" />
              </Link>
            ))}
            <a 
              href="https://maartenvandervleuten.bandcamp.com/" 
              className="mt-4 bg-black text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs"
            >
              BANDCAMP SHOP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-black py-24 px-6 sm:px-8 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black leading-none uppercase">MAARTEN <br/> VAN DER VLEUTEN</h2>
            <p className="text-black/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest leading-loose max-w-sm">
              Professional composer and recording artist. Pioneer of the Dutch electronic underground since 1987. Founder of Signum Recordings. Vught, Netherlands.
            </p>
          </div>
          
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8">Navigation</h4>
             <ul className="space-y-4 text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><Link to="/biography" className="hover:text-black transition-colors">Biography</Link></li>
                <li><Link to="/archive" className="hover:text-black transition-colors">Archive</Link></li>
                <li><Link to="/signum" className="hover:text-black transition-colors">Signum Recordings</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8">Socials</h4>
             <ul className="space-y-4 text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Bandcamp</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Discogs</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-bold text-black/20 uppercase tracking-widest">
           <p>&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
           <div className="flex gap-12 font-mono italic">
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
    <main className="bg-white overflow-hidden pt-12 md:pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
            <div className="order-2 lg:order-1 relative z-10 py-12 lg:py-0">
               <p className="text-[10px] font-bold text-signal uppercase tracking-[0.6em] mb-6">COMPOSER / PIONEER</p>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1] tracking-tighter uppercase mb-10">
                 MAARTEN <br className="hidden sm:block"/> <span className="text-signal">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
               </h1>
               <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-lg mb-12 font-medium">
                 Pioneering the Dutch electronic scene for over three decades. From industrial techno to refined cinematic scoring and experimental sound design.
               </p>
               <div className="flex flex-wrap gap-4">
                  <Link to="/biography" className="px-10 py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-all shadow-xl">
                    Biography
                  </Link>
                  <Link to="/archive" className="px-10 py-5 border border-black text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Full Archive
                  </Link>
               </div>
            </div>
            <div className="order-1 lg:order-2 h-[40vh] sm:h-[50vh] lg:h-[70vh] rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative grayscale">
               <img 
                 src="/maarten.jpg" 
                 alt="Maarten van der Vleuten" 
                 className="w-full h-full object-cover object-top scale-110"
                 onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
               />
               <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40 translate-x-[-1px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Bio Snippet */}
      <section className="py-24 sm:py-32 bg-offwhite border-y border-black/5">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
            <div className="max-w-3xl">
               <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-12 leading-tight">
                  Defying genre since <br/> the late eighties.
               </h2>
               <div className="space-y-8 text-black/60 text-lg leading-relaxed font-medium">
                  <p>
                    Operating from his studio in Vught, Maarten built a legacy under dozens of identities including Flux and In-Existence. He has populated the catalogs of legendary labels like R&S Records and Apollo.
                  </p>
                  <Link to="/biography" className="inline-flex items-center gap-4 text-black font-bold uppercase tracking-widest text-[10px] group">
                    <span>Explore the narrative</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Output / Latest Release */}
      <section className="py-32 lg:py-48">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
               <div className="lg:col-span-6 order-2 lg:order-1">
                  <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em] mb-6">Latest Release</p>
                  <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-8">Systematically <br className="hidden sm:block"/> Declassified.</h2>
                  <p className="text-black/50 text-lg leading-relaxed mb-12 font-medium">
                    The ongoing series documenting the evolution of frequency and signal. A curated registry of archived artifacts and newly distilled compositions.
                  </p>
                  <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="px-10 py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-all shadow-lg inline-block">
                    LISTEN ON BANDCAMP
                  </a>
               </div>
               <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="aspect-square bg-offwhite p-12 rounded-[3.5rem] shadow-inner relative overflow-hidden group">
                     <img 
                       src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=1200&auto=format" 
                       className="w-full h-full object-cover rounded-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-signal/10 opacity-20 pointer-events-none" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Archive Highlights */}
      <section className="py-32 bg-black text-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
               <div>
                  <p className="text-[10px] font-bold text-signal uppercase tracking-[0.6em] mb-6">Selected Works</p>
                  <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">Archive Highlights.</h2>
               </div>
               <Link to="/archive" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b-2 border-signal pb-2 hover:text-signal transition-colors">
                  View Full Registry
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { title: "Moonwater", year: "1993", label: "Apollo", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&auto=format" },
                  { title: "Laiad", year: "2002", label: "Signum", img: "https://images.unsplash.com/photo-1514525253344-9337583624e5?w=800&auto=format" },
                  { title: "The Scars Remain", year: "2010", label: "ToneFloat", img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=800&auto=format" }
               ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-6 right-6 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                           <Play className="w-4 h-4 text-white fill-current" />
                        </div>
                     </div>
                     <p className="text-signal font-mono text-[9px] uppercase tracking-widest mb-1 italic">#{item.year}</p>
                     <h4 className="text-2xl font-black uppercase tracking-tight mb-1">{item.title}</h4>
                     <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{item.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Grid: Nav Cards */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="bg-offwhite p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group">
                  <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white mb-8">
                     <Archive className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6">SIGNUM <br/> RECORDINGS</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-sm leading-relaxed mb-10">
                     Founded in 1996 for experimental artifacts.
                  </p>
                  <Link to="/signum" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1">
                     Label Info <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-offwhite p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group">
                  <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white mb-8">
                     <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6">PRESS KIT <br/> ASSETS</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-sm leading-relaxed mb-10">
                     High-res portraits and official narrative notes.
                  </p>
                  <Link to="/press" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1">
                     Download <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-offwhite p-12 rounded-[2.5rem] border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white mb-8">
                     <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none mb-6">DIRECT <br/> INQUIRY</h3>
                  <p className="text-black/40 group-hover:text-white/40 text-sm leading-relaxed mb-10">
                     For cinema scoring or archive requests.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1">
                     Get in Touch <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Quote Footer */}
      <section className="py-40 bg-black text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-tight italic mb-8">
               "No Loops. <br className="sm:hidden"/> <span className="text-signal">Just Evolution.</span>"
            </h2>
            <div className="w-24 h-1 bg-signal mx-auto mb-10" />
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">Vught, Netherlands</p>
         </div>
      </section>
    </main>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-48 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="relative">
           <img 
             src="/maarten.jpg" 
             alt="Maarten van der Vleuten" 
             className="w-full aspect-[4/5] object-cover grayscale rounded-[3rem] shadow-2xl mb-12"
             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
           />
           <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-8 font-bold uppercase text-[11px] tracking-widest text-black/40">
              <div>
                 <p className="text-black mb-1">Base</p>
                 <p>Vught (NL)</p>
              </div>
              <div>
                 <p className="text-black mb-1">Active</p>
                 <p>35+ Years</p>
              </div>
           </div>
        </div>
        <div className="space-y-20">
           <div className="space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">BIOGRAPHY</h2>
              <div className="w-16 sm:w-24 h-2 bg-signal" />
           </div>
           
           <div className="space-y-12 text-black/70 text-lg leading-relaxed font-medium">
              <p>
                Maarten van der Vleuten (Vught, 1967) is a prolific Dutch composer and producer who emerged in the late 1980s as a key architect of the electronic landscape.
              </p>
              <p>
                Operating under over two dozen aliases—Flux, In-Existence, Vandervleuten—he populated the catalogs of legendary labels like R&S Records and Apollo.
              </p>
              <p>
                Since 2008, he has released exclusively under his own name, focusing on multidisciplinary composition, cinematic artifacts, and his own Signum Recordings label.
              </p>
           </div>
        </div>
      </div>
    </div>
  </main>
);

// ARCHIVE VIEW
const ArchiveView = () => {
  const releases = [
    { title: "Moonwater", year: "1993", label: "Apollo" },
    { title: "Laiad", year: "2002", label: "Signum" },
    { title: "Vow Of Silence", year: "2005", label: "ToneFloat" },
    { title: "High Intolerance...", year: "2008", label: "MVDV" },
    { title: "The Scars Remain", year: "2010", label: "MVDV" },
    { title: "I Break The Waves", year: "2018", label: "MVDV" },
  ];

  return (
    <main className="pt-48 pb-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <div className="mb-24">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">ARCHIVE</h2>
           <div className="flex gap-10 font-bold text-[11px] tracking-[0.3em] text-black/30">
              <a href="#" className="hover:text-signal transition-colors">BANDCAMP</a>
              <a href="#" className="hover:text-signal transition-colors">DISCOGS</a>
           </div>
        </div>

        <div className="space-y-4 max-w-4xl">
           {releases.map((rel, i) => (
             <div key={i} className="bg-white p-10 rounded-[2.5rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-sm">
                <div className="flex items-center gap-12">
                   <span className="text-[11px] font-bold text-signal font-mono">{rel.year}</span>
                   <div>
                      <h4 className="text-2xl font-black uppercase leading-none mb-1 group-hover:text-white transition-colors">{rel.title}</h4>
                      <p className="text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{rel.label}</p>
                   </div>
                </div>
                <div className="w-12 h-12 bg-offwhite text-black rounded-full flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-all">
                   <ArrowUpRight className="w-5 h-5" />
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
  <main className="pt-48 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 space-y-24">
       <div className="space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-black">SIGNUM RECORDINGS</h2>
          <p className="text-[12px] font-bold text-signal uppercase tracking-[0.4em]">ESTABLISHED 1996 / VUGHT, NL</p>
       </div>
       
       <div className="bg-offwhite p-16 lg:p-20 rounded-[4rem] border border-black/5 space-y-12">
          <p className="text-3xl lg:text-4xl font-bold leading-tight max-w-5xl text-black">
             Established as an independent vessel for frequency exploration. Signum has served as the core archive for Maarten's experimental electronic output for over 25 years.
          </p>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-12 py-6 bg-black text-white font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-signal transition-all shadow-xl">
             Explore Release Registry
          </a>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-black/5">
          {[
            { label: "Founded", val: "1996" },
            { label: "Origin", val: "Vught" },
            { label: "Status", val: "Active" },
            { label: "Catalog", val: "Sig-XXXX" }
          ].map((item, i) => (
            <div key={i}>
               <p className="text-[10px] font-bold text-black/20 uppercase tracking-widest mb-2">{item.label}</p>
               <p className="text-xl font-bold uppercase text-black">{item.val}</p>
            </div>
          ))}
       </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 space-y-24">
         <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">PRESS KIT</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {[
               { title: "Story", desc: "Biography Pack" },
               { title: "Visual Assets", desc: "Portrait Hub" },
               { title: "Identity", desc: "Logo Files" },
               { title: "Full Archive", desc: "Consolidated ZIP" }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-offwhite rounded-[3rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all border border-black/5">
                 <div>
                    <h3 className="text-2xl font-black uppercase leading-none mb-1">{item.title}</h3>
                    <p className="text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{item.desc}</p>
                 </div>
                 <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-all">
                    <Download className="w-5 h-5" />
                 </button>
              </div>
            ))}
         </div>
      </div>
   </main>
);

// CONTACT VIEW
const ContactView = () => (
  <main className="pt-48 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 space-y-24">
       <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">CONTACT</h2>
       
       <div className="space-y-24">
          <div className="space-y-6">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Inquiry</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight hover:text-signal transition-colors break-words leading-none uppercase">
                contact@maartenvandervleuten.eu
             </a>
          </div>

          <div className="space-y-6">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Socials</p>
             <div className="flex flex-wrap gap-16 font-bold text-black/40 uppercase text-sm tracking-[0.2em]">
                <a href="#" className="hover:text-black transition-colors">Instagram</a>
                <a href="#" className="hover:text-black transition-colors">Bandcamp</a>
                <a href="#" className="hover:text-black transition-colors">Discogs</a>
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
    <div className="relative bg-white min-h-screen selection:bg-signal selection:text-white antialiased">
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
  );
};

export default App;
