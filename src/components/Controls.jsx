import clsx from 'clsx'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}) => (
  <button
    className={clsx(
      'me border-none bg-transparent',
      'cursor-pointer disabled:cursor-not-allowed',
      'm-3 flex appearance-none items-center invisible lg:visible',
      'text-violet-800 opacity-70 hover:opacity-100 disabled:opacity-30 ',
    )}
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    <BsFillArrowLeftCircleFill size={32} />
  </button>
)

export const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
  <button
    className={clsx(
      'border-none bg-transparent',
      'cursor-pointer disabled:cursor-not-allowed',
      'm-3 flex appearance-none items-center invisible lg:visible',
      'text-violet-800 opacity-70 hover:opacity-100 disabled:opacity-30',
    )}
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    <BsFillArrowRightCircleFill size={32} />
  </button>
)
