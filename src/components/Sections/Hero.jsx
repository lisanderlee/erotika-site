import bodyImage from '@/images/body.svg'
import Image from 'next/image'
import GoogleMaps from '../google-maps'
export default function Hero() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col-reverse gap-y-5 px-5 pt-5 md:px-10  lg:flex-row  lg:gap-x-10 lg:px-14">
        <div className="flex-1 basis-1/2 rounded-2xl bg-[#5E18EA]">
          <div className="flex flex-col p-8 lg:p-12  max-w-7xl items-center h-full justify-center ">
            <p className=" font-display tracking-tight text-pink-300	 sm:text-xl lg:text-2xl ">
              The Erotika Biennale: A Decentralized Erotic Experience
              Celebrating Miami&apos;s Erotic Culture.
            </p>
            <h1 className=" mt-5 font-display text-4xl font-bold tracking-tight text-pink-300 sm:mt-10 sm:text-6xl  lg:mt-5">
              February 2024 Celebrating the month of LOVE
            </h1>
            <p className="mt-6 text-lg leading-8 text-pink-100">
              Join us at the Erotika Biennale in Miami this February, a
              month-long event celebrating erotic art and culture. Curated by
              <span className=" text-pink-300">
                <a target="_blank" href="http://www.clitsplash.art">
                  {' '}
                  Clitsplash
                </a>
              </span>
              , this vibrant festival features diverse artists, performances,
              and workshops, fostering an immersive experience in Miami&apos;s
              erotic communities. It&apos;s a revolution in erotic art
              appreciation, uniting communities, artists, and audiences in a
              celebration of authenticity and empowerment. Don&apos;t miss this
              inclusive and unforgettable experience!
            </p>
          </div>
        </div>

        <div className="flex-1 basis-1/2 overflow-hidden lg:h-full h-96 rounded-2xl border-[#5E18EA]">
          <GoogleMaps />
        </div>
      </div>
      {/* <div className="relative  lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <Image
          src={bodyImage}
          alt="App screenshot"
          width={648}
          height={1117}
          className="lg:aspect-auto aspect-[3/3] w-full object-cover lg:absolute lg:inset-0 lg:h-full "
        />
      </div> */}
    </>
  )
}
