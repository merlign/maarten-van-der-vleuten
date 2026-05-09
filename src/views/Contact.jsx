import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { SOCIAL_LINKS } from '../data/content';
import { SpotifyIcon, DiscogsIcon, InstagramIcon } from '../components/BrandIcons';

export const ContactView = () => (
    <PageWrapper>
        <SEO title="Contact" description="Direct communication portal for Maarten van der Vleuten." path="/contact" />
        <PageHeader title="CONTACT." subtitle="Direct Connection" />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 space-y-32">
            <div className="space-y-12">
                <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none">Email</p>
                <a href="mailto:contact@maartenvandervleuten.eu" className="text-xl sm:text-3xl lg:text-5xl font-black italic uppercase tracking-tighter decoration-signal/20 decoration-[6px] underline underline-offset-[12px] hover:text-signal transition-colors break-all focus-visible:outline-signal">
                    contact@maartenvandervleuten.eu
                </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pt-16 border-t border-black/5">
                {[
                    { label: "Spotify", icon: SpotifyIcon, link: SOCIAL_LINKS.spotify },
                    { label: "Bandcamp", icon: ShoppingCart, link: SOCIAL_LINKS.bandcamp },
                    { label: "Discogs", icon: DiscogsIcon, link: SOCIAL_LINKS.discogs },
                    { label: "Instagram", icon: InstagramIcon, link: SOCIAL_LINKS.instagram }
                ].map((item, i) => (
                    <a 
                        key={i} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all"
                    >
                        <div className="w-12 h-12 bg-offwhite rounded-full flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-all shadow-sm">
                            <item.icon className="w-6 h-6"/>
                        </div>
                        <div className="text-center sm:text-left pt-2">
                            <span className="text-lg sm:text-xl font-black uppercase italic tracking-tighter group-hover:text-signal transition-colors">
                                {item.label}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    </PageWrapper>
);
