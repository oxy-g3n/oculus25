import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarProvider } from "./NavbarContext";
import NavbarWrapper from "./NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensure display property is set
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", 
});

export const metadata = {
  title: "Oculus 2k25",
  description: "S.P.I.T. Annual Fest 8th Edition",
  // icons: "../../public/assets/gold_white_O.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Ensure essential assets are preloaded */}
        <link 
          rel="preload" 
          href="/assets/full_white_transparent.png" 
          as="image" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarProvider>
          <NavbarWrapper />
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}