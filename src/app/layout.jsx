import { Inter, Lexend, Righteous } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { Providers } from './provider'
export const metadata = {
  title: {
    template: '%s - Erotika',
    default: 'The Erotika Biennale ',
  },
  description:
    'Join us at the Erotika Biennale in Miami this February, a month-long event celebrating erotic art and culture.',
}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-righteous',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function MainLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'dark h-full scroll-smoothantialiased',
        inter.variable,
        righteous.variable,
      )}
    >
 
        <body className="flex   bg-gradient-to-b from-purple-900  to-slate-950  h-full flex-col">     <Providers>{children}     </Providers></body>
 
    </html>
  )
}
