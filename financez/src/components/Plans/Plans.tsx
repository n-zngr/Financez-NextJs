import React, { FC, useState } from 'react';
import { OnboardingProps } from '../OnboardingLogic';

type PlanType = 'Standard' | 'Prestige' | 'Nothing';

const Plans: FC<OnboardingProps> = ({ onNext }) => {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('Nothing');

    
    const handleSelectPlan = (plan: PlanType) => {
        setSelectedPlan(plan);
    };
    
    const handleContinue = () => {
        if (selectedPlan) {
            console.log(`Selected Plan: ${selectedPlan}`);
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
                    <div className={`flex flex-col border rounded-xl p-4 border-white-5 text-white-5 ${selectedPlan === 'Standard' ? 'border-2' : 'border'}`} onClick={() => handleSelectPlan('Standard')}>
                        <div className='flex flex-row justify-between border-white-5 text-white-5'>
                            <h3 className='font-ambroise font-extrabold text-3xl pb-4'>Standard</h3>
                            <p className='font-medium'>FREE</p>
                        </div>
                        <div className='flex'>
                            <p className=''>Experience Financez.</p>
                        </div>
                    </div>
                    {/*Prestige Plan*/}
                    <div className={`flex flex-col border-gold-3 rounded-xl p-4 text-gold-3 ${selectedPlan === 'Prestige' ? 'border-2' : 'border'}`} onClick={() => handleSelectPlan('Prestige')}>
                        <div className='flex flex-row justify-between'>
                            <h3 className='font-ambroise font-extrabold text-3xl pb-4'>Prestige</h3>
                            <p className='font-medium'>CHF 3.95</p>
                        </div>
                        <div className='flex'>
                            <p className=''>Additional features, support the development.</p>
                        </div>
                    </div>
                    {/*Continue Button*/}
                    <button className={`flex border rounded-xl p-3 transition-all duration-200 border-white-1 text-white-1 disabled:border-gray-5 disabled:text-gray-5`} onClick={handleContinue} disabled={selectedPlan === 'Nothing'}>
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

export default Plans;