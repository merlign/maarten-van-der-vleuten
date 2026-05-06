import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Music, Disc, BookOpen, ExternalLink, 
  ShoppingCart, Mail, Globe, Play, ChevronRight,
  Archive, FileText, ArrowRight, Zap, Download,
  Instagram, Twitter, Linkedin, Facebook
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
    { name: 'Signum', path: '/signum' },
    { name: 'Press Kit', path: '/press-kit' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl",
      isScrolled ? "bg-white/90 backdrop-blur-xl border border-black/5 py-3 rounded-full shadow-2xl" : "bg-transparent py-4"
    )}>
      <div className="flex items-center justify-between px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-black group">
          MVDV<span className="text-signal group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-signal",
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
            className="btn-magnetic bg-black text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 group"
          >
            <span>BANDCAMP</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border border-black/5 mt-2 rounded-cinema p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-black border-b border-black/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://maartenvandervleuten.bandcamp.com/" 
              className="bg-signal text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest"
            >
              BANDCAMP <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-8 lg:px-24 rounded-t-[4rem] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        <div className="md:col-span-2">
          <Link to="/" className="text-4xl font-bold font-sans tracking-tighter mb-4 inline-block">MAARTEN VAN DER VLEUTEN</Link>
          <p className="text-white/40 max-w-md font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em]">
            Dutch electronic music pioneer, multidisciplinary composer & producer. Curator of the Signum archive. Active since 1987.
          </p>
          <div className="flex gap-4 mt-8">
             <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-signal hover:border-signal transition-all"><Instagram className="w-4 h-4" /></a>
             <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-signal hover:border-signal transition-all"><Facebook className="w-4 h-4" /></a>
             <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-signal hover:border-signal transition-all"><ExternalLink className="w-4 h-4" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 font-mono">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/biography" className="hover:text-signal transition-colors text-white/60">Biography</Link></li>
            <li><Link to="/signum" className="hover:text-signal transition-colors text-white/60">Signum Label</Link></li>
            <li><Link to="/press-kit" className="hover:text-signal transition-colors text-white/60">Press & Media</Link></li>
            <li><Link to="/shop" className="hover:text-signal transition-colors text-white/60">Catalog / Shop</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 font-mono">Archive Access</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="hover:text-signal transition-colors text-white/60">Bandcamp Shop</a></li>
            <li><a href="https://www.discogs.com/artist/164-Maarten-Van-Der-Vleuten" target="_blank" className="hover:text-signal transition-colors text-white/60">Discogs Profile</a></li>
            <li><a href="mailto:contact@maartenvandervleuten.eu" className="text-signal hover:underline transition-colors mt-4 inline-block font-bold">REACH OUT</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <span>System Live — Signum Node: Active</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Maarten van der Vleuten. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Page Fragments ---

const SectionHeader = ({ subtitle, title, alignment = "left" }) => (
  <div className={cn("mb-20", alignment === "center" ? "text-center" : "text-left")}>
    <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/40 mb-4">{subtitle}</p>
    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">{title}<span className="text-signal">.</span></h2>
  </div>
);

// --- Page: HOME ---

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-8 lg:px-24 bg-black">
      {/* Background with Ambient Motion */}
      <div className="absolute inset-0 z-0 opacity-40 grayscale">
        <img 
          src="https://images.unsplash.com/photo-1594437000305-64906f368095?auto=format&fit=crop&q=80&w=2670" 
          alt="Vintage Studio Electronics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="fade-up inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-signal/10 backdrop-blur-md border border-signal/20 text-signal mb-8">
          <Zap className="w-3 h-3 fill-signal" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Pioneer of Experimental Electronics</span>
        </div>
        
        <h1 className="fade-up flex flex-col leading-[0.85] mb-12">
          <span className="text-5xl md:text-7xl lg:text-[9rem] font-bold text-white tracking-tighter">
            EXPERIENCE THE
          </span>
          <span className="text-7xl md:text-9xl lg:text-[14rem] font-serif italic text-signal -mt-2 lg:-mt-12 mix-blend-plus-lighter">
            Sonic Archive.
          </span>
        </h1>

        <div className="fade-up flex flex-col md:flex-row items-start md:items-center gap-12">
          <Link 
            to="/shop" 
            className="btn-magnetic px-12 py-6 bg-white text-black font-bold rounded-full flex items-center gap-3 group text-sm uppercase tracking-widest"
          >
            <span>Explore Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="max-w-md h-px bg-white/20 hidden md:block w-32" />
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.25em] leading-relaxed">
            Traversing 30 years of synthesis, modular architecture, and multidisciplinary composition.
          </p>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc, icon: Icon, children }) => (
  <div className="bg-white p-10 rounded-cinema h-full flex flex-col justify-between border border-black/5 hover:border-signal/20 transition-all duration-700 group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
       <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-signal transition-colors duration-500 shadow-xl shadow-black/10">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tighter uppercase">{title}</h3>
      <p className="text-black/50 text-sm leading-relaxed max-w-[90%] font-medium">
        {desc}
      </p>
    </div>
    <div className="mt-12 relative z-10">
      {children}
    </div>
  </div>
);

const Features = () => {
  const [shuffleItems, setShuffleItems] = useState(['Detroit Techno', 'Dark Ambient', 'Experimental IDM', 'Neo-Classical']);
  const [typewriterText, setTypewriterText] = useState("");
  const fullTypewriter = "BOOTING SIGNAL V.01... ALIASES FOUND: FLUX, IN-EXISTENCE, DJ ZERO-T... SCANNING ARCHIVE...";

  useEffect(() => {
    const shuffleTimer = setInterval(() => {
      setShuffleItems(prev => [...prev.slice(1), prev[0]]);
    }, 3000);
    
    let i = 0;
    const typewriterTimer = setInterval(() => {
      setTypewriterText(fullTypewriter.slice(0, i));
      i = (i + 1) % (fullTypewriter.length + 10);
    }, 80);

    return () => {
      clearInterval(shuffleTimer);
      clearInterval(typewriterTimer);
    };
  }, []);

  return (
    <section className="py-32 px-8 lg:px-24 bg-offwhite">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <FeatureCard 
          icon={Disc} 
          title="The Legacy" 
          desc="Decades of influence as a Dutch pioneer, with releases spanning R&S Records to Djax-Up-Beats."
        >
          <div className="relative h-24 overflow-hidden bg-black/5 rounded-2xl p-4 flex flex-col justify-center">
            {shuffleItems.map((item, i) => (
              <div 
                key={item} 
                className={cn(
                  "absolute left-4 right-4 flex items-center justify-between px-6 py-3 bg-white rounded-xl shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-black/5",
                  i === 0 ? "translate-y-0 opacity-100 scale-100 z-10" : "translate-y-12 opacity-0 scale-90 z-0"
                )}
              >
                <span className="font-bold text-[10px] uppercase tracking-widest">{item}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-signal" />
              </div>
            ))}
          </div>
        </FeatureCard>

        <FeatureCard 
          icon={Archive} 
          title="Signum Archive" 
          desc="The primary outlet for experimental and non-mainstream musical artifacts curated since 1996."
        >
          <div className="bg-black rounded-2xl p-6 font-mono text-[10px] text-green-500/70 leading-normal min-h-[120px] shadow-2xl relative border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse" />
              <span className="text-white/30 uppercase tracking-[0.2em] text-[8px]">Archive Data Feed</span>
            </div>
            {typewriterText}
            <span className="inline-block w-1 h-3 bg-green-500 ml-1 animate-pulse" />
          </div>
        </FeatureCard>

        <FeatureCard 
          icon={Music} 
          title="Sound Design" 
          desc="Multidisciplinary composition for film, performance, and avant-garde art installations."
        >
          <div className="flex gap-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                <div className="w-full bg-black/5 rounded-full relative overflow-hidden h-24">
                   <div 
                     className="absolute bottom-0 w-full bg-signal transition-all duration-1000 ease-in-out" 
                     style={{ height: `${20 + Math.random() * 80}%`, transitionDelay: `${i * 100}ms` }} 
                   />
                </div>
                <span className="text-[8px] font-mono text-black/20 font-bold uppercase">{['S','M','T','W','T','F','S'][i]}</span>
              </div>
            ))}
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="reveal-container py-40 px-8 lg:px-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale invert">
        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2670" alt="Texture" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="reveal-text text-[10px] font-mono uppercase tracking-[0.5em] text-signal/60 mb-12 font-bold italic">The Methodology</p>
        
        <h2 className="reveal-text text-4xl md:text-6xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.95] mb-12 uppercase">
          Technology is not a tool; <br/> <span className="text-white/20">it is an environment.</span>
        </h2>
        
        <h3 className="reveal-text text-5xl md:text-7xl lg:text-[9rem] font-serif italic text-signal leading-none -mt-4">
          I build <span className="text-white">Worlds</span> out of waves.
        </h3>

        <div className="reveal-text mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-white/10 pt-16">
          <p className="text-white/40 text-[11px] font-mono uppercase tracking-[0.2em] leading-relaxed max-w-sm">
            Rejecting the repetitive safety of the loop in favor of organic, evolving sonic structures.
          </p>
          <div className="flex flex-col gap-10">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              "Since 1987, my process has been one of constant reinvention. From the raw energy of early techno to the precise clinical clarity of modern experimentalism."
            </p>
            <Link to="/biography" className="group flex items-center gap-6 text-white hover:text-signal transition-all w-fit">
              <span className="text-xs font-bold uppercase tracking-[0.3em] font-mono">Archive Narrative</span>
              <div className="h-px w-24 bg-white/20 group-hover:bg-signal group-hover:w-40 transition-all duration-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProtocolSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".protocol-panel");
      
      panels.forEach((panel, i) => {
        if (i < panels.length - 1) {
          gsap.to(panel, {
            scale: 0.9,
            opacity: 0.4,
            filter: "blur(40px)",
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${panels.length * 100}%`,
        pin: true,
        scrub: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "SONIC INCEPTION",
      desc: "Creating unique synthesis chains that define the core frequency identity of each project.",
      color: "bg-paper"
    },
    {
      num: "02",
      title: "ANALOG EXECUTION",
      desc: "Processing through modular circuitry and physical recording spaces to instill organic warmth.",
      color: "bg-white"
    },
    {
      num: "03",
      title: "SIGNUM SELECTION",
      desc: "Rigorous curation for the official archive, ensuring only the most vital sonic artifacts survive.",
      color: "bg-offwhite"
    }
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black h-screen">
      {steps.map((step, i) => (
        <div key={i} className={cn("protocol-panel absolute inset-0 flex items-center justify-center p-8 lg:p-24", step.color)}>
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="relative">
              <span className="text-[15rem] lg:text-[25rem] font-bold text-black/[0.03] absolute -top-[40%] left-0 pointer-events-none leading-none select-none">
                {step.num}
              </span>
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-signal mb-8">{step.num} / PROCESS</p>
              <h3 className="text-6xl lg:text-9xl font-bold tracking-tighter mb-10 relative z-10 leading-[0.85] uppercase">{step.title}</h3>
              <p className="text-xl lg:text-3xl text-black/40 max-w-md leading-tight font-medium">
                {step.desc}
              </p>
            </div>
            
            <div className="relative flex items-center justify-center pointer-events-none">
               {/* Decorative Element */}
               <div className="w-[400px] h-[400px] border border-black/5 rounded-full flex items-center justify-center">
                  <div className="w-[300px] h-[300px] border-2 border-signal/20 rounded-full flex items-center justify-center animate-spin-slow">
                     <div className="w-4 h-4 bg-signal rounded-full shadow-[0_0_20px_rgba(153,1,0,0.5)]" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// --- View: BIOGRAPHY ---

const BiographyView = () => (
  <main className="pt-40 pb-32 px-8 lg:px-24 bg-paper min-h-screen">
    <div className="max-w-6xl mx-auto">
      <SectionHeader subtitle="The Narrative" title="Biography" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 relative">
          <div className="sticky top-40 bg-white p-2 rounded-cinema shadow-2xl overflow-hidden grayscale aspect-[3/4]">
             <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670" alt="Biography Portrait Placeholder" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold uppercase tracking-tighter">Pioneer Status</h3>
            <p className="text-xl text-black/60 leading-relaxed font-medium">
              Born in Vught, Netherlands (1967), Maarten van der Vleuten emerged as a seminal figure in the Dutch electronic dance scene during the late 1980s. With a career spanning over three decades, his work is characterized by an relentless refusal to stay static within a single genre.
            </p>
            <p className="text-lg text-black/50 leading-relaxed">
              Between 1987 and 2007, he operated under a spectrum of more than two dozen aliases—including <span className="text-signal font-bold uppercase font-mono text-sm tracking-widest">In-Existence, Flux, and Vandervleuten</span>—crafting foundational works for legendary imprints such as R&S Records, Apollo, and Djax-Up-Beats.
            </p>
          </div>

          <div className="h-px bg-black/5" />

          <div className="space-y-8">
            <h3 className="text-3xl font-bold uppercase tracking-tighter">The Shift (2008)</h3>
            <p className="text-lg text-black/50 leading-relaxed">
              After twenty years of polymorphic identity, Maarten announced a focused consolidation of his artistic output. Since 2008, he has recorded exclusively under his birth name or the initials **MVDV**, marking a transition from club-focused structures to multi-disciplinary composition and avant-garde sound design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 bg-black/5 p-10 rounded-cinema">
             <div>
                <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-2">Based In</p>
                <p className="text-xl font-bold">Netherlands</p>
             </div>
             <div>
                <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-2">Active Since</p>
                <p className="text-xl font-bold">1987</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

// --- View: SIGNUM ---

const SignumView = () => {
  const releases = [
    { year: '2026', title: 'A Forest / Love Will Tear Us Apart', format: 'Vinyl' },
    { year: '2019', title: 'Beer, Boots & Pussy', format: 'CDr' },
    { year: '2018', title: 'Parts Of The Process', format: 'CDr' },
    { year: '2009', title: 'ECT For Piano', format: 'CD + Booklet' },
    { year: '2007', title: "Kurt's Zimmer Publikation", format: 'CDs + Book' },
  ];

  return (
    <main className="pt-40 pb-32 px-8 lg:px-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subtitle="Independent Label" title="Signum Recordings" />
        
        <div className="bg-black text-white p-16 rounded-cinema mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <Archive size={300} />
           </div>
           <div className="relative z-10 max-w-2xl">
              <p className="text-signal font-mono font-bold uppercase tracking-[0.4em] mb-8 italic">Est. 1996</p>
              <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8 leading-none">A PLATFORM FOR THE NON-MAINSTREAM.</h3>
              <p className="text-white/50 text-xl leading-relaxed">
                Founded by Van der Vleuten as a laboratory for experiments in ambient, industrial, and experimental soundscapes. Signum serves as a curated archive for work that defies commercial categorization.
              </p>
           </div>
        </div>

        <div className="space-y-4">
           <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/40 mb-10 text-center">Selected Label Registry</p>
           {releases.map((release, i) => (
             <div key={i} className="group border-b border-black/5 py-8 flex flex-col md:flex-row justify-between items-center hover:bg-offwhite px-8 transition-all rounded-xl">
                <span className="text-[10px] font-mono font-bold text-black/30 group-hover:text-signal">{release.year}</span>
                <h4 className="text-2xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform">{release.title}</h4>
                <span className="text-[10px] font-mono uppercase tracking-widest text-black/40">{release.format}</span>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
};

// --- View: PRESS KIT ---

const PressKitView = () => (
  <main className="pt-40 pb-32 px-8 lg:px-24 bg-offwhite min-h-screen">
    <div className="max-w-6xl mx-auto">
      <SectionHeader subtitle="Media Assets" title="Press Kit" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
         <div className="bg-white p-12 rounded-cinema border border-black/5">
            <FileText className="text-signal w-10 h-10 mb-8" />
            <h3 className="text-2xl font-bold mb-4 uppercase">Official Bio</h3>
            <p className="text-black/50 text-sm leading-relaxed mb-8">
              Download the complete biography including discography highlights and project descriptions. (PDF / TXT)
            </p>
            <button className="btn-magnetic px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
               <span>Download Assets</span>
               <Download className="w-4 h-4" />
            </button>
         </div>
         <div className="bg-white p-12 rounded-cinema border border-black/5">
            <Globe className="text-signal w-10 h-10 mb-8" />
            <h3 className="text-2xl font-bold mb-4 uppercase">Visual Identity</h3>
            <p className="text-black/50 text-sm leading-relaxed mb-8">
              High-resolution press portraits and official Signum Recordings logo marks.
            </p>
            <button className="btn-magnetic px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
               <span>Download Images</span>
               <Download className="w-4 h-4" />
            </button>
         </div>
      </div>

      <div className="bg-black text-white/40 p-12 rounded-cinema font-mono text-[10px] uppercase tracking-widest leading-loose border border-white/5">
         <p className="text-white/60 mb-8 font-bold border-b border-white/10 pb-4">Short Preview Bio</p>
         "Dutch pioneer Maarten van der Vleuten has been a vital force in electronic music since 1987. Recording for R&S, Apollo, and Djax-Up-Beats, he has explored over two dozen aliases before consolidating his output under his own name. He is the founder of Signum recordings and a multidisciplinary composer for film and art installations."
      </div>
    </div>
  </main>
);

// --- View: SHOP ---

const ShopView = () => {
  const products = [
    { title: "Parts of the Process", cat: "SIG040", price: "€15.00", image: "https://images.unsplash.com/photo-1629731210134-8c08ecfbcb48?auto=format&fit=crop&q=80&w=800" },
    { title: "ECT For Piano", cat: "SIG022", price: "€20.00", image: "https://images.unsplash.com/photo-1520529011348-e6d194c5e3d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Kurt's Zimmer", cat: "SIG018", price: "€45.00", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800" },
    { title: "Flux: Laiad", cat: "SIG011", price: "€18.00", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <main className="pt-40 pb-32 px-8 lg:px-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Catalog Archive" title="The Shop" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((p, i) => (
             <a key={i} href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="group flex flex-col gap-6">
                <div className="aspect-square bg-offwhite rounded-cinema overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                   <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ShoppingCart className="text-white w-8 h-8" />
                   </div>
                </div>
                <div className="px-4">
                   <p className="text-[10px] font-mono font-bold text-black/30 mb-1 uppercase tracking-widest">{p.cat}</p>
                   <h4 className="text-xl font-bold uppercase tracking-tighter mb-2 group-hover:text-signal transition-colors">{p.title}</h4>
                   <p className="text-[10px] font-mono font-bold text-signal">{p.price}</p>
                </div>
             </a>
           ))}
        </div>

        <div className="mt-32 p-16 bg-offwhite rounded-cinema text-center border border-black/5">
           <h3 className="text-3xl font-bold tracking-tighter mb-8 uppercase">Looking for digital discography?</h3>
           <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://maartenvandervleuten.bandcamp.com/" className="btn-magnetic px-12 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3">
                 <span>Visit Bandcamp</span>
                 <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.discogs.com/artist/164-Maarten-Van-Der-Vleuten" className="btn-magnetic px-12 py-5 border border-black/10 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3">
                 <span>Visit Discogs</span>
                 <ExternalLink className="w-4 h-4" />
              </a>
           </div>
        </div>
      </div>
    </main>
  );
};

// --- View: CONTACT ---

const ContactView = () => (
  <main className="pt-40 pb-32 px-8 lg:px-24 bg-white min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
       <div>
          <SectionHeader subtitle="Get in touch" title="Contact" />
          <p className="text-xl text-black/50 leading-relaxed mb-12">
             For inquiries regarding scoring, collaborations, licensing, or archive access. Direct communication is centered at the Signum hub.
          </p>
          <div className="space-y-8">
             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-offwhite rounded-full flex items-center justify-center text-black group-hover:bg-signal group-hover:text-white transition-all">
                   <Mail className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-[10px] font-mono uppercase tracking-widest text-black/40">Email</p>
                   <a href="mailto:contact@maartenvandervleuten.eu" className="text-xl font-bold hover:text-signal transition-colors tracking-tight">contact@maartenvandervleuten.eu</a>
                </div>
             </div>
             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-offwhite rounded-full flex items-center justify-center text-black group-hover:bg-signal group-hover:text-white transition-all">
                   <Instagram className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-[10px] font-mono uppercase tracking-widest text-black/40">Social</p>
                   <a href="#" className="text-xl font-bold hover:text-signal transition-colors tracking-tight">@maartenvandervleuten</a>
                </div>
             </div>
          </div>
       </div>

       <div className="bg-paper p-12 rounded-cinema shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-8 text-black opacity-5">
             <Mail size={300} />
          </div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-signal mb-12">Inquiry Portal</p>
          <div className="space-y-12">
             <div className="h-px bg-black/10 w-full" />
             <div className="h-px bg-black/10 w-full" />
             <div className="h-px bg-black/10 w-full" />
             <div className="h-px bg-black/10 w-full" />
          </div>
          <button className="mt-20 btn-magnetic w-full py-6 bg-black text-white rounded-full font-bold uppercase tracking-[0.3em] text-xs">
             <span>SUBMIT PROTOCOL</span>
          </button>
       </div>
    </div>
  </main>
);

// --- APP Core ---

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return (
    <div className="relative bg-offwhite min-h-screen selection:bg-signal selection:text-white antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Features /><Philosophy /><ProtocolSection /></>} />
        <Route path="/biography" element={<BiographyView />} />
        <Route path="/signum" element={<SignumView />} />
        <Route path="/press-kit" element={<PressKitView />} />
        <Route path="/shop" element={<ShopView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
