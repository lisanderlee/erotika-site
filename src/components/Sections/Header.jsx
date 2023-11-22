'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Logo } from '@/components/Logo'
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
            className="absolute z-50 top-12 w-2/3  right-5  gap-y-5 mt-4 flex origin-top flex-col rounded-2xl bg-[#5E18EA] pt-10 px-7 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
           
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/events"
            >
              Events
            </Link>
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              Artists
            </Link>
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              About
            </Link>
 
            <hr className="m-2 border-slate-300/40" />
            <div>
            <p className="font-display text-center text-xl text-pink-300 ">
              <span className="mr-2">❤️</span> The Erotika Biennale Miami
              <span className="ml-2">👇</span>
            </p>
          </div>
            <a
          target="_blank"
          href="https://docs.google.com/forms/d/1MGwkbWZ8mdiAJ58tvA7ip47ZEHir4qZ-i0uvz-A7i9I/viewform?edit_requested=true"
          className="group flex-none items-center justify-center rounded-full bg-slate-950 px-8 py-4 mb-5 font-display text-sm text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 "
        >
          Get Tickets
        </a>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="z-50 px-7 md:px-10 lg:px-14 pt-5 ">
      <nav className="  flex h-16 w-full items-center justify-between gap-x-5">
        <div className="">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <div className="  w-full items-center justify-between rounded-2xl bg-[#5E18EA] px-10   hidden md:flex lg:flex">
          <div className=" flex h-16 items-center gap-x-10 ">
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/events"
            >
              Events
            </Link>
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              Artists
            </Link>
            <Link
              className="font-display text-lg text-pink-300 hover:text-pink-500 "
              href="/artists"
            >
              About
            </Link>
          </div>
          <div>
            <p className="font-display text-xl text-pink-300 md:hidden lg:flex">
              <span className="mr-2">❤️</span> The Erotika Biennale Miami
              <span className="ml-2">👉</span>
            </p>
          </div>
        </div>
        <a
            target="_blank"
            href="https://docs.google.com/forms/d/17U4nQC4NmQDeHGe1eUN-5DqL2fSSxeINtgz1pQ5_oLk/viewform?edit_requested=true"
            className="flex-none group  inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 lg:text-lg"
          >
            But tickets
          </a>

        <div className="-mr-1 md:hidden">
          <MobileNavigation />
        </div>
      </nav>
    </header>
  )
}



