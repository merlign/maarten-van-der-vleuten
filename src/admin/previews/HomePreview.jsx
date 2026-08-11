import React from 'react';
import { resolveImage } from '../previewUtils';

export const HomePreview = ({ data, getAsset }) => (
    <div className="bg-white">
        <section className="pt-24 pb-20 w-full border-b border-black/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <header className="space-y-10">
                        <p className="text-[11px] font-bold text-signal uppercase tracking-[0.8em]">Composer & Producer</p>
                        <h1 className="text-[64px] text-black leading-[0.85] tracking-tighter uppercase">
                            MAARTEN <br /> <span className="text-signal lg:text-black">VAN DER</span> <br /> <span className="text-signal">VLEUTEN</span>
                        </h1>
                        <p className="text-black/50 text-lg leading-relaxed max-w-xl font-medium italic">
                            {data.heroText}
                        </p>
                    </header>
                    <div>
                        <div className="aspect-[4/5] w-full max-w-lg mx-auto bg-offwhite rounded-[2.5rem] overflow-hidden shadow-xl">
                            {data.heroPhoto && (
                                <img src={resolveImage(getAsset, data.heroPhoto)} alt="Maarten van der Vleuten" className="w-full h-full object-cover object-center" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <div className="aspect-square bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden" />
                    </div>
                    <div className="lg:col-span-7 space-y-10">
                        <p className="text-[11px] font-bold text-white uppercase tracking-[0.6em] italic leading-none">About the Label</p>
                        <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter leading-[0.95]">SIGNUM <br /> RECORDINGS.</h2>
                        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-xl">
                            {data.signumBlurb}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
