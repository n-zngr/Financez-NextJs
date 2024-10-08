import React, { useState } from 'react';

const StandardCard: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='w-[360px] h-[480px] perspective-1000' onClick={handleFlip}>
            <div className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} transform-style-preserve-3d`}>

                {/* Front Side */}
                <div className='absolute w-full h-full bg-black-1 bg-noise backface-hidden rounded-3xl border-white-1 border shadow-md overflow-hidden'>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <div className='w-min bg-white-5 bg-noise p-4 px-8 pb-8 rounded-br-xl'>
                                <div className='font-extrabold font-ambroise text-5xl text-black-1'>Standard</div>
                            </div>
                            <div className='p-4'>
                                <p className='text-white-5'>financez.zngr-dynamics.ch</p>
                            </div>
                        </div>
                        <div>
                            <div className='p-12'>
                                <img src='img/BarCodeWhite.svg'/>
                            </div>
                            <div className='flex self-end items-center justify-center w-full h-[96px] bg-white-5 bg-noise border-t border-white-5 mt-auto'>
                                <p className='font-semibold text-center text-black-1'>FREE</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className='absolute w-full h-full flex bg-black-1 bg-noise backface-hidden rounded-3xl border border-white-1 shadow-md rotate-y-180 overflow-hidden'>
                    <button className='bg-white-5 w-full h-[96px] bg-noise border-t border-white-1 mt-auto'>
                        <p className='text-center font-semibold text-black-1'>CONTINUE</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StandardCard;