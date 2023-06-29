import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ height: 'var(--nav-height)' }}></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
