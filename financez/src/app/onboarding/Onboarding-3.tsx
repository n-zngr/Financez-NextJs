import { FC } from 'react';
import { OnboardingProps } from '@/components/OnboardingLogic';

const Onboarding3: FC<OnboardingProps> = ({ onNext }) => {
    // Feature - Budgeting
    return (
        <button onClick={onNext} className="flex flex-col justify-end min-h-screen">
            <div className="px-16 text-white-5">
                <h1 className="font-ambroise font-demi text-7_5xl">Set your goals</h1>
                <h2 className="font-thin text-2xl pt-2">through the budget view.</h2>
            </div>
            <div className="flex flex-col px-16 py-16 gap-y-16">
                <p className="font-light text-gray-5 text-xl">Set your financial goals, and stick to them.</p>
            </div>
        </button>
    );
}

export default Onboarding3;