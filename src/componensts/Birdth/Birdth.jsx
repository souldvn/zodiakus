import React, { useState } from 'react'
import s from './Birdth.module.css'
import { useNavigate } from 'react-router-dom'

const Birdth = ({ setBirthDate }) => {
  const [dateValue, setDateValue] = useState('')

  


  const handleDateChange = (e) => {
    setDateValue(e.target.value)
  }

  

  const navigate = useNavigate()

  const handleNextClick = () => {
    if (dateValue)
    setBirthDate(dateValue);
    navigate('/loading')
  }

  return (
    <div className={s.birdth}>
        <div className={s.action}>
            <p>Укажите дату рождения</p>
            <input className={s.date} type='date' inputMode='numeric'  onChange={handleDateChange} />
        </div>
        <button className={s.next} style={{backgroundColor: dateValue ? '#7E46E8' : ''}} onClick={handleNextClick}>Далее</button>
    </div>
  )
}

export default Birdth
