import React,{useState,useEffect} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import MainHeader from 'component/main-header'
import Authroutes from 'routes/authroutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Loader from './component/loader'
import AOS from 'aos';
const App = () => {
const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 300,
      once: false,
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    const handleLoading = () => {
      setLoading(false);
    };
    
    // Simulate a network request or a delay
    const timeout = setTimeout(handleLoading, 500); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, [location]);
  
  return (
   <>
    {loading && <Loader />}
   <Routes>
        <Route path='/*' element={<MainHeader/>} />
        <Route path='/auth/*' element={<Authroutes/>} />
    </Routes>
   </>
  )
}

export default App;
