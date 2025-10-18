import { useState, useEffect } from 'react';

const CTASection = () => {
    const [email, setEmail] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [error, setError] = useState('');
    const [showCelebration, setShowCelebration] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                setApiResponse('Successfully subscribed! Check your email for confirmation.');
                setShowCelebration(true);
                setEmail('');
                setError('');
            }
            else {
                setError(data.error || 'Something went wrong. Please try again.');
                setApiResponse('');
            }

        } catch (error) {
            setError('Something went wrong. Please try again.');
            setApiResponse('');
        }
    };

    // Hide celebration after 3 seconds
    useEffect(() => {
        if (showCelebration) {
            const timer = setTimeout(() => {
                setShowCelebration(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showCelebration]);

    return (
        <div className="flex flex-col items-start justify-start w-full h-fit mt-10 px-10 gap-5 mb-20 relative">
            <h1 className="lg:text-2xl text-xl font-bold w-full text-center">Join free webinar</h1>
            <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col items-center justify-center w-full px-4 gap-4">
                <input
                    className="w-full border mx-auto border-gray-300 px-4 py-2 rounded-md"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-md" type="submit">Submit</button>
            </form>

            {/* Success Message */}
            {apiResponse && (
                <div className="text-center w-full text-green-600 font-semibold">
                    {apiResponse}
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="text-center w-full text-red-600 font-semibold">
                    {error}
                </div>
            )}

            {/* Celebration Animation */}
            {showCelebration && (
                <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        className="animate-bounce"
                    >
                        {/* Confetti pieces */}
                        <g>
                            {[...Array(20)].map((_, i) => (
                                <rect
                                    key={i}
                                    x={Math.random() * 200}
                                    y={Math.random() * 200}
                                    width="4"
                                    height="4"
                                    fill={['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 6)]}
                                    className="animate-ping"
                                    style={{
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: '1s'
                                    }}
                                />
                            ))}
                        </g>

                        {/* Central celebration icon */}
                        <g transform="translate(100, 100)">
                            <circle
                                cx="0"
                                cy="0"
                                r="30"
                                fill="#FFD700"
                                className="animate-pulse"
                            />
                            <text
                                x="0"
                                y="10"
                                textAnchor="middle"
                                fontSize="24"
                                fill="white"
                                className="animate-bounce"
                            >
                                🎉
                            </text>
                        </g>

                        {/* Sparkles around the center */}
                        {[...Array(8)].map((_, i) => (
                            <g key={i} transform={`translate(100, 100) rotate(${i * 45})`}>
                                <path
                                    d="M0,-40 L-5,-30 L5,-30 Z"
                                    fill="#FFD700"
                                    className="animate-ping"
                                    style={{
                                        animationDelay: `${i * 0.2}s`,
                                        animationDuration: '0.8s'
                                    }}
                                />
                            </g>
                        ))}
                    </svg>
                </div>
            )}
        </div>
    )
}

export default CTASection;