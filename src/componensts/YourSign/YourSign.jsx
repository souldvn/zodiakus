import React from 'react';
import { useNavigate } from 'react-router-dom'
import s from './YourSign.module.css';
import aries from '../../sings/oven.svg';
import taurus from '../../sings/telec.svg';
import gemini from '../../sings/bliz.svg';
import cancer from '../../sings/rak.svg';
import leo from '../../sings/lev.svg';
import virgo from '../../sings/deva.svg';
import libra from '../../sings/vesy.svg';
import scorpio from '../../sings/skorpion.svg';
import sagittarius from '../../sings/strelec.svg';
import capricorn from '../../sings/kozerog.svg';
import aquarius from '../../sings/vodoley.svg';
import pisces from '../../sings/ryby.svg';


const getSign = (month, day) => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return aries;
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return taurus;
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return gemini;
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return cancer;
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return leo;
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return virgo;
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return libra;
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return scorpio;
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return sagittarius;
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return capricorn;
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return aquarius;
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return pisces;
  }
};

const YourSign = ({ birthDate }) => {
  const dateParts = birthDate.split('-');
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);
  const signImage = getSign(month, day);

  const navigate = useNavigate()

  const onChoose = () =>{
    navigate('/choose')
  }

  return (
    <div className={s.main}>
      <div className={s.info}>
        <p>Ваш знак зодиака</p>
        {signImage && <img src={signImage} alt="Sign" />}
      </div>
      <div className={s.buttons}>
            <button className={s.next}>Далее</button>
            <button onClick={onChoose} className={s.skip}>Выбрать вручную</button>
          </div>
    </div>
  );
};

export default YourSign;
