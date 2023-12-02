import Image from 'next/image'
import instagram from '@/images/instagram.svg'
import lockupimage from '@/images/asset.svg'

export function About() {
  return (
    <div className="flex w-screen h-screen flex-col gap-y-5 px-5 pt-5 md:px-10 mt-10 lg:flex-row  lg:gap-x-10 lg:px-14">
      <div className="flex-1 items-center flex  basis-1/2 overflow-hidden lg:h-full my-auto h-full">
        <Image
          className="rounded-2xl  object-center"
          src={lockupimage}
          width={700}
          height={500}
          alt="Picture of the author"
          loading="lazy"
        />
      </div>
      <div className="flex-1 basis-1/2 rounded-2xl ">
          <div className="flex flex-col p-8 lg:p-12  max-w-7xl items-center h-full justify-center ">
          <p className="relative mt-6 text-lg leading-8 text-pink-100 ">
            The Erotika Biennale is brought to you by{' '}
            <span className=" text-pink-300">
              <a target="_blank" href="http://www.clitsplash.art">
                {' '}
                Clitsplash
              </a>
            </span>
            , a female founded artistic collective that stands for liberation,
            equal representation and diverse perspectives on human sexuality. We
            focus on featuring artwork by women, queer, trans and other sex
            positive minorities. As we seek to curate quality digital art
            exhibitions and IRL encounters, we advocate their proliferation
            within the metaverse.{' '}
            <span className=" text-pink-300">
              <a target="_blank" href="http://www.clitsplash.art">
                {' '}
                Clitsplash
              </a>
            </span>{' '}
            fosters an &apos;open metaverse&apos; by showcasing the value of
            human sexuality in digital culture and curating soundly researched
            and elaborated art exhibitions. A metaverse that is economically
            sustainable for artists, safe, fair, inclusive and able to kindle
            all sorts of artwork, is our mission.
          </p>
          <div className="mt-10  flex flex-row items-center">
            <a
              target="_blank"
              href="https://www.clitsplash.art/"
              className="  ' group inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 lg:text-lg"
            >
              ClitSplash
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/clitsplash/"
              aria-label="TaxPal on Twitter"
            >
              <Image
                src={instagram}
                width={20}
                height={20}
                alt="Picture of the author"
                loading="lazy"
                className="ml-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


