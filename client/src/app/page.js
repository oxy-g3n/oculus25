"use client";
import { Analytics } from "@vercel/analytics/react"
import { useState, useEffect } from 'react';
import AboutPage from "../components/about";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CustomHTMLPage from "../components/FluidAnimation/CustomHTMLPage";
import EventsComponent from "../components/EventsLayout";
import ContactPage from "./contact-us/page";
import SponsorsPage from "./sponsors/page";
import SchedulePage from "./schedule/page";
import LoadingState from "../components/LoadingState";

export default function LandingPage() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);

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

    const handleNavigate = async (route) => {
        // Show loading state
        setIsLoading(true);
        
        // Update the URL without a page reload
        const newPath = route === 'home' ? '/' : `/${route}`;
        window.history.pushState({}, '', newPath);
        
        // Wait for at least 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Update the page and hide loading
        setCurrentPage(route);
        setIsLoading(false);
    };

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return (
                    <>
                        <CustomHTMLPage />
                        <AboutPage />
                        <Footer />
                    </>
                );
            case 'events':
                return <EventsComponent />;
            case 'sponsors':
                return <SponsorsPage />;
            case 'schedule':
                return <SchedulePage />;
            case 'contact-us':
                return <ContactPage />;
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