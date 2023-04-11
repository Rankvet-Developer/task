import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className='bg-[#C4ADEB] dark:bg-dark'>
        <div className='flex sm:flex-col-reverse justify-center items-center py-5 px-10 sm:px-4 w-4/5 mx-auto h-full sm:gap-10 sm:w-full sm:py-10'>
            <div className='w-1/2 sm:w-full'>
                <Image src="/About.png" alt="" width={400} height={400}/>
            </div>
            <div className='w-1/2 sm:w-full'>
                <h2 className='mb-5 text-3xl'>About our site</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi illum deserunt quo atque quasi vitae! Expedita, sed! Pariatur fugiat quae maiores autem velit temporibus consequatur quos quibusdam, fugit obcaecati alias expedita aspernatur similique, cupiditate perspiciatis, ex adipisci dolor. Ad dolorum porro officiis temporibus, quidem itaque quaerat aliquid distinctio doloribus mollitia quas, ratione magnam laudantium accusamus voluptatibus at, sequi tenetur atque nostrum a unde fuga natus?</p>
            </div>
        </div>
    </section>
  )
}
