import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <section>
        <nav>
            <Link href="/">Logo</Link>
            <div>
                <Link href="/about">Home</Link>
                <Link href="/contact">Inspiration</Link>
                <Link href="/contact">Find Work</Link>
                <Link href="/contact">Learn Design</Link>
            </div>
            <div>
                <input type="text" name="" id="" />
            </div>
        </nav>
    </section>
  )
}
