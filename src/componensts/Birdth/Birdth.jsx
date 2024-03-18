import React, { useState } from 'react'
import s from './Birdth.module.css'
import { useNavigate } from 'react-router-dom'

const Birth = ({ setBirthDate }) => {
  const [dateValue, setDateValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDateValue(value);
    setIsValid(value !== '');
  }

  const navigate = useNavigate()

  const handleNextClick = () => {
    if (isValid) {
      setBirthDate(dateValue);
      navigate('/loading');
    }
  }

  return (
    <div className={s.birth}>
      <div className={s.action}>
        <p>Укажите дату рождения</p>
        <input className={s.date} type='date' inputMode='numeric' onChange={handleDateChange} />
      </div>
      <button className={s.next} style={{ backgroundColor: isValid ? '#7E46E8' : '' }} onClick={handleNextClick}>Далее</button>
    </div>
  )
}

export default Birth

