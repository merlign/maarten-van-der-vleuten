import React from 'react';
import { Disc, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { SOCIAL_LINKS } from '../data/content';

export const ReleaseCard = ({ item }) => (
  <article className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full">
    <div className="aspect-square bg-offwhite rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden shrink-0">
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <Disc className={cn("w-16 h-16 text-black/5 group-hover:scale-110 transition-transform group-hover:rotate-12", item.comingSoon && "opacity-10")} />
      )}
      <div className="absolute top-6 right-6 px-3 py-1 bg-black text-white text-[10px] font-black rounded-full italic">{item.year}</div>
      {item.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-black text-signal uppercase tracking-[0.4em] bg-white/90 px-4 py-2 rounded-full shadow-sm">COMING UP...</span>
        </div>
      )}
    </div>

    <div className="flex-grow flex flex-col">
      <h3 className="text-xl uppercase tracking-tighter mb-2 leading-tight text-signal min-h-[3rem] flex items-center">
        {item.title}
      </h3>
      <div className="mb-10 space-y-1">
        <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em]">{item.label} Recordings</p>
        {item.cat && <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em]">{item.cat}</p>}
      </div>

      <div className="mt-auto">
        <a href={item.link || SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className={cn("w-full py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-colors shadow-lg active:scale-95", item.comingSoon ? "bg-black/5 text-black/40 cursor-default" : "bg-black text-white hover:bg-signal")}>
          {item.comingSoon ? "Soon on Bandcamp" : "Buy on Bandcamp"} <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  </article>
);
