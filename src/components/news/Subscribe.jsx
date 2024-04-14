"use client"
import React, {useState} from 'react';
import SubmitButton from '../master/SubmitButton';
import { ErrorToast, IsEmail, SuccessToast } from '@/utility/FormHelper';

const Subscribe = () => {

    let [data, setData] = useState({email:""})
    let [submit, setSubmit] = useState(false)

    const inputOnChange = (name, value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }

    const formSubmit = async() => {
        if(IsEmail(data.email)){
            ErrorToast("Valid Email Address Required!")
        } else {
            setSubmit(true)
            const options = {method:"POST", body:JSON.stringify(data)}
            let res = await ( await fetch("/api/subscribe", options)).json();
            setSubmit(false)
            setData({email:""})

            if(res['status'] === 'success') {
                SuccessToast("Request Success")
            } else {
                ErrorToast("Email Already Used !")
            }
        }
    }

    return (
        <div className="justify-center bg-white card p-5 shadow-sm">
        <span className="py-2 text-5xl flex justify-center text-gray-900"> <i className="bi bi-envelope"></i></span>
        <h6 className="text-xl py-2 text-center text-gray-950">News Letter</h6>
        <input value={data.email} onChange={(e)=>{inputOnChange('email', e.target.value)}} type="text" placeholder="Email Address" className="border-gray-200 w-full p-2 text-xl text-black"/>
        <SubmitButton onClick={formSubmit} className="bg-red-600 p-2 mt-2 w-full rounded-xl" submit={submit} text="Submit"/>
        
    </div>
    );
};

export default Subscribe;
