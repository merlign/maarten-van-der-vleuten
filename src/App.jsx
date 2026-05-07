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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 py-4 sm:py-5 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 flex items-center justify-between">
        <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter text-black">
          MAARTEN VAN DER VLEUTEN
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[60] flex flex-col p-8 sm:p-12 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-12">
             <span className="font-bold text-black text-sm tracking-widest">MENU</span>
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
    <footer className="bg-white text-black py-20 px-6 sm:px-8 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black leading-none">MAARTEN <br/> VAN DER VLEUTEN</h2>
            <p className="text-black/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest leading-loose max-w-sm">
              Professional composer and music maker. Pioneer since 1987. Founder of Signum Recordings. Vught, Netherlands.
            </p>
          </div>
          
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-6">Navigation</h4>
             <ul className="space-y-3 text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><Link to="/biography" className="hover:text-black transition-colors">Biography</Link></li>
                <li><Link to="/archive" className="hover:text-black transition-colors">Archive</Link></li>
                <li><Link to="/signum" className="hover:text-black transition-colors">Signum</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-6">Socials</h4>
             <ul className="space-y-3 text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-widest">
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Bandcamp</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Discogs</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] font-bold text-black/20 uppercase tracking-widest">
           <p>&copy; {new Date().getFullYear()} Maarten van der Vleuten</p>
           <div className="flex gap-8 italic">
              <span>Vught, Netherlands</span>
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
    <main className="bg-white overflow-hidden">
      {/* Responsive Splitted Hero */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
            
            {/* Left Content Column */}
            <div className="order-2 lg:order-1 relative z-10 py-12 lg:py-0">
               <p className="text-[10px] font-bold text-signal uppercase tracking-[0.6em] mb-6 inline-block">SINCE 1987 / VUGHT</p>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1] tracking-tighter uppercase mb-10">
                 MAARTEN <br/> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
               </h1>
               <p className="text-black/50 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-10 font-medium">
                 A Dutch electronic pioneer for over 35 years. From industrial techno under numerous aliases to refined cinematic scoring and experimental sound design.
               </p>
               <div className="flex flex-wrap gap-4 sm:gap-6">
                  <Link to="/biography" className="px-8 sm:px-10 py-4 sm:py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-all shadow-lg">
                    Biography
                  </Link>
                  <Link to="/archive" className="px-8 sm:px-10 py-4 sm:py-5 border border-black text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Archive
                  </Link>
               </div>
            </div>

            {/* Right Image Column */}
            <div className="order-1 lg:order-2 relative h-[40vh] sm:h-[50vh] lg:h-[70vh] w-full">
               <div className="absolute inset-0 grayscale rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl">
                  <img 
                    src="/maarten.jpg" 
                    alt="Maarten van der Vleuten" 
                    className="w-full h-full object-cover object-[center_20%] scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format";
                    }}
                  />
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40 translate-x-[-1px]" />
                  <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid: Latest / Signum / Archive */}
      <section className="py-20 sm:py-32">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
               {/* Project Box */}
               <div className="bg-offwhite p-10 sm:p-12 rounded-[2.5rem] space-y-6 sm:space-y-8 group transition-all duration-500 border border-black/5 hover:bg-black hover:text-white">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-signal rounded-full flex items-center justify-center text-white">
                     <Archive className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase leading-none">SIGNUM <br/> RECORDINGS</h3>
                  <p className="text-black/40 group-hover:text-white/50 text-xs sm:text-sm leading-relaxed">
                     Independent label founded in 1996 for experimental artifacts.
                  </p>
                  <Link to="/signum" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1">
                     VIEW LABEL <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               {/* Project Box */}
               <div className="bg-offwhite p-10 sm:p-12 rounded-[2.5rem] space-y-6 sm:space-y-8 group transition-all duration-500 border border-black/5 hover:bg-black hover:text-white">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-signal rounded-full flex items-center justify-center text-white">
                     <Music className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase leading-none">SONIC <br/> ARCHIVE</h3>
                  <p className="text-black/40 group-hover:text-white/50 text-xs sm:text-sm leading-relaxed">
                     A complete registry of over 24 identities reflecting his career.
                  </p>
                  <Link to="/archive" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1">
                     VIEW ARCHIVE <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>

               {/* Project Box */}
               <div className="bg-offwhite p-10 sm:p-12 rounded-[2.5rem] space-y-6 sm:space-y-8 group transition-all duration-500 border border-black/5 hover:bg-black hover:text-white md:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-signal rounded-full flex items-center justify-center text-white">
                     <Newspaper className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase leading-none">BANDCAMP <br/> STORE</h3>
                  <p className="text-black/40 group-hover:text-white/50 text-xs sm:text-sm leading-relaxed">
                     Hard copies and digital nodes. Direct from the source in Vught.
                  </p>
                  <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-signal pb-1">
                     SHOP NOW <ExternalLink className="w-4 h-4" />
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 sm:py-40 bg-black text-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic mb-8 sm:mb-12">
               "No Loops. <br className="sm:hidden"/> <span className="text-signal">Just Evolution.</span>"
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-signal mx-auto mb-10 sm:mb-12" />
            <p className="text-white/30 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.5em]">Vught, Netherlands</p>
         </div>
      </section>
    </main>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-start">
        <div className="relative">
           <img 
             src="/maarten.jpg" 
             alt="Maarten van der Vleuten" 
             className="w-full aspect-[4/5] object-cover grayscale rounded-[2rem] sm:rounded-[3rem] shadow-2xl mb-8 sm:mb-12"
             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }}
           />
           <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-6 sm:pt-8 font-bold uppercase text-[9px] sm:text-[11px] tracking-widest text-black/40">
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
        <div className="space-y-12 sm:space-y-20">
           <div className="space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">BIOGRAPHY</h2>
              <div className="w-16 sm:w-24 h-2 bg-signal" />
           </div>
           
           <div className="space-y-8 sm:space-y-12 text-black/70 text-base sm:text-lg leading-relaxed font-medium">
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
    <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <div className="mb-16 sm:mb-24">
           <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">ARCHIVE</h2>
           <div className="flex gap-6 sm:gap-10 font-bold text-[9px] sm:text-[11px] tracking-[0.3em] text-black/30">
              <a href="#" className="hover:text-signal transition-colors">BANDCAMP</a>
              <a href="#" className="hover:text-signal transition-colors">DISCOGS</a>
           </div>
        </div>

        <div className="space-y-4 max-w-4xl">
           {releases.map((rel, i) => (
             <div key={i} className="bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-sm">
                <div className="flex items-center gap-6 sm:gap-12">
                   <span className="text-[9px] sm:text-[11px] font-bold text-signal font-mono">{rel.year}</span>
                   <div>
                      <h4 className="text-lg sm:text-2xl font-black uppercase leading-none mb-1 group-hover:text-white">
                        {rel.title}
                      </h4>
                      <p className="text-[8px] sm:text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{rel.label}</p>
                   </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-offwhite text-black rounded-full flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-all">
                   <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
  <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 space-y-16 sm:space-y-24">
       <div className="space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-black">SIGNUM RECORDINGS</h2>
          <p className="text-[10px] sm:text-[12px] font-bold text-signal uppercase tracking-[0.4em]">ESTABLISHED 1996 / VUGHT, NL</p>
       </div>
       
       <div className="bg-offwhite p-10 sm:p-16 lg:p-20 rounded-[2rem] sm:rounded-[4rem] border border-black/5 space-y-8 sm:space-y-12">
          <p className="text-lg sm:text-3xl lg:text-4xl font-bold leading-tight max-w-5xl text-black">
             Established as an independent vessel for frequency exploration. Signum has served as the core archive for Maarten's experimental electronic output for over 25 years.
          </p>
          <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="inline-flex px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-signal transition-all shadow-xl">
             Explore Catalog
          </a>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pt-12 border-t border-black/5">
          {[
            { label: "Founded", val: "1996" },
            { label: "Location", val: "Vught" },
            { label: "Legacy", val: "Archive" },
            { label: "Status", val: "Active" }
          ].map((item, i) => (
            <div key={i}>
               <p className="text-[9px] sm:text-[10px] font-bold text-black/20 uppercase tracking-widest mb-2">{item.label}</p>
               <p className="text-base sm:text-xl font-bold uppercase text-black">{item.val}</p>
            </div>
          ))}
       </div>
    </div>
  </main>
);

// PRESS VIEW
const PressView = () => (
   <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 space-y-16 sm:space-y-24">
         <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">PRESS KIT</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">
            {[
               { title: "Story", desc: "Biography Pack" },
               { title: "Visual Assets", desc: "Portrait Hub" },
               { title: "Identity", desc: "Logo Files" },
               { title: "Archive Pack", desc: "Full ZIP" }
            ].map((item, i) => (
              <div key={i} className="p-8 sm:p-12 bg-offwhite rounded-[2rem] sm:rounded-[3rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all border border-black/5">
                 <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-none mb-1">{item.title}</h3>
                    <p className="text-[9px] sm:text-[10px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-widest">{item.desc}</p>
                 </div>
                 <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-all">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                 </button>
              </div>
            ))}
         </div>
      </div>
   </main>
);

// CONTACT VIEW
const ContactView = () => (
  <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 space-y-16 sm:space-y-24">
       <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">CONTACT</h2>
       
       <div className="space-y-16 sm:space-y-24">
          <div className="space-y-4 sm:space-y-6">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Direct Communication</p>
             <a href="mailto:contact@maartenvandervleuten.eu" className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight hover:text-signal transition-colors break-words leading-none uppercase">
                contact@maartenvandervleuten.eu
             </a>
          </div>

          <div className="space-y-6">
             <p className="text-[10px] font-bold text-signal uppercase tracking-[0.4em]">Social Channels</p>
             <div className="flex flex-wrap gap-8 sm:gap-16 font-bold text-black/40 uppercase text-[10px] sm:text-sm tracking-[0.2em]">
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
