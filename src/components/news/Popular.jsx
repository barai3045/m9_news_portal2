import React from 'react';
import Link from 'next/link';


const Popular = (props) => {
    return (
        <div>
        {
            props.data['popular'].map((item,i)=>{
                return (
                    <Link href={`/detail?id=${item['id']}`} >
                    <div className='rounded-md flex flex-row bg-white  mt-3'  key={i}>
                        <div className='basis-5/12 rounded-md'>
                            <img className=" rounded-l-md w-100 h-100" src={item['img4']} alt="News Image" />
                        </div>
                        <div className='basis-7/12'>
                            <p className='p-3 text-xl'>{item['title']}</p>
                        </div>

                    </div>
                    </Link>
                    
                )
            })
        }
        </div>
    );
};

export default Popular;