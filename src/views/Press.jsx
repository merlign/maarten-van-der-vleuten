import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { PRESS_ASSETS } from '../data/content';

export const PressView = () => (
    <PageWrapper>
        <SEO title="Press Kit" description="Official media assets and narratives for Maarten van der Vleuten." path="/press" />
        <PageHeader title="PRESS KIT." subtitle="Official Media Registry" />
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-24 space-y-24">
            <header className="flex flex-col sm:flex-row justify-between items-end gap-10">
                <p className="max-w-2xl text-black/50 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-signal pl-8">
                    Media nodes for press, festivals, and independent curators. For custom signal inquiries, contact the studio directly.
                </p>
                <Link to="/archive" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-signal hover:border-signal transition-all">
                    View Full Archive <ArrowRight className="w-3 h-3" />
                </Link>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl">
                {PRESS_ASSETS.map((item, i) => (
                    <a key={i} href={item.link} className="p-12 bg-offwhite rounded-[2.5rem] flex flex-col items-start justify-between group hover:bg-black hover:text-white transition-all border border-black/5 shadow-2xl active:scale-95">
                        <div className="w-full space-y-4 mb-10">
                            <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">{item.title}</h3>
                            <p className="text-xs font-bold text-black/40 group-hover:text-white/40 uppercase tracking-[0.2em] leading-relaxed">{item.size}</p>
                        </div>
                        <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-all shadow-lg">
                            <Download className="w-6 h-6" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    </PageWrapper>
);
