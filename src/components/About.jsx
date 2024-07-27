import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-900'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic    partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-8 mt-20 border-[#A5BC57]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach:</h1>
                <button className='flex gap-8 uppercase items-center px-8 py-4 mt-8 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] relative rounded-2xl overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Your Image" className="object-cover w-full h-full absolute inset-0"/>
            </div>

        </div>
    </div>
  )
}

export default About