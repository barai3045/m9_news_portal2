"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';


const Hero = (props) => {

    const length = props.data['slider'].length
     let [current, setCurrent] = useState(0);

     let previousSlide = ()=> {
        if(current ===0) setCurrent(length-1);
        else setCurrent(current-1);
     }

     let nextSlide = ()=> {
        if(current === length-1) setCurrent(0);
        else setCurrent(current+1);
     }

    return (

                   
    <div className="my-8 xl:container mx-auto ">
    <div className='flex flex-row gap-4'>
    <div className="basis-2/3">
      
    <div className='overflow-hidden relative'>
            <div className='flex transition ease-out duration-40' 
            style={{transform: `translateX(-${current*100}%)`}}>
                {  props.data['slider'].map((item, i)=>{
                    return (
                
                        <img key={i} src={item['img1']} alt='image' className="w-full"  /> 
                    
                    )
                })
                }

               
                
            </div>
            <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
                <button onClick={previousSlide}>
                    <FaRegArrowAltCircleLeft/>
                </button>
                <button onClick={nextSlide}>
                    <FaRegArrowAltCircleRight/>
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center gap-1 w-full'>
                {props.data['slider'].map(( b,k )=>{
                    return (
                        <div onClick={()=>{setCurrent(k)}} key={k} className={`rounded w-10 h-2 cursor-pointer ${ k===current? "bg-white":"bg-gray-700" } ` }></div>
                    )
                })}
            </div>

           
                {  props.data['slider'].map((item, i)=>{
                    if (i === current )
                    return (
                        <Link href={`/detail?id=${item['id']}`} id='Hero' className="card h-100">
                            <div className="absolute px-10 top-4 text-white">
                                <p className='text-2xl'>{item['title']}</p>
                                <p className='' >{item['short_des']}</p>

                            </div>
                        </Link>
                    )
                })
                }
            

           

            </div>
        </div>



        <div className="basis-1/3 relative">
            <Link href={`/details?id=${props.data['featured'][0]['id']}`} id='Hero' className="card h-100">
                <img alt="" className=" w-100 rounded-2" src={props.data['featured'][0]['img4']}/>
                <div className='absolute top-16 text-white  px-3 '>
                    <h4 className='text-2xl'>{props.data['featured'][0]['title']}</h4>
                    <p >{props.data['featured'][0]['short_des']}</p>
                </div>
            </Link>

        
        </div>
    </div>
</div>
        
    );
};

export default Hero;

