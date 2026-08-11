import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { SOCIAL_LINKS, SHOP_LINKS } from '../data/content';
import { SpotifyIcon, DiscogsIcon, InstagramIcon } from './BrandIcons';

const LegacyBanner = () => (
  <aside className="bg-signal text-white py-2.5 px-6 text-center relative z-[60] w-full border-b border-white/10">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Looking for the legacy website?</p>
      <a href={SOCIAL_LINKS.legacy} target="_blank" rel="noopener noreferrer" className="text-[11px] font-black uppercase tracking-[0.2em] underline underline-offset-4 flex items-center gap-2 hover:opacity-80 transition-opacity">
        Visit Archive (No longer updated — Do Not Order) <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </aside>
);

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const location = useLocation();

    // Lock body scroll when mobile menu is open to prevent glitchy behavior
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const links = [
        { name: 'Releases', path: '/releases' },
        { name: 'Signum Recordings', href: 'https://www.discogs.com/label/6741-Signum-Recordings', external: true },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
            <LegacyBanner />
            <nav className="py-6 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
                <Link to="/" className="focus-visible:outline-signal shrink-0">
                    <img src="/logo_png.png" alt="Maarten van der Vleuten" className="h-5 sm:h-9 w-auto" />
                </Link>

                <ul className="hidden lg:flex items-center gap-8 font-display">
                    {links.map((link) => (
                        <li key={link.name}>
                            {link.external ? (
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold uppercase tracking-[0.2em] transition-all hover:text-signal text-black/60">
                                    {link.name}
                                </a>
                            ) : (
                                <Link to={link.path} className={cn("text-[14px] font-bold uppercase tracking-[0.2em] transition-all hover:text-signal", location.pathname === link.path ? "text-signal" : "text-black/60")}>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={isShopOpen}
                            className="px-8 py-3 rounded-full text-[14px] font-bold tracking-widest bg-black text-white hover:bg-signal transition-all shadow-lg leading-none flex items-center gap-2 cursor-default"
                        >
                            SHOP <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isShopOpen && "rotate-180")} />
                        </button>
                        {isShopOpen && (
                            <div className="absolute right-0 top-full w-56 pt-3">
                                <div className="bg-white rounded-2xl border border-black/5 shadow-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                                    {SHOP_LINKS.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-5 py-3 text-[13px] font-bold uppercase tracking-widest text-black/70 hover:text-signal hover:bg-offwhite transition-colors"
                                        >
                                            {item.name} <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>
                </ul>

                <button className="lg:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                </button>
            </nav>

            {/* Robust Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-white z-[100] flex flex-col p-8 sm:p-12 animate-in fade-in zoom-in-95 duration-300 h-[100dvh] overflow-y-auto"
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="flex justify-end items-center mb-16 shrink-0">
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2"><X className="w-8 h-8 text-black" /></button>
                    </div>
                    
                    <ul className="flex flex-col gap-6 font-display">
                        {links.map((link) => (
                            <li key={link.name}>
                                {link.external ? (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl sm:text-5xl font-medium border-b border-black/5 pb-4 flex justify-between items-center transition-colors italic tracking-tighter text-black"
                                    >
                                        {link.name}
                                        <ExternalLink className="w-6 h-6 opacity-10" />
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            "text-4xl sm:text-5xl font-medium border-b border-black/5 pb-4 flex justify-between items-center transition-colors italic tracking-tighter",
                                            location.pathname === link.path ? "text-signal" : "text-black"
                                        )}
                                    >
                                        {link.name}
                                        <ArrowRight className={cn("w-6 h-6 transition-opacity", location.pathname === link.path ? "opacity-100" : "opacity-10")} />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-16 flex flex-col gap-8 shrink-0 font-display">
                        <div className="space-y-3">
                            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-black/30 mb-1">Shop</p>
                            {SHOP_LINKS.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-5 bg-black text-white text-center rounded-full text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 active:bg-signal transition-colors"
                                >
                                    {item.name} <ExternalLink className="w-3 h-3"/>
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-center gap-10 items-center pb-8">
                            <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-black/20 hover:text-signal transition-colors"><SpotifyIcon className="w-6 h-6"/></a>
                            <a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="text-black/20 hover:text-signal transition-colors"><DiscogsIcon className="w-6 h-6"/></a>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-black/20 hover:text-signal transition-colors"><InstagramIcon className="w-6 h-6"/></a>
                        </div>
                    </div>
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
                    <img src="/logo_png.png" alt="Maarten van der Vleuten" className="h-8 w-auto" />
                    <p className="text-black/40 text-[12px] font-mono uppercase tracking-[0.1em] leading-relaxed max-w-sm">
                        Composer and musician. Active in the Dutch electronic underground since 1987.
                    </p>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-signal">Connect</h3>
                    <div className="flex gap-6 items-center">
                        <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-signal transition-colors"><SpotifyIcon className="w-5 h-5"/></a>
                        <a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-signal transition-colors"><DiscogsIcon className="w-5 h-5"/></a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-signal transition-colors"><InstagramIcon className="w-5 h-5"/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
