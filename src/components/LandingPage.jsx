import React from 'react'
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We create","eye-opening","Presentations"].map((item,index)=>{
                return (   
                    <div className='masker' key={index}>
                        <div className='w-fit flex items-center'>
                            {index === 1 && 
                            <motion.div 
                                initial={{width: "0"}} 
                                animate={{width: "9vw"}} 
                                transition={{ ease: [0.76, 0,0.24, 1], duration: 1}} 
                                className='w-[9vw] h-[5.3vw] rounded-md bg-red-500 overflow-hidden'>
                                    <img src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'
                                        alt='Ochi'
                                        className='object-cover w-full h-full'/>
                            </motion.div>}
                            <h1 className="flex items-center uppercase text-[7.5vw] h-full leading-[6vw] font-['Gilroy'] font-semibold">{item}</h1>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase text-sm rounded-full'>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUp/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage

