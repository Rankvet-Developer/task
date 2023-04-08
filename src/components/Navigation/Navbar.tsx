import Link from 'next/link'
import React from 'react'
import { RiMoonClearFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <section className='px-10 h-20 sm:px-4 w-4/5 mx-auto sm:w-full'>
        <nav className='flex items-center justify-between h-full'>
            <Link href="/" className='text-3xl font-bold'>Logo</Link>
            <div className='flex sm:hidden'>
                <Link className='mx-4' href="/about">Home</Link>
                <Link className='mx-4'href="/contact">Inspiration</Link>
                <Link className='mx-4'href="/contact">Find Work</Link>
                <Link className='mx-4'href="/contact">Learn Design</Link>
            </div>
            <div className='flex items-center relative sm:hidden'>
                <input type="text" name="" id="" className='bg-[#E1DDDD] px-6 rounded' />
                <AiOutlineSearch className='absolute left-2'/>
                <RiMoonClearFill className='mx-4'/>
                <button className='bg-[#D6505B] text-gray-light px-4 py-1 rounded'>Login</button>
            </div>
        </nav>
    </section>
  )
}
