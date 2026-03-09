import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import AssetDetail from './pages/AssetDetail';
import Learn from './pages/Learn';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AUTH_ROUTES = ['/signin', '/signup'];

function Layout() {
  const { pathname } = useLocation();
  const isAuth = AUTH_ROUTES.includes(pathname);
  return (
    <>
      {!isAuth && <Navbar />}
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/explore"      element={<Explore />} />
        <Route path="/price/:asset" element={<AssetDetail />} />
        <Route path="/learn"        element={<Learn />} />
        <Route path="/signin"       element={<SignIn />} />
        <Route path="/signup"       element={<SignUp />} />
      </Routes>
      {!isAuth && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
