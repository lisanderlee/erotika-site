import bodyImage from '@/images/body.svg'
import Image from 'next/image'

export default function Hero() {


  return (
    <div className="relative h-screen ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-6 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-24 font-display tracking-tight text-violet-600  sm:text-xl lg:mt-0 lg:text-2xl ">
              The Erotika Biennale: A Decentralized Erotic Experience
              Celebrating Miami&apos;s Erotic Culture.
            </p>
            <h1 className=" mt-5 font-display text-4xl font-bold tracking-tight text-pink-300 sm:mt-10 sm:text-6xl  lg:mt-5">
              February 2024 Celebrating the month of LOVE
            </h1>
            <p className="mt-6 text-lg leading-8 text-pink-100">
              Join us at the Erotika Biennale in Miami this February, a
              month-long event celebrating erotic art and culture. Curated by
              Clitsplash, this vibrant festival features diverse artists,
              performances, and workshops, fostering an immersive experience in
              Miami&apos;s erotic communities. It&apos;s a revolution in erotic
              art appreciation, uniting communities, artists, and audiences in a
              celebration of authenticity and empowerment. Don&apos;t miss this
              inclusive and unforgettable experience!
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            src={bodyImage}
            alt="App screenshot"
            width={648}
            height={1117}
            className="aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full "
          />
        </div>
      </div>
    </div>
  )
}
