import React, { useState } from 'react'
import s from './Birdth.module.css'
import { useNavigate } from 'react-router-dom'

const Birdth = () => {
  const [dateValue, setDateValue] = useState('')

  const handleDateChange = (e) => {
  const inputDate = e.target.value;
  // Проверка формата ввода даты
  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(inputDate)) {
    setDateValue(inputDate);
  }
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
            <input className={s.date} type='text' value={dateValue} onChange={handleDateChange} placeholder='ДД.ММ.ГГГГ' />
        </div>
        <button className={s.next} style={{backgroundColor: dateValue ? '#7E46E8' : ''}} onClick={handleNextClick}>Далее</button>
    </div>
  )
}

export default Birdth
