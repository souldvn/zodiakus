import React, { useState } from 'react'
import s from './Birdth.module.css'
import { useNavigate } from 'react-router-dom'

const Birdth = () => {
  const [dateValue, setDateValue] = useState('')

  const handleDateChange = (e) => {
    setDateValue(e.target.value)
  }

  const navigate = useNavigate()

  const handleNextClick = () => {
    if (dateValue){
       navigate('/main') 
    }
    
  }

  return (
    <div className={s.birdth}>
        <div className={s.action}>
            <p>Укажите дату рождения</p>
            <input className={s.date} type='date' value={dateValue} onChange={handleDateChange} />
        </div>
        <button className={s.next} style={{backgroundColor: dateValue ? '#7E46E8' : ''}} onClick={handleNextClick}>Далее</button>
    </div>
  )
}

export default Birdth
