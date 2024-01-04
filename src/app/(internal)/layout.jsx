import { Inter, Righteous } from 'next/font/google'
import clsx from 'clsx'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'



export default function MainLayout({ children }) {
  return <Layout>{children}</Layout>
}
