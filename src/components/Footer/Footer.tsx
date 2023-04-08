import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <section className='py-10'>
        <div className='flex flex-col justify-center px-10 py-4 sm:px-4 w-4/5 mx-auto h-full sm:w-full border-t'>
            <div className='flex gap-10 mt-5'>
                <div className='w-2/5'>
                    <Image src="/Tech.png" height={100} width={100} alt=""/>
                    <h1 className='text-lg my-6'>Techport is world&apos;s leading community for creatives to share,grow, and get hired.</h1>
                    <p>Don&apos;t miss out! Join Our Newsletter</p>
                    <div className='flex items-center'>
                    <input type="text" name="" id="" className='bg-[#E1DDDD] px-6 rounded-full border-none outline-none' />
                    <button className='px-6 py rounded-full bg-purple -translate-x-5 my-5'>join</button>
                    </div>
                    <p className='my-5'>Yes, I would like to receive e-mail with special offers, Website updates.</p>
                    <div className='bg-[#F5F5F5] dark:bg-dark p-2'>
                        <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English</p>
                    </div>
                </div>
                <div className='flex w-3/4 justify-between'>
                    <div>
                        <h1 className='mb-3'>For Designers</h1>
                        <li>About us</li>
                        <li> Social Responsibility </li>
                        <li>Partner Program</li>
                        <li>Affiliates </li>
                        <li>Sell your art</li>
                        <li> Job</li>
                        <li>Artist Blog</li>
                    </div>
                    <div>
                    <h1 className='mb-3'>For Designers</h1>
                        <li>About us</li>
                        <li> Social Responsibility </li>
                        <li>Partner Program</li>
                        <li>Affiliates </li>
                        <li>Sell your art</li>
                        <li> Job</li>
                        <li>Artist Blog</li>
                    </div>
                    <div>
                    <h1 className='mb-3'>For Designers</h1>
                        <li>About us</li>
                        <li> Social Responsibility </li>
                        <li>Partner Program</li>
                        <li>Affiliates </li>
                        <li>Sell your art</li>
                        <li> Job</li>
                        <li>Artist Blog</li>
                    </div>
                    <div>
                    <h1 className='mb-3'>For Designers</h1>
                        <li>About us</li>
                        <li> Social Responsibility </li>
                        <li>Partner Program</li>
                        <li>Affiliates </li>
                        <li>Sell your art</li>
                        <li> Job</li>
                        <li>Artist Blog</li>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
