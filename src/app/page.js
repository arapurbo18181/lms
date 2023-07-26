import Image from 'next/image'
import Hero from './components/Hero'
import TopCourses from './components/TopCourses'

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Hero/>
      <TopCourses/>
    </div>
  )
}
