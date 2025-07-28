import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Facility from './pages/facility';
import Addmission from './pages/Addmission';
import Login from './pages/Admin/Login'
import { Toaster } from 'react-hot-toast';
import Admin from './pages/Admin/Admin';
import PrivateRoute from './components/PrivateRoute';
import AOS from 'aos'
import "aos/dist/aos.css";
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { theme } = useContext(ThemeContext)


  return (
    <>
      <div className={theme === "dark" ? "bg-gray-900 text-white" : "" }>
        <Toaster />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/facility' element={<Facility />} />
          <Route path='/addmission-inquiry' element={<Addmission />} />
          <Route path='/login' element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
