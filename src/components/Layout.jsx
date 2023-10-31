import { Header } from "./Sections/Header"
import { Footer } from "./Sections/Footer"

export function Layout({ children }) {
  return (
    <>
    
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
