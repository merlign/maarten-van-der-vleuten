import React from 'react';
import { SpotifyIcon, DiscogsIcon, BandcampIcon, InstagramIcon } from '../../components/BrandIcons';

export const ContactPreview = ({ data }) => {
    const items = [
        { label: 'Spotify', icon: SpotifyIcon, desc: data.spotifyDesc },
        { label: 'Bandcamp', icon: BandcampIcon, desc: data.bandcampDesc },
        { label: 'Discogs', icon: DiscogsIcon, desc: data.discogsDesc },
        { label: 'Instagram', icon: InstagramIcon, desc: data.instagramDesc }
    ];

    return (
        <div className="bg-white py-24 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl uppercase tracking-tighter leading-[0.85] mb-16">CONTACT.</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className="p-10 bg-offwhite rounded-[3rem] border border-black/5 flex flex-col gap-8 shadow-sm">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <item.icon className="w-8 h-8 text-black" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter">{item.label}</h3>
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
