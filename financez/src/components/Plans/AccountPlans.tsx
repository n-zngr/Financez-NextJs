import React, { FC, useState } from 'react';
import { OnboardingProps } from '../OnboardingLogic';

type PlanType = 'Standard' | 'Prestige' | 'Nothing';

const AccountPlans: FC<OnboardingProps> = ({ onNext, setSelectedPlan }) => {
    const [selectedPlan, setLocalSelectedPlan] = useState<PlanType>('Nothing');

    const handleSelectPlan = (plan: PlanType) => {
        setLocalSelectedPlan(plan);
    };
    
    const handleContinue = () => {
        if (selectedPlan && selectedPlan !== 'Nothing') {
            console.log(`Selected Plan: ${selectedPlan}`);
            if (setSelectedPlan) {
                setSelectedPlan(selectedPlan);
            }
            onNext();
        }
    };
    
    const planTitle = {
        Standard: "Standard",
        Prestige: "Prestige",
        Nothing: "Standard"
    };

    const planDetails = {
        Standard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia, labore magnam inventore beatae quasi assumenda at facilis fuga dicta dignissimos adipisci quod! Enim totam, ex aliquam ad accusamus corporis facilis consectetur ut explicabo porro obcaecati est voluptatibus excepturi error labore at, deserunt accusantium exercitationem? Doloribus doloremque tempore soluta quis.", 
        Prestige: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ex ipsa dolore repellendus obcaecati perferendis tempore consequatur harum itaque quisquam omnis doloremque delectus quod molestiae fugit voluptates est temporibus provident facilis alias quidem qui. Quia enim, ut, quisquam fugiat modi optio nam in esse voluptatem hic, voluptatibus officiis quibusdam? Illum.",
        Nothing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia, labore magnam inventore beatae quasi assumenda at facilis fuga dicta dignissimos adipisci quod! Enim totam, ex aliquam ad accusamus corporis facilis consectetur ut explicabo porro obcaecati est voluptatibus excepturi error labore at, deserunt accusantium exercitationem? Doloribus doloremque tempore soluta quis.",
    };

    return (
        <div className='w-full h-full flex flex-row gap-4'>
            <div className='w-full h-full flex flex-row gap-16 p-16'>
                <div className='flex flex-col gap-4 w-1/2'>
                    {/*Standard Plan*/}
                    <div className={`flex flex-col border rounded-xl border-white-5 p-4 transition-all duration-400 ${selectedPlan === 'Standard' ? 'bg-white-5 text-black-1' : 'text-white-5'}`} onClick={() => handleSelectPlan('Standard')}>
                        <div className='flex flex-row justify-between'>
                            <h3 className='font-ambroise font-extrabold text-3xl pb-4'>Standard</h3>
                            <p className='font-medium'>FREE</p>
                        </div>
                        <div className='flex'>
                            <p>Experience Financez.</p>
                        </div>
                    </div>
                    {/*Prestige Plan*/}
                    <div className={`flex flex-col border rounded-xl border-gold-3 p-4 transition-all duration-400 ${selectedPlan === 'Prestige' ? 'bg-gold-3 text-black-1' : 'text-gold-3'}`} onClick={() => handleSelectPlan('Prestige')}>
                        <div className='flex flex-row justify-between'>
                            <h3 className='font-ambroise font-extrabold text-3xl pb-4'>Prestige</h3>
                            <p className='font-medium'>CHF 3.95</p>
                        </div>
                        <div className='flex'>
                            <p>Additional features, support the development.</p>
                        </div>
                    </div>
                    {/*Continue Button*/}
                    <button className={`flex border rounded-xl p-3 mt-4 transition-all duration-200 border-white-5 text-white-5 disabled:border-gray-5 disabled:text-gray-5`} onClick={handleContinue} disabled={selectedPlan === 'Nothing'}>
                        <p className='text-left'>Continue</p>
                    </button>
                </div>
                <div className='flex flex-col w-1/2 ml-auto'>
                    <h3 className={`font-ambroise font-extrabold text-5xl pb-8 transition-all duration-500 ${selectedPlan === 'Prestige' ? 'text-gold-3' : 'text-white-5'}`}>{selectedPlan ? planTitle[selectedPlan] : planTitle.Nothing}</h3>
                    <p className='font-light'>{planDetails[selectedPlan]}</p>
                </div>
            </div>
        </div>
    );
};

export default AccountPlans;