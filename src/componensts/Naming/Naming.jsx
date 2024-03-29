import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Naming.module.css'

const Naming = ({setnameValueClient}) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const [nameValue, setnameValue] = useState('')



  const handleChange = (e) => {
    const value = (e.target.value)
    setName(e.target.value);
    setnameValue (value)
    setIsValid(e.target.value.length >= 3 && e.target.value.length <= 15);
  }

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  const handleNextClick = () => {
    if (isValid) {
      setButtonClicked(true);
      setnameValueClient(nameValue)
      navigate('/gender');

    }
  }

  return (
    <div className={s.naming}>
        <div className={s.setName}>
            <p>Придумайте имя</p>
            <input 
              type='text' 
              placeholder='Имя' 
              value={name} 
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={!isValid && isFocused ? s.invalid : ''}
            />
            {!isValid && isFocused && <p className={s.errorMessage}>Имя должно содержать не менее 3 и не более 15 символов</p>}
        </div>
        <button className={isValid ? s.nextValid : s.next} onClick={handleNextClick}>Далее</button>
    </div>
  )
}

export default Naming

