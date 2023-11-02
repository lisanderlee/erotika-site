import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import partner from '@/images/partner.svg'
export function CallToAction() {
  return (
    <div className="relative overflow-hidden mt-10 lg:mt-16">
      <div className="mx-auto max-w-7xl px-6 pb-32  sm:pt-60 lg:px-8 lg:pt-0">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="mb-12  w-full max-w-xl lg:mt-0 lg:shrink-0 xl:max-w-2xl">
            <h1 className="mb-6   font-display  text-4xl tracking-tight text-white sm:text-6xl">
              Do you have your own erotic initiative?
            </h1>
            <h1 className="font-display text-4xl tracking-tight text-white sm:text-6xl">
              Be part of The Erotika Biennale!
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
              The Decentralized Erotika Biennale invites interested partners to
              apply for participation to become part of the collateral
              experiences, providing a screening and vetting process overseen by
              <span className=" text-pink-300">
                <a target="_blank" href="http://www.clitsplash.art">
                  {' '}
                  Clitsplash&apos;s{' '}
                </a>
              </span>
              curators,
              <span className=" text-pink-300">
                <a target="_blank" href="https://www.tamgryn.com/">
                  {' '}
                  Tam Gryn{' '}
                </a>
              </span>{' '}
              and     <span className=" text-pink-300">
                <a target="_blank" href="https://linktr.ee/tropical_jewel">
                  {' '}
                  Gladys Garrote
                </a>
              </span>. Selected partners will enter into an
              agreement outlining deliverables and receiving brand guidelines,
              event templates, and ongoing support from the curators. The
              curated experiences will ensure a high standard of quality across
              all activations, delivering an unforgettable and never seen before
              journey.
            </p>
            <div className="flex flex-row">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/17U4nQC4NmQDeHGe1eUN-5DqL2fSSxeINtgz1pQ5_oLk/viewform?edit_requested=true"
                className="' group  mr-5 mt-10 inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 lg:text-lg"
              >
                For Partners
              </a>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/1MGwkbWZ8mdiAJ58tvA7ip47ZEHir4qZ-i0uvz-A7i9I/viewform?edit_requested=true"
                className="'   group mt-10 inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 lg:text-lg"
              >
                For Artists
              </a>
            </div>
          </div>
          <Image
            className="h-full w-full object-cover object-center sm:rounded-lg"
            src={partner}
            width={100}
            height={100}
            alt="Picture of the author"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
