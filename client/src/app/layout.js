import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        {/* Add preload directives for critical assets */}
        <link 
          rel="preload" 
          href="/assets/navbar_back.jpg" 
          as="image" 
        />
        <link 
          rel="preload" 
          href="/assets/full_white_transparent.png" 
          as="image" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
