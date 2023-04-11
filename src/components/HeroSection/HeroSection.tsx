import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className=' bg-[#D9CAF3] dark:bg-dark h-[550px] sm:h-full sm:py-5'>
        <div className='flex px-10 sm:px-4 w-4/5 mx-auto h-full sm:w-full'>
        <div className='flex items-center gap-4 sm:gap-8 justify-between sm:flex-col'>
            <div className='w-1/2 sm:w-full'>
                <h2 className='text-[#3E4581] text-5xl sm:text-3xl mb-10'>Good design makes great business</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className='w-1/2 text-end sm:w-full'>
                <Image src="/hero-bg.png" alt="" width={400} height={400} />
            </div>
        </div>
        </div>
    </section>
  )
}
