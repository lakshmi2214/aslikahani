import React, { useState,  useEffect } from 'react';
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

    useEffect(() => {
        if (location) {
            var urlcomponent = location.pathname.split('/');
            var tmp = urlcomponent[urlcomponent.length - 2];

        }
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${tmp}`
        fetch(url).then(res => res.json())
            .then(res => {
                setDatavalue(res)
                console.log(res)
            })
    }, [])

    //Flipbook

    const Page = React.forwardRef((props, ref) => {
      
        const book = useRef();
        return (
            <TransformWrapper >
                <TransformComponent >
                    <div className="demoPage" ref={ref} style={{pointerEvents:"none"}}>
                        <p style={{pointerEvents:"none"}}>{props.children}</p>
                    </div>
                 </TransformComponent>
             </TransformWrapper>
        );
    });

    //page-zooming

    const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level is 100%

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

    const shareUrl = 'https://aslikahani.com/emagzine/asli-kahani-edition-20/preview';
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

    const textToCopy = "https://aslikahani.com/emagzine/asli-kahani-edition-20/preview";

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

    //audio clip for page flip

    const [play] = useSound(page);
    
    return (
        <div>
            <FullScreen
                isFullScreen={isFullScreen}
                onChange={(isFull = true) => {
                    setFullScreen(isFull)
                }}>
                      <div className='sideflip-btn'>
                        <div className='sideflip-btn1'>
                                <div onClick={() => {
                                                      book.current.pageFlip().flipPrev();
                                                      play();
                                                      }} className='prev-btn'>  <span class="glyphicon glyphicon-chevron-left"></span></div>
                            </div>
                            <div className='sideflip-btn2'>
                                <div onClick={() => {
                                                      book.current.pageFlip().flipNext();
                                                      play();
                                                      }} className='next-btn'><span class="glyphicon glyphicon-chevron-right"></span></div>
                            </div>
                    </div>
                <div id='total-magzine' >
                    <div className="image-viewer">
                        <div style={{ marginTop: "1%", marginBottom: "1%" }}><a href={`https://aslikahani.com`}><img src={logosmall} class="rounded mx-auto d-block" alt="logo" style={{ height: "50px", width: "250px" }} /></a></div>
                        <HTMLFlipBook
                            width={380}
                            height={500}
                            style={imageStyles}
                            ref={book}
                           
                            >
                            {datavalue.map((item, index) => {
                                console.log(item)
                                return (

                                    <div key={index} className='box' style={{ maxWidth: "100%" , pointerEvents:"none"}} onClick={null}>
                                        <Page number="1" 
                                        style={{PointerEvent:"none"}}> 
                                            <img src={item.images} alt="Zoomable" className='api-images' style={{pointerEvents:"none"}} onClick={null}/>
                                        </Page>
                                    </div>
                                )
                            })}
                        </HTMLFlipBook>
                  
                        <div className='downwards-bar' style={{ marginBottom: "2%", marginTop: "2%" }}>
                            <div className='btn2'>
                                <div onClick={() => {
                                                      book.current.pageFlip().flipPrev();
                                                      play();
                                                      }} className='prev-btn'><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                            </div>
                            <div className='btn3'>
                                <div onClick={() => {
                                                      book.current.pageFlip().flipNext();
                                                      play();
                                                      }} className='next-btn'><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            </div>
                            <div className='btn4'>
                                <div onClick={handleZoomIn}><i class="fa fa-search-plus" aria-hidden="true"></i></div>
                            </div>
                            <div className='btn5'>
                                <div onClick={handleZoomOut}><i class="fa fa-search-minus" aria-hidden="true"></i></div>
                            </div>

                            <div className='btn6'>
                                <div onClick={() => setFullScreen(true)}><i class="fa fa-arrows-alt" aria-hidden="true"></i></div>
                            </div>
                            <div onClick={() => { openPopup() }}>
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </div>
                        </div>

                        {isFullScreen &&
                            <div onClick={() => setFullScreen(false)}><i class="fa fa-times exit" aria-hidden="true"></i></div>
                        }
                    </div>
                </div>
                <div className='btn1'>
                    {isOpen && (
                        <div class='pop-up-share-icons' style={{ position: "absolute", top: "40%" }} >
                            <button onClick={closePopup} className='pop-up-share-icons-close'>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <div class="content">
                                <p>Share this link via</p>
                                <ul class="icons">
                                    <FacebookShareButton url={shareUrl} title={title} >
                                        <a href="" className='fb' ><i class="fab fa-facebook-f"></i></a>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={shareUrl} title={title}>
                                        <a href="" className='tw'><i class="fab fa-twitter"></i></a>
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={shareUrl} title={title}>
                                        <a href="" className='li'><i class="fab fa-linkedin-in"></i></a>
                                    </LinkedinShareButton>
                                    <WhatsappShareButton url={shareUrl} title={title} style={{ color: "green" }}>
                                        <a href="" className='wt'><i class="fab fa-whatsapp"></i></a>
                                    </WhatsappShareButton>
                                    <TelegramShareButton url={shareUrl} title={title}>
                                        <a href="" className='tl'><i class="fab fa-telegram-plane"></i></a>
                                    </TelegramShareButton>
                                </ul>
                                <p>Or copy link</p>
                                <div class="field">
                                    <i class="url-icon uil uil-link"></i>
                                    <input type="text" readonly value="https://aslikahani.com/emagzine/asli-kahani-edition-20/preview" clipboardCopy />
                                    <button onClick={handleCopyClick}><i class="fa-solid fa-copy"></i></button>
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
