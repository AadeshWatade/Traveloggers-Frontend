import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Layout from './layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="login" index element={<Login />} />
        <Route path="signup" index element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
