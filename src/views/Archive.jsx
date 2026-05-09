import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { FULL_ARCHIVE_REGISTRY, SOCIAL_LINKS } from '../data/content';

export const ArchiveView = () => (
    <PageWrapper>
        <SEO title="Archive" description="Complete list of musical releases since 1987." path="/archive" />
        <PageHeader title="ARCHIVE." subtitle="Release History">
            <div className="flex flex-wrap gap-8 sm:gap-10 font-bold text-xs tracking-widest text-black/40 w-full uppercase pt-6">
                <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-signal/20 hover:text-black transition-colors">Bandcamp</a>
                <a href={SOCIAL_LINKS.discogs} target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-signal/20 hover:text-black transition-colors">Discogs</a>
            </div>
        </PageHeader>
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-32">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-5xl">
                {FULL_ARCHIVE_REGISTRY.sort((a,b) => b.year - a.year).map((rel, i) => (
                    <article key={i} className="bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-lg w-full border border-black/5 gap-4 sm:gap-8">
                        <div className="flex items-center gap-6 sm:gap-12 flex-1 min-w-0">
                            <header className="shrink-0 flex flex-col items-center">
                                <span className="text-[12px] sm:text-[13px] font-black text-signal font-mono tracking-widest group-hover:text-white">{rel.year}</span>
                                <div className="w-0.5 h-6 sm:h-8 bg-black/5 group-hover:bg-white/10 mt-1.5 rounded-full" />
                            </header>
                            <div className="min-w-0">
                                <h4 className="text-lg sm:text-2xl font-black uppercase leading-tight mb-1 group-hover:text-white tracking-tighter italic truncate">{rel.title}</h4>
                                <p className="text-[10px] sm:text-[12px] font-bold text-black/30 group-hover:text-white/40 uppercase tracking-[0.15em] truncate">{rel.alias} — {rel.label}</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-offwhite text-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-signal group-hover:text-white transition-all shadow-xl active:scale-90">
                            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    </PageWrapper>
);
