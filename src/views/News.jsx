import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { NEWS } from '../data/content';
import { NewsCard } from '../components/NewsCard';

export const NewsView = () => {
    const [query, setQuery] = useState('');

    const filteredNews = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return NEWS;
        return NEWS.filter((item) =>
            item.title.toLowerCase().includes(q)
            || (item.description && item.description.toLowerCase().includes(q))
            || (item.venue && item.venue.toLowerCase().includes(q))
        );
    }, [query]);

    return (
        <PageWrapper>
            <SEO title="News" description="Latest news and upcoming events from Maarten van der Vleuten." path="/news" />
            <PageHeader title="NEWS." subtitle="Updates & Events" />

            <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-32">
                <div className="relative mb-16 max-w-xl">
                    <Search className="w-4 h-4 text-black/20 absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search news..."
                        aria-label="Search news"
                        className="w-full pl-14 pr-6 py-4 rounded-full border border-black/10 bg-white text-sm font-medium placeholder:text-black/30 focus:outline-signal"
                    />
                </div>

                {filteredNews.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredNews.map((item, i) => (
                            <NewsCard key={i} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-black/30 text-sm font-bold uppercase tracking-widest py-20 text-center">No news found.</p>
                )}
            </section>
        </PageWrapper>
    );
};
