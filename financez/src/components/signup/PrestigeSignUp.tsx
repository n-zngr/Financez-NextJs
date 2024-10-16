import React, { FC, useState, FormEvent } from 'react';
import { OnboardingProps } from '../OnboardingLogic';

const PrestigeSignUp: FC<OnboardingProps> = ({ onNext }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ page, setPage ] = useState(1);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (page === 1) {
            const payload = { name, email, password };
            console.log('Prestige SignUp User Details Payload:', payload);
            setPage(2);
        } else {
            const paymentPayload = ('Payment Data');
            console.log('Prestige SignUp Payment Payload:', paymentPayload);
            onNext();
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

    return(
        <form onSubmit={handleSubmit} className='flex flex-col p-16 w-1/2'>
            {page === 1 && (
                <>
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
                            <label htmlFor="password" className='pb-2 text-sm font-light'>PASSWORD</label>
                            <input
                                type='password' 
                                id='password'
                                placeholder='f1n@nc€z'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                            </input>
                        </div>
                        <div className='flex flex-col pb-8 w-1/2'>
                            <label htmlFor="password" className='pb-2 text-sm font-light'>CONFIRM PASSWORD</label>
                            <input
                                type='password' 
                                id='confirmPassword'
                                placeholder='f1n@nc€z'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                            </input>
                        </div>
                    </div>
                    <button type='submit' className='px-4 py-2 border-2 border-gray-2 rounded-xl font-bold transition hover:border-white-1'>
                        Next: Payment Details
                    </button>
                </>
            )}
            {page === 2 && (
                <>
                    <div className='flex flex-col pb-8'>
                        <label htmlFor='cardNumber' className='pb-2 text-sm font-light'>CARD NUMBER</label>
                        <input
                            type='text'
                            id='cardNumber'
                            placeholder='1234 5678 9101 1121'
                            required
                            className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'
                        />
                    </div>
                    <div className='flex flex-row gap-8'>
                        <div className='flex flex-col pb-8 w-1/2'>
                            <label htmlFor='expiryDate' className='pb-2 text-sm font-light'>EXPIRY DATE</label>
                            <input
                                type='text'
                                id='expiryDate'
                                placeholder='MM/YY'
                                required
                                className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'
                            />
                        </div>
                        <div className='flex flex-col pb-8 w-1/2'>
                            <label htmlFor='cvv' className='pb-2 text-sm font-light'>CVV</label>
                            <input
                                type='number'
                                id='cvv'
                                placeholder='123'
                                required
                                className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'
                            />
                        </div>
                    </div>
                    <button type='submit' className='px-4 py-2 border-2 border-gray-2 rounded-xl font-bold transition hover:border-white-1'>
                        Complete Sign Up
                    </button>
                </>
            )}
        </form>
    );
};

export default PrestigeSignUp;