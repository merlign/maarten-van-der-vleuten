import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ArchivePreview = ({ data }) => {
    const items = [...(data.items || [])].sort((a, b) => b.year - a.year);

    return (
        <div className="bg-white py-24 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block mb-6">Release History</span>
                <h1 className="text-6xl uppercase tracking-tighter leading-[0.85] mb-16">ARCHIVE.</h1>
                <div className="grid grid-cols-1 gap-4 max-w-5xl">
                    {items.map((rel, i) => (
                        <article key={i} className="bg-white p-8 rounded-[2rem] flex items-center justify-between shadow-lg border border-black/5 gap-8">
                            <div className="flex items-center gap-8 flex-1 min-w-0">
                                <header className="shrink-0 flex flex-col items-center">
                                    <span className="text-[13px] font-black text-signal font-mono tracking-widest">{rel.year}</span>
                                    <div className="w-0.5 h-8 bg-black/5 mt-1.5 rounded-full" />
                                </header>
                                <div className="min-w-0">
                                    <h4 className="text-2xl font-black uppercase leading-tight mb-1 tracking-tighter italic truncate">{rel.title}</h4>
                                    <p className="text-[12px] font-bold text-black/30 uppercase tracking-[0.15em] truncate">{rel.alias} — {rel.label}</p>
                                </div>
                            </div>
                            <div className="w-14 h-14 bg-offwhite text-black rounded-full flex items-center justify-center shrink-0 shadow-xl">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
