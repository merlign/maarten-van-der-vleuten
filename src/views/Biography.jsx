import React from 'react';
import { Disc } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { BIOGRAPHY_ERAS, ALIAS_LIST } from '../data/content';

export const BiographyView = () => (
  <PageWrapper>
    <SEO title="Biography" description="Historical overview documenting 35 years of electronic music evolution." path="/biography" />
    <PageHeader 
        title={<>BIOGRAPHY.</>} 
        subtitle="Historical Overview"
        meta={<>Based in: Vught, NL <br/> Active Since: 1987</>}
    />
    <section className="bg-white w-full">
        {BIOGRAPHY_ERAS.map((era, i) => (
            <article key={i} className="border-b border-black/5 relative hover:bg-offwhite transition-colors duration-700 w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-24 sm:py-32 lg:py-48 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                    <div className="md:col-span-4 md:sticky md:top-40 self-start space-y-12">
                        <header className="flex items-center gap-6">
                            <span className="text-signal text-3xl sm:text-4xl lg:text-5xl font-black italic whitespace-nowrap">{era.years}</span>
                            <div className="flex-1 h-px bg-signal/20" />
                        </header>
                        <div className="space-y-3">
                            <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em]">Era</p>
                            <p className="text-xl font-black uppercase tracking-tighter italic leading-none text-black">Section 0{i+1}</p>
                        </div>
                        <div className="hidden md:block pt-8 space-y-8">
                            <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em]">Notable Releases</p>
                            <ul className="space-y-4">
                                {era.releases.map((rel, j) => (
                                    <li key={j} className="text-xs font-bold text-black uppercase tracking-widest flex items-center gap-3">
                                        <Disc className="w-3.5 h-3.5 text-signal" /> {rel}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-8 space-y-10 lg:space-y-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[1.1]">{era.title}</h2>
                        <div className="space-y-8 text-black/70 text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium max-w-2xl lg:max-w-3xl">
                            {era.description.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p }} className="leading-[1.7]" />)}
                        </div>
                    </div>
                </div>
            </article>
        ))}
    </section>

    <section className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="space-y-20 sm:space-y-24">
            <div className="space-y-8 max-w-4xl">
                <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block">Alias Registry</span>
                <h2 className="text-5xl sm:text-6xl uppercase tracking-tighter leading-tight">THE NAMES.</h2>
                <p className="text-black/50 text-lg font-medium leading-relaxed italic max-w-xl">
                    Maarten has released music under more than 20 different artist names over the years.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-y-16">
                {ALIAS_LIST.map((alias, i) => (
                <div key={i} className="group cursor-default border-t border-black/5 pt-6">
                    <span className="block text-[10px] font-black text-black/20 group-hover:text-signal transition-colors mb-2">Alias #{i+1}</span>
                    <span className="text-base lg:text-lg font-black uppercase tracking-tighter text-black/30 group-hover:text-black transition-colors leading-[1.1]">{alias}</span>
                </div>
                ))}
            </div>
        </div>
    </section>
  </PageWrapper>
);
