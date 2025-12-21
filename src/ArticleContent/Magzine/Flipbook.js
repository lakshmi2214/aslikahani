import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Flipbook.css';
import magazineBackground from './Jpeg/102.jpg';

function Flipbook() {
    const location = useLocation();
    const navigate = useNavigate();
    const flipbookRef = useRef(null);
    const flipbookInstance = useRef(null);

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
        if (datavalue.length > 0 && flipbookRef.current) {
            // Extract image URLs from datavalue
            const imageUrls = datavalue.map(item => item.images);
            
            console.log('Image URLs for DearFlip:', imageUrls);

            // DearFlip options for image flipbook
            const options = {
                webgl: false,  // Disable WebGL to avoid CORS issues with external images
                height: 'auto',
                duration: 800,
                hard: 'cover',
                autoEnableOutline: false,
                autoEnableThumbnail: false,
                overwritePDFOutline: false,
                enableDownload: false,
                zoomEnabled: true,
                pinchZoom: true,
                scrollZoom: true,
                minZoom: 1,
                maxZoom: 3,
                backgroundColor: '#000000',
                // Use a wooden texture background like the reference site
                backgroundImage: magazineBackground,
                paddingTop: 10,
                paddingBottom: 60,
                paddingLeft: 10,
                paddingRight: 10,
                controlsPosition: 'bottom',
                sideNavigationButtons: true,  // Enable floating side navigation arrows
                direction: 1,
                pageMode: 0,
                singlePageMode: 0,
                pageSize: 0,
                autoPlay: false,
                autoPlayDuration: 3000,
                autoPlayStart: false,
                transparent: false,
                scrollWheel: true,
                maxTextureSize: 1600,
                zoomRatio: 1.5,
                soundEnable: true,
                forceFit: true
            };

            // Initialize DearFlip using jQuery
            const initFlipbook = () => {
                try {
                    const $ = window.jQuery;
                    if ($ && $.fn.flipBook) {
                        // Destroy existing instance if any
                        const existingInstance = $('#df_magazine').data('dflip');
                        if (existingInstance) {
                            existingInstance.dispose();
                        }
                        
                        // Create new flipbook - pass images array as first arg, options as second
                        flipbookInstance.current = $('#df_magazine').flipBook(imageUrls, options);
                        console.log('DearFlip initialized successfully with', imageUrls.length, 'images');
                    } else {
                        console.error('jQuery flipBook not available');
                    }
                } catch (e) {
                    console.error('DearFlip initialization error:', e);
                }
            };

            // Wait for jQuery and DearFlip to be ready
            if (window.jQuery && window.jQuery.fn.flipBook) {
                initFlipbook();
            } else {
                // Retry after a short delay
                const timer = setTimeout(initFlipbook, 500);
                return () => clearTimeout(timer);
            }
        }

        // Cleanup on unmount
        return () => {
            if (flipbookInstance.current) {
                try {
                    flipbookInstance.current.dispose();
                } catch (e) {
                    console.log('Cleanup error:', e);
                }
            }
        };
    }, [datavalue]);

    if (isLoading) {
        return (
            <div className='emagzine-container'>
                {/* <div className="loading-spinner">Loading magazine...</div> */}
            </div>
        );
    }

    return (
        <div className='emagzine-container'>
            <div id='total-magzine'>
                <div className="dearflip-container">
                    {/* Back Button */}
                    <button 
                        className="back-btn"
                        onClick={handleGoBack}
                        aria-label="Go back"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </svg>
                    </button>
                    {/* DearFlip Flipbook Container */}
                    <div 
                        ref={flipbookRef}
                        id="df_magazine"
                        style={{ width: '100%', height: '100%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Flipbook;
