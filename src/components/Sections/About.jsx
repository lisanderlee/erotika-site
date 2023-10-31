import Link from 'next/link'
import { Button } from '../Button'
import tam from '@/images/tam.png'
import Image from 'next/image'
export function About() {
  return (
    <div className="relative overflow-hidden lg:mt-24">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-32 sm:pt-60 lg:px-8 lg:pt-0">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <Image
            className="h-full w-full object-cover object-center sm:rounded-lg"
            src={tam}
            width={900}
            height={500}
            alt="Picture of the author"
            loading="lazy"
          />
          <div className="mt-12  w-full max-w-xl lg:mt-0 lg:shrink-0 xl:max-w-2xl">
            <h1 className="font-display text-4xl tracking-tight text-pink-300 sm:text-6xl">
              About
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
              The Erotika Biennale is brought to you by ClitSplash, a female
              founded artistic collective that stands for liberation, equal
              representation and diverse perspectives on human sexuality. We
              focus on featuring artwork by women, queer, trans and other sex
              positive minorities. As we seek to curate quality digital art
              exhibitions and IRL encounters, we advocate their proliferation
              within the metaverse. Clitsplash fosters an &apos;open
              metaverse&apos; by showcasing the value of human sexuality in
              digital culture and curating soundly researched and elaborated art
              exhibitions. A metaverse that is economically sustainable for
              artists, safe, fair, inclusive and able to kindle all sorts of
              artwork, is our mission.
            </p>
            <Button href="/register" color="violet" className="mt-10">
              ClitSplash
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
