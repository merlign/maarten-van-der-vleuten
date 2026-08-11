import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { SEO, PageWrapper } from '../components/Layout';
import { RELEASES, SOCIAL_LINKS } from '../data/content';
import { ReleaseCard } from '../components/ReleaseCard';
import { SpotifyIcon, DiscogsIcon, InstagramIcon } from '../components/BrandIcons';

export const HomeView = () => (
  <PageWrapper>
    <SEO title="Official Site" description="Official website of Maarten van der Vleuten." path="/" />

    {/* HERO SECTION */}
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 w-full border-b border-black/5 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <header className="order-1 lg:order-1 space-y-10">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.8em]">Composer & Producer</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-black leading-[0.85] tracking-tighter uppercase">
              MAARTEN <br /> <span className="text-signal lg:text-black">VAN DER</span> <br className="hidden lg:block" /> <span className="text-signal">VLEUTEN</span>
            </h1>
            <p className="text-black/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium italic">
              Electronic music composer and producer. This site is constantly evolving, more content coming soon. Based in the Netherlands, active since 1987.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-black text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-signal transition-all shadow-xl active:scale-95 leading-none">Visit Bandcamp Shop</a>
            </div>
            <div className="flex gap-8 pt-4 items-center">
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Spotify"><SpotifyIcon className="w-6 h-6" /></a>
              <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Bandcamp"><ShoppingCart className="w-6 h-6" /></a>
              <a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Discogs"><DiscogsIcon className="w-6 h-6" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-signal hover:scale-110" title="Instagram"><InstagramIcon className="w-6 h-6" /></a>
            </div>
          </header>
          <div className="order-2 lg:order-2">
            <div className="aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto bg-offwhite rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-xl relative group">
              <img src="/maarten-hero.webp" alt="Maarten van der Vleuten" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
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
            <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter leading-[0.9]">Latest releases</h2>
          </div>
          <Link to="/releases" className="inline-flex gap-4 items-center text-[11px] font-black uppercase tracking-widest border-b-2 border-signal pb-2 hover:translate-x-2 transition-all group shrink-0">
            View All Releases <ArrowRight className="w-4 h-4" />
          </Link>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {RELEASES.slice(0, 3).map((item, i) => (
            <ReleaseCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>

    {/* SIGNUM INFO SECTION */}
    <section className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-square bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl backdrop-blur-2xl overflow-hidden">
              <img src="/signum-logo.jpg" alt="Signum Recordings" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
            <p className="text-[11px] font-bold text-signal uppercase tracking-[0.6em] italic leading-none">About the Label</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.95]">
              SIGNUM <br /> RECORDINGS.
            </h2>
            <p className="text-white/40 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              An independent label for experimental music, founded in 1996 as a home for Maarten's most personal work and archival releases.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-black italic">SIGNUM</span>
      </div>
    </section>
  </PageWrapper>
);
