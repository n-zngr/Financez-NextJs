import React, { FC } from 'react';
import OnboardingLogic, { OnboardingProps } from '@/components/OnboardingLogic';

const Onboarding4: FC<OnboardingProps> = ({ onNext }) => {
    // Select Account Type (Personal or Business)
    return (
        <button onClick={onNext} className="flex flex-col justify-end min-h-screen text-left">
                <div className="px-16 text-white-5">
                    <h1 className="font-ambroise font-demi text-7_5xl">Select your account</h1>
                    <h2 className="font-thin text-2xl pt-2">that fits your needs.</h2>
                </div>
                <div className="flex flex-col p-16 gap-y-16">
                    <p className="font-light text-gray-5 text-xl">Use Financez how you please.</p>
            </div>
        </button>
        
    );
}

export default Onboarding4;