import React, { useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";
import { useLocation } from "react-router-dom";
import { useRef } from 'react';
import './Flipbook.css'; // Create this CSS file for styling
import logosmall from "../../images/logo-small.jpg";
import clipboardCopy from 'clipboard-copy';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, TelegramShareButton } from 'react-share';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import 'react-medium-image-zoom/dist/styles.css'
import { FullScreen } from '@chiragrupani/fullscreen-react';
import useSound from 'use-sound';
import page from "./Jpeg/page.mp3"

function Flipbook() {
    
    const location = useLocation();

    //Api fetching
    const [datavalue, setDatavalue] = useState([]);
    const [tmp, setTmp] = useState([]);


    useEffect(() => {
        if (location) {
            var urlcomponent = location.pathname.split('/');
            var tmp = urlcomponent[urlcomponent.length - 2];
            setTmp(tmp);
        }
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${tmp}`
        fetch(url).then(res => res.json())
            .then(res => {

                setDatavalue(res)

            })
    }, [])

    //Flipbook

    const Page = React.forwardRef((props, ref) => {

        const book = useRef();
        return (
            <TransformWrapper >
                <TransformComponent >
                    <div className="demoPage" ref={ref} style={{ pointerEvents: "none" }}>
                        <p style={{ pointerEvents: "none" }}>{props.children}</p>
                    </div>
                </TransformComponent>
            </TransformWrapper>
        );
    });

    //page-zooming

    const [zoomLevel, setZoomLevel] = useState(150); // Initial zoom level is 100%
    useEffect(() => {
        // Function to detect device type and set zoom level
        const adjustZoomForDevice = () => {
            if (window.innerWidth <= 768) {
                setZoomLevel(90); // Set zoom level for mobile
            } else {
                setZoomLevel(150); // Default zoom level for desktop
            }
        };

        // Adjust zoom level on component mount
        adjustZoomForDevice();

        // Add resize event listener to handle dynamic resizing
        window.addEventListener('resize', adjustZoomForDevice);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', adjustZoomForDevice);
        };
    }, []);
    const handleZoomIn = () => {
        setZoomLevel(prevZoom => Math.min(prevZoom + 10, 200)); // Increase zoom level by 10%, capped at 200%
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoom => Math.max(prevZoom - 10, 100)); // Decrease zoom level by 10%, capped at 10%
    };

    const imageStyles = {
        transform: `scale(${zoomLevel / 100})`
    };

    //popup-share-social-media-icons

    const [isOpen, setIsOpen] = useState(false);

    const shareUrl = process.env.REACT_APP_DOMAIN_NAME + `/emagazine/${tmp}/preview`;
    const title = 'ASLIKAHANI';

    const openPopup = () => {
        setIsOpen(true)
        document.getElementById("total-magzine").style.filter = 'opacity(25%) drop-shadow(5px 5px 5px black)';

    };

    const closePopup = () => {
        setIsOpen(false)
        document.getElementById("total-magzine").style.filter = 'none';
    };

    //copy to clipboard

    const textToCopy = process.env.REACT_APP_DOMAIN_NAME + `/emagazine/${tmp}/preview`;

    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        clipboardCopy(textToCopy)
            .then(() => {
                // Text copied successfully
                console.log("Text copied to clipboard: ", textToCopy);
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((err) => {
                // Unable to copy text
                console.error("Error copying text to clipboard: ", err);
            });
    };

    //full screen
    let [isFullScreen, setFullScreen] = useState(false);
    const book = useRef();


    const [play] = useSound(page);
    return (
        <div className='emagzine-container'>
            <FullScreen
                isFullScreen={isFullScreen}
                onChange={(isFull = true) => {
                    setFullScreen(isFull)
                }}>
                <div className='sideflip-btn'>
                    <div className='sideflip-btn1'>
                        <div onClick={() => {
                            book.current.pageFlip().flipPrev();
                        }} className='prev-btn'>  <span className="nvIco"><i class="fa-solid fa-chevron-left"></i></span></div>
                    </div>
                    <div className='sideflip-btn2'>
                        <div onClick={() => {
                            book.current.pageFlip().flipNext();
                        }} className='next-btn'><span className="nvIco"><i class="fa-solid fa-chevron-right"></i></span></div>
                    </div>
                </div>
                <div id='total-magzine' >
                    <div className="image-viewer">
                        <HTMLFlipBook
                            width={380}
                            height={500}
                            style={imageStyles}
                            showCover = {true}
                            ref={book}
                            onFlip={(e) => {
                                console.log(`Page flipped: ${e.data}`);
                                play(); // Trigger sound on actual page flip
                            }}
                        >
                            {datavalue.map((item, index) => {
                                return (

                                    <div key={index} className='bookUi' style={{ maxWidth: "100%", pointerEvents: "none" }} onClick={null}>
                                        <Page number="1"
                                            style={{ PointerEvent: "none" }}>
                                            <img src={item.images} alt="Zoomable" className='api-images' style={{ pointerEvents: "none" }} onClick={null} />
                                        </Page>
                                    </div>
                                )
                            })}
                        </HTMLFlipBook>

                        <div className='downwards-bar' style={{ marginBottom: "2%", marginTop: "2%" }}>
                            <div className='btn4 ebookBtns'>
                                <div onClick={handleZoomIn}><i className="fa fa-search-plus" aria-hidden="true"></i></div>
                            </div>
                            <div className='btn5 ebookBtns'>
                                <div onClick={handleZoomOut}><i className="fa fa-search-minus" aria-hidden="true"></i></div>
                            </div>

                            <div className='btn6 ebookBtns'>
                                <div onClick={() => setFullScreen(true)}><i className="fa fa-arrows-alt" aria-hidden="true"></i></div>
                            </div>
                            <div className='ebookBtns' onClick={() => { openPopup() }}>
                                <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </div>
                        </div>
                        {isFullScreen &&
                            <div onClick={() => setFullScreen(false)}><i className="fa fa-times exit" aria-hidden="true"></i></div>
                        }
                    </div>
                </div>
                <div className='btn1'>
                    {isOpen && (
                        <div className='pop-up-share-icons' style={{ position: "absolute", top: "40%" }} >
                            <button onClick={closePopup} className='pop-up-share-icons-close'>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <div className="content">
                                <p>Share this link via</p>
                                <ul className="icons">
                                    <FacebookShareButton url={shareUrl} title={title} >
                                        <a href="" className='fb' ><i className="fab fa-facebook-f"></i></a>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={shareUrl} title={title}>
                                        <a href="" className='tw'><i className="fab fa-twitter"></i></a>
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={shareUrl} title={title}>
                                        <a href="" className='li'><i className="fab fa-linkedin-in"></i></a>
                                    </LinkedinShareButton>
                                    <WhatsappShareButton url={shareUrl} title={title} style={{ color: "green" }}>
                                        <a href="" className='wt'><i className="fab fa-whatsapp"></i></a>
                                    </WhatsappShareButton>
                                    <TelegramShareButton url={shareUrl} title={title}>
                                        <a href="" className='tl'><i className="fab fa-telegram-plane"></i></a>
                                    </TelegramShareButton>
                                </ul>
                                <p>Or copy link</p>
                                <div className="field">
                                    <i className="url-icon uil uil-link"></i>
                                    <input type="text" readonly value={process.env.REACT_APP_DOMAIN_NAME + `/emagazine/${tmp}/preview`} clipboardCopy />
                                    <button onClick={handleCopyClick}><i className="fa-solid fa-copy"></i></button>
                                    {copied && <div className='link-copied-to-clipboard'>link copied to clipboard!</div>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </FullScreen>
        </div>
    );
};

export default Flipbook;
