import { useState, FormEvent } from 'react';

export default function SignUp() {
    const email = '';
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-white-100 text-8xl'>GET STARTED</h1>
                <div className='pl-16 pt-16'>
                    <div className='flex flex-col w-fit'>
                        <form className='flex flex-col'>
                            <div className='flex flex-col pb-8'>
                                <label className='pb-2 text-sm font-bold' htmlFor=''>FULL NAME</label>
                                <input type='name' id='name' placeholder='First, Last' required className='placeholder-gray-2 border-2 border-gray-2 rounded-xl px-4 py-2 transition focus:border-white-1 focus:text-white-1'></input>
                            </div>
                            <div className='flex flex-col pb-8'>
                                <label className='pb-2 text-sm font-bold' htmlFor=''>EMAIL</label>
                                <input type='email' id='email' placeholder='financez@zngr-dynamics.ch' required className='px-4 py-2 border-2 border-gray-2 rounded-xl placeholder-gray-2 transition focus:border-white-1 focus:text-white-1'></input>
                            </div>
                            <div className='flex flex-col pb-8'>
                                <label className='pb-2 text-sm font-bold' htmlFor=''>PASSWORD</label>
                                <input type='password' id='password' placeholder='Password' required className='px-4 py-2 border-2 border-gray-2 rounded-xl placeholder-gray-2 transition focus:border-white-1 focus:text-white-1'></input>
                            </div>
                            <div className='flex flex-row gap-x-2'>
                                <input type="checkbox" id='tos' className='w-5 h-5 text-green-600 bg-none border-2 border-gray-2 focus:border-white-1 rounded appearance-none checked:bg-green-500 checked:border-green-600 checked:focus:border-green-600' required/>
                                <label className='text-sm text-gray-2' htmlFor="">By signing up, you agree to our <a>Terms of Service</a></label>
                            </div>
                            <button type='submit' className='px-4 py-2 mt-8 border-2 border-gray-2 rounded-xl font-bold transition hover:border-white-1'>SIGN UP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}