import React,{useEffect, useRef, useState} from 'react'


function image() {
    const [file , setfile] = useState(null);
    const [image , setimage] = useState("");
    const imageref = useRef();
    const saveref = useRef();
    useEffect(()=>{
        
    },[])
      
    const save = ()=>{
       // console.log("djhfj");
        imageref.current.click()
        //cli()
     }



const handleImagePicker = (e)=>{
      
    //console.log(e.target.files[0])
    const data = e.target.files[0];
    setimage(data);
    console.log(data, file, "imageData")
    
}

  return (
<>

   <h1>image </h1>



   <form>
               <input type='file' hidden  id='gone' ref={imageref} onChange={handleImagePicker}/>
      
      <label htmlFor="gone">
      <input type='button' id ="save" onClick={save} ref={saveref} value="click"/>
        </label> 
      </form>
      

     <img src={image ? URL.createObjectURL(image) : "/download.jpg"}></img>
     <button onClick={()=>{console.log(image)}}>console</button>
</>
  )
}

export default image