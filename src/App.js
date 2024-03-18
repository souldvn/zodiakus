
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './componensts/Welcome/Welcome';
import Main from './componensts/Main/Main';
import Naming from './componensts/Naming/Naming';
import Profile from './componensts/Profile/Profile';
import Male from './componensts/Male/Male';
import Birdth from './componensts/Birdth/Birdth';
import Loading from './componensts/Loading/Loading';
import YourSign from './componensts/YourSign/YourSign';







const tg = window.Telegram.WebApp


function App() {

  const [birthDate, setBirthDate] = useState('');


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main/>}/>
        <Route path = "/naming" element = {<Naming/>}/>
        <Route path='/gender' element = {<Male/>}/>
        <Route path = '/date' element={<Birdth setBirthDate={setBirthDate} />}/>   
        <Route path = '/sign' element={<YourSign birthDate={birthDate} />}/>
        <Route path = '/loading' element = {<Loading/>}/>
      </Routes>
    </Router>


    {/* <Loading/> */}
    
    
    
    

  </div>
  );
}

export default App;
