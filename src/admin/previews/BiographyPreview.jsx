import React from 'react';
import { Disc } from 'lucide-react';

export const BiographyPreview = ({ data }) => (
    <div className="bg-white">
        <header className="py-24 px-6 sm:px-10 border-b border-black/5">
            <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block mb-6">Historical Overview</span>
            <h1 className="text-6xl uppercase tracking-tighter leading-[0.85]">BIOGRAPHY.</h1>
        </header>

        {(data.eras || []).map((era, i) => (
            <article key={i} className="border-b border-black/5 w-full">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 space-y-8">
                        <header className="flex items-center gap-6">
                            <span className="text-signal text-3xl font-black italic whitespace-nowrap">{era.years}</span>
                            <div className="flex-1 h-px bg-signal/20" />
                        </header>
                        <div className="space-y-8">
                            <p className="text-[11px] font-black text-black/20 uppercase tracking-[0.4em]">Notable Releases</p>
                            <ul className="space-y-4">
                                {(era.releases || []).map((rel, j) => (
                                    <li key={j} className="text-xs font-bold text-black uppercase tracking-widest flex items-center gap-3">
                                        <Disc className="w-3.5 h-3.5 text-signal" /> {rel}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-8 space-y-8">
                        <h2 className="text-4xl uppercase tracking-tighter leading-[1.1]">{era.title}</h2>
                        <div className="space-y-6 text-black/70 text-lg leading-relaxed font-medium max-w-3xl">
                            {(era.description || []).map((p, j) => <p key={j}>{p}</p>)}
                        </div>
                    </div>
                </div>
            </article>
        ))}

        <section className="py-24 max-w-6xl mx-auto px-6 sm:px-10">
            <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block mb-6">Alias Registry</span>
            <h2 className="text-5xl uppercase tracking-tighter leading-tight mb-4">THE NAMES.</h2>
            <p className="text-black/50 text-lg font-medium leading-relaxed italic max-w-xl mb-16">{data.aliasIntro}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-10">
                {(data.aliases || []).map((alias, i) => (
                    <div key={i} className="border-t border-black/5 pt-6">
                        <span className="block text-[10px] font-black text-black/20 mb-2">Alias #{i + 1}</span>
                        <span className="text-base font-black uppercase tracking-tighter text-black/30 leading-[1.1]">{alias}</span>
                    </div>
                ))}
            </div>
        </section>
    </div>
);
