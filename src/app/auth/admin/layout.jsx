import { Inter, Righteous } from 'next/font/google'
import clsx from 'clsx'
import LayoutBackend from '@/components/layout-backend'
import '@/styles/tailwind.css'


export default function BackLayout({ children }) {
  return <LayoutBackend>{children}</LayoutBackend>
}
