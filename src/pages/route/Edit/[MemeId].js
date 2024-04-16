'use client'

import { useRouter,  } from 'next/router'
import React, {useEffect, useRef, useState} from 'react'
import Text from '@/pages/componets/Text'
import { exportComponentAsJPEG } from 'react-component-export-image'
import Link from 'next/link'
import Image from 'next/image'
const MemeId = () => {
   const [count, setcount] = useState(0)
   const divRef = useRef()
  const roter = useRouter()
  const image =roter.query.data;

useEffect(()=>{
  alert("please not refresh or any erorr back to home and refresh the page")
},[])


  const addText = ()=>{
    setcount(count + 1);
    // alert(count)
    }
    
  return (
    <>
        <h1 className='text-[50px] flex justify-center'>
          please enter this image block
        </h1>
      <div className=' divs'>
         <div  ref={divRef}>
            
              <Image src={image} height={400} width={500} alt='got' priority={true} className='border img '/>
            
            {/* <span className='inline-block overflow-y-scroll h-[100px]'> */}
            {Array(count).fill(0).map((e)=>(<Text key={count} />))}
            {/* </span> */}
            
         </div>
         <div className='bor'>
         <button className='one' onClick={addText}>add text </button>
         <button className='two' onClick={(e)=>{exportComponentAsJPEG(divRef)}}>save </button>
         <Link href={'/'}><button className='one'>HOME</button></Link>
         </div>
         

      </div>

    
    </>
  )
}

export default MemeId


