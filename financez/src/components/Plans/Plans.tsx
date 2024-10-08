
import React, { FC } from 'react';
import { OnboardingProps } from '../OnboardingLogic';

const Plans: FC<OnboardingProps> = ({ onNext }) => {
    return (
        <div className="w-full h-full flex flex-row gap-4">
            <div className="w-full h-full flex flex-col gap-4">
                <div className="flex flex-col border border-white-5 rounded-xl p-4 text-white-5">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-ambroise font-extrabold text-3xl">Standard</h3>
                        <p className="font-medium">FREE</p>
                    </div>
                    <div className="flex">
                        <p className="">Experience Financez.</p>
                    </div>
                </div>
                <div className="flex flex-col border border-gold-3 rounded-xl p-4 text-gold-3">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-ambroise font-extrabold text-3xl">Prestige</h3>
                        <p className="font-medium">CHF 3.95</p>
                    </div>
                    <div className="flex">
                        <p className="">Additional features, support the development.</p>
                    </div>
                </div>
                <button className="flex border border-white-1 rounded-xl p-3" onClick={onNext}>
                    <p className="text-left">Continue</p>
                </button>
            </div>
        </div>
    );
}

export default Plans;