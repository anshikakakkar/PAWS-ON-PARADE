import React from 'react'
import logo1 from '../../assets/logo1.png'

function Waystohelp() {
  return (
   <>
   <div className='flex flex-col items-center'>
   <div className='bg-sky-950 text-6xl p-6 m-4 text-white flex justify-center tracking-widest font-bold border border-sky-950 w-5/12 rounded-full my-6 '>WAYS TO HELP</div>
   </div>

   <div className='bg-sky-200 h-24 w-3/5 border-4 rounded-r-full border-sky-950 ml-20 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
    <div className='text-black font-semibold text-4xl px-4  py-5'>DONATE</div>
    <div><img src={logo1} alt="" /> </div>
 </div>



<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-l-full border-sky-950 ml-96 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
  <div><img src={logo1} alt="" /> </div>
  <div className='text-black font-semibold text-4xl px-4  py-5'>GET SURGERY DONE</div>
</div>

<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-r-full border-sky-950 ml-20 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
    <div className='text-black font-semibold text-4xl px-4  py-5'>ADOPT/FOSTER</div>
    <div><img src={logo1} alt="" /> </div>
 </div>



<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-l-full border-sky-950 ml-96 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
  <div><img src={logo1} alt="" /> </div>
  <div className='text-black font-semibold text-4xl px-4  py-5'>VOLUNTEER</div>
</div>

<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-r-full border-sky-950 ml-20 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
    <div className='text-black font-semibold text-4xl px-4  py-5'>HOST A DONATION BOX</div>
    <div><img src={logo1} alt="" /> </div>
 </div>



<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-l-full border-sky-950 ml-96 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
  <div><img src={logo1} alt="" /> </div>
  <div className='text-black font-semibold text-4xl px-4  py-5'>CONSULT AT OUR CLINIC</div>
</div>


<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-l-full border-sky-950 ml-96 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
  <div><img src={logo1} alt="" /> </div>
  <div className='text-black font-semibold text-4xl px-4  py-5'>DONATE IN KIND</div>
</div>

<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-r-full border-sky-950 ml-20 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
    <div className='text-black font-semibold text-4xl px-4  py-5'>HELP SPREAD THE WORLD</div>
    <div><img src={logo1} alt="" /> </div>
 </div>


<div className='bg-sky-200 h-24 w-3/5 border-4 rounded-l-full border-sky-950 ml-96 flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer'>
  <div><img src={logo1} alt="" /> </div>
  <div className='text-black font-semibold text-4xl px-4  py-5'>TAKE THE PLEDGE</div>
</div>
   
   </>
  )
}

export default Waystohelp