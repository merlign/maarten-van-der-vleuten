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
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Biography', path: '/biography' },
    { name: 'Archive', path: '/archive' },
    { name: 'Signum', path: '/signum' },
    { name: 'Journal', path: '/journal' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl",
      isScrolled ? "bg-white/95 backdrop-blur-xl border border-black/10 py-3 rounded-full shadow-2xl" : "bg-transparent py-4 text-white sm:text-black"
    )}>
      <div className="flex items-center justify-between px-8">
        <Link to="/" className="text-xl font-bold tracking-tight group flex items-center gap-2">
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
                location.pathname === link.path ? "text-signal" : (isScrolled ? "text-black/50" : "text-black/50 md:text-black")
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
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border border-black/5 mt-3 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col gap-6 text-black">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold border-b border-black/5 pb-4 flex justify-between items-center group"
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
            Pioneer since 1987. Dutch electronic veteran. Multi-disciplinary composer. Founder of Signum Recordings.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 w-full md:w-auto">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-signal mb-8 font-mono">Structure</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest text-white/40 uppercase">
              <li><Link to="/biography" className="hover:text-white transition-colors">Biography</Link></li>
              <li><Link to="/archive" className="hover:text-white transition-colors">Archive</Link></li>
              <li><Link to="/signum" className="hover:text-white transition-colors">Signum</Link></li>
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
          <span>Archive Live — Node: Vught, NL</span>
        </div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Instagram</a>
           <a href="#" className="hover:text-white transition-colors">Bandcamp</a>
           <a href="#" className="hover:text-white transition-colors">Discogs</a>
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
      {/* Absolute Hero - Portrait Focus */}
      <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end px-8 lg:px-24 bg-black pb-24">
        {/* Background Image / Placeholder for User's Uploaded Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/maarten.jpg" 
            alt="Maarten van der Vleuten Portrait" 
            className="w-full h-full object-cover object-center grayscale opacity-70"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1594437000305-64906f368095?auto=format&fit=crop&q=80&w=2670";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          <div className="fade-up mb-8">
             <span className="text-[10px] font-mono font-bold uppercase tracking-[0.8em] text-signal italic">The Digital Instrument</span>
          </div>
          
          <h1 className="fade-up flex flex-col leading-[0.75] mb-16">
            <span className="text-7xl md:text-[12rem] lg:text-[18rem] font-bold text-white tracking-tighter uppercase mix-blend-difference">
              MAARTEN
            </span>
            <span className="text-6xl md:text-[10rem] lg:text-[15rem] font-serif italic text-signal -mt-4 md:-mt-10 lg:-mt-16 mix-blend-screen leading-none">
              v.d. Vleuten.
            </span>
          </h1>

          <div className="fade-up flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-20">
            <Link 
              to="/biography" 
              className="btn-magnetic px-12 py-7 bg-white text-black font-bold rounded-full flex items-center gap-4 group text-xs uppercase tracking-[0.3em] shadow-2xl transition-all hover:bg-signal hover:text-white"
            >
              <span>ENTER THE BIO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
            <div className="max-w-md">
              <p className="text-white font-mono text-[11px] uppercase tracking-[0.3em] leading-loose opacity-70">
                Pioneering the Dutch electronic landscape since 1987. From experimental techno to cinematic artifacts.
              </p>
            </div>
          </div>
        </div>

        {/* Global Scroll Indicator */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4">
           <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/30 rotate-90 mb-12 origin-right">Scroll / Access</span>
           <div className="w-px h-24 bg-gradient-to-b from-white/10 to-signal" />
        </div>
      </section>

      {/* Wikipedia Extract: Legacy Section */}
      <section className="py-40 bg-white px-8 lg:px-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
               <SectionHeader subtitle="The History" title="Pioneer Node" />
               <div className="space-y-12 text-black/60 text-xl leading-relaxed max-w-2xl">
                  <p>
                    Born in 1967 in Vught, Maarten van der Vleuten emerged as a seminal figure in the Dutch electronic underground. Operating for two decades under over two dozen aliases, he helped architect the sound of labels like R&S, Apollo, and Djax-Up-Beats.
                  </p>
                  <p>
                    In 2008, he consolidated his polymorphic identity to release exclusively under his own name, focusing on high-fidelity sonic exploration and multidisciplinary composition.
                  </p>
               </div>
               <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12 pt-16 border-t border-black/5">
                  {[
                    { label: "Founded", val: "Signum (1996)" },
                    { label: "Aliases", val: "24+ Nodes" },
                    { label: "Active", val: "35+ Years" }
                  ].map((item, i) => (
                    <div key={i}>
                       <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/30 mb-2">{item.label}</p>
                       <p className="text-2xl font-bold uppercase tracking-tighter">{item.val}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-5">
               <div className="aspect-square bg-offwhite rounded-cinema overflow-hidden grayscale group relative">
                  <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&auto=format" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-signal/10 opacity-30" />
               </div>
            </div>
         </div>
      </section>

      {/* Polymorphic Registry (Aliases) */}
      <section className="py-40 bg-paper px-8 lg:px-24 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <SectionHeader subtitle="Registry of identities" title="Polymorphic" />
            <div className="flex flex-wrap gap-x-12 gap-y-16 mt-24">
               {["FLUX", "IN-EXISTENCE", "VANDERVLEUTEN", "DJ ZERO-T", "GANGRENE", "CLICHE", "CRYPTIC", "ZIMT", "INTEGRITY", "ERROR 144"].map((alias, i) => (
                 <div key={i} className="group cursor-help">
                    <span className="text-[10px] font-mono font-bold text-signal/30 group-hover:text-signal mr-2 italic">#{i+1}</span>
                    <span className="text-5xl md:text-7xl font-bold tracking-tighter text-black/20 group-hover:text-black transition-all leading-none">{alias}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Journal Item */}
      <section className="py-40 bg-white px-8 lg:px-24 border-t border-black/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] bg-offwhite rounded-cinema overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542128962-9d50ad7bfdc1?w=1200&auto=format" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-12">
               <SectionHeader subtitle="Latest Output" title="Journal Entry" />
               <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase">High Intolerance Towards Low Energies</h3>
               <p className="text-xl text-black/60 leading-relaxed italic">
                 "Every frequency carries a weight. Our role is to ensure the signal remains pure in an era of digital saturation."
               </p>
               <Link to="/journal" className="inline-flex items-center gap-6 group">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] border-b-2 border-signal pb-2">Read Context</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
               </Link>
            </div>
         </div>
      </section>
    </>
  );
};

// BIOGRAPHY VIEW
const BiographyView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-paper min-h-screen">
    <div className="max-w-7xl mx-auto">
      <SectionHeader subtitle="The Narrative" title="Biography" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-5 sticky top-48">
           <div className="bg-white p-3 rounded-cinema shadow-2xl overflow-hidden aspect-[4/5] grayscale relative group">
              <img src="/maarten.jpg" alt="Maarten van der Vleuten" className="w-full h-full object-cover rounded-cinema" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format"; }} />
              <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-10 left-10 text-white z-20">
                 <p className="text-[10px] font-mono uppercase tracking-widest font-bold border-b border-signal pb-2">Maarten van der Vleuten — Node: Vught</p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-7 space-y-24">
           <article className="space-y-12">
              <h3 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">The Pioneer <br/> <span className="text-signal">Years (1987—2007)</span></h3>
              <div className="space-y-8 text-black/60 text-lg lg:text-xl leading-relaxed font-medium">
                <p>
                  Maarten van der Vleuten (born 1967) is a prolific Dutch producer and composer who became a cornerstone of the electronic landscape during the late 80s and early 90s. 
                </p>
                <p>
                  Operating from his studio in Vught, he populated the catalogs of legendary labels like <span className="text-black font-bold">R&S Records</span> and <span className="text-black font-bold">Apollo</span> under a diverse registry of aliases—most notably <span className="text-signal font-bold italic">Flux</span> and <span className="text-signal font-bold italic">In-Existence</span>.
                </p>
                <p>
                  His work during this era bridged the gap between pure Detroit techno, cerebral ambient, and experimental hardware exploration. He was one of the first Dutch artists to gain international acclaim in the underground techno scene.
                </p>
              </div>
           </article>

           <div className="h-px bg-black/10" />

           <article className="space-y-12">
              <h3 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">The Identity <br/> <span className="text-signal">Shift (2008—Present)</span></h3>
              <div className="space-y-8 text-black/60 text-lg lg:text-xl leading-relaxed font-medium">
                <p>
                  In 2008, Van der Vleuten made a definitive artistic pivot, announcing that all future works would be released under his real name or the initials **MVDV**. This marked the end of his polymorphic era and the beginning of a focus on multidisciplinary sound artifacts.
                </p>
                <p>
                  Today, his work focuses on the intersection of human signal and digital precision, often exploring non-linear compositions and soundscapes for film and experimental media.
                </p>
              </div>
           </article>

           <div className="grid grid-cols-2 gap-8 lg:gap-16 pt-12">
              <div className="space-y-4">
                 <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/30 font-bold">Respected Imprints</p>
                 <ul className="text-sm font-bold uppercase tracking-widest space-y-3">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full"/> R&S RECORDS</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full"/> APOLLO</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full"/> DJAX-UP-BEATS</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full"/> SIGNUM</li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/30 font-bold">Origins</p>
                 <p className="text-sm font-bold uppercase tracking-widest">vught, netherlands <br/> est. 1967</p>
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
    { title: "Moonwater", year: "1993", cat: "APOLLO", type: "Album", alias: "In-Existence" },
    { title: "Laiad", year: "2002", cat: "SIG011", type: "Album", alias: "Flux" },
    { title: "Vow Of Silence", year: "2005", cat: "TF/C", type: "Album", alias: "In-Existence" },
    { title: "High Intolerance...", year: "2008", cat: "TF", type: "Album", alias: "MVDV" },
    { title: "The Scars Remain", year: "2010", cat: "TF", type: "Album", alias: "MVDV" },
    { title: "I Break The Waves", year: "2018", cat: "MVDV", type: "Digital", alias: "MVDV" },
  ];

  return (
    <main className="pt-48 pb-32 px-8 lg:px-24 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
           <SectionHeader subtitle="Sonic registry" title="Archive" />
           <div className="flex gap-4 mb-20">
              <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="btn-magnetic px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 shadow-xl">
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
                    <th className="px-10 py-8">Identity</th>
                    <th className="px-10 py-8">Title</th>
                    <th className="px-10 py-8 text-right">Registry</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                 {releases.map((r, i) => (
                   <tr key={i} className="group hover:bg-offwhite transition-colors">
                      <td className="px-10 py-10 text-[10px] font-mono font-bold text-black/30 group-hover:text-signal transition-colors">{r.year}</td>
                      <td className="px-10 py-10 text-[10px] font-mono font-bold text-black tracking-widest uppercase">{r.alias}</td>
                      <td className="px-10 py-10 font-bold uppercase tracking-tighter text-2xl group-hover:translate-x-3 transition-transform">{r.title}</td>
                      <td className="px-10 py-10 text-right">
                         <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="btn-magnetic p-4 bg-black rounded-full text-white inline-block">
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
            <h3 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">A Laboratory <br/> <span className="text-white/20">for sonic experimentation.</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-end">
               <div className="space-y-8">
                  <p className="text-white/40 text-lg lg:text-xl leading-relaxed font-medium">
                    Signum Recordings was founded in 1996 to provide an uncompromised platform for experimental electronic music. It has served as the primary archive for the works of Maarten van der Vleuten, alongside defunct sublabels Passiflora and Glam Records.
                  </p>
               </div>
               <a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="btn-magnetic px-10 py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest text-[10px] w-fit flex items-center gap-3">
                  <span>Explore Archive</span>
                  <ArrowRight className="w-4 h-4" />
               </a>
            </div>
         </div>
      </div>
    </div>
  </main>
);

// JOURNAL VIEW
const JournalView = () => (
  <main className="pt-48 pb-32 px-8 lg:px-24 bg-offwhite min-h-screen">
    <div className="max-w-4xl mx-auto">
       <SectionHeader subtitle="Live feed" title="Journal" />
       
       <article className="group space-y-12">
          <div className="flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-signal/40">
             <span>Registry Update</span>
             <div className="h-px flex-1 bg-black/5" />
             <span>Early 2026</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none uppercase group-hover:text-signal transition-colors">The Digital Consolidation</h2>
          <div className="aspect-[2/1] bg-white p-3 rounded-cinema shadow-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600&auto=format" className="w-full h-full object-cover rounded-cinema" />
          </div>
          <div className="space-y-8 text-black/50 text-xl leading-relaxed max-w-2xl font-medium">
             <p>
               Moving toward an era where identity is singular. The legacy aliases have been archived to make room for pure frequency exploration. 
             </p>
          </div>
          <div className="pt-10">
             <span className="px-4 py-2 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">#SYSTEMS</span>
          </div>
       </article>
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
               { icon: FileText, title: "Official CV", desc: "Complete narrative and discography summary." },
               { icon: Camera, title: "Visual Pack", desc: "High-resolution portraits (incl. recent work)." },
               { icon: Disc, title: "Archive Mark", desc: "Official Signum and MVDV brand nodes." },
               { icon: Archive, title: "Consolidated Kit", desc: "ZIP archive of all core assets." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-cinema border border-black/5 hover:border-signal/20 transition-all group overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <item.icon size={120} />
                 </div>
                 <item.icon className="text-signal w-10 h-10 mb-8" />
                 <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
                 <p className="text-black/40 text-sm font-medium mb-10 leading-relaxed">{item.desc}</p>
                 <button className="btn-magnetic w-full py-5 bg-black text-white rounded-full flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest shadow-xl">
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
             For cinematic scoring, archive access, and studio enquiries. <br/> Access the direct registry below.
          </p>
          <div className="space-y-12">
             <div className="group border-b border-black/5 pb-12">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-signal mb-4">Registry Mail</p>
                <a href="mailto:contact@maartenvandervleuten.eu" className="text-3xl lg:text-5xl font-bold tracking-tighter hover:text-signal transition-colors uppercase">contact@maartenvandervleuten.eu</a>
             </div>
             <div className="group border-b border-black/5 pb-12">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-signal mb-4">Live Social Nodes</p>
                <div className="flex gap-10">
                   <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-signal transition-colors">Instagram</a>
                   <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-signal transition-colors">Bandcamp</a>
                </div>
             </div>
          </div>
       </div>

       <div className="bg-paper p-16 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[600px] border border-black/5 group">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-black pointer-events-none group-hover:opacity-[0.08] transition-opacity">
             <Mail size={400} />
          </div>
          <div className="space-y-4">
             <p className="text-signal font-mono font-bold uppercase tracking-[0.5em] italic">Encrypted Connection</p>
             <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">SUBMIT <br/> <span className="text-black/20">DIRECT SIGNAL.</span></h3>
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
        <Route path="/signum" element={<SignumView />} />
        <Route path="/journal" element={<JournalView />} />
        <Route path="/press" element={<PressView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
