import { Button } from './Button'

export function EventItem() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xs lg:flex-shrink-0">
              <img
                className="aspect-[3/3] w-full rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
           
          </div>

          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Lifetime membership
            </h3>
            <p className="text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center sm: text-left lg:flex-row sm:flex-col gap-x-1">
              <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                Location:
              </h4>
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">
                3000 NE 2nd Ave Miami, Florida
              </h4>
              <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                Date:
              </h4>
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">
                02/23/2024
              </h4>
              <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                Tier:
              </h4>
              <h4 className="flex-none text-sm font-semibold leading-6  text-gray-600">
                VIP
              </h4>
            </div>
            <div className="mt-10 flex justify-end">
              <Button href="/artists" color="blue" className="mt-5">
                <span>More Info</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
