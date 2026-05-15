import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_METADATA } from '../data/content';

export const SEO = ({ title, description, image = "/maarten.jpg", path = "" }) => {
  const fullTitle = `${title} | Maarten van der Vleuten`;
  const canonicalUrl = `${SITE_METADATA.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_METADATA.url}${image}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export const PageHeader = ({ title, subtitle, meta, children }) => (
  <header className="pt-24 sm:pt-32 lg:pt-40 pb-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-b border-black/5">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
      <div className="md:col-span-8 space-y-8">
        {subtitle && (
          <span className="text-[12px] font-black text-signal uppercase tracking-[0.4em] italic leading-none block">
            {subtitle}
          </span>
        )}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85]">
          {title}
        </h1>
      </div>
      {meta && (
        <div className="md:col-span-4 md:text-right font-mono text-[12px] font-black text-black/20 uppercase tracking-[0.4em] leading-relaxed">
          {meta}
        </div>
      )}
    </div>
    {children}
  </header>
);

export const PageWrapper = ({ children }) => (
  <article className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-both">
    {children}
  </article>
);
