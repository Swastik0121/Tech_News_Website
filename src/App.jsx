import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import DataDisplay from './Components/DataDisplay';
import PC from './Components/PC';
import MobilePhone from './Components/MobilePhone';
import Console from './Components/Console';
import HpTitle from './Components/HpTitle';
import NewsDetail from './Components/NewsDetail';
import Footer from './Components/Footer'

const MainContent = () => {
    const location = useLocation();
  
    return (
      <div>
        <Routes>
          <Route path="/mobile-phone" element={<MobilePhone/>} />
          <Route path="/pc" element={<PC/>} />
          <Route path="/console" element={<Console/>} />
          <Route path="/news/:id" element={<NewsDetail/>} />  {/* Add NewsDetails route */}
        </Routes>
        {/* Conditionally render DataDisplay based on current route */}
        {location.pathname !== '/mobile-phone' &&
         location.pathname !== '/pc' &&
         location.pathname !== '/console' &&
         !location.pathname.startsWith('/news') && (  // Exclude NewsDetails route 
          <div>
            <HpTitle/>
            <DataDisplay endpoint="home"/>
          </div>
        )}
      </div>
    );
  };

function App() {

  return (
    <div style={{ backgroundColor: '#231f21', minHeight: '100vh' }}>
        <Router>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </Router>
    </div>
    
  );
}
export default App;


