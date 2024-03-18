import React, { useState, useEffect } from 'react';
import s from './Choose.module.css'
import st from '../../Loading/Loading.module.css'
import aries from '../../../sings/oven.svg';
import taurus from '../../../sings/telec.svg';
import gemini from '../../../sings/bliz.svg';
import cancer from '../../../sings/rak.svg';
import leo from '../../../sings/lev.svg';
import virgo from '../../../sings/deva.svg';
import libra from '../../../sings/vesy.svg';
import scorpio from '../../../sings/skorpion.svg';
import sagittarius from '../../../sings/strelec.svg';
import capricorn from '../../../sings/kozerog.svg';
import aquarius from '../../../sings/vodoley.svg';
import pisces from '../../../sings/ryby.svg';

const Choose = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
        
        return () => clearTimeout(timer);
      }, []);
      




      return (
        <div className={s.choose}>
          {loading ? (
            <div className={st.loading}>
              <div className={st.container}>
                <div className={st.flex}>
                  <div className={st.loader}></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className={s.sector}>
                <img src={aries}/>
                <img src={taurus}/>
              </div>
              <div className={s.sector}>
                <img src={gemini}/>
                <img src={cancer}/>
              </div>
              <div className={s.sector}>
                <img src={leo}/>
                <img src={virgo}/>
              </div>
              <div className={s.sector}>
                <img src={libra}/>
                <img src={scorpio}/>
              </div>
              <div className={s.sector}>
                <img src={sagittarius}/>
                <img src={capricorn}/>
              </div>
              <div className={s.sector}>
                <img src={aquarius}/>
                <img src={pisces}/>
              </div>
            </>
          )}
        </div>
      );
}

export default Choose