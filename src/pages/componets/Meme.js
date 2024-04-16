'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
function Meme() {
    const[meme, setmeme] = useState([]);
    const getMeme = async()=>{
        const response = await fetch("https://api.imgflip.com/get_memes").then(res=> res.json()).then(res=> setmeme(res.data.memes)).catch(err => console.log(err));
        
    }
    // console.log(uuidv4())
    useEffect(()=>{
     getMeme()
    },[])
  return (
    <>
    <div className=' flex flex-wrap justify-around'>
    {meme && meme.map(meme=>(
      
        <div key={meme.id} className='border mt-3 w-[300px] h-[450px]'>
        <div  className='h-[350px]'>
        <Image  src={ meme.url} height={350} width={300} alt={meme.name} priority={true} className='object-contain h-[350px]'/>
           
        </div>
      <Link href={{
        pathname:`/route/Edit/${meme.id}`,
        query: {
           data:meme.url        
        }
      }} >
      <button className='mt-5 mx-[75px] rad bg-blue-900 text-white w-[150px] h-7'> Edit MEME</button>
      </Link>
      



        </div>
    ))}
    
    </div>
    </>

  )
}

export default Meme