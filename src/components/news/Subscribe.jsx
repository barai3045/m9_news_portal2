import React from 'react';
import SubmitButton from '../master/SubmitButton';

const Subscribe = () => {
    return (
        <div className="justify-center bg-white card p-5 shadow-sm">
        <span className="py-2 text-5xl flex justify-center text-gray-900"> <i className="bi bi-envelope"></i></span>
        <h6 className="text-xl py-2 text-center text-gray-950">News Letter</h6>
        <input   type="text" placeholder="Email Address" className="border-gray-200 w-full p-2 text-xl text-black"/>
        <SubmitButton onClick={""} className="bg-red-600 p-2 mt-2 w-full rounded-xl" submit="" text="Submit"/>
        
    </div>
    );
};

export default Subscribe;
