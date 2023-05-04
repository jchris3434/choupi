import Image from 'next/image'
import { Inter } from 'next/font/google'
import Coconut from '../components/coco';
import Painting from '../components/painting';
import Gallery from '@/components/gallery';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <Coconut />
      <Painting />
      <Gallery />
    </main>
  )
}
