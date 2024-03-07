import React from 'react'
import { useNavigate } from 'react-router-dom';
import s from './Welcome.module.css'


import welpic1 from '../../img/Onboardingone.svg'

const Welcome = () => {

  const navigate = useNavigate()

  const handleClick = (path) =>{
    if (path === '/zodiakus'){
      navigate('/zodiakus')
    }
    if(path === '/main'){
      navigate('/main')
    }
  }





  return (
    <div className={s.main}>
        <img className={s.pic} src={welpic1} alt="Onboarding one" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>ПОБЕДА БУДЕТ ЗА НАМИ!</p>
            <p className={s.text}>Добро пожаловать! Здесь вы найдёте персонализированный прогноз для вашего знака зодиака. Узнайте, что звезды говорят о вашем будущем и получите ценные советы для своей жизни.</p>
            </div>
            <div className={s.buttons}>
              <button onClick={() => handleClick('/zodiakus')} className={s.next}>Далее</button>
              <button onClick={() => handleClick('/main')} className={s.skip}>Пропустить</button>
            </div>
          
            
        </div>
    </div>
  )
}

export default Welcome