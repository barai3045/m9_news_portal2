import Link from 'next/link';
import React from 'react';


const NewsCard = (props) => {
    return (
        <>
        {props.news_list.map((item, i)=>{
            return (
                <div key={i} className='bg-white shadow-sm'> 
                    <img src={item['img3']} alt='image' />
                    <div className="block p-5">
                        <h6 className="text-xl font-medium">{item['title']}</h6>
                        <p>{ item['short_des']}</p>
                        <p className="my-2 font-medium p-0"><i className="bi bi-clock"></i> 3 Days Ago</p>
                        <Link href={`/detail?id=${item['id']}`} className="border rounded-md border-red-600 py-1 px-3 hover:bg-red-500 hover:text-white">Read More</Link>
                    </div>
                </div>
            )
        })
        }
        </>
    );
};

export default NewsCard;

/*
 <div className="col-12 py-1 px-0" key={i}>
                                        <Link href={`/details?id=${item['id']}`} className=" card bg-white shadow-sm">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <img className=" rounded-start-1 w-100 h-100" src={item['img4']} alt="News Image" />
                                                </div>
                                                <div className="col-md-7 p-3">
                                                    <h6>{item['title']}</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
*/