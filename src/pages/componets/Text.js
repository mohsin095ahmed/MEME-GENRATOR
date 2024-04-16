'use client'

import React, { useState } from 'react'
import Draggable from 'react-draggable';

const Text = () => {
    const [editMode, seteditmode] = useState(false);
    const [val, satVal] = useState("Double Clicke to Edit")
   
  return (
    <Draggable>
      {
         editMode ? <input className='border text-lg'  value={val} onDoubleClick={(e)=>{seteditmode(false)}} onChange={(e)=>{satVal(e.target.value)} }/> :<h1 className='object-contain inline-block w-[300px] text-2xl font-black text-[30]' onDoubleClick={(e)=>{seteditmode(true)}}>{val}</h1>
      }
    </Draggable>
    )
}

export default Text;