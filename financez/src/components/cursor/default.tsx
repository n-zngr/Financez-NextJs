'use client';

import { CursorProps } from './cursorLogic';

interface CursorDefaultProps {
    cursorProps: CursorProps;
}

const CursorDefault: React.FC<CursorDefaultProps> = ({cursorProps}) => {
    const { position, visibility, isArrow } = cursorProps;

    return (
        <div 
            style={{ 
                left: `${position.x}px`,
                top: `${position.y}px`,
                opacity: visibility && !isArrow ? 1 : 0,
                transform: 'translate(-50%, -50%)',
                transition: `${visibility ? 'opacity 0.4s ease' : 'opacity 0.8s ease'}`}}
            className='fixed h-4 w-4 rounded-full bg-white-1 pointer-events-none z-50'
        />
    );
};

export default CursorDefault;