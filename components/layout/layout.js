import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{'margin-top': '80px'}}>{children}</main>
      <Footer />
    </>
  )
}
