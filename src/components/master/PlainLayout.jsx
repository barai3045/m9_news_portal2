import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';


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
            <Footer data={data}/>
        </>
    );
};

export default PlainLayout;