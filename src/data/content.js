/**
 * Maarten van der Vleuten | Official Website Registry
 * Centralized data store for all biographical, archival, and contact content.
 */

export const SITE_METADATA = {
    url: "https://maartenvandervleuten.eu",
    origin: "VUGHT, NL",
    est: "1987",
    author: "Maarten van der Vleuten"
};

export const SOCIAL_LINKS = {
    spotify: "https://open.spotify.com/artist/5HwNj7Dz7pgor5Ej6JswdB?si=baqa0UXJRx60kfjLlHNAuQ",
    bandcamp: "https://maartenvandervleuten.bandcamp.com/",
    discogs: "https://www.discogs.com/artist/28749-Maarten-van-der-Vleuten",
    instagram: "https://www.instagram.com/maartenvdvleuten/",
    legacy: "http://www.maartenvandervleuten.com/main.htm"
};

export const LATEST_RELEASES = [
    { title: "Distilled Works", year: "2024", label: "Signum", imageUrl: null, status: "COMING UP..." },
    { 
        title: "A Forest / Love Will Tear Us Apart", 
        year: "2024", 
        label: "Signum", 
        imageUrl: "/aforest.jpg", 
        link: "https://maartenvandervleuten.bandcamp.com/album/a-forest-love-will-tear-us-apart" 
    },
    { 
        title: "Yungya E.P. 2026", 
        year: "2023", 
        label: "Signum", 
        imageUrl: "/yungya.jpg", 
        link: "https://maartenvandervleuten.bandcamp.com/album/yungya-e-p-2026" 
    }
];

export const BIOGRAPHY_ERAS = [
    { 
        id: "01", 
        years: "1987—1991", 
        title: "THE EARLY YEARS", 
        description: [
            "Maarten van der Vleuten (born in Vught, 1967) began his musical career in 1987 with the release of the cassette *The Noise Architect*. He was quickly recognized as one of the first producers in the Dutch techno scene.",
            "After hearing acid house in the USA in 1988, he shifted his focus toward electronic beats. His early tracks were among the first of their kind to be played on national Dutch radio (VPRO) in 1989.",
            "During these initial years, he established a reputation for high-quality sound design under names like 48V Phantom Power and Vandervleuten."
        ], 
        releases: ["The Noise Architect (1987)", "48V Phantom Power (1987)", "Vught Sessions (1989)"] 
    },
    { 
        id: "02", 
        years: "1992—1995", 
        title: "TECHNO & AMBIENT", 
        description: [
            "This period brought international acclaim. Under the name In-Existence, he released *Moonwater* (1992) on Apollo Records, a sublabel of the legendary R&S Records. It is now regarded as one of the first-ever ambient techno CDs.",
            "Alongside his ambient work, he became a central figure in the techno underground as Flux, releasing high-energy tracks on the Djax-Up-Beats label.",
            "By the mid-nineties, he was incredibly prolific, releasing music under more than 10 different aliases and exploring every corner of the electronic spectrum."
        ], 
        releases: ["Moonwater (1992)", "Metamorphism (1991)", "Flux Amenity (1994)"] 
    },
    { 
        id: "03", 
        years: "1996—2007", 
        title: "NEW LABELS & PROJECTS", 
        description: [
            "In 1996, Maarten founded Signum Recordings to ensure complete artistic freedom. This era was marked by massive project scales, such as recording the 70-person Jeroen Bosch Choir for the In-Existence album *Private Rituals* (1998).",
            "He also collaborated with architects like Frank Havermans, creating immersive soundscapes for installations such as *De Vierde Verkenning* (2006).",
            "His work shifted from the club to experimental landscapes, combining acoustic instruments with electronics in albums like *Laiad* (2002)."
        ], 
        releases: ["Private Rituals (1998)", "Laiad (2002)", "De Vierde Verkenning (2006)"] 
    },
    { 
        id: "04", 
        years: "2008—PRESENT", 
        title: "PRESENT DAY", 
        description: [
            "Since 2008, he has produced deeply conceptual work. The vinyl album *High Intolerance Towards Low Energies* (2008) was dedicated to a closed monastery in his hometown of Vught.",
            "His experiments became more daring, including *ECT For Piano* (2009)—which combined piano with the sounds of an electroshock machine—and recordings featuring the voice of occultist Aleister Crowley (*A True & Faithful Relation*, 2010).",
            "Through the *Systematically Declassified* series and modern albums like *The Scars Remain*, Maarten continues to explore the boundaries between technical precision and human emotion."
        ], 
        releases: ["ECT For Piano (2009)", "The Scars Remain (2010)", "Systematically Declassified (2020)"] 
    }
];

export const FULL_ARCHIVE_REGISTRY = [
    { title: "Metamorphism", year: "1991", label: "Djax-Up-Beats", alias: "Flux" },
    { title: "Moonwater", year: "1992", label: "Apollo", alias: "In-Existence" },
    { title: "The Bio-Terminal", year: "1993", label: "ESP", alias: "Dj Zero-T" },
    { title: "Amenity", year: "1994", label: "Djax-Up-Beats", alias: "Flux" },
    { title: "The Art of Frequency", year: "1996", label: "Signum", alias: "Vandervleuten" },
    { title: "Private Rituals", year: "1998", label: "In-Existence", alias: "In-Existence" },
    { title: "Passiflora", year: "1998", label: "Signum", alias: "Vandervleuten" },
    { title: "Laiad", year: "2002", label: "Signum", alias: "In-Existence" },
    { title: "Vow Of Silence", year: "2005", label: "ToneFloat", alias: "In-Existence" },
    { title: "De Verkenningen", year: "2006", label: "Signum", alias: "In-Existence" },
    { title: "High Intolerance...", year: "2008", label: "ToneFloat", alias: "MVDV" },
    { title: "ECT For Piano", year: "2009", label: "Signum", alias: "MVDV" },
    { title: "The Scars Remain", year: "2010", label: "ToneFloat", alias: "MVDV" },
    { title: "Are You Worthy?", year: "2012", label: "ToneFloat", alias: "MVDV" },
    { title: "Vught Distillations", year: "2015", label: "MVDV", alias: "MVDV" },
    { title: "I Break The Waves", year: "2018", label: "ToneFloat", alias: "MVDV" },
    { title: "Systematically Declassified", year: "2020", label: "Signum", alias: "MVDV" },
    { title: "Archived Signal Vol 1", year: "2023", label: "MVDV", alias: "MVDV" },
    { title: "Systematic Registry 2", year: "2023", label: "Signum", alias: "MVDV" },
    { title: "Distilled Works", year: "2024", label: "Signum", alias: "MVDV" }
];

export const ALIAS_LIST = [
    "48V Phantom Power", "Flux", "In-Existence", "Vandervleuten",
    "Dj Zero-T", "Error 144", "Pultec", "Zimt", "Integrity",
    "Orpheus", "Gangrene", "Cliche", "Cryptic", "G-Force",
    "Major Malfunction", "Mental Measuretech", "M.V.D.V.",
    "Neat", "The Nighttripper", "P.A.T.C.H.", "Sinn", "Vlytron", "Zero"
];

export const PRESS_ASSETS = [
    { title: "Story Set", size: "Biography (NL/EN) & History", link: "/press/mvdv_biography.pdf" },
    { title: "Visual Assets", size: "High-Resolution Photos", link: "/press/portraits.zip" },
    { title: "Identity Marks", size: "Logos (SVG/PNG)", link: "/press/logos.zip" },
    { title: "Complete Pack", size: "Full Press Kit (.ZIP)", link: "/press/full_kit.zip" }
];

export const SIGNUM_RECORDINGS_CONTENT = {
    origin: "1996 / Vught, NL",
    philosophy: {
        title: "Music Philosophy",
        text: "Signum Recordings was founded by Maarten van der Vleuten in 1996. It serves as an independent label for experimental electronic music that operates outside of mainstream commercial trends. The label focuses on sound quality and artistic integrity, releasing music that is both thoughtful and impactful."
    },
    sections: [
        {
            title: "Exploring New Sounds",
            text: "From its very first release, Signum has focused on electronic music that doesn't fit into standard categories. The label has released everything from industrial techno to experimental acoustic sounds. Every Signum release represents a new step in Maarten's musical evolution."
        },
        {
            title: "The Archive",
            text: "Based in Vught, the label is also home to the 'Systematically Declassified' series—a project dedicated to releasing Maarten's vast archive of music. This process involves carefully selecting and mastering older recordings to ensure they meet modern standards while keeping their original character."
        },
        {
            title: "Releases",
            text: "Signum has a history of special, limited edition releases. Whether it was rare CDs in the nineties or modern digital albums, the focus is always on providing a high-quality listening experience. The label continues to find new ways to share music directly with the audience without compromise."
        }
    ],
    keyReleases: [
        { title: "The Art Of Frequency", year: "1996", id: "SIG001" },
        { title: "Passiflora", year: "1998", id: "SIG004" },
        { title: "Laiad", year: "2002", id: "SIG010" },
        { title: "Systematically Declassified", year: "2020", id: "SIG040" }
    ]
};
