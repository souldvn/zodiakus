import React from 'react'
import s from './Welcome.module.css'


import welpic1 from '../../img/Onboardingone.svg'

const Welcome = () => {
  return (
    <div className={s.main}>
        <img className={s.pic} src={welpic1} alt="Onboarding one" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>Ваш астрологический ассистент</p>
            <p className={s.text}>Добро пожаловать! Здесь вы найдёте персонализированный прогноз для вашего знака зодиака. Узнайте, что звезды говорят о вашем будущем и получите ценные советы для своей жизни.</p>
            </div>
            <div className={s.buttons}>
              <button className={s.next}>Далее</button>
              <button className={s.skip}>Пропустить</button>
            </div>
          
            
        </div>
    </div>
  )
}

export default Welcome