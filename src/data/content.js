/**
 * Maarten van der Vleuten | Official Website Registry
 * Centralized data store for all biographical, archival, and contact content.
 * Editable content lives in ../content/*.json — managed via Decap CMS at /admin.
 */
import releasesData from '../content/releases.json';
import newsData from '../content/news.json';
import homeData from '../content/home.json';
import contactData from '../content/contact.json';
import biographyData from '../content/biography.json';
import archiveData from '../content/archive.json';
import pressData from '../content/press.json';
import signumData from '../content/signum.json';
import settingsData from '../content/settings.json';

export const SITE_METADATA = {
    url: "https://maartenvandervleuten.eu",
    origin: "VUGHT, NL",
    est: "1987",
    author: "Maarten van der Vleuten"
};

export const SOCIAL_LINKS = settingsData;

export const SHOP_LINKS = [
    { name: "Bandcamp", href: SOCIAL_LINKS.bandcamp },
    { name: "On-Demand Vinyl", href: SOCIAL_LINKS.onDemandVinyl },
    { name: "Merch", href: SOCIAL_LINKS.merch }
];

export const RELEASES = releasesData.items;

export const NEWS_LABELS = {
    news: "News",
    event: "Event"
};

export const NEWS = newsData.items;

// Events are automatically hidden from the homepage once their date has passed.
// News items (and events without a date) are always eligible.
export const isNewsItemUpcoming = (item) => {
    if (item.type !== "event" || !item.date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(item.date) >= today;
};

export const HOME_CONTENT = homeData;

export const CONTACT_CONTENT = contactData;

export const BIOGRAPHY_ERAS = biographyData.eras;
export const BIOGRAPHY_ALIAS_INTRO = biographyData.aliasIntro;
export const ALIAS_LIST = biographyData.aliases;

export const FULL_ARCHIVE_REGISTRY = archiveData.items;

export const PRESS_INTRO = pressData.intro;
export const PRESS_ASSETS = pressData.assets;

export const SIGNUM_RECORDINGS_CONTENT = signumData;
