import React from 'react'
import  Tweet from '../Components/twitter'
import images from '../Components/Home/Home'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Twitter = () => {
  return (
    <div className=''>
    <div className='text-center md:mt-20 lg:mt-20 mt-12 '>
   <Tweet/>
   <img src={images} className='mx-auto mt-8 w-[50px]'></img>
    </div>
    <div className='flex justify-center items-center gap-8 mt-8'>
<div className='flex'>
  <img src='./circled.svg'></img>
  <Link to="/how" className="text-black-500">How to download files</Link> 
</div>
<div>
  <p>Watch tutorial videos</p>
</div>
    </div>
    
    <div className='mx-auto'>
    <h1 className='text-2xl md:text-3xl md:text-center mt-8 md:mt-0 md:ml-auto ml-20 font-bold'>Resources</h1>
    <div className=''>
    <div className='text-2xl md:text-lg md:text-center mt-4 md:mt-0 md:ml-auto ml-12 '>
  <div className='md:mb-2'>
    <a href='https://facebook.com' className='inline-block md:mx-8 mx-8'>facebook.com</a>
    <a href='https://instagram.com' className='inline-block md:mx-8 '>Instagram.com</a>
  </div>
  <div className='md:mb-2 md:ml-16 ml-8'>
    <a href='https://twitter.com' className='inline-block'>Twitter.com</a>
    <a href='https://tiktok.com' className='inline-block md:mx-20 mx-14'>Tiktok.com</a>
  </div>
</div>

    </div>
    </div>
    <div className='mb-40'>
    <h1 className='text-2xl md:text-3xl md:text-center mt-4 md:mt-0 md:ml-auto ml-20 font-bold'>Trending</h1>
    <div className='flex mt-8 md:12'>
    <div class='relative ml-20 lg:ml-[450px] md:ml-[180px] '>
  <img src='./one.svg' alt='First Image' class='w-[110px] h-auto md:w-[200px]'></img>
  <button class='absolute top-3 left-10 md:top-5 md:top-10 md:left-20'>
    <img src='./youtube.svg' alt='YouTube' class='w-6 h-6'></img>
  </button>
</div>
<div class='relative ml-4 '>
  <img src='./one.svg' alt='' class='w-[110px] h-auto md:w-[200px]'></img>
  <button class='absolute top-3 left-10 md:top-10 md:left-20'>
    <img src='./youtube.svg' alt='YouTube' class='w-6 h-6'></img>
  </button>
</div>
<div class='relative ml-4 '>
  <img src='./one.svg' alt='' class='w-[105px] h-auto md:w-[200px]'></img>
  <button class='absolute top-3 left-10 md:top-10 md:left-20'>
    <img src='./youtube.svg' alt='YouTube' class='w-6 h-6'></img>
  </button>
</div>

</div>


    </div>
<Footer/>
  
    </div>
  )
}

export default Twitter
