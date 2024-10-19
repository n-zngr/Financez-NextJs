'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Onboarding Pages
import Onboarding1 from '@/app/onboarding/Onboarding-1';
import Onboarding2 from '@/app/onboarding/Onboarding-2';
import Onboarding3 from '@/app/onboarding/Onboarding-3';
import Onboarding4 from '@/app/onboarding/Onboarding-4';
import Onboarding5 from '@/app/onboarding/Onboarding-5';
import Onboarding6 from '@/app/onboarding/Onboarding-6';
import AccountPlans from './plans/AccountPlans';
import LoginLink from './login/LoginLink';

export interface OnboardingProps {
    onNext: () => void;
    setSelectedPlan?: (plan: 'Standard' | 'Prestige') => void;
}

const OnboardingLogic = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState<'Standard' | 'Prestige' | null>(null);

    const router = useRouter();

    const nextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        } else {
            router.push('/dashboard');
        }
    };

    const navTransition = currentPage === 1 ? 'translate-y-[-100%]' : 'translate-y-0';
    const navVisibility = currentPage === 1 ? 'invisible' : 'visible';

    return (
        <div className='relative h-screen w-screen overflow-hidden'>
            {/*Nav*/}
            <nav className={`fixed top-0 left-0 w-full bg-transparent py-4 px-6 flex items-center justify-between transition-transform duration-800 z-50 ${navVisibility} ${navTransition}`}>
                <div className='flex gap-4'>
                    <div className={`w-[96px] h-[2px] rounded transition-all duration-400 ${currentPage === 2 ? 'bg-white-5' : 'bg-gray-5'}`}></div>
                    <div className={`w-[96px] h-[2px] rounded transition-all duration-400 ${currentPage === 3 ? 'bg-white-5' : 'bg-gray-5'}`}></div>
                    <div className={`w-[96px] h-[2px] rounded transition-all duration-400 ${currentPage === 4 ? 'bg-white-5' : 'bg-gray-5'}`}></div>
                    <div className={`w-[96px] h-[2px] rounded transition-all duration-400 ${currentPage === 5 ? 'bg-white-5' : 'bg-gray-5'}`}></div>
                </div>
                <LoginLink/>
            </nav>
            {/*Onboarding Pages*/}
            <div className={`absolute inset-0 transition-transform duration-600 ease-in-out ${currentPage === 1 ? 'translate-x-0' : '-translate-x-full'}`}>
                <Onboarding1 onNext={nextPage}/>
            </div>
            {/*
            <div className={`absolute inset-0 transition-transform duration-600 ease-in-out ${currentPage === 2 ? 'translate-x-0' : currentPage < 2 ? 'translate-x-full' : '-translate-x-full'}`}>
                <Onboarding2 onNext={nextPage}/>
            </div>
            */}
            {/*
            <div className={`absolute inset-0 transition-transform duration-600 ease-in-out ${currentPage === 3 ? 'translate-x-0' : currentPage < 3 ? 'translate-x-full' : '-translate-x-full'}`}>
                <Onboarding3 onNext={nextPage}/>
            </div>
            */}
            <div className={`absolute inset-0 transition-transform duration-600 ease-in-out ${currentPage === 2 ? 'translate-x-0' : currentPage < 2 ? 'translate-x-full' : '-translate-x-full'}`}>
                <Onboarding4 onNext={nextPage}/>
            </div>
            <div className={`absolute inset-0 transition-transform duration-600 ease-in-out ${currentPage === 3 ? 'translate-x-0' : currentPage < 3 ? 'translate-x-full' : '-translate-x-full'}`}>
                <Onboarding5 onNext={nextPage} setSelectedPlan={setSelectedPlan}/>
            </div>
            <div className={`absolute inset-0 transition-transform duration-600 ease-in-out ${currentPage === 4 ? 'translate-x-0' : currentPage < 4 ? 'translate-x-full' : '-translate-x-full'}`}>
                <Onboarding6 onNext={nextPage} selectedPlan={selectedPlan || 'Standard'}/>
            </div>
        </div>
    );
};

export default OnboardingLogic;