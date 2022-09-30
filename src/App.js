import HeroSection from './components/landing page/HeroSection';
import Footer from './common/Footer';
import WhyTraveloggers from './components/landing page/WhyTraveloggers';
import TopBlogs from './components/landing page/TopBlogs';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
