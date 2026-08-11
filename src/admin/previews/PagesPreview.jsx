import React from 'react';
import { getEntryData } from '../previewUtils';
import { HomePreview } from './HomePreview';
import { ContactPreview } from './ContactPreview';
import { BiographyPreview } from './BiographyPreview';
import { ArchivePreview } from './ArchivePreview';
import { PressPreview } from './PressPreview';
import { SignumPreview } from './SignumPreview';

const PREVIEWS_BY_SLUG = {
    home: HomePreview,
    contact: ContactPreview,
    biography: BiographyPreview,
    archive: ArchivePreview,
    press: PressPreview,
    signum: SignumPreview
};

export const PagesPreview = ({ entry, getAsset }) => {
    const slug = entry.get('slug');
    const data = getEntryData(entry);
    const Preview = PREVIEWS_BY_SLUG[slug];

    if (!Preview) {
        return <p className="p-10 text-black/40">Geen preview beschikbaar voor deze pagina.</p>;
    }

    return <Preview data={data} getAsset={getAsset} />;
};
