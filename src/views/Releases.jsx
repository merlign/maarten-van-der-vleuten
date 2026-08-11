import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { RELEASES } from '../data/content';
import { ReleaseCard } from '../components/ReleaseCard';

const FORMAT_OPTIONS = [
    { value: 'all', label: 'All Formats' },
    { value: 'vinyl', label: 'Vinyl' },
    { value: 'digital', label: 'Digital' },
];

export const ReleasesView = () => {
    const [query, setQuery] = useState('');
    const [format, setFormat] = useState('all');

    const filteredReleases = useMemo(() => {
        const q = query.trim().toLowerCase();
        return RELEASES.filter((item) => {
            const matchesQuery = !q
                || item.title.toLowerCase().includes(q)
                || item.label.toLowerCase().includes(q)
                || (item.cat && item.cat.toLowerCase().includes(q));
            const matchesFormat = format === 'all' || item[format];
            return matchesQuery && matchesFormat;
        });
    }, [query, format]);

    return (
        <PageWrapper>
            <SEO title="Releases" description="Every release by Maarten van der Vleuten." path="/releases" />
            <PageHeader title="RELEASES." subtitle="Full Catalogue" />

            <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-32">
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        aria-label="Filter by format"
                        className="px-6 py-4 rounded-full border border-black/10 bg-white text-[11px] font-black uppercase tracking-widest text-black/60 focus:outline-signal sm:w-52 shrink-0 cursor-pointer"
                    >
                        {FORMAT_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 text-black/20 absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search releases..."
                            aria-label="Search releases"
                            className="w-full pl-14 pr-6 py-4 rounded-full border border-black/10 bg-white text-sm font-medium placeholder:text-black/30 focus:outline-signal"
                        />
                    </div>
                </div>

                {filteredReleases.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredReleases.map((item, i) => (
                            <ReleaseCard key={i} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-black/30 text-sm font-bold uppercase tracking-widest py-20 text-center">No releases found.</p>
                )}
            </section>
        </PageWrapper>
    );
};
