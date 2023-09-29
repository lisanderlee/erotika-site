import Image from 'next/image'
import { Container } from '@/components/Container'
import GoogleMap from './GoogleMap'
import FloatingPanel from './FloatingPanel'
import { Sponsors } from './Sponsors'

export function Hero() {
  return (
    <div>
      
        <GoogleMap />
 
      {/* <h1 className="mx-auto  top-32 left-10 absolute max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        2023 <br></br>The Erotika <br></br>Biennale
      </h1> */}
      <div className='absolute z-10 top-32 right-10'>
      <FloatingPanel />
      </div>
  
    </div>
  )
}
