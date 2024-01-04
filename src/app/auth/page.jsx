import Link from 'next/link'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import AuthForm from '@/components/auth-form'
export default function NotFound() {

  return (
<div className='w-screen flex flex-col items-center p-20 h-screen'>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
   
      <AuthForm />

      </div>
  )
}



