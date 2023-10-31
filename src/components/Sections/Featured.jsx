import Image from 'next/image'
import museum from '@/images/museum.jpg'

export default function Featured() {
  return (
    <div className="relative lg:mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <Image
            className="h-full w-full object-cover object-center sm:rounded-lg"
            src={museum}
            width={900}
            height={500}
            alt="Picture of the author"
            loading="lazy"
          />
          <div className="w-full  lg:mt-0 mt-12 max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-display tracking-tight text-pink-300 sm:text-6xl">
              Proudly partnering with the Museum Of Sex Miami
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
