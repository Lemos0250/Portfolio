import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TopBar } from '@/components/TopBar'
import { Main } from '@/components/Main'
import { Habilities } from '@/components/Habilities'
import { Images } from '@/components/Images'
import { Projectimage } from '@/components/Style/ProjectImage'


export default function Home() {
  return (
    <main className='text-black'>
      <TopBar/>
      <Main/>
      <Habilities/>
      <Projectimage/>
      <Images/>
    </main>
  )
}
