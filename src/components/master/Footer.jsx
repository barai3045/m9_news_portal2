import React from 'react';
import Link from 'next/link';
import Subscribe from '../news/Subscribe';

const Footer = (props) => {
    return (
        <div>
            <div className='bg-gray-950 text-white'>
                <div className="lg:container mx-auto grid md:grid-cols-4 md:gap-4 md:py-16 grid-cols-1">
                    <div className="">
                        <p className='text-xl font-medium'>ABOUT</p>
                        <p className="text-white">{props.data['socials'][0]['about']} </p>
                        <div className="flex gap-5">
                                <a target="_blank" href={props.data['socials'][0]['facebook']}>
                                        <i className="text-2xl text-white bi bi-facebook"></i>
                                </a>
                                <a target="_blank" href={props.data['socials'][0]['youtube']}>
                                        <i className="text-2xl text-white  bi bi-youtube"></i>
                                </a>
                                <a target="_blank" href={props.data['socials'][0]['twitter']}>
                                        <i className="text-2xl text-white  bi bi-twitter"></i>
                                </a>
                                <a target="_blank" href={props.data['socials'][0]['linkedin']}>
                                        <i className="text-2xl text-white bi bi-linkedin"></i>
                                </a>
                            </div>
                    </div>
                    <div className="">
                        <p className='text-xl font-medium'>RECOMMENDED</p>
                          {       
                                props.data['category'].map((item, i)=>{
                                    if(i<4){ 
                                       return <div> <Link key={i} className="font-medium text-white my-1" href={`/category?id=${item['id']}`} >{ item['name']}</Link> <br/> </div>
                                    }
                                })
                                
                            } 
                        
                    </div>
                    <div className="">
                        <p className="text-xl font-medium" >LEGAL</p>
                        <ul className="list-unstyled text-white">
                            <li className="my-1 font-medium">
                                <Link href="/privacy" className="nav-link">Privacy Policy</Link>
                            </li>
                            <li className="my-1">
                                <Link href="/terms" className="nav-link">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                       
                        <Subscribe/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;