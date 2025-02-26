'use client';

import Fluid_animation from "../../components/FluidAnimation/Fluid_animation";
import AboutPage from "./components/about";
import ArabianNights from "./components/arabian_nights";
import Aftermovie from "./components/aftermovie";
import Footer from "../../components/footer";

export default function LandingPageContent() {
    return (
        <>
            <Fluid_animation />
            <AboutPage />
            <ArabianNights />
            <Aftermovie />
            <Footer />
        </>
    );
} 