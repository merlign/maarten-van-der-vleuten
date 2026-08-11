import React from 'react';

export const SignumPreview = ({ data }) => (
    <div className="bg-white py-24 px-6 sm:px-10 space-y-24">
        <div className="max-w-6xl mx-auto">
            <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] italic block mb-4">{data.origin}</span>
            <h1 className="text-6xl uppercase tracking-tighter leading-[0.85] mb-16">SIGNUM <br /> RECORDINGS.</h1>

            <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none mb-6">About the Label</p>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-[1.05] text-black mb-6">{data.philosophy?.title}</h2>
            <p className="text-black/70 text-xl font-medium leading-relaxed max-w-4xl mb-20">{data.philosophy?.text}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                {(data.sections || []).map((section, i) => (
                    <div key={i} className="space-y-6 p-10 bg-offwhite rounded-[2.5rem] border border-black/5 shadow-xl">
                        <span className="text-signal text-lg font-black italic">0{i + 1}</span>
                        <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-none">{section.title}</h3>
                        <p className="text-black/50 text-base font-medium leading-relaxed">{section.text}</p>
                    </div>
                ))}
            </div>

            <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none mb-6">Key Releases</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {(data.keyReleases || []).map((release, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-lg">
                        <span className="block text-[10px] font-black text-black/20 mb-4 tracking-[0.4em]">{release.id}</span>
                        <h4 className="text-lg font-black uppercase tracking-tighter italic mb-1">{release.title}</h4>
                        <p className="text-xs font-bold text-black/40 uppercase tracking-widest">{release.year}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
