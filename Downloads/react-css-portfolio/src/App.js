import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './layouts/Header';
import SideNav from './layouts/SideNav';
import Footer from './layouts/Footer';
import PageTitleProvider from './context/PageTitleContext';
import { useMediaQuery } from '@mui/material';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <PageTitleProvider>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {!isMobile && <SideNav />}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </Box>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </PageTitleProvider>
  );
}