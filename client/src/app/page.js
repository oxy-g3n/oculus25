"use client";
import { Analytics } from "@vercel/analytics/react"

import AboutPage from "../components/about";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CustomHTMLPage from "../components/FluidAnimation/CustomHTMLPage"

export default function LandingPage(){
    return (<>
    <Analytics />
      <Navbar/>
      
      <CustomHTMLPage/>
     
      
      <AboutPage />
      <Footer />
      
    </>
    )
}