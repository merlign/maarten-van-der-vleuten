import React from 'react';
import { ReleaseCard } from '../../components/ReleaseCard';
import { getEntryData, resolveImage } from '../previewUtils';

export const ReleasesPreview = ({ entry, getAsset }) => {
    const data = getEntryData(entry);
    const items = (data.items || []).map((item) => ({
        ...item,
        imageUrl: resolveImage(getAsset, item.imageUrl)
    }));

    return (
        <div className="bg-offwhite py-24 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter leading-[0.9] mb-16">Latest releases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item, i) => (
                        <ReleaseCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
