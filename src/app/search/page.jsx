import PlainLayout from '@/components/master/PlainLayout';
import NewsCard from '@/components/news/NewsCard';
import Popular from '@/components/news/Popular';
import Subscribe from '@/components/news/Subscribe';
import React from 'react';

async function getData(keyword) {
    let news = (await(await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)).json())['data']
    let popular = (await(await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']

    return {news:news, popular:popular}
}



const page = async (props) => {

    let keyword = props.searchParams['keyword'];
    const data = await getData(keyword);

    return (
        <PlainLayout>
            <div  className='xl:container mx-auto'>
           
                <div className='flex flex-row gap-4'>
                    <div className="basis-3/4 grid grid-cols-3 gap-2 py-3">
                      <NewsCard news_list={data['news']} />
                      
                      
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