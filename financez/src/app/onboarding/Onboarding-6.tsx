import React, { FC, useState, FormEvent } from 'react';
import { OnboardingProps } from '@/components/OnboardingLogic';

const Onboarding6: FC<OnboardingProps> = ({ onNext }) => {
    // Sign Up
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            password
        };

        try {
            console.log(payload);
            onNext();
        } catch (e) {
            console.error('Error logging user', e);
        }
        /*
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
        } catch (e) {
            console.error('Error creating user: ', e);
        }*/
    };

    return (
        <div className='flex flex-col justify-end min-h-screen w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col p-16 w-1/2'>
                <div className='flex flex-col pb-8'>
                    <label htmlFor='name' className='pb-2 text-sm font-light'>FULL NAME</label>
                    <input
                        type='text' 
                        id='name'
                        placeholder='First, Last name'
                        required
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                    </input>
                </div>
                <div className='flex flex-col pb-8'>
                    <label htmlFor='email' className='pb-2 text-sm font-light'>EMAIL</label>
                    <input
                        type='email' 
                        id='email'
                        placeholder='financez@zngr-dynamics.ch'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                    </input>
                </div>
                <div className='flex flex-row pb-8 gap-8 max-w-full'>
                    <div className='flex flex-col pb-8 w-1/2'>
                        <label htmlFor="name" className='pb-2 text-sm font-light'>PASSWORD</label>
                        <input
                            type="text" 
                            id='name'
                            placeholder='f1n@nc€z'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                        </input>
                    </div>
                    <div className='flex flex-col pb-8 w-1/2'>
                        <label htmlFor="name" className='pb-2 text-sm font-light'>CONFIRM PASSWORD</label>
                        <input
                            type="text" 
                            id='name'
                            placeholder='f1n@nc€z'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                        </input>
                    </div>
                </div>
                
                <button type='submit' className='px-4 py-2 border-2 border-gray-2 rounded-xl font-bold transition hover:border-white-1'>SIGN UP</button>
            </form>
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