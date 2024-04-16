'use client'

import Meme from "./componets/Meme";
import React from "react";



export default function Home() {
  return (
       <>
       <a href="./route/Edit/image" >image  </a>
        <h1 className= "text-[50px] text-cyan-800">MEME GENRATOR</h1>
        <Meme></Meme>
       </>

      );
}
