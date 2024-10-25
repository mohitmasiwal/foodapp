import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const Menue = ({menue}) => {
    
    const[value,setvalue]= useState(0);
     
      const pre=()=>{
        setvalue((pre)=> pre+20)
      }
      const nxt=()=>{
     value <=0? "": setvalue((pre)=> pre-20)
      }
      
    return (
        <>
      
             
            <div className="w-full ">
           

                <div className=" mt-3 mx-auto   overflow-hidden w-[90%]  ">
                <div className=" flex justify-between">
                <h1 className="font-bold text-4xl">What's on your mind</h1>
           
            <div className="  gap-1 flex">
                <div onClick={nxt} className="bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer"> <FaArrowLeft/></div>
                <div onClick={pre} className=" bg-gray-200 rounded-full h-8 w-8 flex  justify-center items-center cursor-pointer"> <FaArrowRight/></div>
            </div>
            </div>
               <div
               style={{ translate:`${-value}%`}}
                className=" flex  h-[200px] mt-4 duration-1000  ">
                {
                    menue.map(
                        (item,i)=>{
                            return(
                                <img   key={i} src= {`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="" />
                            )
                        }
                    )
                }
                </div>
                </div>
            </div>
            </>

        

    )
}

export default Menue


 