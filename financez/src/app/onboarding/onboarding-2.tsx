import { FC } from 'react';

interface OnboardingProps {
    onNext: () => void;
}

const Onboarding2: FC<OnboardingProps> = ({ onNext }) => {
    // Feature - Tracking
    return (
        <button onClick={onNext} className="flex flex-col justify-end min-h-screen">
            <div className="px-16 text-white-5">
                <h1 className="font-ambroise font-demi text-7_5xl">Track your income</h1>
                <h2 className="font-thin text-2xl pt-2">through the dashboard and transaction views.</h2>
            </div>
            <div className="flex flex-col px-16 py-16 gap-y-16">
                <p className="font-light text-gray-5 text-xl">Visualize expenses, income, scan bills, and make yourself a bigger picture</p>
            </div>
        </button>
    );
}

export default Onboarding2;