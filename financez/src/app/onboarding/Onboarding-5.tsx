import React, { FC } from 'react';
import { OnboardingProps } from '@/components/OnboardingLogic';
import Plans from '@/components/Plans/Plans';

const Onboarding5: FC<OnboardingProps> = ({ onNext }) => {
    // Select your plan (Standard, Prestige)
    return (
        <div className='flex flex-col justify-end min-h-screen'>
            <Plans onNext={onNext}/>
            <div className='px-16 text-white-5'>
                <h1 className='font-ambroise font-demi text-7_5xl'>Select your plan</h1>
                <h2 className='font-thin text-2xl pt-2'>and unleash the full potential of your finances.</h2>
            </div>
            <div className='flex flex-col p-16 gap-y-16'>
                <p className='font-light text-gray-5 text-xl'>Cancel any time. No hidden fees.</p>
            </div>
        </div>
    );
};

export default Onboarding5;