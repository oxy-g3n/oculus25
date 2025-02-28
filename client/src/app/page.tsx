'use client';

import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import EventsPage from "./events/page";
import ContactPage from "./contact-us/page";
import SponsorsPage from "./sponsors/page";
import SchedulePage from "./schedule/page";
import LoadingState from "../components/LoadingState";
import Fluid_animation from "../components/FluidAnimation/Fluid_animation";
import AboutPage from "./(landing)/components/about";
import ArabianNights from "./(landing)/components/arabian_nights";
import Aftermovie from "./(landing)/components/aftermovie";
import Footer from "../components/footer";

const LandingPageContent = () => {
    return (
        <>
            <Fluid_animation />
            <ArabianNights />
            <AboutPage />
            <Aftermovie />
            <Footer />
        </>
    );
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
        // Use key to force remount of components
        const pageProps = { key };
        
        switch(currentPage) {
            case 'home':
                return <LandingPageContent {...pageProps} />;
            case 'events':
                return <EventsPage {...pageProps} />;
            case 'sponsors':
                return <SponsorsPage {...pageProps} />;
            case 'schedule':
                return <SchedulePage {...pageProps} />;
            case 'contact-us':
                return <ContactPage {...pageProps} />;
            default:
                return <div>404 - Page Not Found</div>;
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
            {renderPage()}
        </>
    );
} 