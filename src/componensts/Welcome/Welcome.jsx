import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Welcome.module.css';
import welpic1 from '../../img/Onone.svg';
import { useSwipeable } from 'react-swipeable';




const Welcome = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClick('/zodiakus')
  });

  const handleClick = (path) => {
    if (path === '/main') {
      navigate('/main');
      setIsSwipperActive(true);
    }

    if (path === '/zodiakus') {
      navigate('/zodiakus');
    }
  };

  return (
    <div {...handlers}>
      <div className={s.main}>
        <img className={s.pic} src={welpic1} alt="Onboarding one" />
        <div className={s.action}>
          <div className={s.descript}>
            <p className={s.title}>ПОБЕДА БУДЕТ ЗА НАМИ!</p>
            <p className={s.text}>Добро пожаловать! Здесь вы найдете персонализированный прогноз для вашего знака зодиака. Узнайте, что звезды говорят о вашем будущем.</p>
          </div>
          <div className={s.buttons}>
            <button onClick={() => handleClick('/zodiakus')} className={s.next}>Далее</button>
            <button onClick={() => handleClick('/main')} className={s.skip}>Пропустить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
