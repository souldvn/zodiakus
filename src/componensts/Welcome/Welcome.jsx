import React from 'react'
import s from './Welcome.module.css'


import welpic1 from '../../../img/Onboardingone.svg'
import welpic2 from '../../../img/Onboardingtwo.svg'
import welpic3 from '../../../img/Onboardingthree.svg'

const Welcome = () => {
  return (
    <div className={s.main}>
        <img src={welpic1} alt="Onboarding one" />
    </div>
  )
}

export default Welcome