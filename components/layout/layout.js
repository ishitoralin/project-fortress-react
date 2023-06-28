import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ height: '80px' }}></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
