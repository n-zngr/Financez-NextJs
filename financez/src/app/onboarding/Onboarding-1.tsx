import { FC } from 'react';
import { OnboardingProps } from '@/components/OnboardingLogic';

const Onboarding1: FC<OnboardingProps> = ({ onNext }) => {
    // Landing Page
    return (
        <div className="flex flex-col justify-end min-h-screen">
            <div className="px-16 text-white-5">
                <h1 className="font-ambroise font-demi text-7_5xl">Financez-vous</h1>
                <h2 className="font-thin text-2xl pt-2">Finance yourself</h2>
            </div>
            <div className="flex flex-col p-16 gap-y-16">
                <p className="font-light text-gray-5 text-xl">Handle your finances with care. Effortlessly, and simple.</p>
                <button onClick={onNext} className="flex border border-white-5 rounded-2xl p-4 text-base">
                    <p className="font-thin">Revolutionize your finances</p>
                </button>
            </div>
        </div>
    );
};

export default Onboarding1;