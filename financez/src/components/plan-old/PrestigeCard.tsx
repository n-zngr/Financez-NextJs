import React, { useState } from 'react';

const PrestigeCard: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='w-[360px] h-[480px] perspective-1000' onClick={handleFlip}>
            <div className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} transform-style-preserve-3d`}>

                {/* Front Side */}
                <div className='absolute w-full h-full bg-gold-3 bg-noise backface-hidden rounded-3xl border-white-1 border shadow-md overflow-hidden'>
                    <div className='absolute w-12 h-16 bg-black-1 bg-noise -right-6 top-[96px] rounded-xl border border-white-1'></div>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <div className='w-min bg-black-1 bg-noise p-4 px-8 pb-8 rounded-br-xl'>
                                <div className='font-extrabold font-ambroise text-5xl text-white-5'>Prestige</div>
                            </div>
                            <div className='p-4'>
                                <p className='text-black-1'>financez.zngr-dynamics.ch</p>
                            </div>
                        </div>
                        <div>
                            <div className='p-12'>
                                <img src='img/BarCodeBlack.svg'/>
                            </div>
                            <div className='flex self-end items-center justify-center w-full h-[96px] bg-black-1 bg-noise border-t border-white-1 mt-auto'>
                                <p className='font-semibold text-center'>CHF 3.95</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className='absolute w-full h-full flex bg-gold-3 bg-noise backface-hidden rounded-3xl border border-white-1 shadow-md rotate-y-180 overflow-hidden'>
                    <div className='absolute w-12 h-16 bg-black-1 bg-noise -left-6 top-[96px] rounded-xl border border-white-1'></div>
                    <button className='bg-black-1 w-full h-[96px] bg-noise border-t border-white-1 mt-auto'>
                        <p className='text-center font-semibold'>CONTINUE</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrestigeCard;