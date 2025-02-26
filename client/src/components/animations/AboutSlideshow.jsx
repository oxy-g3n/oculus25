"use client";
import { useEffect, useRef } from 'react';

export default function AboutSlideshow() {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Ensure iframe loads properly
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                iframe.style.opacity = 1;
                
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    const style = iframeDoc.createElement('style');
                    style.textContent = `
                        .slide:nth-child(1) .slide__title {
                            color: #FFD700 !important; /* Gold */
                            text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
                        }
                        .slide:nth-child(1) .slide__desc {
                            color: #FFF5E1 !important;
                        }

                        .slide:nth-child(2) .slide__title {
                            color: #E6B8AF !important; /* Rose Gold */
                            text-shadow: 0 0 10px rgba(230, 184, 175, 0.3);
                        }
                        .slide:nth-child(2) .slide__desc {
                            color: #FFE4E1 !important;
                        }

                        .slide:nth-child(3) .slide__title {
                            color: #DBA11C !important; /* Amber */
                            text-shadow: 0 0 10px rgba(219, 161, 28, 0.3);
                        }
                        .slide:nth-child(3) .slide__desc {
                            color: #FFF8DC !important;
                        }

                        .slide:nth-child(4) .slide__title {
                            color: #F0C27B !important; /* Sand Gold */
                            text-shadow: 0 0 10px rgba(240, 194, 123, 0.3);
                        }
                        .slide:nth-child(4) .slide__desc {
                            color: #FFEFD5 !important;
                        }

                        .slide__title {
                            font-family: 'Aref Ruqaa Ink', serif !important;
                            font-weight: 700 !important;
                        }

                        .slide__desc {
                            font-family: 'Noto Naskh Arabic', serif !important;
                            text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                        }
                    `;
                    iframeDoc.head.appendChild(style);
                } catch (e) {
                    console.warn('Could not access iframe content');
                }
            };
        }
    }, []);

    return (
        <div className="w-full h-screen relative overflow-hidden">
            <iframe 
                ref={iframeRef}
                src="/oculus24-stills/index.html"
                className="w-full h-full border-0 transition-opacity duration-500"
                style={{ opacity: 0 }}
                title="Oculus Slideshow"
                loading="lazy"
            />
        </div>
    );
} 