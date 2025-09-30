import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import spinwheelAnimation from '../Lottie/spinwheel.json';
import confettiAnimation from '../Lottie/Confetti.json';
import winnerQulAnimation from '../Lottie/winnerQul.json';
import './LotteryLoader.css';

function LotteryLoader({ onComplete }) {
    const [currentAnimation, setCurrentAnimation] = useState('spinwheel');
    const [showConfetti, setShowConfetti] = useState(false);
    const [showWinner, setShowWinner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            // After 3 seconds, show confetti and winner animations
            setCurrentAnimation('confetti');
            setShowConfetti(true);
            setShowWinner(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showConfetti && showWinner) {
            // After showing confetti and winner for 2 seconds, complete the loader
            const timer = setTimeout(() => {
                onComplete();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showConfetti, showWinner, onComplete]);

    const getAnimationData = () => {
        switch (currentAnimation) {
            case 'spinwheel':
                return spinwheelAnimation;
            case 'confetti':
                return confettiAnimation;
            default:
                return spinwheelAnimation;
        }
    };

    return (
        <div className="lottery-loader-overlay">
            <div className="lottery-loader-container">
                {/* Main Animation Container */}
                <div className="main-animation">
                    <Lottie
                        animationData={getAnimationData()}
                        loop={currentAnimation === 'spinwheel'}
                        autoplay={true}
                        style={{ 
                            width: 300, 
                            height: 300,
                            background: 'transparent'
                        }}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice'
                        }}
                    />
                </div>

                {/* Confetti Animation (overlay) */}
                {showConfetti && (
                    <div className="confetti-overlay">
                        <Lottie
                            animationData={confettiAnimation}
                            loop={false}
                            autoplay={true}
                            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                )}

                {/* Winner Animation (overlay) */}
                {showWinner && (
                    <div className="winner-overlay">
                        <Lottie
                            animationData={winnerQulAnimation}
                            loop={false}
                            autoplay={true}
                            style={{ width: 200, height: 200 }}
                        />
                    </div>
                )}

                {/* Loading Text */}
                <div className="loader-text">
                    {currentAnimation === 'spinwheel' && (
                        <h2>Spinning the wheel...</h2>
                    )}
                    {showConfetti && showWinner && (
                        <h2>🎉 Congratulations! 🎉</h2>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LotteryLoader;
