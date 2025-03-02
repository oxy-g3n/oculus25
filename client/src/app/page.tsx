'use client';

import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect, Suspense } from 'react';
import Navbar from "../components/navbar";
import EventsPage from "./events/page";
import ContactPage from "./contact-us/page";
import SponsorsPage from "./sponsors/page";
import SchedulePage from "./schedule/page";
import LoadingState from "../components/LoadingState";
import Footer from "../components/footer";

// Import landing page components with error handling
const LandingPageContent = () => {
    return (
        <Suspense fallback={<LoadingState />}>
            <div className="relative">
                {/* Dynamically import Fluid_animation to prevent SSR issues */}
                <DynamicFluidAnimation />
                <DynamicArabianNights />
                <DynamicAboutPage />
                <DynamicAftermovie />
                <Footer />
            </div>
        </Suspense>
    );
};

// Dynamically import components to prevent SSR issues
const DynamicFluidAnimation = () => {
    const [Component, setComponent] = useState(null);
    
    useEffect(() => {
        import("../components/FluidAnimation/Fluid_animation").then((mod) => {
            setComponent(() => mod.default);
        });
    }, []);
    
    return Component ? <Component /> : <div className="w-full h-screen bg-black"></div>;
};

const DynamicArabianNights = () => {
    const [Component, setComponent] = useState(null);
    
    useEffect(() => {
        import("./(landing)/components/arabian_nights").then((mod) => {
            setComponent(() => mod.default);
        });
    }, []);
    
    return Component ? <Component /> : null;
};

const DynamicAboutPage = () => {
    const [Component, setComponent] = useState(null);
    
    useEffect(() => {
        import("./(landing)/components/about").then((mod) => {
            setComponent(() => mod.default);
        });
    }, []);
    
    return Component ? <Component /> : null;
};

const DynamicAftermovie = () => {
    const [Component, setComponent] = useState(null);
    
    useEffect(() => {
        import("./(landing)/components/aftermovie").then((mod) => {
            setComponent(() => mod.default);
        });
    }, []);
    
    return Component ? <Component /> : null;
};

export default function RootPage() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [key, setKey] = useState(0); // Add a key to force remount

    useEffect(() => {
        // Handle initial route
        const path = window.location.pathname.slice(1) || 'home';
        setCurrentPage(path);
        
        // Ensure loading shows for at least 1 second
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleNavigate = async (route: string) => {
        // Show loading state
        setIsLoading(true);
        
        // Update the URL without a page reload
        const newPath = route === 'home' ? '/' : `/${route}`;
        window.history.pushState({}, '', newPath);
        
        // Wait for at least 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Update the page and hide loading
        setCurrentPage(route);
        // Increment key to force remount of components
        setKey(prevKey => prevKey + 1);
        setIsLoading(false);
    };

    const renderPage = () => {
        // Pass key directly to components instead of including it in props
        try {
            switch(currentPage) {
                case 'home':
                    return <LandingPageContent key={key} />;
                case 'events':
                    return <EventsPage key={key} />;
                case 'sponsors':
                    return <SponsorsPage key={key} />;
                case 'schedule':
                    return <SchedulePage key={key} />;
                case 'contact-us':
                    return <ContactPage key={key} />;
                default:
                    return <div>404 - Page Not Found</div>;
            }
        } catch (error) {
            console.error("Error rendering page:", error);
            return <div className="flex items-center justify-center h-screen bg-black text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                    <button 
                        onClick={() => handleNavigate('home')}
                        className="px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-600"
                    >
                        Return to Home
                    </button>
                </div>
            </div>;
        }
    };

    if (isLoading) {
        return <LoadingState />;
    }

    return (
        <>
            <Analytics />
            <Navbar 
                alwaysShow={currentPage !== 'home'}
                onNavigate={handleNavigate}
            />
            <Suspense fallback={<LoadingState />}>
                {renderPage()}
            </Suspense>
        </>
    );
} 