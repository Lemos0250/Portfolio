import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TopBar } from '@/components/TopBar'
import { Main } from '@/components/Main'
import { Habilities } from '@/components/Habilities'


export default function Home() {
  return (
    <main>
      <TopBar/>
      <Main/>
      <Habilities/>
    </main>
  )
}
