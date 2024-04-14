import React from 'react';
import parse from 'html-react-parser'
import PlainLayout from '@/components/master/PlainLayout';

async function getData() {
    let data = (await(await fetch(`${process.env.HOST}/api/policy?type=terms`, { cache: 'no-store' })).json())['data']
    return data;
}


const page = async() => {
    let data = await getData();
    return (
        <PlainLayout>
            <div className='xl:container mx-auto py-4'>
            <div className='bg-white p-4'>
            {parse(data[0]['long_des'])}
            </div>

            </div>
             
        </PlainLayout>
    );
};

export default page;