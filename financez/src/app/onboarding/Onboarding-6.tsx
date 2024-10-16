import React, { FC, useState, FormEvent } from 'react';
import { OnboardingProps } from '@/components/OnboardingLogic';
import StandardSignUp from '@/components/signup/StandardSignUp';
import PrestigeSignUp from '@/components/signup/PrestigeSignUp';

interface SignUpProps extends OnboardingProps {
    selectedPlan: 'Standard' | 'Prestige';
}

const Onboarding6: FC<SignUpProps> = ({ selectedPlan, onNext }) => {
    return (
        <div className='flex flex-col justify-end min-h-screen w-full'>
            {selectedPlan === 'Standard' ? (
                <StandardSignUp onNext={onNext} />
            ) : (
                <PrestigeSignUp onNext={onNext} />
            )}

            <div className='px-16 pb-16 text-white-5'>
                <h1 className='font-ambroise font-demi text-7_5xl'>Sign Up</h1>
                <h2 className='font-thin text-2xl pt-2'>and revolutionize your finances.</h2>
            </div>
            {/*
            <div className='flex flex-col p-16 gap-y-16'>
                <p className='font-light text-gray-5 text-xl'>Cancel any time. No hidden fees.</p>
            </div>*/}
        </div>
    );
};

export default Onboarding6;