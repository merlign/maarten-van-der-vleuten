import React from 'react';
import { Mail, Music, ShoppingCart, Database, Camera } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { SOCIAL_LINKS } from '../data/content';

export const ContactView = () => (
    <PageWrapper>
        <SEO title="Contact" description="Direct communication portal for Maarten van der Vleuten." path="/contact" />
        <PageHeader title="CONTACT." subtitle="Direct Connection" />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 space-y-32">
            <div className="space-y-12">
                <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none">Transmission Node</p>
                <a href="mailto:contact@maartenvandervleuten.eu" className="text-xl sm:text-3xl lg:text-5xl font-black italic uppercase tracking-tighter decoration-signal/20 decoration-[6px] underline underline-offset-[12px] hover:text-signal transition-colors break-all focus-visible:outline-signal">
                    contact@maartenvandervleuten.eu
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 pt-16 border-t border-black/5">
                {[
                    { label: "Spotify", icon: Music, link: SOCIAL_LINKS.spotify, action: "Listen" },
                    { label: "Bandcamp", icon: ShoppingCart, link: SOCIAL_LINKS.bandcamp, action: "Shop" },
                    { label: "Discogs", icon: Database, link: SOCIAL_LINKS.discogs, action: "Archive" },
                    { label: "Instagram", icon: Camera, link: SOCIAL_LINKS.instagram, action: "Photos" }
                ].map((item, i) => (
                    <div key={i} className="space-y-6">
                        <h3 className="text-[11px] font-black uppercase text-black/20 tracking-[0.4em] italic">{item.label}</h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl font-black uppercase italic hover:text-signal transition-colors flex items-center gap-3">
                            <item.icon className="w-6 h-6"/> {item.action}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    </PageWrapper>
);
