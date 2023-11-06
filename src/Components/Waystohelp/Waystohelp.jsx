import React from 'react'
import logo1 from '../../assets/logo1.png'
import help1 from '../../assets/help1.png'
import heart from '../../assets/heart.jpg'
import bed from '../../assets/bed.png'


function Waystohelp() {
  return (
   <>
   <div className='flex flex-col items-center'>
    
   <div
        class="w-full h-52 bg-[url('https://images.pexels.com/photos/2145878/pexels-photo-2145878.jpeg')] 
        bg-cover bg-center mb-10 animate-slide-in-left duration-1000">
        <div class="w-full h-full flex  justify-center items-center backdrop-blur-none">
                <span class="text-white font-bold text-4xl underline decoration-3 w-1/2 text-center">WAYS TO HELP</span>
        </div>
        <style>
        {`
        @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-slide-in-left {
            animation: slide-in-left 1s ease-in-out forwards;
          }
        `}
    </style>
    </div>

   </div>

   {/*  HORIZONTAL DIV STARTING*/}
 <div class=" left-100" >

{/* FIRST HORIZONTAL DIV*/}

<a href="#birth" activeClass='active' spy={true} smooth='true' offset={-50} duration={-500}>
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in'>
<div className='text-black font-semibold text-3xl px-4 py-5'>
   DONATE
</div>
<div className='ml-12'>
    <img src={bed} className="h-20 w-20" alt="" />
</div>

<style>
    {`@keyframes fade-left-in {
from {
transform: translateX(-100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}

.animate-fade-left-in {
animation: fade-left-in 3s ease-in-out forwards;
}
    `}
</style>
</div>
</a>

{/* SECOND HORIZONTAL DIV*/}
<a href="#rescue">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in'>

<div><img src={bed} className=" h-20 w-20" alt="" /> </div>
<div className='text-black font-semibold text-3xl px-4  py-5'>GET SURGERY DONE</div>

<style>
    {`
    @keyframes fade-right-in {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      .animate-fade-right-in {
        animation: fade-right-in 3s ease-in-out forwards;
      }
    `}
</style>

</div>
</a>

{/* THIRD HORIZONTAL DIV*/}

<a href="#foster">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in'>
<div className='text-black font-semibold text-3xl px-4 py-5'>
    ADOPTION AND FOSTERING
</div>
<div className='ml-12'>
    <img src={bed} className="h-20 w-20" alt="" />
</div>

<style>
    {`@keyframes fade-left-in {
from {
transform: translateX(-100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}

.animate-fade-left-in {
animation: fade-left-in 3s ease-in-out forwards;
}
    `}
</style>
</div>
</a>


{/* FOURTH HORIZONTAL DIV*/}
<a href="special">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in'>

<div><img src={bed} className=" h-20 w-20" alt="" /> </div>
<div className='text-black font-semibold text-3xl px-4  py-5'>VOLUNTEER</div>

<style>
    {`
    @keyframes fade-right-in {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      .animate-fade-right-in {
        animation: fade-right-in 3s ease-in-out forwards;
      }
    `}
</style>

</div>
</a>

{/* FIFTH HORIZONTAL DIV*/}
<a href="#hospital">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in'>
<div className='text-black font-semibold text-3xl px-4 py-5'>
    HOST A DONATION BOX
</div>
<div className='ml-12'>
    <img src={bed} className="h-20 w-20" alt="" />
</div>

<style>
    {`@keyframes fade-left-in {
from {
transform: translateX(-100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}

.animate-fade-left-in {
animation: fade-left-in 3s ease-in-out forwards;
}
    `}
</style>
</div>
</a>

{/* SIXTH HORIZONTAL DIV*/}
<a href="mobile">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in'>

<div><img src={bed} className=" h-20 w-20" alt="" /> </div>
<div className='text-black font-semibold text-3xl px-4  py-5'>DONATE IN KIND</div>

<style>
    {`
    @keyframes fade-right-in {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      .animate-fade-right-in {
        animation: fade-right-in 3s ease-in-out forwards;
      }
    `}
</style>

</div>
</a>
{/* SEVENTH HORIZONTAL DIV*/}

<a href="#clinic">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-r-full border-sky-950 
ml-20 flex duration-1000 ease-in-out justify-evenly m-10 transition delay-150 hover:-translate-y-1 
hover:scale-110 hover:cursor-pointer opacity-0 animate-fade-left-in'>
<div className='text-black font-semibold text-3xl px-4 py-5'>
   HELP SPREAD THE WORD
</div>
<div className='ml-12'>
    <img src={bed} className="h-20 w-20" alt="" />
</div>

<style>
    {`@keyframes fade-left-in {
from {
transform: translateX(-100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}

.animate-fade-left-in {
animation: fade-left-in 3s ease-in-out forwards;
}
    `}
</style>
</div>
</a>

{/* EIGTH HORIZONTAL DIV*/}
<a href="diagnostics">
<div className='bg-sky-200 h-20 w-3/5 border-4 rounded-l-full border-sky-950 
ml-96 flex  justify-evenly m-10 transition ease-in-out delay-150 hover:-translate-y-1 
hover:scale-110 duration-1000 hover:cursor-pointer opacity-0 animate-fade-right-in'>

<div><img src={bed} className=" h-20 w-20" alt="" /> </div>
<div className='text-black font-semibold text-3xl px-4  py-5'>TAKE  THE PLEDGE</div>

<style>
    {`
    @keyframes fade-right-in {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      .animate-fade-right-in {
        animation: fade-right-in 3s ease-in-out forwards;
      }
    `}
</style>

</div>
</a>



</div>

{/*  HORIZONTAL DIV ENDING*/}


{/* VERTICAL DIV STARTING */}

 <div className='flex flex-col items-center'>
  {/* FIRST VERTICAL DIV */}
 <div className='w-2/3 h- 2/3 mt-4 mb-8'>

  <div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
    SURGERY FOR YOUR PET OR COMMUNITY ANIMAL
  </div>

  <div className='flex '>
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg?w=996&t=st=1699221070~exp=1699221670~hmac=117d00fbbe5696fd371009411be61b8f94b5b4b1df9f000ad1faab9ba97b000a" 
    className='h-96 w-1/3'alt="" />
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
    className='h-96 w-1/3' alt="" />
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
    className='h-96 w-1/3'alt="" />
  </div>

  <div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
  Help with population control of community animals (particularly dogs and cats) in private localities. <br /><br /> <br />
  Community & Pet Animals: <br />
  -Owned Pets <br />
-Inside Gated Communities <br />
-In Apartment Complexes <br />
-In Gated Educational Institutions <br />
-In Gated Corporate Buildings, Tech Parks <br />
  </div>
 </div>

  {/* SECOND VERTICAL DIV */}
  <div className='w-2/3 h- 2/3  mt-4 mb-8'>

<div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
  ADOPT/FOSTER
</div>

<div className='flex '>
  <img src="https://imgs.search.brave.com/zvA46ZcIWh4iUGOxQxJ4Nm-62zRc5yp_u3PGcJviRGU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy81Lzk4/YzY1MDkwNTkyZjEx/ZWE5ZjYyMzM5Y2U4/NTNjYTc1L2ltYWdl/My0xNjI0NTQxNTUx/NjI5LmpwZz9mbT1w/bmcmYXV0bz1mb3Jt/YXQmdz04MDA" 
  className='h-96 w-1/3'alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
  className='h-96 w-1/3' alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
  className='h-96 w-1/3'alt="" />
</div>

<div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
There are millions of orphaned or handicapped street animals and abandoned pets in India. <br /><br /> <br />

The flood of orphaned pups and handicapped street animals in need of homes continues unabated,
 not to mention scores of so called 'pedigrees' being cruelly abandoned when they fall sick, grow old,
 lose favour of their 'masters' or simply go 'out-of-fashion'. <br /><br /> <br />

 Orphaned Pups & Kittens: <br />
Scores are motherless street pups and kittens are rescued by the Blue Cross Of India in Chennai every month. <br /><br /> <br />

Abandoned Pets: <br />
Though abandoing a pet is illegal, many adult pet dogs and cats are anonymously abandoned.
 Many, often tied to posts overnight outside our Guindy shelter. 
These are rescued and  managed in our Abandoned Animals section. <br /><br /> <br />

These are the animals that are in desparate need of loving homes.





</div>
</div>

 {/* THIRD VERTICAL DIV */}
 <div className='w-2/3 h- 2/3  mt-4 mb-8'>

  <div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
    VOLUNTEER
  </div>

  <div className='flex '>
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg?w=996&t=st=1699221070~exp=1699221670~hmac=117d00fbbe5696fd371009411be61b8f94b5b4b1df9f000ad1faab9ba97b000a" 
    className='h-96 w-1/3'alt="" />
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
    className='h-96 w-1/3' alt="" />
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
    className='h-96 w-1/3'alt="" />
  </div>

  <div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
  Contrary to popular belief, volunteers do not sign up because they have plenty of time.
   They show up because they have ‘plenty’ of heart. Do you have the heart to make time. <br /><br /> <br />

   If you care, if you have the heart, come join this ever growing group - the 2000 plus beating hearts inside and the millions outside,
    need us - they need you. Join hands to build a compassionate world that we can share with them. <br /><br /> <br />

    Volunteering & Internship Opportunities: <br />
    Adoption Drives (onsite) <br />
Humane Education Workshops (onsite / remote) <br />
Creative Writing - (remote) <br />
Graphics & Web Design (remote) <br />
Shelter Sanitation (on site / must vaccinate) <br />
Abandoned Animal Management (on site / must vaccinate) <br />
Call Centre & Helpdesk Management (on site) <br />
Tactical Rescues (on site / must vaccinate) <br />
Fundraising (remote) <br />




  </div>
 </div>

  {/* FOURTH VERTICAL DIV */}
  <div className='w-2/3 h- 2/3  mt-4 mb-8'>

<div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
 HOST A DONATION BOX / QR POSTER
</div>

<div className='flex '>
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg?w=996&t=st=1699221070~exp=1699221670~hmac=117d00fbbe5696fd371009411be61b8f94b5b4b1df9f000ad1faab9ba97b000a" 
  className='h-96 w-1/3'alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
  className='h-96 w-1/3' alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
  className='h-96 w-1/3'alt="" />
</div>

<div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
You can make a big difference helping with fundraising by hosting a donation box. 
If you own an establishment that has good footfall i.e. you have a lot of visitors everyday 
and wish to help a six decade old animal welfare organization in fundraising - you will be the right fit for our host-a-box program. <br /><br /><br />

A donation box may be physical or virtual. <br /><br /> <br />

Currently our Physical Donation Box program is only available in locations within Chennai. 
The boxes are made of acrylic and are compact taking up very little space on your counter tops, but look smart and tidy. <br /><br /> <br />

Our Virtual Donation Box program is available anwhere in the world.
 These are user printable boxes or posters that contain our donation QR code links that will take potential 
 donors to our online donation page. <br /><br /> <br />

 Who can host a 'physical' donation box OR a 'physical' QR-poster: <br />
 Office Receptions of large MNCs / Tech Companies <br />
Individual Owned Shops (particularly Pet shops)  <br />
Retail Chains <br />
Malls <br />
Airports <br />
Railway Stations <br /> <br /> <br />

Who can host a donation QR Code Poster: <br />

Online: <br />
Any personal / business website that is not ideologically conflicted with animals rights and animal welfare <br />



</div>
</div>

 {/* FIFTH VERTICAL DIV */}
 <div className='w-2/3 h- 2/3  mt-4 mb-8'>

  <div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
   DONATE IN KIND
  </div>

  <div className='flex '>
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg?w=996&t=st=1699221070~exp=1699221670~hmac=117d00fbbe5696fd371009411be61b8f94b5b4b1df9f000ad1faab9ba97b000a" 
    className='h-96 w-1/3'alt="" />
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
    className='h-96 w-1/3' alt="" />
    <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
    className='h-96 w-1/3'alt="" />
  </div>

  <div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
  Where there are over 1800 animals at any given time, there are always needs. <br /><br /><br />

  For Sanitation: <br />
- Old Newspapers as litter soakers, Puppy Underpads, Cat Litter, <br />
- Khorsolin Disinfectant, Kennel Wash, Savlon/Dettol, Brooms, Hosepipes <br />
- Petben Dog Shampoo, Used Towels <br />
- Hair Trimmers, Dog Collars <br /> <br /><br />

For Nutrition: <br />
- Foodgrains :  Rice, Pulses (Dal), Soyabeans, Wheat, Dry Peas, Corn(Maize) <br />
- Veggie Powders : Potato Powder, Carrot Powder, Maize Gluten <br />
- Benevo Vegan Cat Food <br />
- Pedigree/Drools Vegetarian Dog Food <br />
- Loads of Parle Glucose / Marie biscuits for dog snack time @BCI (we have 500 plus dogs at any given time) <br />
  </div>
 </div>

  {/* SIXTH VERTICAL DIV */}
  <div className='w-2/3 h- 2/3  mt-4 mb-8'>

<div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
 HOST A DONATION BOX / QR POSTER
</div>

<div className='flex '>
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg?w=996&t=st=1699221070~exp=1699221670~hmac=117d00fbbe5696fd371009411be61b8f94b5b4b1df9f000ad1faab9ba97b000a" 
  className='h-96 w-1/3'alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
  className='h-96 w-1/3' alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
  className='h-96 w-1/3'alt="" />
</div>

<div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
You can make a big difference helping with fundraising by hosting a donation box. 
If you own an establishment that has good footfall i.e. you have a lot of visitors everyday 
and wish to help a six decade old animal welfare organization in fundraising - you will be the right fit for our host-a-box program. <br /><br /><br />

A donation box may be physical or virtual. <br /><br /> <br />

Currently our Physical Donation Box program is only available in locations within Chennai. 
The boxes are made of acrylic and are compact taking up very little space on your counter tops, but look smart and tidy. <br /><br /> <br />

Our Virtual Donation Box program is available anwhere in the world.
 These are user printable boxes or posters that contain our donation QR code links that will take potential 
 donors to our online donation page. <br /><br /> <br />

 Who can host a 'physical' donation box OR a 'physical' QR-poster: <br />
 Office Receptions of large MNCs / Tech Companies <br />
Individual Owned Shops (particularly Pet shops)  <br />
Retail Chains <br />
Malls <br />
Airports <br />
Railway Stations <br /> <br /> <br />

Who can host a donation QR Code Poster: <br />

Online: <br />
Any personal / business website that is not ideologically conflicted with animals rights and animal welfare <br />



</div>
</div>

 {/* SEVENTH VERTICAL DIV */}
 <div className='w-2/3 h- 2/3  mt-4 mb-8'>

<div className='h-20  bg-sky-950 text-white text-center text-4xl pt-4 font-semibold'>
 HOST A DONATION BOX / QR POSTER
</div>

<div className='flex '>
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg?w=996&t=st=1699221070~exp=1699221670~hmac=117d00fbbe5696fd371009411be61b8f94b5b4b1df9f000ad1faab9ba97b000a" 
  className='h-96 w-1/3'alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100196.jpg?w=996&t=st=1699221091~exp=1699221691~hmac=7ca04a8fac32aebadda948ecb9d9689658c75418c2116a965ecb9194efd01f25"
  className='h-96 w-1/3' alt="" />
  <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100201.jpg?w=996&t=st=1699221268~exp=1699221868~hmac=4aa48874136d3e933f22049a898ed0c5faa18e2e527f5b33c763546731d787fc" 
  className='h-96 w-1/3'alt="" />
</div>

<div className=' text-black text-lg font-bold pb-6 pt-4 flex flex-col items-center bg-sky-200 pl-8 pr-8'>
You can make a big difference helping with fundraising by hosting a donation box. 
If you own an establishment that has good footfall i.e. you have a lot of visitors everyday 
and wish to help a six decade old animal welfare organization in fundraising - you will be the right fit for our host-a-box program. <br /><br /><br />

A donation box may be physical or virtual. <br /><br /> <br />

Currently our Physical Donation Box program is only available in locations within Chennai. 
The boxes are made of acrylic and are compact taking up very little space on your counter tops, but look smart and tidy. <br /><br /> <br />

Our Virtual Donation Box program is available anwhere in the world.
 These are user printable boxes or posters that contain our donation QR code links that will take potential 
 donors to our online donation page. <br /><br /> <br />

 Who can host a 'physical' donation box OR a 'physical' QR-poster: <br />
 Office Receptions of large MNCs / Tech Companies <br />
Individual Owned Shops (particularly Pet shops)  <br />
Retail Chains <br />
Malls <br />
Airports <br />
Railway Stations <br /> <br /> <br />

Who can host a donation QR Code Poster: <br />

Online: <br />
Any personal / business website that is not ideologically conflicted with animals rights and animal welfare <br />



</div>
</div>



 </div>

   </>
  )
}

export default Waystohelp