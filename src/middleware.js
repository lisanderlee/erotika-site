import { NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if user is not signed in and trying to access /auth/dashboard, redirect them to /auth/signin
  if (!user && req.nextUrl.pathname.startsWith('/auth/admin')) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  // if user is signed in and trying to access /auth/signin, redirect them to /auth/dashboard
  if (user && req.nextUrl.pathname === '/auth') {
    return NextResponse.redirect(new URL('/auth/admin', req.url))
  }

 

  return res
}

export const config = {
  matcher: [ '/auth/:path*'],
}
