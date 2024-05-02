import React from 'react';
// import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

const SignupForm = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-4">Sign Up</h2>
                <form className="space-y-4">
                    <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                        {/* <MailIcon className="h-6 w-6 text-white mr-3" /> */}
                        <input type="email" id="email" placeholder="Email" className="w-full bg-transparent text-white focus:outline-none" />
                    </div>
                    <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                        {/* <LockClosedIcon className="h-6 w-6 text-white mr-3" /> */}
                        <input type="password" id="password" placeholder="Password" className="w-full bg-transparent text-white focus:outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">Sign Up</button>
                </form>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-white">Or sign up with</span>
                    <div className="flex space-x-2">
                        <button className="bg-blue-800 text-white px-3 py-2 rounded hover:bg-blue-900">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 6v.01M12 6v6m0 6v.01"></path>
                            </svg>
                        </button>
                        <button className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 15.44c-.59.34-1.22.56-1.86.66-.57.08-1.11-.33-1.22-.89l-.08-.3c-.09-.37.05-.76.32-1.05.57-.69.88-1.6.88-2.56s-.31-1.87-.88-2.56c-.27-.29-.41-.68-.32-1.05.1-.57.65-.97 1.22-.89.64.1 1.27.32 1.86.66.34.19.75.15 1.05-.08.28-.2.43-.53.41-.89-.04-.54-.27-1.03-.67-1.41-.49-.37-1.12-.59-1.79-.59s-1.3.22-1.79.59c-.4.38-.63.87-.67 1.41-.03.36.13.7.41.89.3.23.71.27 1.05.08.59-.34 1.22-.56 1.86-.66.57-.08 1.11.33 1.22.89.1.57-.33 1.11-.89 1.22zm0 0"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
