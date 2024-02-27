import React from 'react'
import s from './Welcome.module.css'


import welpic1 from '../../img/Onboardingone.svg'

const Welcome = () => {
  return (
    <div className={s.main}>
        <img className={s.pic} src={welpic1} alt="Onboarding one" />
    </div>
  )
}

export default Welcome