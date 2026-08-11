import React from 'react';
import { NewsCard } from '../../components/NewsCard';
import { getEntryData } from '../previewUtils';

export const NewsPreview = ({ entry }) => {
    const data = getEntryData(entry);
    const items = data.items || [];

    return (
        <div className="bg-white py-24 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter leading-[0.9] mb-16">Nieuws & Optredens</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item, i) => (
                        <NewsCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
