import React, { useState, useEffect } from 'react';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
// import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
// import SristarAd1 from '../Advertisements/SristarAd1';
import './LotteryDraws.css';

function LotteryDraws() {
    const [lotteryDraws, setLotteryDraws] = useState([]);
    // const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Fetch lottery draws data
        const fetchLotteryDraws = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/list`);
                // const response = await fetch(`http://localhost:8000/api/v1/lottery/list`);
                const data = await response.json();
                
                // Combine both valid and expired lotteries
                const allLotteries = [...(data.valid || []), ...(data.expired || [])];
                
                if (allLotteries.length > 0) {
                    // Transform the data to match our UI structure
                    const transformedDraws = allLotteries.map((draw, index) => ({
                        id: draw.unique_identifier,
                        name: draw.name,
                        title: draw.name,
                        category: 'Draw',
                        reward: 'Silver Coin',
                        minOrder: 'Free Entry',
                        image: draw.image_url || '/images/default-lottery.jpg',
                        isActive: draw.is_valid, // Use is_valid from API
                        endDate: draw.end_datetime,
                        description: draw.terms_condition || 'Join our lucky draw and win amazing prizes!',
                        url: draw.url || '#'
                    }));
                    
                    console.log('API Data - Total draws:', transformedDraws.length);
                    console.log('API Data - Valid draws:', transformedDraws.filter(d => d.isActive).length);
                    console.log('API Data - Expired draws:', transformedDraws.filter(d => !d.isActive).length);
                    setLotteryDraws(transformedDraws);
                } else {
                    // No lottery data available
                    setLotteryDraws([]);
                    console.log('No lottery data available');
                }
            } catch (error) {
                console.error('Error fetching lottery draws:', error);
                // Set empty array on error
                setLotteryDraws([]);
                console.log('Error - No lottery data available');
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


    const handleDrawClick = (draw) => {
        if (draw.url) {
            // Redirect to the lottery URL
            window.open(draw.url, '_blank');
        }
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
                                                    className={`lottery-card 'active'`}
                                                    onClick={() => handleDrawClick(draw)}
                                                >
                                                    <div className="card-image-section">
                                                        <div className="card-image">
                                                            <img src={draw.image} alt={draw.title} />
                                                        </div>
                                                        <div className="expires-banner">
                                                            {draw.isActive ? 'Active Now' : 'Winners'}
                                                        </div>
                                                        <div className="crown-icon">
                                                            <i className="fa fa-crown"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="card-content">
                                                        <div className="card-category">
                                                            aslikahani.com | {draw.category}
                                                        </div>
                                                        <div className="card-title">
                                                            {draw.name}
                                                        </div>
                                                        <div className="card-reward">
                                                            {draw.reward}
                                                        </div>
                                                        {/* <div className="card-offer">
                                                            {draw.minOrder}
                                                        </div> */}
                                                        <div className="card-validity">
                                                            Valid till {formatDate(draw.endDate)} 
                                                            <button className="details-link" onClick={(e) => e.preventDefault()}>Details</button>
                                                        </div>
                                                        <button 
                                                            className={`card-button 'active'`}
                                                            disabled={!draw.isActive}
                                                            onClick={() => handleDrawClick(draw)}
                                                        >
                                                            {draw.isActive ? 'Participate Now' : 'Winners'}
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
