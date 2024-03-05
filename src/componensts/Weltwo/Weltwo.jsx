import React from 'react'
import s from './Weltwo.module.css'
import { useNavigate } from 'react-router-dom';


import welpic2 from '../../img/Onboardingtwo.svg'

const Weltwo = () => {

    const navigate = useNavigate()

  const handleClick = (path) =>{
    if (path === '/start'){
      navigate('/start')
    }
  }



  return (
    <div className={s.main}>
        <img className={s.pic} src={welpic2} alt="Onboarding two" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>Встречайте, Зодиакус!</p>
            <p className={s.text}>Наш магический помощник всегда готов ответить на ваши вопросы и поделиться своими советами. Общайтесь с ним, и он поможет вам найти ответы на самые загадочные вопросы.</p>
            </div>
            <div className={s.buttons}>
              <button onClick={() => handleClick('/start')} className={s.next}>Далее</button>
              <button className={s.skip}>Пропустить</button>
            </div>
          
            
        </div>
    </div>
  )
}

export default Weltwo