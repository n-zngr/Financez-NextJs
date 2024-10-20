'use client';
import { useState, FormEvent } from 'react';

export default function Login(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            email,
            password
        };
        console.log('Payload: ', payload);
    };

    return (
        <div className='relative h-screen w-screen overflow-hidden'>
            {/*Nav*/}
            <nav className={`fixed top-0 left-0 w-full bg-transparent py-4 px-6 flex items-center justify-between transition-transform duration-800 z-50`}>
                <div className='flex gap-4'>
                    <div className='w-[96px] h-[2px] rounded bg-white-5 transition-all duration-400 '></div>
                </div>
                <div>
                    <a className='text-white-5 font-light' href='/'>SIGNUP</a>
                </div>
            </nav>
            <form onSubmit={handleLogin} className='flex flex-col p-16 w-1/2'>
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
                <div className='flex flex-col pb-8'>
                    <label htmlFor='password' className='pb-2 text-sm font-light'>PASSWORD</label>
                    <input
                        type='password' 
                        id='password'
                        placeholder='f1n@nc€z'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-2 rounded-xl px-4 py-2 transition placeholder-gray-2 font-light focus:border-white-1 focus:text-white-1'>
                    </input>
                </div>
                <button type='submit' className='px-4 py-2 border-2 border-gray-2 rounded-xl font-bold transition hover:border-white-1'>CONTINUE</button>
            </form>
        </div>
    );
}
