import React, { useState, useEffect } from 'react';
import s from './Choose.module.css';
import st from '../../Loading/Loading.module.css';
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
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={s.choose}>
            <div className={st.loading} style={{ display: loading ? 'block' : 'none' }}>
                <div className={st.container}>
                    <div className={st.flex}>
                        <div className={st.loader}></div>
                    </div>
                </div>
            </div>
            <div style={{ display: loading ? 'none' : 'block' }}>
                <div className={s.sector}>
                    <img src={aries} alt="aries" />
                    <img src={taurus} alt="taurus" />
                </div>
                <div className={s.sector}>
                    <img src={gemini} alt="gemini" />
                    <img src={cancer} alt="cancer" />
                </div>
                <div className={s.sector}>
                    <img src={leo} alt="leo" />
                    <img src={virgo} alt="virgo" />
                </div>
                <div className={s.sector}>
                    <img src={libra} alt="libra" />
                    <img src={scorpio} alt="scorpio" />
                </div>
                <div className={s.sector}>
                    <img src={sagittarius} alt="sagittarius" />
                    <img src={capricorn} alt="capricorn" />
                </div>
                <div className={s.sector}>
                    <img src={aquarius} alt="aquarius" />
                    <img src={pisces} alt="pisces" />
                </div>
            </div>
        </div>
    );
}

export default Choose;

