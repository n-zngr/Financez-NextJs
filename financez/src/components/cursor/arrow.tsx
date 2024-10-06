'use client';

import { CursorProps } from './cursorLogic';

interface CursorArrowProps {
    cursorProps: CursorProps;
}

const CursorArrow: React.FC<CursorArrowProps> = ({cursorProps}) => {
    const { position, visibility, isArrow } = cursorProps;

    return (
        <div style={{ 
                left: `${position.x}px`,
                top: `${position.y}px`,
                opacity: visibility && isArrow ? 1 : 0,
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.3s ease'}} 
            className='fixed w-6 h-6 pointer-events-none z-[60]'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full`}>
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export default CursorArrow;