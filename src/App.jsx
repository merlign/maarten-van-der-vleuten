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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 py-5 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-8 lg:px-24 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-tighter text-black">
          MAARTEN VAN DER VLEUTEN
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
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
            className="px-6 py-2 rounded-full text-[10px] font-bold tracking-widest border bg-black text-white border-black hover:bg-signal hover:border-signal transition-all"
          >
            SHOP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[60] flex flex-col p-12">
          <div className="flex justify-between items-center mb-16">
             <span className="font-bold text-black">MENU</span>
             <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8 text-black" /></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-bold text-black hover:text-signal transition-colors flex justify-between items-center"
              >
                {link.name}
                <ArrowRight className="w-8 h-8 opacity-10" />
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
    <footer className="bg-white text-black py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-8 leading-none">MAARTEN <br/> VAN DER VLEUTEN</h2>
            <p className="text-black/40 text-xs font-mono uppercase tracking-widest leading-loose max-w-sm">
              Professional composer and music maker. Pioneer since 1987. Founder of Signum Recordings. Vught, Netherlands.
            </p>
          </div>
          
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8">Navigation</h4>
             <ul className="space-y-4 text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><Link to="/biography" className="hover:text-black">Biography</Link></li>
                <li><Link to="/archive" className="hover:text-black">Archive</Link></li>
                <li><Link to="/signum" className="hover:text-black">Signum</Link></li>
                <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8">Follow</h4>
             <ul className="space-y-4 text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><a href="#" className="hover:text-black">Instagram</a></li>
                <li><a href="#" className="hover:text-black">Bandcamp</a></li>
                <li><a href="#" className="hover:text-black">Discogs</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-black/20 uppercase tracking-widest">
           <p>&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
           <div className="flex gap-12">
              <span>Protocol: Sig-01</span>
              <span>Origin: Vught</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Views ---

// HOME VIEW
const HomeView = () => {
  return (
    <main className="bg-white">
      {/* Container Aligned Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
               <p className="text-[10px] font-bold text-signal uppercase tracking-[0.8em] animate-pulse">ESTABLISHED 1987 / VUGHT</p>
               <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-[0.85] tracking-tighter uppercase">
                 MAARTEN <br/> <span className="text-signal">VAN DER VLEUTEN.</span>
               </h1>
               <p className="text-black/50 text-base md:text-xl leading-relaxed max-w-xl font-medium">
                 A pioneer in the Dutch electronic scene for over three decades. Merging clinical techno with experimental soundscapes and cinematic narratives.
               </p>
               <div className="flex flex-wrap gap-6 pt-4">
                  <Link to="/biography" className="px-10 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-signal transition-all shadow-xl">
                    Biography
                  </Link>
                  <Link to="/archive" className="px-10 py-5 border border-black/20 text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Discography
                  </Link>
               </div>
            </div>
            <div className="lg:col-span-5 relative">
               <div className="aspect-[4/5] bg-offwhite rounded-[3rem] overflow-hidden grayscale relative shadow-2xl">
                  <img 
                    src="/maarten.jpg" 
                    alt="Maarten van der Vleuten" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format";
                    }}
                  />
                  <div className="absolute inset-0 bg-signal/10 opacity-20" />
               </div>
               {/* Aesthetic Decoration */}
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-signal/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Latest / Signum / Archive */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-8 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
               {/* Project Box */}
               <div className="bg-offwhite p-10 lg:p-12 rounded-[2.5rem] space-y-8 group transition-all duration-500 border border-transparent hover:border-black/5">
                  <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white">
                     <Archive className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none">SIGNUM <br/> RECORDINGS</h3>
                  <p className="text-black/40 text-sm leading-relaxed">
                     Independent label founded in 1996 for experimental artifacts.
                  </p>
                  <Link to="/signum" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 hover:gap-5 transition-all">
                     ENTER LABEL <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               {/* Project Box */}
               <div className="bg-offwhite p-10 lg:p-12 rounded-[2.5rem] space-y-8 group transition-all duration-500 border border-transparent hover:border-black/5">
                  <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white">
                     <Music className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none">SONIC <br/> ARCHIVE</h3>
                  <p className="text-black/40 text-sm leading-relaxed">
                     A registry of over 24 aliases and 35 years of frequency work.
                  </p>
                  <Link to="/archive" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 hover:gap-5 transition-all">
                     VIEW CATALOG <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               {/* Project Box */}
               <div className="bg-offwhite p-10 lg:p-12 rounded-[2.5rem] space-y-8 group transition-all duration-500 border border-transparent hover:border-black/5">
                  <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white">
                     <Newspaper className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase leading-none">LATEST <br/> RELEASES</h3>
                  <p className="text-black/40 text-sm leading-relaxed">
                     New era electronics and clinical re-imaginations of post-punk.
                  </p>
                  <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1 hover:gap-5 transition-all">
                     BANDCAMP <ExternalLink className="w-4 h-4" />
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Philosophy Placeholder */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-8 lg:px-24 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic mb-12">
               "No Loops. <br/> <span className="text-signal">Just Evolution.</span>"
            </h2>
            <div className="w-24 h-px bg-signal mx-auto mb-12" />
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em]">Node: Vught / Audio Registry Sig-00</p>
         </div>
      </section>
    </main>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
           <img 
             src="/maarten.jpg" 
             alt="Maarten van der Vleuten" 
             className="w-full aspect-[4/5] object-cover grayscale rounded-[2rem] shadow-2xl mb-12"
             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
           />
           <div className="space-y-4">
              <span className="text-[10px] font-bold text-signal uppercase tracking-widest">Historical Registry</span>
              <div className="grid grid-cols-2 gap-12 pt-4 border-t border-black/5 font-bold uppercase text-[10px] tracking-widest text-black/40">
                 <div>
                    <p className="text-black mb-2">Location</p>
                    <p>Vught, Netherlands</p>
                 </div>
                 <div>
                    <p className="text-black mb-2">Since</p>
                    <p>1987 (35+ years)</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="space-y-20">
           <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">BIOGRAPHY</h2>
              <div className="w-24 h-2 bg-signal" />
           </div>
           
           <div className="space-y-12 text-black/70 text-lg leading-relaxed font-medium">
              <p>
                Maarten van der Vleuten (Vught, 1967) is a prolific Dutch composer and producer who emerged in the late 1980s as a key architect of the electronic landscape. Merging clinical techno with experimental soundscapes.
              </p>
              <p>
                Between 1987 and 2007, he operated under over two dozen aliases—most notably Flux and In-Existence—releasing on legendary labels like R&S Records and Apollo.
              </p>
              <p>
                In 2008, he pivoted to his own name, marking an era of multidisciplinary composition and curated frequency artifacts through his own imprint, Signum Recordings.
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
    { title: "Moonwater", year: "1993", label: "Apollo", icon: Disc },
    { title: "Laiad", year: "2002", label: "Signum", icon: Disc },
    { title: "Vow Of Silence", year: "2005", label: "ToneFloat", icon: Disc },
    { title: "High Intolerance...", year: "2008", label: "MVDV", icon: Disc },
    { title: "The Scars Remain", year: "2010", label: "MVDV", icon: Disc },
    { title: "I Break The Waves", year: "2018", label: "MVDV", icon: Zap },
  ];

  return (
    <main className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="space-y-12 mb-24 max-w-4xl">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">ARCHIVE</h2>
           <div className="flex gap-8 font-bold text-[10px] tracking-[0.4em] text-black/30">
              <a href="#" className="hover:text-signal">BANDCAMP</a>
              <a href="#" className="hover:text-signal">DISCOGS</a>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-4xl">
           {releases.map((rel, i) => (
             <div key={i} className="bg-offwhite p-10 rounded-[2rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all">
                <div className="flex items-center gap-12">
                   <span className="text-[10px] font-bold text-signal font-mono uppercase tracking-widest">{rel.year}</span>
                   <div>
                      <h4 className="text-2xl font-black uppercase leading-none mb-1 group-hover:text-white transition-colors">{rel.title}</h4>
                      <p className="text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{rel.label}</p>
                   </div>
                </div>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-sm group-hover:bg-signal group-hover:text-white transition-all">
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
  <main className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-8 lg:px-24 space-y-24">
       <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">SIGNUM RECORDINGS</h2>
          <p className="text-[10px] font-bold text-signal uppercase tracking-[0.5em]">ESTABLISHED 1996 / VUGHT, NL</p>
       </div>
       
       <div className="bg-offwhite p-12 lg:p-20 rounded-[3rem] border border-black/5 space-y-12">
          <p className="text-xl md:text-4xl font-bold leading-tight max-w-4xl text-black">
             Founded in 1996 as an independent node for experimental electronics. Signum serves as the primary vessel for Maarten's non-mainstream frequency explorations.
          </p>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-12 py-6 bg-black text-white font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-signal transition-all shadow-xl">
             Explore Release Registry
          </a>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-black/5">
          {[
            { label: "Founded", val: "1996" },
            { label: "Sublabels", val: "2 Nodes" },
            { label: "Status", val: "Operational" },
            { label: "Vessel", val: "Signum" }
          ].map((item, i) => (
            <div key={i}>
               <p className="text-[10px] font-bold text-black/20 uppercase tracking-widest mb-3">{item.label}</p>
               <p className="text-xl font-bold uppercase tracking-tight text-black">{item.val}</p>
            </div>
          ))}
       </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-24 space-y-24">
         <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">PRESS KIT</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {[
               { title: "Story Node", size: "Compact & Extended Bio" },
               { title: "Visual Assets", size: "High-Res Portrait Gallery" },
               { title: "Brand Identity", size: "Scalable Vector Marks" },
               { title: "Full Registry", size: "Consolidated Asset Pack" }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-offwhite rounded-[2.5rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all border border-transparent hover:border-black/5">
                 <div>
                    <h3 className="text-2xl font-black uppercase leading-none mb-1">{item.title}</h3>
                    <p className="text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{item.size}</p>
                 </div>
                 <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg group-hover:bg-signal group-hover:text-white transition-all">
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
  <main className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-8 lg:px-24 space-y-24">
       <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">CONTACT</h2>
       
       <div className="space-y-24">
          <div className="space-y-6">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Direct Communication</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight hover:text-signal transition-colors break-words leading-none">
                CONTACT@MAARTENVANDERVLEUTEN.EU
             </a>
          </div>

          <div className="space-y-6">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Registry Locations</p>
             <div className="flex flex-wrap gap-16 font-bold text-black/40 uppercase text-sm tracking-[0.2em]">
                <a href="#" className="hover:text-black hover:underline underline-offset-8">Instagram</a>
                <a href="#" className="hover:text-black hover:underline underline-offset-8">Bandcamp</a>
                <a href="#" className="hover:text-black hover:underline underline-offset-8">Discogs</a>
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
