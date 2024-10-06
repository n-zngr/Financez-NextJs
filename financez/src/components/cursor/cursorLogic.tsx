'use client';

import React, { useState, useEffect } from 'react';
import CursorDefault from './default';
import CursorArrow from './arrow';

export interface CursorProps {
    position: {x: number; y: number};
    visibility: boolean;
    isArrow: boolean;
}

const CursorLogic: React.FC = () => {
    const [cursorProps, setCursorProps] = useState<CursorProps>({
        position: { x: 0, y: 0 },
        visibility: true,
        isArrow: false,
    });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setCursorProps(prev => ({
                ...prev, position: { x: e.clientX, y: e.clientY }
            }));
        };

        const handleMouseLeave = () => {
            setCursorProps(prev => ({
                ...prev, visibility: false
            }));
        };

        const handleMouseEnter = () => {
            setCursorProps(prev => ({
                ...prev, visibility: true
            }));
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as Element;
            setCursorProps(prev => ({
                ...prev, isArrow: !!target && !!target.closest('button, a')
            }));
        };

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <CursorDefault cursorProps={cursorProps}/>
            <CursorArrow cursorProps={cursorProps}/>
        </>
    );
};

export default CursorLogic;