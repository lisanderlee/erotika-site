import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-pink-300 hover:bg-slate-900 hover:text-pink-200"
    >
      {children}
    </Link>
  )
}
