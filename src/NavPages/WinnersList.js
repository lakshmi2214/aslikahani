import React, { useState, useEffect } from 'react';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import './WinnersList.css';
import { useLocation } from "react-router-dom";


function WinnersList() {
    const [winners, setWinners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        
        async function fetchWinners(params) {
            try {
                let tmp = null;
                if (location) {
                    // Extract the lottery ID from the URL path
                    const pathParts = location.pathname.split('/');
                    tmp = pathParts[pathParts.length - 1]; // Get the last part of the path
                    console.log('Extracted lottery ID:', tmp);
                }
    
                // const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/list`);
                const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/list`);
                const data = await res.json();
    
                console.log('API Data:', data);
                console.log('Looking for lottery ID:', tmp);
                
                var mockWinners = [];

                const allLotteries = [...(data.valid || []), ...(data.expired || [])];
                console.log('All lotteries:', allLotteries);
                
                const lottery = allLotteries.find(item => item.unique_identifier === tmp);
                console.log('Found lottery:', lottery);

                if (!lottery) {
                    console.error('Lottery not found with ID:', tmp);
                    setIsLoading(false);
                    return;
                }
    
                if (!lottery.is_valid) {
                    console.log('Fetching winners for expired lottery...');
                    const winner_list = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/winners-list/${tmp}`);
                    const winnerData = await winner_list.json();
                    console.log('Winners data:', winnerData);
                    mockWinners = winnerData;
                } else {
                    console.log('Lottery is still active, redirecting to draw page...');
                    window.open(`${process.env.REACT_APP_DOMAIN_NAME}/draw/${tmp}`, '_self');
                }

                // Simulate loading delay
                setTimeout(() => {
                    setWinners(mockWinners);
                    setIsLoading(false);
                }, 1500);
            } catch (err) {
                console.error('Error fetching lottery schema', err);
                
            }
        }

        fetchWinners();
    }, [location]);

    const handleCollectReward = (winnerId) => {
        setWinners(prevWinners => 
            prevWinners.map(winner => 
                winner.id === winnerId 
                    ? { ...winner, collected: true }
                    : winner
            )
        );
    };


    return (
        <>
            <Topbar />
            <LogoColumn />
            <Navbar />
            <section className="winners-main-content">
                <div className="winners-container">
                    {/* Winners Banner */}
                    <div className="winners-banner">
                        <div className="sparkle sparkle-1"></div>
                        <div className="sparkle sparkle-2"></div>
                        <div className="sparkle sparkle-3"></div>
                        <div className="sparkle sparkle-4"></div>
                        <div className="sparkle sparkle-5"></div>
                        <div className="sparkle sparkle-6"></div>
                        
                        <div className="banner-content">
                            <div className="celebration-icon">
                                <i className="fa fa-trophy"></i>
                            </div>
                            <h1 className="banner-title">🏆 WINNERS LIST 🏆</h1>
                            <p className="banner-subtitle">Congratulations to all our lucky winners!</p>
                            <div className="celebration-stats">
                                <div className="stat-item">
                                    <span className="stat-number">{winners.length}</span>
                                    <span className="stat-label">Total Winners</span>
                                </div>
                                {/* <div className="stat-item">
                                    <span className="stat-number">{winners.filter(w => w.collected).length}</span>
                                    <span className="stat-label">Rewards Collected</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">{winners.reduce((sum, w) => sum + w.silverCoins, 0)}</span>
                                    <span className="stat-label">Silver Coins Won</span>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Winners Table */}
                    <div className="winners-table-container">
                        <h2 className="table-title">🎉 Our Lucky Winners 🎉</h2>
                        
                        {isLoading ? (
                            <div className="loading-container">
                                <div className="loading-spinner"></div>
                                <p>Loading winners...</p>
                            </div>
                        ) : (
                            <div className="winners-table-wrapper">
                                <table className="winners-table">
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Winner Name</th>
                                            <th>Phone Number</th>
                                            <th>Prize</th>
                                            <th>Prize Details</th>
                                            <th>Submission Id</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {winners.map((winner, index) => (
                                            <tr key={winner.id} className={`winner-row ${winner.collected ? 'collected' : 'pending'}`}>
                                                <td className="rank-cell">
                                                    <div className="rank-badge">
                                                        #{index + 1}
                                                    </div>
                                                </td>
                                                <td className="name-cell">
                                                    <div className="winner-name">
                                                        <i className="fa fa-user-circle"></i>
                                                        {winner.candidate_name}
                                                    </div>
                                                </td>
                                                <td className="reward-cell">
                                                    <div className="winner-name">
                                                        <i className="fa fa-user-number"></i>
                                                        {winner.phone_number}
                                                    </div>
                                                </td>
                                                <td className="reward-cell">
                                                    <div className="reward-amount">
                                                        <i className="fa fa-coins"></i>
                                                        {winner.prize_obj.prize}
                                                    </div>
                                                </td>
                                                <td className="reward-cell">
                                                    <div className="reward-amount">
                                                        <i className="fa fa-coins"></i>
                                                        {winner.prize_obj.prize_details}
                                                    </div>
                                                </td>
                                                <td className="reward-cell">
                                                    <div className="winner-name">
                                                        <i className="fa fa-user-number"></i>
                                                        {winner.unique_identifier}
                                                    </div>
                                                </td>
                                                {/* <td className="action-cell">
                                                    {!winner.collected ? (
                                                        <button 
                                                            className="collect-btn"
                                                            onClick={() => handleCollectReward(winner.id)}
                                                        >
                                                            <i className="fa fa-gift"></i>
                                                            Collect Reward
                                                        </button>
                                                    ) : (
                                                        <span className="collected-text">
                                                            <i className="fa fa-check-circle"></i>
                                                            Collected
                                                        </span>
                                                    )}
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Celebration Message */}
                    <div className="celebration-message">
                        <div className="message-content">
                            <h3>🎊 Congratulations to All Winners! 🎊</h3>
                            <p>Thank you for participating in our lucky draws. Keep playing to win more amazing prizes!</p>
                            <p>Reach out to support team to collect the reward at +91-6366333444</p>
                            <div className="celebration-icons">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-gift"></i>
                                <i className="fa fa-trophy"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default WinnersList;
