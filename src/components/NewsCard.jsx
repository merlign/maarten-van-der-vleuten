import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { NEWS_LABELS } from '../data/content';

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const NewsCard = ({ item }) => (
    <article className={cn(
        "bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col h-full",
        item.type === "event" ? "border-2 border-signal" : "border border-black/5"
    )}>
        <div className="flex items-center gap-4 mb-6">
            <span className={cn(
                "text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full",
                item.type === "event" ? "bg-signal text-white shadow-md" : "bg-black/5 text-black/40"
            )}>
                {NEWS_LABELS[item.type] || NEWS_LABELS.news}
            </span>
            {item.date && (
                <span className="text-[11px] font-bold text-black/30 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {formatDate(item.date)}
                </span>
            )}
        </div>

        <h3 className="text-xl uppercase tracking-tighter mb-3 leading-tight text-signal">
            {item.title}
        </h3>

        {item.venue && (
            <p className="text-[12px] font-bold text-black/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {item.venue}
            </p>
        )}

        {item.description && (
            <p className="text-black/50 text-sm font-medium leading-relaxed mb-6 flex-grow">
                {item.description}
            </p>
        )}

        {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-black hover:text-signal transition-colors">
                {item.type === "event" ? "More Info" : "Read Full Article"} <ExternalLink className="w-3 h-3" />
            </a>
        )}
    </article>
);
