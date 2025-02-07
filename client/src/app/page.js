"use client";

import { useState } from "react";
import AboutPage from "../components/about";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CustomHTMLPage from "../components/ShootingStar/CustomHTMLPage";

export default function LandingPage(){
    const [navOpen, setNavOpen] = useState(false);
    return (<>
      <CustomHTMLPage/>
    
      
      <AboutPage />
      <Footer />
      
    </>
    )
}