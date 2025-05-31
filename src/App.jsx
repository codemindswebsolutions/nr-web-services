import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages (only those you imported)
const Homepage = lazy(() => import('./pages/Home'));
const Aboutpage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BookCallPage = lazy(() => import('./pages/Bookacall'));
const Pricing = lazy(()=> import('./pages/Pricing'))
const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const hideLayoutPaths = ['/admin-dashboard', '/employee-dashboard', '/signup'];
  const shouldHideLayout = hideLayoutPaths.some(path =>
    location.pathname === path || location.pathname.startsWith(path + '/')
  );

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {!shouldHideLayout && <Navbar />}

      <main className="flex-grow">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Aboutpage" element={<Aboutpage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bookacall" element={<BookCallPage />} />
             <Route path="/Pricing" element={<Pricing />} />
            <Route
              path="*"
              element={<div className="p-10 text-center">404: Page Not Found</div>}
            />
          </Routes>
        </Suspense>
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
