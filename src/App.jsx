import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Music, Disc, BookOpen, ExternalLink, 
  ShoppingCart, Mail, Globe, Play, ChevronRight,
  Archive, FileText, ArrowRight, Zap
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
      isScrolled ? "bg-white/70 backdrop-blur-xl border border-black/5 py-3 rounded-full" : "bg-transparent py-4"
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
                "text-sm font-medium tracking-wide transition-colors hover:text-signal",
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border border-black/5 mt-2 rounded-[2rem] p-6 shadow-xl animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-black border-b border-black/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://maartenvandervleuten.bandcamp.com/" 
              className="bg-signal text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold"
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
    <footer className="bg-black text-white pt-24 pb-12 px-6 lg:px-24 rounded-t-[4rem] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold font-sans tracking-tighter mb-4">MAARTEN VAN DER VLEUTEN</h2>
          <p className="text-white/40 max-w-md font-mono text-xs leading-relaxed uppercase tracking-widest">
            Dutch electronic music pioneer, multidisciplinary composer & producer. Curator of the Signum archive.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 font-mono">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/biography" className="hover:text-signal transition-colors">Biography</Link></li>
            <li><Link to="/signum" className="hover:text-signal transition-colors">Signum Label</Link></li>
            <li><Link to="/press-kit" className="hover:text-signal transition-colors">Press & Media</Link></li>
            <li><Link to="/shop" className="hover:text-signal transition-colors">Catalog / Shop</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 font-mono">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="https://maartenvandervleuten.bandcamp.com/" target="_blank" className="hover:text-signal transition-colors">Bandcamp</a></li>
            <li><a href="https://www.discogs.com/artist/164-Maarten-Van-Der-Vleuten" target="_blank" className="hover:text-signal transition-colors">Discogs</a></li>
            <li><a href="#" className="hover:text-signal transition-colors">Instagram</a></li>
            <li><a href="mailto:contact@maartenvandervleuten.eu" className="hover:text-signal transition-colors text-signal">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">System Operational — Archive Live</span>
        </div>
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Maarten van der Vleuten. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Page Components ---

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
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-8 lg:px-24">
      {/* Background with Ambient Motion */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2670" 
          alt="Studio Textures" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="fade-up inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-signal/20 backdrop-blur-md border border-signal/30 text-signal mb-8">
          <Zap className="w-4 h-4 fill-signal" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Pioneer Series v01</span>
        </div>
        
        <h1 className="fade-up flex flex-col leading-[0.8] mb-12">
          <span className="text-5xl md:text-7xl lg:text-[10rem] font-bold text-white tracking-tighter mix-blend-difference">
            EXPERIENCE THE
          </span>
          <span className="text-7xl md:text-9xl lg:text-[15rem] font-serif italic text-signal -mt-2 lg:-mt-10 mix-blend-screen">
            Sonic Archive.
          </span>
        </h1>

        <div className="fade-up flex flex-col md:flex-row items-start md:items-center gap-8">
          <Link 
            to="/shop" 
            className="btn-magnetic px-10 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 group"
          >
            <span>EXPLORE CATALOG</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-white/60 font-mono text-xs uppercase tracking-widest max-w-sm">
            Access three decades of experimental electronics and avant-garde composition.
          </p>
        </div>
      </div>
    </section>
  );
};

const FeatureCard1 = () => {
  const [items, setItems] = useState(['Ambient Flux', 'Analog Signal', 'Digital Void']);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-paper p-8 rounded-cinema h-[450px] flex flex-col justify-between border border-black/5 hover:shadow-2xl transition-all duration-700 group">
      <div>
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-signal transition-colors duration-500">
          <Disc className="w-6 h-6 animate-spin-slow" />
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tighter">THE PIONEER'S LEGACY</h3>
        <p className="text-black/60 text-sm leading-relaxed">
          Traversing 30 years of Dutch electronic music history, from early rave techno to deep ambient soundscapes.
        </p>
      </div>
      
      <div className="relative h-32 overflow-hidden bg-black/5 rounded-[1.5rem] p-4 flex flex-col justify-center gap-2">
        {items.map((item, i) => (
          <div 
            key={item} 
            className="absolute left-4 right-4 flex items-center justify-between px-6 py-3 bg-white rounded-xl shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-black/5"
            style={{ 
              transform: `translateY(${(i - 1) * 60}px) scale(${i === 1 ? 1 : 0.85})`,
              opacity: i === 1 ? 1 : 0.3,
              zIndex: i === 1 ? 2 : 1
            }}
          >
            <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
            <div className="w-2 h-2 rounded-full bg-signal" />
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureCard2 = () => {
  const [text, setText] = useState("");
  const fullText = "INITIALIZING SIGNUM ARCHIVE... PROTOCOL: NEW ERA ELECTRONICS... ACCESS GRANTED.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i = (i + 1) % (fullText.length + 5);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-8 rounded-cinema h-[450px] flex flex-col justify-between border border-black/5 hover:shadow-2xl transition-all duration-700 group">
      <div>
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-signal transition-colors duration-500">
          <Archive className="w-6 h-6" />
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tighter">SIGNUM AUDIO ARCHIVE</h3>
        <p className="text-black/60 text-sm leading-relaxed">
          Curated selection of independent releases, rare tracks, and exclusive new-era digital explorations.
        </p>
      </div>

      <div className="bg-black rounded-[1.5rem] p-6 font-mono text-[10px] text-green-500/80 leading-relaxed min-h-[140px] relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse" />
          <span className="text-white/40 uppercase tracking-[0.2em]">Live Data Feed</span>
        </div>
        {text}
        <span className="inline-block w-1.5 h-3 bg-green-500 ml-1 animate-pulse" />
      </div>
    </div>
  );
};

const FeatureCard3 = () => {
  const [activeDay, setActiveDay] = useState(2); // Tuesday as default
  
  return (
    <div className="bg-paper p-8 rounded-cinema h-[450px] flex flex-col justify-between border border-black/5 hover:shadow-2xl transition-all duration-700 group">
      <div>
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-signal transition-colors duration-500">
          <Music className="w-6 h-6" />
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tighter">CINEMATIC COMPOSITION</h3>
        <p className="text-black/60 text-sm leading-relaxed">
          Avant-garde sound design for film, art installations, and multidisciplinary performances.
        </p>
      </div>

      <div className="bg-black/5 rounded-[1.5rem] p-4 flex flex-col gap-4">
        <div className="flex justify-between px-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div 
              key={i} 
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all duration-300",
                activeDay === i ? "bg-signal text-white" : "text-black/40"
              )}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="h-20 bg-white rounded-xl border border-black/5 p-4 flex items-center justify-center relative overflow-hidden">
          <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest text-center">
            {activeDay === 2 ? "SCORING SESSION: 'VOID'" : "SEARCHING PROTOCOL..."}
          </div>
          {/* Animated Cursor Mockup */}
          <div 
            className="absolute w-4 h-4 text-signal transition-all duration-[2000ms] pointer-events-none opacity-40"
            style={{ 
              top: activeDay % 2 === 0 ? '10%' : '60%', 
              right: activeDay % 3 === 0 ? '10%' : '70%' 
            }}
          >
            <Play className="w-full h-full fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-32 px-8 lg:px-24 bg-offwhite">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
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
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="reveal-container py-48 px-8 lg:px-24 bg-black text-white relative overflow-hidden">
      {/* Background Texture */}
      <img 
        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2670" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
      />
      
      <div className="relative z-10 max-w-5xl">
        <p className="reveal-text text-sm font-mono uppercase tracking-[0.5em] text-white/40 mb-12">The Manifesto</p>
        
        <h2 className="reveal-text text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-12">
          MOST ELECTRONICA FOCUSES ON THE <span className="text-white/20">REPETITIVE LOOP.</span>
        </h2>
        
        <h2 className="reveal-text text-5xl md:text-7xl lg:text-9xl font-serif italic text-signal leading-none">
          We focus on the <span className="text-white">Unpredictable</span> Evolution.
        </h2>

        <div className="reveal-text mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          <p className="text-white/60 text-lg leading-relaxed">
            Sound is not a product; it is a living organism. My work is an ongoing dialogue between human intention and algorithmic serendipity.
          </p>
          <div className="flex flex-col gap-6">
            <Link to="/biography" className="group flex items-center gap-4 text-white hover:text-signal transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest font-mono">Read Biography</span>
              <div className="h-px w-12 bg-white group-hover:bg-signal group-hover:w-24 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".protocol-panel");
      
      panels.forEach((panel, i) => {
        if (i < panels.length - 1) {
          gsap.to(panel, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
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
      desc: "Architecting unique synthesis chains to define the core frequency identity of each project.",
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
        <div 
          key={i} 
          className={cn(
            "protocol-panel absolute inset-0 flex items-center justify-center px-8 lg:px-24",
            step.color
          )}
        >
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="relative">
              <span className="text-[12rem] lg:text-[20rem] font-bold text-black/5 absolute -top-1/2 left-0 pointer-events-none">
                {step.num}
              </span>
              <h3 className="text-5xl lg:text-8xl font-bold tracking-tighter mb-8 relative z-10">{step.title}</h3>
              <p className="text-lg lg:text-2xl text-black/60 max-w-md leading-relaxed">
                {step.desc}
              </p>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
              {/* Unique Animations per Step */}
              {i === 0 && (
                <div className="w-64 h-64 border-2 border-black/10 rounded-full flex items-center justify-center animate-spin-slow">
                   <div className="w-48 h-48 border-4 border-signal rounded-full flex items-center justify-center p-8">
                      <div className="w-full h-full bg-black rounded-full" />
                   </div>
                </div>
              )}
              {i === 1 && (
                <div className="w-full max-w-md flex flex-col gap-4">
                  {[...Array(8)].map((_, j) => (
                    <div key={j} className="h-8 bg-black/5 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-signal/20 animate-pulse" style={{ animationDelay: `${j * 0.2}s` }} />
                      <div className="absolute top-0 bottom-0 left-0 bg-signal transition-all duration-1000" style={{ width: `${Math.random() * 100}%` }} />
                    </div>
                  ))}
                </div>
              )}
              {i === 2 && (
                <svg viewBox="0 0 400 200" className="w-full text-signal">
                  <path 
                    d="M0 100 Q 50 20, 100 100 T 200 100 T 300 100 T 400 100" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    className="animate-[dash_5s_linear_infinite]"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                  />
                  <style>{`
                    @keyframes dash {
                      to { stroke-dashoffset: 0; }
                    }
                  `}</style>
                </svg>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// --- Page Views ---

const HomeView = () => (
  <>
    <Hero />
    <Features />
    <Philosophy />
    <Protocol />
    <section className="py-48 bg-white px-8 lg:px-24 flex flex-col items-center text-center">
      <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12">LEAVE NO <br/> <span className="text-signal">TRACE.</span></h2>
      <a 
        href="https://maartenvandervleuten.bandcamp.com/" 
        className="btn-magnetic bg-black text-white px-12 py-6 rounded-full text-lg font-bold group"
      >
        <span>VISIT BANDCAMP</span>
      </a>
    </section>
  </>
);

const ViewPlaceholder = ({ title, subtitle }) => (
  <section className="min-h-screen pt-32 pb-24 px-8 lg:px-24 bg-offwhite flex flex-col items-center justify-center text-center">
    <div className="max-w-4xl">
      <p className="text-xs font-mono uppercase tracking-[0.5em] text-black/40 mb-8">{subtitle}</p>
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-12">
        {title}<span className="text-signal">.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 bg-white p-12 rounded-cinema border border-black/5">
        <p className="text-lg leading-relaxed text-black/60 italic">
          "Archiving three decades of sonic exploration and multidisciplinary composition."
        </p>
        <div className="flex flex-col justify-end">
           <Link to="/" className="text-xs font-bold uppercase tracking-widest text-signal flex items-center gap-2 group">
              <ArrowRight className="w-4 h-4" />
              <span>Back to Home</span>
           </Link>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative bg-offwhite">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/biography" element={<ViewPlaceholder title="BIOGRAPHY" subtitle="Life in frequencies" />} />
        <Route path="/signum" element={<ViewPlaceholder title="SIGNUM" subtitle="Independent Audio Archive" />} />
        <Route path="/press-kit" element={<ViewPlaceholder title="PRESS KIT" subtitle="Media Assets & Bio" />} />
        <Route path="/shop" element={<ViewPlaceholder title="SHOP" subtitle="Physical & Digital Goods" />} />
        <Route path="/contact" element={<ViewPlaceholder title="CONTACT" subtitle="Direct Inquiry" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
