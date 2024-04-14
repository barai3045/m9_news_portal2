import Link from 'next/link';
import React from 'react';


const AppNavBar = (props) => {
    return (
        
        <div>
            <div className='bg-gray-950 text-white'>
                <div className="xl:container mx-auto flex flex-wrap items-center justify-between py-1 ">
                    <div className="flex">
                        <i className="bi bi-calendar-check"></i>
                        <h6> Today: <span> {new Date().getDay()}/{new Date().getMonth()+1}/{new Date().getFullYear()}</span></h6>
                    </div>
                    <span>
                        <a target="_blank" className="text-white" href={""}><i className="mx-2 bi bi-facebook"></i></a>
                        <a target="_blank" className="text-white" href={""}><i className="mx-2 bi bi-youtube"></i></a>
                        <a target="_blank" className="text-white" href={""}><i className="mx-2 bi bi bi-twitter"></i></a>
                        <a target="_blank" className="text-white" href={""}><i className="mx-2 bi bi-linkedin"></i></a>
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
                                <Link className="px-2 text-xl font-medium" href={`/category?id=${item['id']}`} >
                                    <div key={i} > 
                                    { item['name']} 
                                    </div>
                                </Link>
                            )
                        })
                    }
                    </div>
                    
                    <div className='flex gap-2'>
                    <div className="relative " >
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src={"/images/search.svg"} className='h-5 pe-1' alt='news-logo' />
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <Link href="/user/login" className="py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100">Login</Link>
                    </div>
                </nav>
            </div>
           
        </div>
            

    );
};

export default AppNavBar;

