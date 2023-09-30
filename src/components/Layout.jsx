import { Header } from "./HeaderSection"
import { Footer } from "./FooterSection"

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
