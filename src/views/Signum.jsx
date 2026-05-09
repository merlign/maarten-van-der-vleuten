import React from 'react';
import { Disc, ArrowRight } from 'lucide-react';
import { SEO, PageHeader, PageWrapper } from '../components/Layout';
import { SIGNUM_RECORDINGS_CONTENT, SOCIAL_LINKS } from '../data/content';

export const SignumView = () => (
    <PageWrapper>
        <SEO title="Signum Recordings" description="Independent record label for experimental music based in Vught." path="/signum" />
        <PageHeader 
            title={<>SIGNUM <br/> RECORDINGS.</>} 
            subtitle={`EST. ${SIGNUM_RECORDINGS_CONTENT.origin}`}
        >
            <div className="mt-12 group flex items-center gap-8">
                <div className="aspect-square w-24 sm:w-32 bg-offwhite rounded-full border border-black/5 flex items-center justify-center relative overflow-hidden">
                    <Disc className="w-10 h-10 text-black/10 group-hover:text-signal/20 transition-colors animate-spin-slow" />
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] italic">Vught, NL</p>
                    <p className="text-sm font-black uppercase italic text-black/40">Record Label Registry</p>
                </div>
            </div>
        </PageHeader>

        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 space-y-32">
            {/* The Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-8 space-y-12">
                    <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none">About the Label</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] text-black">
                        {SIGNUM_RECORDINGS_CONTENT.philosophy.title}
                    </h2>
                    <p className="text-black/70 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl">
                        {SIGNUM_RECORDINGS_CONTENT.philosophy.text}
                    </p>
                </div>
            </div>

            {/* Narrative Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20">
                {SIGNUM_RECORDINGS_CONTENT.sections.map((section, i) => (
                    <div key={i} className="space-y-8 p-10 bg-offwhite rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all">
                        <header className="flex items-center gap-4">
                            <span className="text-signal text-lg font-black italic">0{i+1}</span>
                            <div className="flex-1 h-px bg-signal/10" />
                        </header>
                        <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-none">{section.title}</h3>
                        <p className="text-black/50 text-base font-medium leading-relaxed">
                            {section.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Key Releases Grid */}
            <div className="pt-20 space-y-20">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-10">
                    <div className="space-y-6">
                        <p className="text-[12px] font-black text-signal uppercase tracking-[0.6em] italic leading-none">Key Releases</p>
                        <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[1.05] text-black">DISCOGRAPHY.</h2>
                    </div>
                    <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center text-[11px] font-black uppercase tracking-widest border-b-2 border-signal pb-2 hover:translate-x-2 transition-all group">
                        Access Shop <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SIGNUM_RECORDINGS_CONTENT.keyReleases.map((release, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] border border-black/5 group hover:border-signal/20 transition-all shadow-lg text-center sm:text-left">
                            <span className="block text-[10px] font-black text-black/20 mb-4 tracking-[0.4em]">{release.id}</span>
                            <h4 className="text-lg font-black uppercase tracking-tighter italic mb-1">{release.title}</h4>
                            <p className="text-xs font-bold text-black/40 uppercase tracking-widest">{release.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-black text-white p-10 sm:p-20 rounded-[3rem] text-center space-y-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none">Listen to the music.</h3>
                <p className="text-white/40 text-lg sm:text-xl font-medium max-w-2xl mx-auto">Explore all of our music releases and special editions through our official Bandcamp page.</p>
                <a href={SOCIAL_LINKS.bandcamp} target="_blank" rel="noopener noreferrer" className="inline-flex px-12 py-6 bg-signal text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white hover:text-black transition-all shadow-xl active:scale-95">
                    GOTO BANDCAMP
                </a>
            </div>
        </section>
    </PageWrapper>
);
