import React from 'react';
import { getEntryData } from '../previewUtils';

const LABELS = {
    spotify: 'Spotify',
    bandcamp: 'Bandcamp',
    discogs: 'Discogs',
    instagram: 'Instagram',
    legacy: 'Oude website',
    onDemandVinyl: 'On-Demand Vinyl',
    merch: 'Merch-shop'
};

export const SettingsPreview = ({ entry }) => {
    const data = getEntryData(entry);

    return (
        <div className="bg-white py-24 px-6 sm:px-10">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl uppercase tracking-tighter leading-[0.9] mb-10">Links & Social Media</h1>
                <div className="divide-y divide-black/5 border-t border-b border-black/5">
                    {Object.entries(LABELS).map(([key, label]) => (
                        <div key={key} className="py-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                            <span className="text-[11px] font-black uppercase tracking-widest text-black/40 sm:w-40 shrink-0">{label}</span>
                            <span className="text-sm font-medium text-black break-all">{data[key] || '—'}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
