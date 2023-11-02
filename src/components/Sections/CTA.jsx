import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import partner from '@/images/partner.svg'
export function CallToAction() {
  return (
    <div className="relative overflow-hidden lg:mt-24">
      <div className="mx-auto max-w-7xl px-6 pb-32  sm:pt-60 lg:px-8 lg:pt-0">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
       
          <div className="mb-12  w-full max-w-xl lg:mt-0 lg:shrink-0 xl:max-w-2xl">
            <h1 className="mb-6   font-display  text-4xl tracking-tight text-white sm:text-6xl">
              Do you have your own erotic initiative?
            </h1>
            <h1 className="font-display text-4xl tracking-tight text-white sm:text-6xl">
              be part of The Erotika Biennale!
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
              The Decentralized Erotika Biennale: The Erotika Biennale invites
              interested partners to apply for participation to become part of
              the collateral experiences, providing a screening and vetting
              process overseen by Clitsplash&apos;s curators, Tam Gryn and
              Gladys Garrotte. Selected partners will enter into an agreement
              outlining deliverables and receiving brand guidelines, event
              templates, and ongoing support from the curators. The curated
              experiences will ensure a high standard of quality across all
              activations, delivering an unforgettable and never seen before
              journey.
            </p>
            <div className='flex flex-row'>
            <a  target='_blank' href="https://docs.google.com/forms/d/17U4nQC4NmQDeHGe1eUN-5DqL2fSSxeINtgz1pQ5_oLk/viewform?edit_requested=true" className="mt-10 mr-5  group inline-flex items-center justify-center rounded-full py-4 px-8 text-sm lg:text-lg font-semibold focus:outline-none focus-visible:outline-2 ' bg-violet-600 text-white hover:text-slate-100 hover:bg-violet-400 active:bg-violet-800 active:text-violet-100 focus-visible:outline-blue-600 focus-visible:outline-offset-2">
            For Partners
            </a>
            <a target='_blank' href="https://docs.google.com/forms/d/1MGwkbWZ8mdiAJ58tvA7ip47ZEHir4qZ-i0uvz-A7i9I/viewform?edit_requested=true" className="mt-10   group inline-flex items-center justify-center rounded-full py-4 px-8 text-sm lg:text-lg font-semibold focus:outline-none focus-visible:outline-2 ' bg-violet-600 text-white hover:text-slate-100 hover:bg-violet-400 active:bg-violet-800 active:text-violet-100 focus-visible:outline-blue-600 focus-visible:outline-offset-2">
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
