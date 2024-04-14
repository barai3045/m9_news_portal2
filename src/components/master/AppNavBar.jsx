"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";


const AppNavBar = (props) => {

    let [keyword, setKeyword] = useState("") 


    return (
        
        <div>
            <div className='bg-gray-950 text-white'>
                <div className="xl:container mx-auto flex flex-wrap items-center justify-between py-1 ">
                    <div className="flex">
                        <i className="bi bi-calendar-check"></i>
                        <h6> Today: <span> {new Date().getDay()}/{new Date().getMonth()+1}/{new Date().getFullYear()}</span></h6>
                    </div>
                    <span>
                        <a target="_blank" className="text-white" href={props.data['socials'][0]['facebook']}><i className="mx-2 bi bi-facebook"></i></a>
                        <a target="_blank" className="text-white" href={props.data['socials'][0]['youtube']}><i className="mx-2 bi bi-youtube"></i></a>
                        <a target="_blank" className="text-white" href={props.data['socials'][0]['twitter']}><i className="mx-2 bi bi bi-twitter"></i></a>
                        <a target="_blank" className="text-white" href={props.data['socials'][0]['linkedin']}><i className="mx-2 bi bi-linkedin"></i></a>
                    </span>
                </div>
            </div>
            <div className='bg-white'>
                <nav className='container flex flex-wrap items-center  justify-between mx-auto p-4'> 
                <div className='flex'>
                <a href='/'><img src={"/images/logo.svg"} className='h-7 pe-1' alt='news-logo' /></a>
                    
                    {
                        props.data['category'].map((item, i)=>{
                            return (
                                <Link key={i}  href={`/category?id=${item['id']}`} >
                                    <div className="px-2 text-xl font-medium" key={i} > 
                                    { item['name']} 
                                    </div>
                                </Link>
                            )
                        })
                    }
                    </div>
                    
                    <div className='flex items-center gap-2'>
                    <input type="text" onChange={(e)=>{setKeyword(e.target.value)}}  className="w-56 h-10 px-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."/>
                    <Link href={ keyword===""?("/"):(`/search?keyword=${keyword}`) }>
                    <div className='p-2 rounded-md text-2xl font-bold bg-red-500 hover:bg-blue-600 cursor-pointer text-white'> <CiSearch/> </div> 
                    </Link>
                    <Link href="/user/login" className="py-2 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100">Login</Link>
                    </div>
                </nav>
            </div>
           
        </div>
            

    );
};

export default AppNavBar;

