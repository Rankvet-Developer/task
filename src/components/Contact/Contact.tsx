import React from 'react'

export default function Contact() {
  return (
    <section className='bg-[#F4EFFB] dark:bg-dark h-full py-10'>
        <div className='flex flex-col px-10 sm:px-4 w-4/5 mx-auto h-full sm:w-full'>
            <div className='flex mb-10 justify-evenly'>
                <h1 className='text-2xl'>How it works</h1>
                <button type="button" className='rounded-full bg-pink px-4'>Contact us</button>
            </div>
            <div>
                <div className='flex'>
                  <div className='flex mr-12 relative before:absolute before:h-full before:border-[2px] before:left-8 before:top-5'>
                    <h1 className='relative before:absolute before:bg-[#F8147E] before:h-5 before:w-5 before:rounded-full before:left-[23px] after:bg-[#A29D9D] after:absolute after:h-8 after:w-8 after:rounded before:top-[7px] before:z-10'>01</h1>
                  </div>
                  <div className='rounded pl-32 py-6 pr-5 h-40 bg-[#C4ADEB]'>
                      <h1 className='text-2xl mb-4'>Create Project</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae, voluptatem incidunt doloremque dignissimos sapiente nihil, dicta facilis suscipit distinctio beatae officia deserunt cupiditate quae maiores molestias. </p>
                  </div>
                </div>
                <div className='flex my-5'>
                  <div className='flex mr-12 relative before:absolute before:h-full before:border-[2px] before:left-8 before:top-5'>
                    <h1 className='relative before:absolute before:bg-[#F8147E] before:h-5 before:w-5 before:rounded-full before:left-[23px] after:bg-[#A29D9D] after:absolute after:h-8 after:w-8 after:rounded before:top-[7px] before:z-10'>02</h1>
                  </div>
                  <div className='rounded pl-32 py-6 pr-5 h-40 bg-[#C4ADEB]'>
                      <h1 className='text-2xl mb-4'>Create Project</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae, voluptatem incidunt doloremque dignissimos sapiente nihil, dicta facilis suscipit distinctio beatae officia deserunt cupiditate quae maiores molestias. </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex mr-12'>
                    <h1 className='relative before:absolute before:bg-[#F8147E] before:h-5 before:w-5 before:rounded-full before:left-[23px] after:bg-[#A29D9D] after:absolute after:h-8 after:w-8 after:rounded before:top-[7px] before:z-10'>03</h1>
                  </div>
                  <div className='rounded pl-32 py-6 pr-5 h-40 bg-[#C4ADEB]'>
                      <h1 className='text-2xl mb-4'>Create Project</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae, voluptatem incidunt doloremque dignissimos sapiente nihil, dicta facilis suscipit distinctio beatae officia deserunt cupiditate quae maiores molestias. </p>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
