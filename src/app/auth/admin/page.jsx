'use client'
import ArtistsTable from "@/components/Backend/ArtistsTable"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function home() {
  <>
<ArtistsTable />
  </>
}
