import React, { useState, useEffect } from 'react';

const MainWebsite = () => {
    const [bannerVisible, setBannerVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [timer, setTimer] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    useEffect(() => {
        const settings = JSON.parse(localStorage.getItem('bannerSettings')) || {};
        setBannerVisible(settings.visible || false);
        setDescription(settings.description || '');
        setLink(settings.link || '');
        setTimer(settings.timer || 0);
        setTimeLeft(settings.timer || 0);
    }, []);

    useEffect(() => {
        if (bannerVisible && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);

            if (timeLeft <= 0) {
                clearInterval(interval);
                setBannerVisible(false);
                localStorage.setItem('bannerSettings', JSON.stringify({ visible: false }));
            }

            return () => clearInterval(interval);
        }
    }, [bannerVisible, timeLeft]);

    return (
        <div className=' flex items-center  justify-center  p-4'>
            {bannerVisible && (
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
                    <a href={link} target="_blank" rel="noopener noreferrer" className='text-2xl font-bold mb-4 text-gray-800'>
                        {description}
                    </a>
                    <div className="countdown">
                        {new Date(timeLeft * 1000).toISOString().substr(11, 8)}
                    </div>
                </div>
            )}
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400' onClick={() => setBannerVisible(!bannerVisible)}>
                Toggle Banner
            </button>
        </div>
    );
};
export default MainWebsite;
