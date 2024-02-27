
import { useEffect } from 'react';
import './App.css';
import Welcome from './componensts/Welcome/Welcome';

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
      <Welcome/>
    </div>
  );
}

export default App;
