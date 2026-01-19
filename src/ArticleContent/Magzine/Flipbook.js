import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Flipbook.css';

function Flipbook() {
    const location = useLocation();
    const navigate = useNavigate();
    const flipbookRef = useRef(null);

    // API fetching
    const [datavalue, setDatavalue] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Go back to previous page
    const handleGoBack = () => {
        navigate(-1);
    };

    // Fetch magazine data
    useEffect(() => {
        if (location) {
            const urlcomponent = location.pathname.split('/');
            const urlParam = urlcomponent[urlcomponent.length - 2];

            const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${urlParam}`;
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    console.log('API Response:', res);
                    setDatavalue(res);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching magazine:', err);
                    setIsLoading(false);
                });
        }
    }, [location]);

    // Initialize DearFlip when data is loaded
    useEffect(() => {
        console.log('DearFlip useEffect - datavalue:', datavalue, 'ref:', flipbookRef.current);
        console.log('jQuery available:', !!window.jQuery, 'flipBook:', !!window.jQuery?.fn?.flipBook);
        
        if (datavalue && flipbookRef.current) {
            // TEST: Using demo PDF until CORS is fixed on your server
            // TODO: Replace with your API response when CORS is enabled
            const testPdfUrl = "https://js.dearflip.com/wp-content/uploads/2019/07/glfw.pdf";
            
            // Check if API returns PDF or images
            let pdfUrl = testPdfUrl; // Using test PDF for now
            let imagePages = null;
            
            console.log('Testing with PDF:', pdfUrl);
            
            /* ORIGINAL CODE - uncomment when API is ready
            // Check for PDF URL
            if (typeof datavalue === 'string' && datavalue.endsWith('.pdf')) {
                pdfUrl = datavalue;
            } else if (datavalue.pdf) {
                pdfUrl = datavalue.pdf;
            } else if (datavalue.pdfUrl) {
                pdfUrl = datavalue.pdfUrl;
            } else if (Array.isArray(datavalue) && datavalue[0]?.pdf) {
                pdfUrl = datavalue[0].pdf;
            }
            // Check for images (current format)
            else if (Array.isArray(datavalue) && datavalue.length > 0) {
                imagePages = datavalue.map(item => item.content || item);
                console.log('Parsed imagePages:', imagePages);
            }
            
            if (!pdfUrl && !imagePages) {
                console.error('No PDF or images found in API response:', datavalue);
                return;
            }
            */
            
            console.log('Mode:', pdfUrl ? 'PDF' : 'Images', '| Data:', pdfUrl || imagePages);

            const initFlipbook = () => {
                try {
                    const $ = window.jQuery;
                    if ($ && $.fn.flipBook) {
                        // Destroy existing instance
                        const existingInstance = $('#df_magazine').data('dflip');
                        if (existingInstance) {
                            existingInstance.dispose();
                        }
                        
                        if (pdfUrl) {
                            // PDF mode - use new DearFlip v2.x
                            console.log('Initializing with PDF:', pdfUrl);
                            const options = {
                                height: '100%',
                                backgroundColor: '#1a1a2e',
                                duration: 800,
                                autoEnableOutline: false,
                                autoEnableThumbnail: false,
                                enableDownload: false,
                                controlsPosition: 'bottom',
                                paddingTop: 0,
                                paddingBottom: 50,
                                paddingLeft: 0,
                                paddingRight: 0,
                                forceFit: true,
                                soundEnable: true
                            };
                            $('#df_magazine').flipBook(pdfUrl, options);
                        } else {
                            // Image mode - use existing setup
                            console.log('Initializing with images:', imagePages.length, 'pages');
                            const options = {
                                height: '100%',
                                backgroundColor: '#1a1a2e',
                                duration: 800,
                                autoEnableOutline: false,
                                autoEnableThumbnail: false,
                                enableDownload: false,
                                controlsPosition: 'bottom',
                                paddingTop: 0,
                                paddingBottom: 50,
                                paddingLeft: 0,
                                paddingRight: 0,
                                forceFit: true,
                                soundEnable: true,
                                webgl: false
                            };
                            $('#df_magazine').flipBook(imagePages, options);
                        }
                        console.log('DearFlip initialized successfully');
                    }
                } catch (e) {
                    console.error('DearFlip initialization error:', e);
                }
            };

            // Wait for DearFlip to be ready
            if (window.jQuery && window.jQuery.fn.flipBook) {
                initFlipbook();
            } else {
                const timer = setTimeout(initFlipbook, 1000);
                return () => clearTimeout(timer);
            }
        }
    }, [datavalue]);

    if (isLoading || !datavalue || (Array.isArray(datavalue) && datavalue.length === 0)) {
        return (
            <div className='flipbook-page'>
                <div className="flipbook-loading">Loading magazine...</div>
            </div>
        );
    }

    return (
        <div className='flipbook-page'>
            {/* Back Button */}
            <button className="back-btn" onClick={handleGoBack} aria-label="Go back">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
            </button>
            
            {/* Flipbook Container */}
            <div ref={flipbookRef} id="df_magazine" className="flipbook-container"></div>
        </div>
    );
}

export default Flipbook;
