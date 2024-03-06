import React from 'react'
import s from './Welthree.module.css'


import welpic3 from '../../img/Onboardingthree.svg'

const Welthree = () => {
  return (
    <div className={s.main}>
        <img className={s.pic} src={welpic3} alt="Onboarding two" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>Развлекайтесь вместе с нами</p>
            <p className={s.text}>Помимо прогнозов у нас есть интересные развлечения. Отличные мини-игры, увлекательные задания и игровой магазин с предметами ждут вас. Присоединяйтесь к нам и наслаждайтесь моментом.</p>
            </div>
            <div className={s.buttons}>
            <div className={s.skip}></div>
              <button className={s.next}>Далее</button>           
            </div>
          
            
        </div>
    </div>
  )
}

export default Welthree