import React, { useState, useEffect } from 'react';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import LotteryLoader from '../Components/LotteryLoader';
// import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
// import SristarAd1 from '../Advertisements/SristarAd1';
import './LotteryDraws.css';

function LotteryDraws() {
    const [lotteryDraws, setLotteryDraws] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    // const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Fetch lottery draws data
        const fetchLotteryDraws = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/list`);
                const data = await response.json();
                
                if (data.valid && data.valid.length > 0) {
                    // Transform the data to match our UI structure
                    const transformedDraws = data.valid.map((draw, index) => ({
                        id: draw.unique_identifier,
                        title: draw.title || `Draw ${index + 1}`,
                        category: draw.category || 'General',
                        reward: draw.reward_amount || '₹500',
                        minOrder: draw.minimum_order || '₹2000',
                        image: draw.image_url || '/images/default-lottery.jpg',
                        isActive: draw.is_active || (index === 0), // Make first draw active if none are active
                        endDate: draw.end_datetime,
                        description: draw.description || 'Join our lucky draw and win amazing prizes!',
                        url: draw.url || '#'
                    }));
                    
                    // Ensure at least one draw is active
                    const hasActiveDraw = transformedDraws.some(draw => draw.isActive);
                    if (!hasActiveDraw && transformedDraws.length > 0) {
                        transformedDraws[0].isActive = true;
                    }
                    
                    console.log('API Data - Active draws:', transformedDraws.filter(d => d.isActive).length);
                    setLotteryDraws(transformedDraws);
                } else {
                    // Mock data for demonstration
                    setLotteryDraws([
                        {
                            id: 'jewellery-draw',
                            title: 'Jewellery Draw',
                            category: 'Jewellery',
                            reward: '₹300',
                            minOrder: '₹1000',
                            image: '/images/jewellery-draw.jpg',
                            isActive: true,
                            endDate: '2024-12-31T23:59:59',
                            description: 'Win up to ₹300 back on jewellery purchases',
                            url: '/draw/jewellery-draw'
                        },
                        {
                            id: 'clothing-draw',
                            title: 'Clothing Draw',
                            category: 'Clothing',
                            reward: '₹500',
                            minOrder: '₹2000',
                            image: '/images/clothing-draw.jpg',
                            isActive: true,
                            endDate: '2024-12-25T23:59:59',
                            description: 'Win up to ₹500 back on clothing purchases',
                            url: '/draw/clothing-draw'
                        },
                        {
                            id: 'footwear-draw',
                            title: 'Footwear Draw',
                            category: 'Footwear',
                            reward: '₹500',
                            minOrder: '₹2000',
                            image: '/images/footwear-draw.jpg',
                            isActive: false,
                            endDate: '2024-12-28T23:59:59',
                            description: 'Win up to ₹500 back on footwear purchases',
                            url: '/draw/footwear-draw'
                        },
                        {
                            id: 'luggage-draw',
                            title: 'Luggage Draw',
                            category: 'Luggage',
                            reward: '₹1000',
                            minOrder: '₹3000',
                            image: '/images/luggage-draw.jpg',
                            isActive: false,
                            endDate: '2024-12-30T23:59:59',
                            description: 'Win up to ₹1000 back on luggage purchases',
                            url: '/draw/luggage-draw'
                        },
                        {
                            id: 'beauty-draw',
                            title: 'Beauty Draw',
                            category: 'Beauty',
                            reward: '₹150',
                            minOrder: '₹799',
                            image: '/images/beauty-draw.jpg',
                            isActive: false,
                            endDate: '2024-12-27T23:59:59',
                            description: 'Win up to ₹150 back on beauty products',
                            url: '/draw/beauty-draw'
                        }
                    ]);
                    console.log('Mock Data - Active draws:', 2);
                }
            } catch (error) {
                console.error('Error fetching lottery draws:', error);
                // Set mock data on error
                setLotteryDraws([
                    {
                        id: 'jewellery-draw',
                        title: 'Jewellery Draw',
                        category: 'Jewellery',
                        reward: '₹300',
                        minOrder: '₹1000',
                        image: '/images/jewellery-draw.jpg',
                        isActive: true,
                        endDate: '2024-12-31T23:59:59',
                        description: 'Win up to ₹300 back on jewellery purchases',
                        url: '/draw/jewellery-draw'
                    },
                    {
                        id: 'clothing-draw',
                        title: 'Clothing Draw',
                        category: 'Clothing',
                        reward: '₹500',
                        minOrder: '₹2000',
                        image: '/images/clothing-draw.jpg',
                        isActive: true,
                        endDate: '2024-12-25T23:59:59',
                        description: 'Win up to ₹500 back on clothing purchases',
                        url: '/draw/clothing-draw'
                    },
                    {
                        id: 'footwear-draw',
                        title: 'Footwear Draw',
                        category: 'Footwear',
                        reward: '₹500',
                        minOrder: '₹2000',
                        image: '/images/footwear-draw.jpg',
                        isActive: false,
                        endDate: '2024-12-28T23:59:59',
                        description: 'Win up to ₹500 back on footwear purchases',
                        url: '/draw/footwear-draw'
                    },
                    {
                        id: 'luggage-draw',
                        title: 'Luggage Draw',
                        category: 'Luggage',
                        reward: '₹1000',
                        minOrder: '₹3000',
                        image: '/images/luggage-draw.jpg',
                        isActive: false,
                        endDate: '2024-12-30T23:59:59',
                        description: 'Win up to ₹1000 back on luggage purchases',
                        url: '/draw/luggage-draw'
                    },
                    {
                        id: 'beauty-draw',
                        title: 'Beauty Draw',
                        category: 'Beauty',
                        reward: '₹150',
                        minOrder: '₹799',
                        image: '/images/beauty-draw.jpg',
                        isActive: false,
                        endDate: '2024-12-27T23:59:59',
                        description: 'Win up to ₹150 back on beauty products',
                        url: '/draw/beauty-draw'
                    }
                ]);
                console.log('Error Fallback - Active draws:', 2);
            }
        };

        // Fetch categories
        // const fetchCategories = async () => {
        //     try {
        //         const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`);
        //         const data = await response.json();
        //         setCategories(data);
        //     } catch (error) {
        //         console.error('Error fetching categories:', error);
        //     }
        // };

        fetchLotteryDraws();
        // fetchCategories();
    }, []);

    // Ensure at least one draw is always active
    useEffect(() => {
        if (lotteryDraws.length > 0) {
            const hasActiveDraw = lotteryDraws.some(draw => draw.isActive);
            console.log('Final check - Has active draw:', hasActiveDraw, 'Total draws:', lotteryDraws.length);
            if (!hasActiveDraw) {
                const updatedDraws = [...lotteryDraws];
                updatedDraws[0].isActive = true;
                console.log('Forcing first draw to be active');
                setLotteryDraws(updatedDraws);
            }
        }
    }, [lotteryDraws]);

    const handleDrawClick = (draw) => {
        if (draw.isActive) {
            // Show loader first
            setShowLoader(true);
        }
    };

    const handleLoaderComplete = () => {
        // Navigate to winners page after loader completes
        window.location.href = '/winners';
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short'
        });
    };

    return (
        <>
            <Topbar />
            <LogoColumn />
            <Navbar />
            {showLoader && (
                <LotteryLoader onComplete={handleLoaderComplete} />
            )}
            <section className="lottery-main-content">
                <div className="col-md-12" style={{paddingLeft:"5%", paddingRight:"5%"}}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="lottery-sections">
                                {/* Lottery Draws Grid */}
                                <div className="lottery-draws-section">
                                    <h2 className="lottery-section-title">Claim your Shopping Rewards</h2>
                                    
                                    <div className="lottery-grid">
                                        {lotteryDraws.map((draw, index) => (
                                            <div key={draw.id} className="lottery-card-wrapper">
                                                <div 
                                                    className={`lottery-card ${draw.isActive ? 'active' : 'disabled'}`}
                                                    onClick={() => handleDrawClick(draw)}
                                                >
                                                    <div className="card-image-section">
                                                        <div className="card-image">
                                                            <img src={draw.image} alt={draw.title} />
                                                        </div>
                                                        <div className="expires-banner">
                                                            {draw.isActive ? 'Expires today' : 'Coming Soon'}
                                                        </div>
                                                        <div className="crown-icon">
                                                            <i className="fa fa-crown"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="card-content">
                                                        <div className="card-category">
                                                            aslikahani.com | {draw.category}
                                                        </div>
                                                        <div className="card-reward">
                                                            GET UP TO {draw.reward} BACK
                                                        </div>
                                                        <div className="card-offer">
                                                            10% offer, Min order: {draw.minOrder}
                                                        </div>
                                                        <div className="card-validity">
                                                            Valid till {formatDate(draw.endDate)} 
                                                            <button className="details-link" onClick={(e) => e.preventDefault()}>Details</button>
                                                        </div>
                                                        <button 
                                                            className={`card-button ${draw.isActive ? 'active' : 'disabled'}`}
                                                            disabled={!draw.isActive}
                                                        >
                                                            {draw.isActive ? 'View Winners' : 'Draw Not Open'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="col-md-4 col-sm-12 col-xs-12" id="lottery-sidebar">
                            <aside>
                                <ChaiTheoryAd addObject={categories} />
                                <SristarAd1 addObject={categories} />
                            </aside>
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LotteryDraws;
