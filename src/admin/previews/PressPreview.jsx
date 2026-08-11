import React from 'react';
import { Download } from 'lucide-react';

export const PressPreview = ({ data }) => (
    <div className="bg-white py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto space-y-24">
            <div>
                <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block mb-6">Official Media Registry</span>
                <h1 className="text-6xl uppercase tracking-tighter leading-[0.85] mb-16">PRESS KIT.</h1>
                <p className="max-w-2xl text-black/50 text-lg font-medium leading-relaxed italic border-l-4 border-signal pl-8">
                    {data.intro}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl">
                {(data.assets || []).map((item, i) => (
                    <div key={i} className="p-12 bg-offwhite rounded-[2.5rem] flex flex-col items-start justify-between border border-black/5 shadow-2xl">
                        <div className="w-full space-y-4 mb-10">
                            <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">{item.title}</h3>
                            <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em] leading-relaxed">{item.size}</p>
                        </div>
                        <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg">
                            <Download className="w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
