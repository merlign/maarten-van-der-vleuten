import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout & Components
import { Navbar, Footer } from './components/Navigation';

// Views
import { HomeView } from './views/Home';
import { BiographyView } from './views/Biography';
import { ArchiveView } from './views/Archive';
import { SignumView } from './views/Signum';
import { PressView } from './views/Press';
import { ContactView } from './views/Contact';

/**
 * App Core - Professional SPA Structure
 * This entry point handles routing, global providers, and layout persistence.
 * Logic is decoupled into modular views and a centralized data registry.
 */
const App = () => {
    const location = useLocation();

    // Reset scroll on navigation for a 'butter-smooth' experience
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <HelmetProvider>
            <div className="relative bg-white min-h-screen selection:bg-signal selection:text-white antialiased overflow-x-hidden pt-[110px] sm:pt-[130px]">
                {/* Global Navigation Hub */}
                <Navbar />

                {/* Routing Registry */}
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/biography" element={<BiographyView />} />
                        <Route path="/archive" element={<ArchiveView />} />
                        <Route path="/signum" element={<SignumView />} />
                        <Route path="/press" element={<PressView />} />
                        <Route path="/contact" element={<ContactView />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default App;
