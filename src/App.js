import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';

import ServicesPage from './components/Pages/ServicesPage';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';

import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DigitalAgencyHome />} />
          
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          
          
          
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
