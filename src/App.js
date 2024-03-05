
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './componensts/Welcome/Welcome';
import Weltwo from './componensts/Weltwo/Weltwo';
import Welthree from './componensts/Welthree/Welthree';




const tg = window.Telegram.WebApp


function App() {

  // useEffect (() =>{
  //   tg.ready()
  // }, [])

  // const onClose = () =>{
  //   tg.close()
  // }


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/zodiakus" element={<Weltwo />} />
        <Route path="/start" element={<Welthree />} />
        
      </Routes>
    </Router>
  </div>
  );
}

export default App;
