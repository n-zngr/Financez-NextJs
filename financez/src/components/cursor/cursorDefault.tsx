'use client'

import React, { useState, useEffect } from 'react';

const cursorDefault: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);



        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)'}} className='fixed h-4 w-4 rounded-full bg-white-1 pointer-events-none z-50'/>
    );
};

export default cursorDefault;