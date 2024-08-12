import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InternalDashboard = () => {
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [linkText, setLinkText] = useState('');
    const [timer, setTimer] = useState(0);
    const [visible, setVisible] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [message,setMessage] = useState('');
    const navigate = useNavigate();
    const saveSettings = () => {
        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        if(description === ''  || link==='' || linkText==='') {
            setMessage('you must fill all the fields');
            return;
        }
        else {
            const settings = {
                description,
                link,
                linkText,
                timer: parseInt(totalSeconds, 10) || 0,
                visible,
            };
            localStorage.setItem('bannerSettings', JSON.stringify(settings));
            alert('Settings saved!');
            navigate("/");
        }
        
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Internal Dashboard</h1>
            {message == '' ?<div></div>:<div className='text-bold text-xl text-red-500'>{message}</div>}
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Banner Description
                        <textarea
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Banner Link URL
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Banner Link Text
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            value={linkText}
                            onChange={(e) => setLinkText(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    {/* <label className="block text-gray-700 font-medium mb-2">
                        Banner Timer (seconds)
                        <input
                            type="number"
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            value={timer}
                            onChange={(e) => setTimer(e.target.value)}
                        />
                    </label> */}
                    <label className="block text-gray-700 font-medium mb-2">
                        Banner Timer
                        <div className="flex space-x-4 mt-2">
                            <div className="flex-1">
                                <label className="block text-gray-600 font-medium">Hours</label>
                                <input
                                    type="number"
                                    min="0"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    value={hours}
                                    onChange={(e) => setHours(Number(e.target.value))}
                                    placeholder="Hours"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-600 font-medium">Minutes</label>
                                <input
                                    type="number"
                                    min="0"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    value={minutes}
                                    onChange={(e) => setMinutes(Number(e.target.value))}
                                    placeholder="Minutes"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-600 font-medium">Seconds</label>
                                <input
                                    type="number"
                                    min="0"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    value={seconds}
                                    onChange={(e) => setSeconds(Number(e.target.value))}
                                    placeholder="Seconds"
                                />
                            </div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={visible}
                            onChange={(e) => setVisible(e.target.checked)}
                        />
                        Banner Visibility
                    </label>
                </div>
                <button
                    onClick={saveSettings}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                   Save Settings
                    
                </button>
            </div>
        </div>
    );
};

export default InternalDashboard;
