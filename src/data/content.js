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
    spotify: "https://open.spotify.com/",
    bandcamp: "https://maartenvandervleuten.bandcamp.com/",
    discogs: "https://www.discogs.com/artist/11-Maarten-van-der-Vleuten",
    instagram: "#",
    legacy: "http://www.maartenvandervleuten.com/main.htm"
};

export const LATEST_RELEASES = [
    { title: "Distilled Works", year: "2024", label: "Signum", imageUrl: null },
    { title: "Systematic Registry 2", year: "2023", label: "Signum", imageUrl: null },
    { title: "The Scars Remain", year: "2010", label: "ToneFloat", imageUrl: null }
];

export const BIOGRAPHY_ERAS = [
    { 
        id: "01", 
        years: "1987—1991", 
        title: "THE EARLY YEARS", 
        description: [
            "Maarten van der Vleuten (born in Vught, 1967) started his musical career in the Dutch underground scene during the late eighties. He was quickly involved in the first wave of electronic music, with his first official recordings being released in 1987 under names like 48V Phantom Power and Vandervleuten.",
            "He gained a reputation for high-quality sound design and contributed to the early development of European techno and house music."
        ], 
        releases: ["48V Phantom Power (1987)", "Vught Sessions (1989)", "Early Waves (1990)"] 
    },
    { 
        id: "02", 
        years: "1992—1995", 
        title: "TECHNO & AMBIENT", 
        description: [
            "During this period, Maarten gained international recognition. Under the name In-Existence, he released the ambient album Moonwater (1993) on Apollo Records, a sublabel of the famous R&S Records.",
            "Alongside his ambient work, he became a key figure in the techno scene as Flux, releasing energetic tracks on Djax-Up-Beats and helping to shape the sound of hardware-driven electronic music.",
            "By 1995, he had already released music under more than 10 different names, exploring many different styles of electronic music."
        ], 
        releases: ["Moonwater (1993)", "Metamorphism (1991)", "Flux Amenity (1994)"] 
    },
    { 
        id: "03", 
        years: "1996—2007", 
        title: "NEW LABELS & PROJECTS", 
        description: [
            "In 1996, Maarten founded Signum Recordings as a place to release his more experimental and personal music. During this decade, he used many different artist names, including Pultec, Error 144, and Dj Zero-T.",
            "His work expanded into music for theater and sound installations, showing his versatility across different artistic fields.",
            "In 2002, the release of Laiad showed a shift toward a mix of acoustic and electronic sounds that would characterize much of his later work."
        ], 
        releases: ["Signum 001 (1996)", "Laiad (2002)", "Archive Artifacts (2005)"] 
    },
    { 
        id: "04", 
        years: "2008—PRESENT", 
        title: "PRESENT DAY", 
        description: [
            "Since 2008, he has released music mostly under his own name or the initials MVDV. The release of albums like High Intolerance Towards Low Energies and The Scars Remain moved his sound in a more cinematic direction.",
            "Ongoing projects like the Systematically Declassified series document his entire history and the vast amount of music he has created over the years.",
            "Maarten remains productive today, constantly creating new music that combines human emotion with technical precision."
        ], 
        releases: ["The Scars Remain (2010)", "Systematically Declassified (2020)", "Current Signal (2024)"] 
    }
];

export const FULL_ARCHIVE_REGISTRY = [
    { title: "Metamorphism", year: "1991", label: "Djax-Up-Beats", alias: "Flux" },
    { title: "Moonwater", year: "1993", label: "Apollo", alias: "In-Existence" },
    { title: "The Bio-Terminal", year: "1993", label: "ESP", alias: "Dj Zero-T" },
    { title: "Amenity", year: "1994", label: "Djax-Up-Beats", alias: "Flux" },
    { title: "The Art of Frequency", year: "1996", label: "Signum", alias: "Vandervleuten" },
    { title: "Passiflora", year: "1998", label: "Signum", alias: "Vandervleuten" },
    { title: "Laiad", year: "2002", label: "Signum", alias: "In-Existence" },
    { title: "Vow Of Silence", year: "2005", label: "ToneFloat", alias: "In-Existence" },
    { title: "De Verkenningen", year: "2006", label: "Signum", alias: "In-Existence" },
    { title: "High Intolerance...", year: "2008", label: "ToneFloat", alias: "MVDV" },
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
