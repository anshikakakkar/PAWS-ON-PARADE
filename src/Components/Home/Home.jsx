import React from 'react'
import {Link} from 'react-router-dom'
import animal1 from '../../assets/animal1.webp'
import animal3 from '../../assets/animal3.webp'
import pillu1 from '../../assets/pillu1.avif'
import billu1 from '../../assets/billu1.jpg'
import pillu2 from '../../assets/pillu2.jpg'
import pillu3 from '../../assets/pillu3.jpeg'



const Home = () => {
  return (
    <>
    <img src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          className='width-screen h-max' alt=" images " />

<div class="py-12 lg:py-16 px-4 mx-auto w-screen bg-sky-950 flex-col items-center ">
        <p id="About" ></p>
        <h2 class="mb-8 text-7xl tracking-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer  underline-offset-4 turn-yellow-hover antialiased font-extrabold text-center text-white " >
          About Us
        </h2>
        <p class="mb-8 lg:mb-16 font-light  text-center text-white  text_3 sm:text-3xl text_6">
          Our mission is to provide a platform that connects animal lovers with
          pets in need of a forever home, while also providing emergency medical
          care for stray animals in distress. We strive to make a difference in
          the lives of these innocent creatures by offering options to adopt , report
          stray animals in need of immediate assistance. Together, we can create
          a better world for all animals.
        </p>
        <div className='bg-sky-950 flex justify-center'>
        <button className='bg-sky-200 text-xl border border-sky-200 rounded-full p-3 text-black hover:translate-y-2 hover:border-4 hover:border-double '>BECOME VOLUNTEER</button>
        </div>
      </div>
    <div className='flex flex-col items-center pt-2 pb-2 bg-sky-200'>
      <div className='h-96 w-3/5 flex flex-col border border-transparent rounded-lg my-4'>
        <div className='flex flex-row'>
               <div className='w-96 h-20 bg-white font-semibold font-mono text-center text-2xl pr-0.5 tracking-wide' > CHANGING THE LIVES </div>
               <div className='h-20 w-3/4 bg-white  font-mono font-semibold text-2xl tracking-wide'> OF MOST OF STREET ANIMALS ANYWHERE</div>
               <div className='h-20 w-52 bg-white font-mono font-semibold text-2xl tracking-wide text-start'>IN WORLD</div>

        </div>

        <div className='flex flex-row'>
               <div className='w-96 h-28 bg-sky-950' ></div>
               <div className='h-28 w-3/4 bg-sky-950'>
               
                 <p className='font-semibold text-2xl text-white pt-5'> <span className='font-bold text-4xl text-white' >15</span> Years in  the city of Bhopal</p>
               </div>
               <div className='h-28 w-52 bg-sky-950'></div>

        </div>

        <div>
          <div className='bg-sky-950 h-48 w-full flex justify-around'>
          <div>
            <img src={animal3} className='h-48 w-60 pt-2' alt="" />
          </div>
            <div >
          <p className='font-semibold text-2xl text-white text-center'> <span className='font-bold text-4xl text-white' >21897</span> Rescues</p>
          <p className='font-semibold text-2xl text-white text-center'> <span className='font-bold text-4xl text-white' >23144</span> Surgeries</p>
          <p className='font-semibold text-2xl text-white text-center'> <span className='font-bold text-4xl text-white' >10987</span>Adoptions </p>
          <p className='font-semibold text-2xl text-white text-center'> <span className='font-bold text-4xl text-white' >3452</span> Complex rescues</p>
          </div>
          <div>
            <img src={animal1} className='h-48 w-60 pt-2' alt="" />
          </div>
          </div>
        </div>

      </div>
      </div>
          
   <div className='w-full bg-sky-950 text-white flex justify-center py-7 text-5xl font-semibold tracking-wide'>MEET OUR FRIENDS HERE</div>

    <div className='border-2 rounded-sm border-black w-full bg-sky-200 flex items-center flex-col  '>
      
       
     <div className='block rounded-lg bg-sky-950 border-4 border-sky-950  w-1/4 my-4 cursor-pointer ' >
        <Link to="/"  >  

        <img 
        className='rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer ' 
        src={pillu1}
        
         alt="" />

         </Link> 

         <div className='p-6 flex flex-col items-center'>
            <h5 className='mb-2 text-7xl font-bold leading-tight text-white '>
                BONGO
            </h5>
            
           <p className='mb-4 text-2xl text text-white '>
             <div className='p-3'>DOG</div>
             <div className='p-3'>MALE</div>
             <div className='p-3'>HUSKY</div>
             <div className='p-3'>8 YEARS</div>

           </p>
         
           <button type='button' className='inline-block  bg-sky-200 border-2 border-double border-black p-5 px-12 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer hover:border-4 hover:border-double
            text-s font-medium uppercase leading-normal text-black'>
            ADOPT ME
           </button>
           </div>
         </div>

       <div className='block rounded-lg bg-sky-950 border-4 border-sky-950  w-1/4 my-4 cursor-pointer ' >
        <Link to="/"  >  

        <img 
        className='rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer ' 
        src={pillu2}
        
         alt="" />

         </Link> 

         <div className='p-6 flex flex-col items-center'>
            <h5 className='mb-2 text-7xl font-bold leading-tight text-white '>
                GOOGLE
            </h5>
            
           <p className='mb-4 text-2xl text text-white '>
             <div className='p-3'>DOG</div>
             <div className='p-3'>MALE</div>
             <div className='p-3'>pug</div>
             <div className='p-3'>4 YEARS</div>

           </p>
         
           <button type='button' className='inline-block  bg-sky-200 border-2 border-double border-black p-5 px-12 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer hover:border-4 hover:border-double
            text-s font-medium uppercase leading-normal text-black'>
            ADOPT ME
           </button>
           </div>
         </div>  

         <div className='block rounded-lg bg-sky-950 border-4 border-sky-950 w-1/4 my-4 cursor-pointer ' >
        <Link to="/"  >  

        <img 
        className='rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer ' 
        src={billu1}
        
         alt="" />

         </Link> 

         <div className='p-6 flex flex-col items-center'>
            <h5 className='mb-2 text-7xl font-bold leading-tight text-white '>
                RUSSIA
            </h5>
            
           <p className='mb-4 text-2xl text text-white '>
             <div className='p-3'>CAT</div>
             <div className='p-3'>FEMALE</div>
             <div className='p-3'>RAGDOLL</div>
             <div className='p-3'>2.5 YEARS</div>

           </p>
         
           <button type='button' className='inline-block  bg-sky-200 border-2 border-double border-black p-5 px-12 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer hover:border-4 hover:border-double
            text-s font-medium uppercase leading-normal text-black'>
            ADOPT ME
           </button>
           </div>
         </div>  

         <div className='block rounded-lg bg-sky-950 border-4 border-sky-950 w-1/4 my-4 cursor-pointer ' >
        <Link to="/"  >  

        <img 
        className='rounded-t-large h-full  w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer ' 
        src={pillu3}
        
         alt="" />

         </Link> 

         <div className='p-6 flex flex-col items-center'>
            <h5 className='mb-2 text-7xl font-bold leading-tight text-white '>
               SWAGGY
            </h5>
            
           <p className='mb-4 text-2xl text text-white '>
             <div className='p-3'>DOG</div>
             <div className='p-3'>FEMALE</div>
             <div className='p-3'>POMERANIAN</div>
             <div className='p-3'>2 YEARS</div>

           </p>
         
           <button type='button' className='inline-block  bg-sky-200 border-2 border-double border-black p-5 px-12 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer hover:border-4 hover:border-double
            text-s font-medium uppercase leading-normal text-black'>
            ADOPT ME
           </button>
           </div>
         </div>  


        </div>
        
          
  </>
  
  
  )
}

export default Home