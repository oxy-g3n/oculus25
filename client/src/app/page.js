"use client";

import AboutPage from "../components/about";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CustomHTMLPage from "../components/ShootingStar/CustomHTMLPage";

export default function LandingPage(){
    return (<>
      <Navbar/>
      <CustomHTMLPage/>
      {/* <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">OCULUS</h1>
      </div> */}
      
      <AboutPage />
      <Footer />
      
    </>
    )
}