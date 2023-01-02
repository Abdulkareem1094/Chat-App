import Head from 'next/head';
import fia from '../public/fia_logo.png';
import f1Tv from '../public/f1tv_logo.svg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <nav className='flex justify-between px-3 py-2 text-justify text-xs '>
          <div className='flex  '>
            <img src={fia} alt="FIA" className='my-auto mx-5 px-5 text-textgray border-textgray border-r-2' />
            <div className='my-auto text-textgray'>
              <a className='mx-3 ' href="#">F2</a>
              <a className='mx-3 ' href="#">F3</a>
              <a className='mx-3 ' href="#">F1</a>
            </div>
          </div>
          <div className='flex '>
              <div className='flex my-auto '>
                <a className='mx-3  py-1 border-t-2 border-b-2 border-transparent hover:text-red-600 hover:border-b-red-600 ' href='#'>AUTHENTICS</a>
                <a className='mx-3  py-1 border-t-2 border-b-2 border-transparent hover:text-red-600 hover:border-b-red-600 ' href='#'>STORE</a>
                <a className='mx-3  py-1 border-t-2 border-b-2 border-transparent hover:text-red-600 hover:border-b-red-600 ' href='#'>TICKETS</a>
                <a className='mx-3  py-1 border-t-2 border-b-2 border-transparent hover:text-red-600 hover:border-b-red-600 ' href='#'>HOSPITALITY</a>
                <a className='mx-3  py-1 border-t-2 border-b-2 border-transparent hover:text-red-600 hover:border-b-red-600 ' href='#'>EXPERIENCES</a>
              </div>
              <img src={f1Tv} alt="F1 TV" className='my-auto mx-3 px-3 tect-textgray border-textgray border-r-2 border-l-2' />
              <button className='m-1 p-3 px-4 font-bold text-white bg-button2 rounded-lg border-none' >SIGN IN</button>
              <button className='m-1 p-3 px-4 font-bold text-white bg-primary rounded-lg border-none'>SUBSCRIBE</button>
          </div>
        </nav>
      </main>
    </>
  )
}
