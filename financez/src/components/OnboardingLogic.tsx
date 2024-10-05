'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Onboarding Pages
import Onboarding1 from '@/app/onboarding/Onboarding-1';
import Onboarding2 from '@/app/onboarding/Onboarding-2';
import Onboarding3 from '@/app/onboarding/Onboarding-3';

const OnboardingLogic = () => {
    const [ currentPage, setCurrentPage ] = useState(1);

    const router = useRouter();

    const nextPage = () => {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1);
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <div className='relative h-screen w-screen overflow-hidden'>
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${currentPage === 1 ? 'translate-x-0' : '-translate-x-full'}`}>
                <Onboarding1 onNext={nextPage}/>
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${currentPage === 2 ? 'translate-x-0' : currentPage < 2 ? 'translate-x-full' : '-translate-x-full'}`}>
                <Onboarding2 onNext={nextPage}/>
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${currentPage === 3 ? 'translate-x-0' : 'translate-x-full'}`}>
                <Onboarding3 onNext={nextPage}/>
            </div>
        </div>
    )
}

export default OnboardingLogic;



/*
const OnboardingLogic = () => {

    let page = 1;

    const [ currentPage, setCurrentPage ] = useState(page);

    const router = useRouter();

    const nextPage = () => {
        setCurrentPage(page++);
        console.log(page);
    };

    return (
        <div className='relative h-screen w-screen overflow-hidden'>
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${currentPage === 1 ? 'translate-x-0' : '-translate-x-full'}`}>
                <Onboarding1 onNext={nextPage}/>
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${currentPage === 2 ? 'translate-x-0' : '-translate-x-full'}`}>
                <Onboarding2 onNext={nextPage}/>
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${currentPage === 3 ? 'translate-x-0' : '-translate-x-full'}`}>
                <Onboarding3/>
            </div>
        </div>
    )
}

export default OnboardingLogic;
*/