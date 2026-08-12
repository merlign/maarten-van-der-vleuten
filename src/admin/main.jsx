import CMS from 'decap-cms-app';
import previewStyleUrl from '../index.css?url';
import { ReleasesPreview } from './previews/ReleasesPreview';
import { NewsPreview } from './previews/NewsPreview';
import { PagesPreview } from './previews/PagesPreview';
import { SettingsPreview } from './previews/SettingsPreview';

CMS.registerPreviewStyle(previewStyleUrl);
CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Poiret+One&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=fallback');

CMS.registerPreviewTemplate('releases', ReleasesPreview);
CMS.registerPreviewTemplate('news', NewsPreview);
CMS.registerPreviewTemplate('settings', SettingsPreview);

// The "pages" collection is a `files` collection with multiple files, and
// Decap requires one registerPreviewTemplate call per file name (not one
// per collection) in that case — PagesPreview dispatches internally by slug.
['home', 'contact', 'signum'].forEach((slug) => {
    CMS.registerPreviewTemplate(slug, PagesPreview);
});

CMS.init();
