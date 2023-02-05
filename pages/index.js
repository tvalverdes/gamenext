import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/navbar'
import { Slider } from '@/components/slider'
import { Button } from '@/components/button'
import { Section } from '@/components/section'
import { CategoryCard } from '@/components/categoryCard'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <h1 className='text-center text-4xl text-neutral-900 py-7'>Look up for your favorite categories</h1>
      <div className='w-full flex items-center justify-center'>
        <div className='w-3/4'>
      <div className='w-full grid justify-items-center grid-cols-1 gap-5 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <CategoryCard url="shooter.jpg" alt="Shooter Category" category="SHOOTER"/>
      <CategoryCard url="strategy.png" alt="Strategy Category" category="STRATEGY"/>
      <CategoryCard url="moba.png" alt="MOBA Category" category="MOBA"/>
      <CategoryCard url="open-world.png" alt="Open World Category" category="OPEN-WORLD"/>
      </div>
      </div>
      </div>
      <Button text="Show all" />
      <Footer />
      
      
    </>
  )
}
