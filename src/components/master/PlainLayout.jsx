import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';
import {Toaster} from 'react-hot-toast'


async function getData(){
    let socials = (await (await fetch(`${process.env.HOST}/api/social`,{ cache: 'no-store' })).json())['data']
    let category = (await(await fetch(`${process.env.HOST}/api/category`,{ cache: 'no-store' })).json())['data']

    return {socials:socials, category: category}
}

const PlainLayout = async (props) => {
    const data = await getData();
 
    return (
        <>
            <AppNavBar data={data}/>
            {props.children}
            <Toaster position='bottom-center' />
            <Footer data={data}/>
        </>
    );
};

export default PlainLayout;