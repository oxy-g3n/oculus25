'use client';

import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import EventsPage from "./events/page";
import ContactPage from "./contact-us/page";
import SponsorsPage from "./sponsors/page";
import SchedulePage from "./schedule/page";
import LoadingState from "../components/LoadingState";
import Footer from "../components/footer";
import { usePathname } from 'next/navigation';

// Import landing page components with error handling
const LandingPageContent = () => {
    return (
        <div className="relative">
            {/* Dynamically import Fluid_animation to prevent SSR issues */}
            <DynamicFluidAnimation />
            <DynamicArabianNights />
            <DynamicAboutPage />
            <DynamicAftermovie />
            <Footer />
        </div>
    );
};

// Use Next.js dynamic import with ssr: false to prevent hydration errors
const DynamicFluidAnimation = dynamic(
    () => import("../components/FluidAnimation/Fluid_animation"),
    { ssr: false }
);

const DynamicArabianNights = dynamic(
    () => import("./(landing)/components/arabian_nights"),
    { ssr: false }
);

const DynamicAboutPage = dynamic(
    () => import("./(landing)/components/about"),
    { ssr: false }
);

const DynamicAftermovie = dynamic(
    () => import("./(landing)/components/aftermovie"),
    { ssr: false }
);

export default function RootPage() {
    const [currentPage, setCurrentPage] = useState('home');
    const pathname = usePathname();

    useEffect(() => {
        // Handle route changes based on pathname
        const path = pathname === '/' ? 'home' : pathname.slice(1);
        setCurrentPage(path);
    }, [pathname]);

    const renderPage = () => {
        try {
            switch(currentPage) {
                case 'home':
                    return <LandingPageContent />;
                case 'events':
                    return <EventsPage />;
                case 'sponsors':
                    return <SponsorsPage />;
                case 'schedule':
                    return <SchedulePage />;
                case 'contact-us':
                    return <ContactPage />;
                default:
                    return <div>404 - Page Not Found</div>;
            }
        } catch (error) {
            console.error("Error rendering page:", error);
            return <div className="flex items-center justify-center h-screen bg-black text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                    <button 
                        className="px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-600"
                    >
                        Return to Home
                    </button>
                </div>
            </div>;
        }
    };

    return (
        <>
            <Analytics />
            <Suspense fallback={<LoadingState />}>
                {renderPage()}
            </Suspense>
        </>
    );
} 