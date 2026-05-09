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
        title: "THE SIGNAL ARRIVAL", 
        description: [
            "Maarten van der Vleuten (Vught, 1967) emerged in the Dutch underground during the late eighties. He was architecturely involved in the first wave of electronics, with his first official recordings appearing under the name 48V Phantom Power and Vandervleuten in 1987.",
            "Establishing a reputation for high-fidelity sound design, he contributed to the first wave of European techno and experimental house from his initial recording sessions."
        ], 
        releases: ["48V Phantom Power (1987)", "Vught Sessions (1989)", "Early Waves (1990)"] 
    },
    { 
        id: "02", 
        years: "1992—1995", 
        title: "UNDERGROUND ARCHITECTURE", 
        description: [
            "This period marked his international recognition. Under the alias In-Existence, he released the seminal ambient work Moonwater (1993) on Apollo Records, a sublabel of the legendary R&S.",
            "Parallel to his ambient work, he became a core figure in the techno scene as Flux, releasing high-intensity works on Djax-Up-Beats and contributing to the evolution of the hardware-driven sound.",
            "By 1995, his discography had already expanded into over 10 different aliases, populating every corner of the electronic spectrum."
        ], 
        releases: ["Moonwater (1993)", "Metamorphism (1991)", "Flux Amenity (1994)"] 
    },
    { 
        id: "03", 
        years: "1996—2007", 
        title: "POLYMORPHIC DISCOVERY", 
        description: [
            "In 1996, Van der Vleuten founded Signum Recordings as a platform for his most experimental and personal artifacts. During this decade, he operated under a massive network of identities—including Pultec, Error 144, and Dj Zero-T.",
            "His work spanned from multidisciplinary theater soundscapes to architectural installations, solidifying his role as a sound architect.",
            "In 2002, the release of Laiad showcased a move toward more hybrid, acoustic-synthetic soundscapes that would define his later years."
        ], 
        releases: ["Signum 001 (1996)", "Laiad (2002)", "Archive Artifacts (2005)"] 
    },
    { 
        id: "04", 
        years: "2008—PRESENT", 
        title: "IDENTITY CONSOLIDATION", 
        description: [
            "Since 2008, he has consolidated his output primarily under his own name or the initials MVDV. The release of High Intolerance Towards Low Energies and The Scars Remain marked a move toward a more cinematic language.",
            "Modern artifacts like the Systematically Declassified series document the complete evolutionary history of his work.",
            "Maarten remains active through a constant ritual of sonic distillation, bridging human emotion and clinical precision."
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
    { title: "Story Set", size: "Narratives (NL/EN) & History", link: "/press/mvdv_biography.pdf" },
    { title: "Visual Assets", size: "High-Resolution Portraits", link: "/press/portraits.zip" },
    { title: "Identity Marks", size: "Vector Logos (SVG/PNG)", link: "/press/logos.zip" },
    { title: "Complete Pack", size: "Press Kit Bundle (.ZIP)", link: "/press/full_kit.zip" }
];

export const SIGNUM_RECORDINGS_CONTENT = {
    origin: "1996 / Vaught, NL",
    philosophy: {
        title: "Frequency Architecture",
        text: "Signum Recordings was founded by Maarten van der Vleuten in 1996. It serves as a primary vessel for frequency exploration that bypasses clinical distribution and commercial compromise. The label operates with a strict focus on sound as an architectural artifact—designed to be monumental, clinical, and emotionally resonant."
    },
    sections: [
        {
            title: "Beyond Category",
            text: "From the very first release, Signum rejected the limitations of the electronic music industry. The output has ranged from the industrial intensities of 'The Art of Frequency' to the hybrid acoustic-synthetic soundscapes found in later archival series. Each artifact released on Signum is a chapter in a vertical timeline of sonic discovery."
        },
        {
            title: "The Archival Ritual",
            text: "Operating out of Vught, the label has become a home for the 'Systematically Declassified' series—a massive project aimed at documenting Van der Vleuten's vast evolutionary archive. This process involves the meticulous distillation of signals, ensuring that every frequency released carries the weight of its historical origin."
        },
        {
            title: "Physical Artifacts",
            text: "Signum has a long history of special, limited editions. Whether it was rare CD-ROMs in the nineties or modern high-fidelity digital artifacts, the focus remains on the tactile experience of sound. The label continues to iterate on how these signals are transmitted to the listener—direct, unfiltered, and uncompromising."
        }
    ],
    keyReleases: [
        { title: "The Art Of Frequency", year: "1996", id: "SIG001" },
        { title: "Passiflora", year: "1998", id: "SIG004" },
        { title: "Laiad", year: "2002", id: "SIG010" },
        { title: "Systematically Declassified", year: "2020", id: "SIG040" }
    ]
};
