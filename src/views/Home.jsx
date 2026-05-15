import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Disc, ArrowRight, ExternalLink } from 'lucide-react';
import { SEO, PageWrapper } from '../components/Layout';
import { LATEST_RELEASES, SOCIAL_LINKS } from '../data/content';
import { SpotifyIcon, DiscogsIcon, InstagramIcon } from '../components/BrandIcons';

export const HomeView = () => (
  <PageWrapper>
    <SEO title="Official Site" description="Official website of Maarten van der Vleuten." path="/" />
    
    {/* HERO SECTION */}
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 w-full border-b border-black/5 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <header className="order-1 lg:order-1 space-y-10">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.8em]">Composer</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-black leading-[0.85] tracking-tighter uppercase">
              MAARTEN <br/> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
            </h1>
            <p className="text-black/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium italic">
              Electronic music and sound design. Based in the Netherlands, active since 1987. From early techno to cinematic soundscapes and experimental recordings.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/biography" className="px-8 py-4 bg-black text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-signal transition-all shadow-xl active:scale-95">Biography</Link>
              <Link to="/archive" className="px-8 py-4 border-2 border-black text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95">Archive</Link>
            </div>
            <div className="flex gap-8 pt-4 items-center">
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Spotify"><SpotifyIcon className="w-6 h-6"/></a>
              <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Bandcamp"><ShoppingCart className="w-6 h-6"/></a>
              <a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Discogs"><DiscogsIcon className="w-6 h-6"/></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Instagram"><InstagramIcon className="w-6 h-6"/></a>
            </div>
          </header>
          <div className="order-2 lg:order-2">
            <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative grayscale group">
              <img src="/maarten.jpg" alt="Maarten van der Vleuten" className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* LATEST RELEASES */}
    <section className="py-24 sm:py-32 bg-offwhite border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 mb-20 w-full">
          <div className="space-y-6 text-left">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">New Releases</p>
            <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter leading-[0.9]">LATEST <br className="hidden sm:block"/> RELEASES.</h2>
          </div>
          <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center text-[11px] font-black uppercase tracking-widest border-b-2 border-signal pb-2 hover:translate-x-2 transition-all group shrink-0">
            Visit Shop <ArrowRight className="w-4 h-4" />
          </a>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {LATEST_RELEASES.map((item, i) => (
            <article key={i} className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all group">
               <div className="aspect-square bg-offwhite rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                  <Disc className="w-16 h-16 text-black/5 group-hover:scale-110 transition-transform group-hover:rotate-12" />
                  <div className="absolute top-6 right-6 px-3 py-1 bg-black text-white text-[10px] font-black rounded-full italic">{item.year}</div>
               </div>
               <h3 className="text-xl uppercase tracking-tighter mb-2 leading-tight">{item.title}</h3>
               <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] mb-8">{item.label} Recordings</p>
               <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-signal transition-colors shadow-lg active:scale-95">
                  Buy on Bandcamp <ExternalLink className="w-3 h-3" />
               </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* BIOGRAPHY TEASER */}
    <section className="py-24 sm:py-32 bg-white border-b border-black/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-10">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">Biography</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.95]">
              Over 35 years <br/> of electronic <br/> music.
            </h2>
            <div className="space-y-8 text-black/60 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
              <p>Maarten has been part of the electronic music scene since the late eighties. His work covers many different styles and periods, from early techno to modern experimental compositions.</p>
              <Link to="/biography" className="inline-flex items-center gap-6 text-black font-black uppercase tracking-widest text-[11px] group border-b-2 border-signal pb-2 hover:translate-x-3 transition-transform">
                Read Biography <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-offwhite rounded-[3rem] flex items-center justify-center group cursor-pointer overflow-hidden border border-black/5 shadow-2xl">
              <span className="text-[15vw] font-black text-black/5 italic group-hover:scale-125 transition-transform duration-1000">1987</span>
              <Disc className="absolute w-20 h-20 text-signal/20 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SIGNUM TEASER */}
    <section className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-square bg-white/5 border border-white/10 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center group hover:bg-white/10 transition-colors shadow-2xl backdrop-blur-2xl">
               <span className="text-[10px] font-black text-signal uppercase tracking-[0.4em] mb-4">Vught, NL</span>
               <p className="text-sm font-black uppercase italic text-white/20 mb-10">[ Signum Recordings ]</p>
               <div className="w-20 h-px bg-white/20" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">About the Label</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.95]">
              SIGNUM <br/> RECORDINGS.
            </h2>
            <div className="space-y-10">
              <p className="text-white/40 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
                An independent label for experimental music, founded in 1996 as a home for Maarten's most personal work.
              </p>
              <Link to="/signum" className="inline-flex px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-signal hover:text-white transition-all shadow-2xl active:scale-95">
                Explore The Label
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Background Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-black italic">SIGNUM</span>
      </div>
    </section>
  </PageWrapper>
);
