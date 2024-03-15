import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Welcome.module.css';
import welpic1 from '../../img/Onone.svg';
import welpic2 from '../../img/Ontwo.svg';
import welpic3 from '../../img/Onthree.svg';

import { useSwipeable } from 'react-swipeable';

const Welcome = () => {
  const firstDesc = 'Добро пожаловать! Здесь вы найдёте персонализированный прогноз для вашего знака зодиака. Узнайте, что звезды говорят о вашем будущем.'
  const secondDesc = 'Наш магический помощник всегда готов ответить на ваши вопросы и поделиться своими советами. Общайтесь с ним, и он поможет вам найти ответы на самые загадочные вопросы.'
  const thirdDesc = 'Помимо прогнозов у нас есть интересные развлечения. Отличные мини-игры, увлекательные задания и игровой магазин с предметами ждут вас. Присоединяйтесь к нам и наслаждайтесь моментом.'

  const firstGen = 'Ваш астрологический ассистент'
  const secondGen = 'Встречайте, Зодиакус!'
  const thirdGen = 'Развлекайтесь вместе c нами'

  const [welcomeText, setWelcomeText] = useState(firstGen);
  const [welcomeDesc, setWelcomeDesc] = useState(firstDesc);
  const [welcomePic, setWelcomePic] = useState(welpic1);
  const [welcomeClass, setWelcomeClass] = useState(s.pic)

  const navigate = useNavigate();


  
  

  const handleClick = (path) => {
    if (path === '/main') {
      navigate('/main');
    }
  };

  const handlePage = (page) =>{
    if (page === 'two'){
      setWelcomeText(secondGen);
      setWelcomeDesc(secondDesc);
      setWelcomePic(welpic2);
      setWelcomeClass(s.pictwo)
      
    }
    if (page === 'three'){
      setWelcomeText(thirdGen);
      setWelcomeDesc(thirdDesc);
      setWelcomePic(welpic3);
      setWelcomeClass(s.picthree)
    }
  }

  const handleNext = () =>{
    if (welcomeDesc === firstDesc){
      handlePage('two');
    }else if (welcomeDesc === secondDesc) {
      handlePage('three');
    } else if (welcomeDesc === thirdDesc){
      navigate('/naming')
    }
  }

  const handleBack = () =>{
    if (welcomeDesc === thirdDesc){
      handlePage('two');
    }else if (welcomeDesc === secondDesc) {
      handlePage('one')
    }
  }



  const handlers = useSwipeable({
    
    onSwipedLeft: () => {
      handleNext()
    },
    onSwipedRight: () => {
      handleBack();
    }

  });

  return (
    <div {...handlers}>
      <div className={s.main}>
        <img className={welcomeClass} src={welcomePic} alt="Onboarding" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>{welcomeText}</p>
            <p className={s.text}>{welcomeDesc}</p>
          </div>
          <div className={s.buttons}>
            <button onClick={handleNext} className={s.next}>Далее</button>
            <button onClick={() => handleClick('/naming')} className={s.skip}>Пропустить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
