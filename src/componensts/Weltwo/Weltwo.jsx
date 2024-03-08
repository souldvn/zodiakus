import React, { useState } from 'react';
import s from './Weltwo.module.css'
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';


import welpic2 from '../../img/Ontwo.svg'


const Weltwo = () => {

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClick('/start'),
  });

    const navigate = useNavigate()
    const [isMainOut, setIsMainOut] = useState(false);

  const handleClick = (path) =>{
    if (path === '/start'){
      navigate('/start')
      setIsMainOut(true);
    }  if(path === '/main'){
      navigate('/main')
    }
  }
  



  return (
    <div {...handlers}>
    <div className={s.main_two}>
        <img className={s.pic} src={welpic2} alt="Onboarding two" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>Встречайте, Зодиакус!</p>
            <p className={s.text}>Наш магический помощник всегда готов ответить на ваши вопросы и поделиться своими советами. Общайтесь с ним, и он поможет вам найти ответы на самые загадочные вопросы.</p>
            </div>
            <div className={s.buttons}>
              <button onClick={() => handleClick('/start')} className={s.next}>Далее</button>
              <button onClick={() => handleClick('/main')} className={s.skip}>Пропустить</button>
            </div>
          
            
        </div>
    </div>
    </div>
  )
}

export default Weltwo