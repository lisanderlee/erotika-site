'use client'
import { Button } from '../Button'

export default function CTATicket() {
  return (
    <div className="flex w-screen flex-col gap-y-5 px-5 pt-5 md:px-10 mt-10 lg:flex-row  lg:gap-x-10 lg:px-14">
    <div className="flex p-10  w-full flex-col items-center justify-center rounded-2xl bg-[#5E18EA]">
      <p className="mb-10 font-display  text-center tracking-tight text-pink-300	 text-4xl lg:mt-0 lg:text-8xl ">
        The Erotika Biennale: A Decentralized Erotic Experience Celebrating
        Miami&apos;s Erotic Culture.
      </p>
      <a
            target="_blank"
            href="https://docs.google.com/forms/d/17U4nQC4NmQDeHGe1eUN-5DqL2fSSxeINtgz1pQ5_oLk/viewform?edit_requested=true"
            className="' group  mr-5 mt-10 inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 lg:text-lg"
          >
           Buy tickets
          </a>
    </div>
    </div>
  )
}
