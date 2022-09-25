import HeroSection from './components/landing page/HeroSection';
import Footer from './common/Footer';
import WhyTraveloggers from './components/landing page/WhyTraveloggers';
import TopBlogs from './components/landing page/TopBlogs';

const App = () => {
  return (
    <>
      <HeroSection />
      <WhyTraveloggers />
      <TopBlogs />
      {/* All sections */}
      <Footer />
    </>
  );
};

export default App;
