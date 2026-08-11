import React from 'react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { RELEASES } from '../data/content';
import { ReleaseCard } from '../components/ReleaseCard';

export const ReleasesView = () => (
    <PageWrapper>
        <SEO title="Releases" description="Every release by Maarten van der Vleuten." path="/releases" />
        <PageHeader title="RELEASES." subtitle="Full Catalogue" />

        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {RELEASES.map((item, i) => (
                    <ReleaseCard key={i} item={item} />
                ))}
            </div>
        </section>
    </PageWrapper>
);
