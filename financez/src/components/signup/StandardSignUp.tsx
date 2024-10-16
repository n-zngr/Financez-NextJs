import React, { FC, useState, FormEvent } from 'react';
import { OnboardingProps } from '../OnboardingLogic';
import { usePasswordValidation } from './passwordConfirm';

const StandardSignUp: FC<OnboardingProps> = ({ onNext }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const { isValid, errorMessage } = usePasswordValidation(password, confirmPassword);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (isValid) {
            const payload = { 
                name, 
                email, 
                password
            };
            console.log('Standard SignUp Payload:', payload);
            onNext();
        };

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
                        type="password" 
                        id='password'
                        placeholder='f1n@nc€z'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                    </input>
                </div>
                <div className='flex flex-col pb-8 w-1/2'>
                    <label htmlFor="name" className='pb-2 text-sm font-light'>CONFIRM PASSWORD</label>
                    <input
                        type="password" 
                        id='confirmPassword'
                        placeholder='f1n@nc€z'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                    </input>
                </div>
            </div>
            {!isValid && errorMessage && (
                <p className='text-red-500 mb-4'>{errorMessage}</p>
            )}
            <button type='submit' className='px-4 py-2 border-2 border-gray-2 rounded-xl font-bold transition hover:border-white-1' disabled={!isValid}>CONTINUE</button>
        </form>
    )
}

export default StandardSignUp;