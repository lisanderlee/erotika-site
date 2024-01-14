'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { LogoSm } from '../LogoSm'
import { Button } from '../Button'
function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-50 flex h-8 w-8  items-center justify-end ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute right-5 top-12 z-50  mt-4  flex w-2/3 origin-top flex-col gap-y-5 rounded-2xl bg-[#5E18EA] px-7 pt-10 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/events"
            >
              Events
            </Link>
            {/* <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              Artists
            </Link> */}
            {/* <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/partners"
            >
              Partners
            </Link> */}
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              About
            </Link>
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              Become a partner
            </Link>

            <hr className="m-2 border-slate-300/40" />
            <div>
              <p className="text-center font-display text-xl text-pink-300 ">
                <span className="mr-2">❤️</span> The Erotika Biennale Miami
                <span className="ml-2">👇</span>
              </p>
            </div>
            <a
              target="_blank"
              href="https://shotgun.live/festivals/the-erotika-biennale"
            >
              <Button color="violet">Get Tickets Now</Button>
            </a>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className=" z-50 w-full py-2 md:px-10 lg:fixed lg:px-14 px-5 ">
      <nav className="  flex h-16 w-full items-center justify-between gap-x-5">
        <div className="">
          <Link href="/" aria-label="Home">
            <LogoSm className="h-10 w-auto" />
          </Link>
        </div>
        <div className="  hidden w-full items-center justify-between  rounded-2xl   px-10 md:flex lg:flex">
          <div className=" flex h-16 items-center gap-x-10 ">
            <Link
              className="font-display text-base text-white   hover:text-pink-500 "
              href="/events"
            >
              Events
            </Link>
            {/* <Link
              className="font-display text-base text-white   hover:text-pink-500 "
              href="/artists"
            >
              Artists
            </Link> */}
            {/* <Link
              className="font-display text-base text-white   hover:text-pink-500 "
              href="/partners"
            >
              Partners
            </Link> */}
            <Link
              className="font-display text-base text-white  hover:text-pink-500 "
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-display text-base text-white  hover:text-pink-500 "
              href="#partner"
            >
              Become a partner
            </Link>
          </div>
        </div>
       
          <Button className="hidden  lg:block" color="pink">
          <a
          target="_blank"
          className='block'
          href="https://shotgun.live/festivals/the-erotika-biennale"
        >
            Get your tickets now!
            </a>
          </Button>
       

        <div className="-mr-1 md:hidden">
          <MobileNavigation />
        </div>
      </nav>
    </header>
  )
}
