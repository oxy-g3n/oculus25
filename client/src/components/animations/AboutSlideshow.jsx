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
                        }

                        /* Responsive styles for tablets */
                        @media screen and (max-width: 1024px) {
                            .slide__title {
                                font-size: 7rem !important;
                                margin-bottom: 1.5rem !important;
                            }
                        }

                        /* Responsive styles for mobile phones */
                        @media screen and (max-width: 768px) {
                            .slide__title {
                                font-size: 4.5rem !important;
                                margin-bottom: 1rem !important;
                                -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.3);
                            }
                        }

                        /* Responsive styles for small mobile phones */
                        @media screen and (max-width: 480px) {
                            .slide__title {
                                font-size: 3.2rem !important;
                                margin-bottom: 0.8rem !important;
                                -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.3);
                            }
                            .slide__link {
                                font-size: 0.9rem !important;
                                padding: 0.5rem 1rem !important;
                            }
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