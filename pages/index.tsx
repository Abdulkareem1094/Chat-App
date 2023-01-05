import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import { NewsCard } from '../components/NewsCard';
import { RedButton } from '../components/RedButton';
import Image from 'next/image';
import img from '../public/f1grid.jpg';
import ad from '../public/ad1.jpg';


export default function Formula1() {
  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' font-titilliumWebRegular'>
        <NavBar/>
        <section className='px-5 '>
          <div className='bg-textgray my-5 mx-auto w-2/3 '>
            <Image src={ad} alt='ad' width={'100%'} height={'100%'} />
          </div>
          <div className='flex pb-10 box-border overflow-hidden'>
            <div className='flex-1 mr-2 pr-4 font-titilliumWebBold border-primary border-t-8 border-r-8 rounded-tr-3xl'>
              <h3 className='text-primary text-xxs mt-5'>FEATURE</h3>
              <div className='my-auto'>
                <h1 className='text-4xl pt-1 pb-4'>Lawrence Barretto’s 5 bold predictions for the 2023 season – how many of these will come true?</h1>
                <div className=' w-1/1 mx-auto ' >
                    <Image className=' object-contain' src={img} alt='9080' width={'100%'} height={'100%'}/>
                </div>
              </div>
            </div>
            <div className='flex-1 h-[31rem] '>
              <div className='flex h-full flex-row flex-wrap gap-5 overflow-scroll scrollbar-hide'>
                <NewsCard
                    className1='bg-white '
                    text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                    image={img}
                    />
                <NewsCard
                    className1='bg-white '
                    text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                    image={img}
                    />
                <NewsCard
                    className1='bg-white '
                    text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                    image={img}
                    />
                <NewsCard
                    className1='bg-white '
                    text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                    image={img}
                    />
                <NewsCard
                    className1='bg-white '
                    text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                    image={img}
                    />
                <NewsCard
                    className1='bg-white '
                    text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                    image={img}
                    />  
              </div>
              <RedButton
                className='bg-primary'
                value='VIEW LATEST NEWS >'
                />
            </div>
          </div>
          <div className='flex-1  h-140 my-10 mr-4 border-primary border-y-8 border-r-8 rounded-tr-3xl rounded-br-3xl'>
            <h2 className='text-3xl -mt-6 pr-4 font-bold bg-white w-fit'>Editor's Picks</h2>
            <div className='flex overflow-hidden pr-4 py-6'>

                <div className='flex-1  mr-2 '>
                  <div className='h-80 w-1/1 mx-auto ' >
                    <div className='w-1/1 h-[344px] w-[611px] bg-black'>
                    <Image className=' object-contain' src={img} alt='9080' width={'100%'} height={'100%'} />

                    </div>
                    </div>
                  </div>
                <div className='flex-1  ml-2 '>
                  <div className='flex h-full flex-row flex-wrap gap-5'>
                    <NewsCard
                        className1='bg-white '
                        text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                        image={img}
                        />
                    <NewsCard
                        className1='bg-white '
                        text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                        image={img}
                        />
                    <NewsCard
                        className1='bg-white '
                        text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                        />
                    <NewsCard
                        className1='bg-white '
                        text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                        />
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className='px-5 '>
          <h1>More News</h1>
          <div className='w-full border-t-8 border-black'>
            <div className='flex py-5 gap-5'>
            <NewsCard
                className1='border-none group-hover:bg-button2 rounded-br-xl rounded-bl-xl '
                className2='hover:bg-button2 rounded-br-xl rounded-bl-xl hover:text-white'
                text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                image={img}
                />
            <NewsCard
                className1='border-none group-hover:bg-button2 rounded-br-xl rounded-bl-xl '
                className2='hover:bg-button2 rounded-br-xl rounded-bl-xl hover:text-white'
                text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                image={img}
                />
            <NewsCard
                className1='border-none group-hover:bg-button2 rounded-br-xl rounded-bl-xl '
                className2='hover:bg-button2 rounded-br-xl rounded-bl-xl hover:text-white'
                text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                image={img}
                />
            <NewsCard
                className1='border-none group-hover:bg-button2 rounded-br-xl rounded-bl-xl '
                className2='hover:bg-button2 rounded-br-xl rounded-bl-xl hover:text-white'
                text=' WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                image={img}
                />

            </div>
          </div>
          <div className='bg-textgray my-5 mx-auto w-2/3 '>
            <Image src={ad} alt='ad' width={'100%'} height={'100%'} />
          </div>
        </section>
      </main>
    </>
  )
}
