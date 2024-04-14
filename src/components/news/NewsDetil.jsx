import React from 'react';
import parse from 'html-react-parser';

const NewsDetil = (props) => {
    return (
        <div className='bg-white p-4'>
        
            <p className='text-2xl font-medium'> { props.data['detail']['title']} </p>
            <div className='bg-gray-400 h-1 my-2 w-full'></div>
            <img src= { props.data['detail']['img1']} alt='image'/>
            { parse(props.data['detail']['long_des'])}

        </div>
    );
};

export default NewsDetil;

