import Category from '@/components/Category/Category'
import Explore from '@/components/Explore/Explore'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navigation/Navbar'
import React from 'react'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <Category/>
      <Explore/>
    </main>
  )
}
