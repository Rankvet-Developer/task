import Image from 'next/image'
import React from 'react'

export default function Offer() {
  return (
    <section className='bg-[#E1D5F5] dark:bg-dark h-[400px]'>
        <div className='flex justify-center py-5 items-center px-10 sm:px-4 w-4/5 mx-auto h-full sm:w-full'>
            <div className='w-1/2'>
                <h2 className='mb-5 text-3xl'>What we offer?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi illum deserunt quo atque quasi vitae! Expedita, sed! Pariatur fugiat quae maiores autem velit temporibus consequatur quos quibusdam, fugit obcaecati alias expedita aspernatur similique, cupiditate perspiciatis, ex adipisci dolor. Ad dolorum porro officiis temporibus, quidem itaque quaerat aliquid distinctio doloribus mollitia quas, ratione magnam laudantium accusamus voluptatibus at, sequi tenetur atque nostrum a unde fuga natus?</p>
            </div>
            <div className='w-1/2 text-right'>
                <Image src="/offer.png" alt="" height={400} width={400} />
            </div>
        </div>
    </section>
  )
}
