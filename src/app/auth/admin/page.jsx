import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import VenuesTable from './venues/page'

export default async function Account() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <VenuesTable session={session} />
}