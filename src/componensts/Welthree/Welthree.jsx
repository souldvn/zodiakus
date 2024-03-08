import React from 'react'
import s from './Welthree.module.css'
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';


import welpic3 from '../../img/Onthree.svg'



const Welthree = () => {

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClick('/main'),
  });

  const navigate = useNavigate()

const handleClick = (path) =>{
  if(path === '/main'){
    navigate('/main')
  }
}


  return (
    <div {...handlers}>
    <div className={s.main}>
        <img className={s.pic} src={welpic3} alt="Onboarding two" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>Развлекайтесь вместе</p>
            <p className={s.text}>Помимо прогнозов у нас есть интересные развлечения. Отличные мини-игры, увлекательные задания и игровой магазин с предметами ждут вас. Присоединяйтесь к нам и наслаждайтесь моментом.</p>
            </div>
            <div className={s.buttons}>
            <div className={s.skip}></div>
              <button onClick={() => handleClick('/main')} className={s.next}>Далее</button>           
            </div>
          
            
        </div>
    </div>
    </div>
  )
}

export default Welthree