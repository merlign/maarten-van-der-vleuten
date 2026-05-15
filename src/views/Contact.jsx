import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { SOCIAL_LINKS } from '../data/content';
import { SpotifyIcon, DiscogsIcon, InstagramIcon } from '../components/BrandIcons';

export const ContactView = () => (
    <PageWrapper>
        <SEO title="Contact" description="Direct communication portal for Maarten van der Vleuten." path="/contact" />
        <PageHeader title="CONTACT." subtitle="Direct Connection" />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                    { label: "Spotify", icon: SpotifyIcon, link: SOCIAL_LINKS.spotify, desc: "Listen to the catalogue" },
                    { label: "Bandcamp", icon: ShoppingCart, link: SOCIAL_LINKS.bandcamp, desc: "Order architectural releases" },
                    { label: "Discogs", icon: DiscogsIcon, link: SOCIAL_LINKS.discogs, desc: "View the complete credit registry" },
                    { label: "Instagram", icon: InstagramIcon, link: SOCIAL_LINKS.instagram, desc: "Visual updates and process" }
                ].map((item, i) => (
                    <a 
                        key={i} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group p-10 bg-offwhite hover:bg-black transition-all rounded-[3rem] border border-black/5 flex flex-col gap-8 shadow-sm hover:shadow-2xl active:scale-[0.98]"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                            <item.icon className="w-8 h-8 text-black"/>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter group-hover:text-signal transition-colors">
                                {item.label}
                            </h3>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 group-hover:text-white/40 transition-colors">
                                {item.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    </PageWrapper>
);
