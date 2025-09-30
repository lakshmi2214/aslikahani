import React, { useState, useEffect } from 'react';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import './WinnersList.css';

function WinnersList() {
    const [winners, setWinners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const fetchWinners = async () => {
            try {
                // Mock data for demonstration
                const mockWinners = [
                    {
                        id: 1,
                        name: 'Priya Sharma',
                        silverCoins: 5,
                        reward: '₹500',
                        collected: true,
                        winDate: '2024-12-20',
                        drawName: 'Jewellery Draw'
                    },
                    {
                        id: 2,
                        name: 'Rajesh Kumar',
                        silverCoins: 3,
                        reward: '₹300',
                        collected: false,
                        winDate: '2024-12-19',
                        drawName: 'Clothing Draw'
                    },
                    {
                        id: 3,
                        name: 'Anita Singh',
                        silverCoins: 7,
                        reward: '₹700',
                        collected: true,
                        winDate: '2024-12-18',
                        drawName: 'Footwear Draw'
                    },
                    {
                        id: 4,
                        name: 'Vikram Patel',
                        silverCoins: 2,
                        reward: '₹200',
                        collected: false,
                        winDate: '2024-12-17',
                        drawName: 'Beauty Draw'
                    },
                    {
                        id: 5,
                        name: 'Sunita Reddy',
                        silverCoins: 4,
                        reward: '₹400',
                        collected: true,
                        winDate: '2024-12-16',
                        drawName: 'Luggage Draw'
                    },
                    {
                        id: 6,
                        name: 'Amit Gupta',
                        silverCoins: 6,
                        reward: '₹600',
                        collected: false,
                        winDate: '2024-12-15',
                        drawName: 'Jewellery Draw'
                    },
                    {
                        id: 7,
                        name: 'Kavita Joshi',
                        silverCoins: 3,
                        reward: '₹300',
                        collected: true,
                        winDate: '2024-12-14',
                        drawName: 'Clothing Draw'
                    },
                    {
                        id: 8,
                        name: 'Rohit Verma',
                        silverCoins: 5,
                        reward: '₹500',
                        collected: false,
                        winDate: '2024-12-13',
                        drawName: 'Footwear Draw'
                    }
                ];

                // Simulate loading delay
                setTimeout(() => {
                    setWinners(mockWinners);
                    setIsLoading(false);
                }, 1500);
            } catch (error) {
                console.error('Error fetching winners:', error);
                setIsLoading(false);
            }
        };

        fetchWinners();
    }, []);

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
                                <div className="stat-item">
                                    <span className="stat-number">{winners.filter(w => w.collected).length}</span>
                                    <span className="stat-label">Rewards Collected</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">{winners.reduce((sum, w) => sum + w.silverCoins, 0)}</span>
                                    <span className="stat-label">Silver Coins Won</span>
                                </div>
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
                                            <th>Silver Coins</th>
                                            <th>Action</th>
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
                                                        {winner.name}
                                                    </div>
                                                </td>
                                                <td className="reward-cell">
                                                    <div className="reward-amount">
                                                        <i className="fa fa-coins"></i>
                                                        {winner.silverCoins} Silver Coins
                                                    </div>
                                                </td>
                                                <td className="action-cell">
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
                                                </td>
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
