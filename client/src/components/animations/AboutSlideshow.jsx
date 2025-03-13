"use client";
import { useEffect, useRef, useState } from 'react';

export default function AboutSlideshow() {
    const iframeRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // Set mounted state on client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // Skip during SSR
        if (!isMounted) return;

        // Ensure iframe loads properly
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                iframe.style.opacity = 1;
                
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    
                    // Update slide titles and descriptions
                    const slides = iframeDoc.querySelectorAll('.slide');
                    
                    // Slide 1 - Gold theme (Caravan of Dreams)
                    if (slides[0]) {
                        const title = slides[0].querySelector('.slide__title');
                        const desc = slides[0].querySelector('.slide__desc');
                        if (title) title.textContent = "Odyssey of Oculus";
                        if (desc) desc.textContent = "Like stars in the cosmic expanse, each event at Oculus illuminates the path through the realm of innovation.";
                    }
                    
                    // Slide 2 - Blue theme (Oasis of Truth)
                    if (slides[1]) {
                        const title = slides[1].querySelector('.slide__title');
                        const desc = slides[1].querySelector('.slide__desc');
                        if (title) title.textContent = "Oasis of Creativity";
                        if (desc) desc.textContent = "The deeper you immerse in Oculus's festivities, the closer you come to the wellspring of technological brilliance.";
                    }
                    
                    // Slide 3 - Gold theme (Desert's Wisdom)
                    if (slides[2]) {
                        const title = slides[2].querySelector('.slide__title');
                        const desc = slides[2].querySelector('.slide__desc');
                        if (title) title.textContent = "Essence of Wonder";
                        if (desc) desc.textContent = "In the vastness of SPIT's Oculus, every moment whispers the secrets of innovation and artistic expression.";
                    }
                    
                    // Slide 4 - Red theme (Mirage of Destiny)
                    if (slides[3]) {
                        const title = slides[3].querySelector('.slide__title');
                        const desc = slides[3].querySelector('.slide__desc');
                        const link = slides[3].querySelector('.slide__link');
                        if (title) title.textContent = "Mirage of Possibilities";
                        if (desc) desc.textContent = "In the landscape of college fests, Oculus beckons those who dare to dream, innovate, and transform tomorrow.";
                        if (link) {
                            link.textContent = "Enter Playground";
                            link.href = "/playground";
                            link.setAttribute('target', '_self');
                            
                            // Add event listener to handle navigation properly
                            link.addEventListener('click', (e) => {
                                e.preventDefault();
                                window.location.href = '/playground';
                            });
                        }
                    }
                    
                    const style = iframeDoc.createElement('style');
                    style.textContent = `
                        /* Viewport fitting and no scrolling */
                        html, body {
                            overflow: hidden !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            width: 100vw !important;
                            height: 100vh !important;
                            max-width: 100vw !important;
                            max-height: 100vh !important;
                        }
                        
                        main, .slideshow, .slides {
                            width: 100% !important;
                            height: 100% !important;
                            overflow: hidden !important;
                            position: relative !important;
                        }
                        
                        .slide {
                            display: flex !important;
                            flex-direction: column !important;
                            justify-content: center !important;
                            align-items: center !important;
                            height: 100vh !important;
                            width: 100vw !important;
                            overflow: hidden !important;
                            position: absolute !important;
                            top: 0 !important;
                            left: 0 !important;
                        }
                        
                        .slide__img {
                            position: absolute !important;
                            top: 0 !important;
                            left: 0 !important;
                            width: 100% !important;
                            height: 100% !important;
                            background-size: cover !important;
                            background-position: center center !important;
                        }
                        
                        .slide__title, .slide__desc, .slide__link {
                            position: relative !important;
                            z-index: 1 !important;
                        }

                        .slide:nth-child(1) .slide__title {
                            color: #FFD700 !important; /* gold */
                            text-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.8);
                        }
                        .slide:nth-child(1) .slide__desc {
                            color: #FFD700 !important; /* gold */
                            text-shadow: 0 0 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.4), 0 0 2px rgba(0, 0, 0, 0.8);
                        }

                        .slide:nth-child(2) .slide__title {
                            color: #00BFFF !important; /* blue */
                            text-shadow: 0 0 10px rgba(0, 191, 255, 0.6), 0 0 20px rgba(0, 191, 255, 0.4), 0 0 30px rgba(0, 191, 255, 0.2), 0 0 2px rgba(0, 0, 0, 0.8);
                        }
                        .slide:nth-child(2) .slide__desc {
                            color: #00BFFF !important; /* blue */
                            text-shadow: 0 0 8px rgba(0, 191, 255, 0.6), 0 0 16px rgba(0, 191, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.8);
                        }

                        .slide:nth-child(3) .slide__title {
                            color: #FFD700 !important; /* gold */
                            text-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.8);
                        }
                        .slide:nth-child(3) .slide__desc {
                            color: #FFD700 !important; /* gold */
                            text-shadow: 0 0 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.4), 0 0 2px rgba(0, 0, 0, 0.8);
                        }

                        .slide:nth-child(4) .slide__title {
                            color: #f71c19 !important; /* bright red */
                            text-shadow: 0 0 10px rgba(247, 28, 25, 0.6), 0 0 20px rgba(247, 28, 25, 0.4), 0 0 30px rgba(247, 28, 25, 0.2), 0 0 2px rgba(0, 0, 0, 0.8);
                        }
                        .slide:nth-child(4) .slide__desc {
                            color: #f71c19 !important; /* bright red */
                            text-shadow: 0 0 8px rgba(247, 28, 25, 0.6), 0 0 16px rgba(247, 28, 25, 0.4), 0 0 2px rgba(0, 0, 0, 0.8);
                        }

                        .slide__title {
                            font-family: 'Aref Ruqaa Ink', serif !important;
                            font-weight: 700 !important;
                            -webkit-text-stroke: 0.5px rgba(0, 0, 0, 0.3);
                            font-size: 9rem !important;
                            line-height: 1.1 !important;
                            margin-bottom: 2rem !important;
                            max-width: 90% !important;
                            word-wrap: break-word !important;
                            letter-spacing: -0.02em !important;
                            text-align: center !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }

                        .slide__desc {
                            font-family: 'Noto Naskh Arabic', serif !important;
                            -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.3);
                            background-color: rgba(0, 0, 0, 0.6) !important;
                            padding: 10px 15px !important;
                            border-radius: 5px !important;
                            display: inline-block !important;
                            max-width: 80% !important;
                            backdrop-filter: blur(3px) !important;
                            font-size: 1.5rem !important;
                            line-height: 1.5 !important;
                            text-align: center !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }

                        /* Responsive styles for tablets */
                        @media screen and (max-width: 1024px) {
                            .slide__title {
                                font-size: 7rem !important;
                                margin-bottom: 1.5rem !important;
                            }
                            .slide__desc {
                                font-size: 1.3rem !important;
                                max-width: 85% !important;
                                padding: 8px 12px !important;
                            }
                        }

                        /* Responsive styles for mobile phones */
                        @media screen and (max-width: 768px) {
                            .slide__title {
                                font-size: 4.5rem !important;
                                margin-bottom: 1rem !important;
                                -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.3);
                            }
                            .slide__desc {
                                font-size: 1.1rem !important;
                                max-width: 90% !important;
                                padding: 8px 12px !important;
                                line-height: 1.4 !important;
                            }
                        }

                        /* Responsive styles for small mobile phones */
                        @media screen and (max-width: 480px) {
                            .slide__title {
                                font-size: 3.2rem !important;
                                margin-bottom: 0.8rem !important;
                                -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.3);
                            }
                            .slide__desc {
                                font-size: 0.9rem !important;
                                max-width: 95% !important;
                                padding: 6px 10px !important;
                                line-height: 1.3 !important;
                                -webkit-text-stroke: 0.1px rgba(0, 0, 0, 0.3);
                            }
                            .slide__link {
                                font-size: 0.9rem !important;
                                padding: 0.5rem 1rem !important;
                            }
                        }
                        
                        /* Extra small devices */
                        @media screen and (max-width: 360px) {
                            .slide__title {
                                font-size: 2.8rem !important;
                                margin-bottom: 0.6rem !important;
                            }
                            .slide__desc {
                                font-size: 0.8rem !important;
                                padding: 5px 8px !important;
                                line-height: 1.2 !important;
                            }
                        }
                    `;
                    iframeDoc.head.appendChild(style);
                } catch (e) {
                    console.warn('Could not access iframe content');
                }
            };
        }
    }, [isMounted]);

    return (
        <div className="w-full h-screen relative overflow-hidden">
            {isMounted ? (
                <iframe 
                    ref={iframeRef}
                    src="/oculus24-stills/index.html"
                    className="w-full h-full border-0 transition-opacity duration-500"
                    style={{ opacity: 0 }}
                    title="Oculus Slideshow"
                    loading="lazy"
                />
            ) : (
                // Placeholder during server-side rendering
                <div className="w-full h-full bg-black flex items-center justify-center">
                    <div className="text-amber-500 text-2xl">Loading Slideshow...</div>
                </div>
            )}
        </div>
    );
}
