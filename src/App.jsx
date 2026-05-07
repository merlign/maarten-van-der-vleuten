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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Biography', path: '/biography' },
    { name: 'Archive', path: '/archive' },
    { name: 'Signum', path: '/signum' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 lg:px-24 py-8",
      isScrolled ? "bg-white border-b border-black/5 py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className={cn(
          "text-xl font-black tracking-tighter transition-colors",
          isScrolled ? "text-black" : "text-white"
        )}>
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
                isScrolled 
                  ? (location.pathname === link.path ? "text-signal" : "text-black/60") 
                  : (location.pathname === link.path ? "text-signal" : "text-white/70 hover:text-white")
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://maartenvandervleuten.bandcamp.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-2 rounded-full text-[10px] font-bold tracking-widest border transition-all",
              isScrolled 
                ? "bg-black text-white border-black hover:bg-signal hover:border-signal" 
                : "bg-white text-black border-white hover:bg-signal hover:text-white hover:border-signal"
            )}
          >
            SHOP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={cn("md:hidden p-2", isScrolled ? "text-black" : "text-white")} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
    <footer className="bg-white text-black py-24 px-8 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
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
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-black/20 uppercase tracking-widest">
         <p>&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
         <div className="flex gap-12">
            <span>Protocol: Sig-01</span>
            <span>Origin: Vught</span>
         </div>
      </div>
    </footer>
  );
};

// --- Page Views ---

// HOME VIEW
const HomeView = () => {
  return (
    <main className="bg-black">
      {/* Compact Hero */}
      <section className="relative h-[90dvh] w-full flex items-center overflow-hidden">
        {/* Portait Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/maarten.jpg" 
            alt="Maarten van der Vleuten" 
            className="w-full h-full object-cover object-top grayscale opacity-50"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2000&auto=format";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-24">
          <div className="max-w-3xl">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.6em] mb-6 animate-pulse">ESTABLISHED 1987 / VUGHT</p>
             <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
               MAARTEN <br/> <span className="text-signal">VAN DER VLEUTEN.</span>
             </h1>
             <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-xl mb-12 font-medium">
               A pioneer in the Dutch electronic scene for over three decades. Merging clinical techno with experimental soundscapes and cinematic narratives.
             </p>
             <div className="flex flex-wrap gap-6">
                <Link to="/biography" className="px-10 py-5 bg-signal text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Biography
                </Link>
                <Link to="/archive" className="px-10 py-5 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Discography
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Grid: Latest / Signum / Archive */}
      <section className="bg-white py-32 px-8 lg:px-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Project Box */}
            <div className="bg-offwhite p-12 rounded-[2rem] space-y-8 group hover:bg-black hover:text-white transition-all duration-500">
               <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white">
                  <Archive className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-black uppercase leading-none">SIGNUM <br/> RECORDINGS</h3>
               <p className="text-black/40 group-hover:text-white/50 text-sm leading-relaxed">
                  Independent label founded in 1996 for experimental artifacts.
               </p>
               <Link to="/signum" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-signal pb-1">
                  ENTER LABEL <ArrowUpRight className="w-4 h-4" />
               </Link>
            </div>

            {/* Project Box */}
            <div className="bg-offwhite p-12 rounded-[2rem] space-y-8 group hover:bg-black hover:text-white transition-all duration-500">
               <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white">
                  <Music className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-black uppercase leading-none">SONIC <br/> ARCHIVE</h3>
               <p className="text-black/40 group-hover:text-white/50 text-sm leading-relaxed">
                  A registry of over 24 aliases and 35 years of frequency work.
               </p>
               <Link to="/archive" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-signal pb-1">
                  VIEW CATALOG <ArrowUpRight className="w-4 h-4" />
               </Link>
            </div>

            {/* Project Box */}
            <div className="bg-offwhite p-12 rounded-[2rem] space-y-8 group hover:bg-black hover:text-white transition-all duration-500">
               <div className="w-12 h-12 bg-signal rounded-full flex items-center justify-center text-white">
                  <Newspaper className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-black uppercase leading-none">LATEST <br/> RELEASES</h3>
               <p className="text-black/40 group-hover:text-white/50 text-sm leading-relaxed">
                  New era electronics and clinical re-imaginations of post-punk.
               </p>
               <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-signal pb-1">
                  BANDCAMP <ExternalLink className="w-4 h-4" />
               </a>
            </div>
         </div>
      </section>

      {/* Philosophy Placeholder */}
      <section className="py-40 bg-black text-white px-8 lg:px-24 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
               "No Loops. <br/> <span className="text-signal">Just Evolution.</span>"
            </h2>
            <div className="w-24 h-px bg-signal mx-auto" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-[0.4em]">Node: Vught / System Operational</p>
         </div>
      </section>
    </main>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
           <img 
             src="/maarten.jpg" 
             alt="Maarten van der Vleuten" 
             className="w-full aspect-[4/5] object-cover grayscale rounded-[2rem] shadow-2xl mb-12"
             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
           />
           <div className="space-y-4">
              <span className="text-[10px] font-bold text-signal uppercase tracking-widest">Registry Information</span>
              <div className="grid grid-cols-2 gap-12 pt-4 border-t border-black/5 font-bold uppercase text-[10px] tracking-widest text-black/40">
                 <div>
                    <p className="text-black mb-2">Born</p>
                    <p>1967, Vught (NL)</p>
                 </div>
                 <div>
                    <p className="text-black mb-2">Labels</p>
                    <p>R&S, Apollo, Signum</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="space-y-20">
           <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">BIOGRAPHY</h2>
              <div className="w-24 h-1.5 bg-signal" />
           </div>
           
           <div className="space-y-12 text-black/70 text-lg leading-relaxed font-medium">
              <p>
                Maarten van der Vleuten is a prolific Dutch producer and composer who emerged in the late 1980s as a key architect of the electronic landscape. Based in Vught, he has populated the catalogs of legendary labels like R&S Records and Apollo.
              </p>
              <p>
                Known for his experimental approach and innovative sound design, he operated under dozens of aliases—Flux, In-Existence, Vandervleuten, and DJ Zero-T—between 1987 and 2007. This period showcased his range from Detroit techno and house to cerebral ambient and experimental hardware structures.
              </p>
              <p>
                In 2008, he announced he would release music exclusively under his real name or initials (MVDV), a shift that signaled a move toward multidisciplinary composition and cinematic artifacting.
              </p>
              <p>
                As the founder of Signum Recordings (est. 1996), he continues to curate a platform for frequency exploration, defying mainstream club structures in favor of sonic evolutions.
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
    { title: "High Intolerance...", year: "2008", label: "ToneFloat", icon: Disc },
    { title: "The Scars Remain", year: "2010", label: "ToneFloat", icon: Disc },
    { title: "I Break The Waves", year: "2018", label: "Self", icon: Zap },
  ];

  return (
    <main className="pt-48 pb-32 px-8 lg:px-24 bg-offwhite">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 mb-24">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">ARCHIVE</h2>
           <div className="flex gap-4 font-bold text-[10px] tracking-widest text-black/40">
              <a href="#" className="hover:text-signal">BANDCAMP</a>
              <span>/</span>
              <a href="#" className="hover:text-signal">DISCOGS</a>
           </div>
        </div>

        <div className="space-y-4">
           {releases.map((rel, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-sm">
                <div className="flex items-center gap-8">
                   <span className="text-[10px] font-bold text-signal font-mono">{rel.year}</span>
                   <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight leading-none mb-1 group-hover:text-white">{rel.title}</h4>
                      <p className="text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{rel.label}</p>
                   </div>
                </div>
                <div className="w-10 h-10 border border-black/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                   <ArrowUpRight className="w-4 h-4" />
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
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-black text-white">
    <div className="max-w-5xl mx-auto space-y-24">
       <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">SIGNUM RECORDINGS</h2>
          <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Established 1996 / Node: Vught, NL</p>
       </div>
       
       <div className="bg-white/5 p-12 lg:p-20 rounded-[2.5rem] border border-white/10 space-y-12">
          <p className="text-xl md:text-3xl font-medium leading-relaxed max-w-3xl">
             Founded as a primary platform for experimental artifacts. Signum serves as the vessel for Maarten van der Vleuten's non-mainstream frequency explorations.
          </p>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-12 py-6 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-signal hover:text-white transition-all">
             Explore Catalog
          </a>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { label: "Status", val: "Operational" },
            { label: "Founded", val: "1996" },
            { label: "Sublabels", val: "Passiflora / Glam" }
          ].map((item, i) => (
            <div key={i}>
               <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2">{item.label}</p>
               <p className="text-xl font-bold uppercase tracking-tight">{item.val}</p>
            </div>
          ))}
       </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-48 pb-32 px-8 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto space-y-24">
         <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">PRESS KIT</h2>
         
         <div className="grid gap-6">
            {[
               { title: "Official Biography", size: "Compact & Extended" },
               { title: "Press Portraits", size: "High-Resolution Pack" },
               { title: "Signum Identity", size: "Vector Marks" }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-offwhite rounded-3xl flex items-center justify-between group hover:bg-black hover:text-white transition-all">
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
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-white">
    <div className="max-w-4xl mx-auto space-y-24">
       <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">CONTACT</h2>
       
       <div className="space-y-16">
          <div className="space-y-4">
             <p className="text-[10px] font-bold text-signal uppercase tracking-widest">General Enquiries</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-2xl md:text-4xl font-black tracking-tight hover:text-signal transition-colors break-words">
                CONTACT@MAARTENVANDERVLEUTEN.EU
             </a>
          </div>

          <div className="space-y-4">
             <p className="text-[10px] font-bold text-signal uppercase tracking-widest">Registry Nodes</p>
             <div className="flex gap-12 font-bold text-black/40 uppercase text-xs tracking-widest">
                <a href="#" className="hover:text-black">Instagram</a>
                <a href="#" className="hover:text-black">Bandcamp</a>
                <a href="#" className="hover:text-black">Discogs</a>
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
