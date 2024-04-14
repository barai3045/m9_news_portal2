import PlainLayout from '@/components/master/PlainLayout';
import NewsDetil from '@/components/news/NewsDetil';
import Popular from "@/components/news/Popular";
import Subscribe from "@/components/news/Subscribe";
import React from 'react';

async function getData(id) {
    let detail = (await(await fetch(`${process.env.HOST}/api/news/detail?id=${id}`)).json())['data']
    let popular = (await(await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    //let comments = (await (await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`,{ cache: 'no-store' })).json())['data']

    return {detail:detail, popular:popular}
}


const page = async (props) => {
    let id = props.searchParams['id']
    const data = await getData(id)

    return (
        <PlainLayout>
            <div  className='xl:container mx-auto'>
           
           
           
               <div className='flex flex-row gap-4'>
                   <div className="basis-3/4 gap-2 py-3">
                   
                     <NewsDetil data={data}/>
                   </div>
                   <div className="basis-1/4 py-3 gap-3">
                       <div className="bg-black rounded text-white p-2">
                           <span >POPULAR</span>
                       </div>
                        
                        <Popular data={data}/>
                        
                           
            

                       <div className="bg-black rounded text-white p-2 mt-3">
                           <span >SUBSCRIBE</span>
                       </div>
                       <Subscribe/>
                       
                   </div>
               </div>
       </div>
        </PlainLayout>
    );
};

export default page;