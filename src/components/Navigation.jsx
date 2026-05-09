import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { SOCIAL_LINKS } from '../data/content';

const LegacyBanner = () => (
  <aside className="bg-signal text-white py-2.5 px-6 text-center relative z-[60] w-full border-b border-white/10">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Looking for the legacy archive?</p>
      <a href={SOCIAL_LINKS.legacy} target="_blank" rel="noopener noreferrer" className="text-[11px] font-black uppercase tracking-[0.2em] underline underline-offset-4 flex items-center gap-2 hover:opacity-80 transition-opacity">
        Access Old Website <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </aside>
);

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    const links = [
        { name: 'Biography', path: '/biography' },
        { name: 'Archive', path: '/archive' },
        { name: 'Signum', path: '/signum' },
        { name: 'Press', path: '/press' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
            <LegacyBanner />
            <nav className="py-6 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
                <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase focus-visible:outline-signal">
                    MAARTEN VAN DER VLEUTEN
                </Link>

                <ul className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link to={link.path} className={cn("text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-signal", location.pathname === link.path ? "text-signal" : "text-black/60")}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full text-[11px] font-bold tracking-widest bg-black text-white hover:bg-signal transition-all shadow-lg active:scale-95">SHOP</a>
                    </li>
                </ul>

                <button className="lg:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8 sm:p-12 animate-in fade-in duration-300">
                    <div className="flex justify-between items-center mb-16">
                        <span className="font-bold text-black text-[11px] tracking-widest uppercase italic border-b border-signal">Navigation Portal</span>
                        <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6 text-black" /></button>
                    </div>
                    <ul className="flex flex-col gap-6">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} onClick={() => setIsMenuOpen(false)} className="text-3xl sm:text-4xl font-black text-black border-b border-black/5 pb-4 flex justify-between items-center hover:text-signal transition-colors italic tracking-tighter">
                                    {link.name}
                                    <ArrowRight className="w-6 h-6 opacity-10" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export const Footer = () => (
    <footer className="bg-white text-black py-24 px-6 sm:px-10 lg:px-12 border-t border-black/5 w-full">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">MAARTEN <br/> VAN DER VLEUTEN</h2>
                    <p className="text-black/40 text-[12px] font-mono uppercase tracking-[0.1em] leading-relaxed max-w-sm">
                        Professional composer and recording artist. Pioneer of the Dutch electronic underground since 1987.
                    </p>
                </div>
                <div className="space-y-8">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-signal">Navigation</h3>
                    <ul className="space-y-4 text-xs font-bold text-black/40 uppercase tracking-widest">
                        <li><Link to="/biography" className="hover:text-black transition-colors">Biography</Link></li>
                        <li><Link to="/archive" className="hover:text-black transition-colors">Archive</Link></li>
                        <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div className="space-y-8">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-signal">Connect</h3>
                    <ul className="space-y-4 text-xs font-bold text-black/40 uppercase tracking-widest">
                        <li><a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Spotify</a></li>
                        <li><a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Bandcamp</a></li>
                        <li><a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Discogs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);
