import React from 'react';
import { Link } from 'react-router-dom';
import { Music, ShoppingCart, Database, Disc, ArrowRight, ExternalLink } from 'lucide-react';
import { SEO, PageWrapper } from '../components/Layout';
import { LATEST_RELEASES, SOCIAL_LINKS } from '../data/content';

export const HomeView = () => (
  <PageWrapper>
    <SEO title="Official Site" description="Official website of Maarten van der Vleuten." path="/" />
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 w-full border-b border-black/5 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <header className="order-2 lg:order-1 space-y-10">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.8em]">COMPOSER / PIONEER</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase italic">
              MAARTEN <br/> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block"/> <span className="text-signal">VLEUTEN.</span>
            </h1>
            <p className="text-black/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
              A Dutch electronic pioneer for over 35 years. From industrial techno under numerous aliases to refined cinematic scoring and experimental sound design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/biography" className="px-8 py-4 bg-black text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-signal transition-all shadow-xl active:scale-95">Evolution History</Link>
              <Link to="/archive" className="px-8 py-4 border-2 border-black text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95">Archive Registry</Link>
            </div>
            <div className="flex gap-8 pt-4 items-center">
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal" title="Spotify"><Music className="w-5 h-5"/></a>
              <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal" title="Bandcamp"><ShoppingCart className="w-5 h-5"/></a>
              <a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="p-3 transition-colors hover:text-signal" title="Discogs"><Database className="w-5 h-5"/></a>
            </div>
          </header>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative grayscale">
              <img src="/maarten.jpg" alt="Maarten van der Vleuten" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 sm:py-32 bg-offwhite border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <header className="flex flex-col sm:flex-row justify-between items-end gap-10 mb-20 text-left w-full">
          <div className="space-y-6">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">Registry Spotlight</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter italic">LATEST <br/> RELEASES.</h2>
          </div>
          <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center text-[11px] font-black uppercase tracking-widest border-b-2 border-signal pb-2 hover:translate-x-2 transition-all group">
            Browse Full Shop <ArrowRight className="w-4 h-4" />
          </a>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {LATEST_RELEASES.map((item, i) => (
            <article key={i} className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all group">
               <div className="aspect-square bg-offwhite rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                  <Disc className="w-16 h-16 text-black/5 group-hover:scale-110 transition-transform group-hover:rotate-12" />
               </div>
               <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic leading-tight">{item.title}</h3>
               <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] mb-8">{item.label} Recordings</p>
               <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-signal transition-colors shadow-lg active:scale-95">
                  Buy on Bandcamp <ExternalLink className="w-3 h-3" />
               </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);
