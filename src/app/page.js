
import PlainLayout from "@/components/master/PlainLayout";
import Hero from "@/components/news/Hero";
import Popular from "@/components/news/Popular";
import Subscribe from "@/components/news/Subscribe";
import NewsCard from './../components/news/NewsCard';

async function getData(){
    let featured = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`, { cache: 'no-store' })).json())['data'];
    let slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`, { cache: 'no-store' })).json())['data'];
    let popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`,{ cache: 'no-store' })).json())['data']
    let latest = (await (await fetch(`${process.env.HOST}/api/news/latest`,{ cache: 'no-store' })).json())['data']
    return { slider: slider, featured: featured, popular:popular, latest:latest }
}




const page = async () => {
  const data = await getData()
  
  return (
    <PlainLayout>

        <Hero data={data} />
        

        <div  className='xl:container mx-auto'>
           
            <p>LATEST</p>
            <div className='bg-gray-400 h-1 w-full'></div>
                <div className='flex flex-row gap-4'>
                    <div className="basis-3/4 grid grid-cols-3 gap-2 py-3">
                      <NewsCard news_list={data['latest']} />
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


