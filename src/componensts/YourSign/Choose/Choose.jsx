import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
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

const Choose = ({setSign}) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    const onChangePic = (imageId) => {
        setSign(imageId);
        navigate('/sign')
    }



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
                    <img id={aries} onClick={onChangePic} src={aries} alt="aries" />
                    <img id={taurus} onClick={onChangePic} src={taurus} alt="taurus" />
                </div>
                <div className={s.sector}>
                    <img id={gemini} onClick={onChangePic} src={gemini} alt="gemini" />
                    <img id={cancer} onClick={onChangePic} src={cancer} alt="cancer" />
                </div>
                <div className={s.sector}>
                    <img id={leo} onClick={onChangePic} src={leo} alt="leo" />
                    <img id={virgo} onClick={onChangePic} src={virgo} alt="virgo" />
                </div>
                <div className={s.sector}>
                    <img id={libra} onClick={onChangePic} src={libra} alt="libra" />
                    <img id={scorpio} onClick={onChangePic} src={scorpio} alt="scorpio" />
                </div>
                <div className={s.sector}>
                    <img id={sagittarius} onClick={onChangePic} src={sagittarius} alt="sagittarius" />
                    <img id={capricorn} onClick={onChangePic} src={capricorn} alt="capricorn" />
                </div>
                <div className={s.sector}>
                    <img id={aquarius} onClick={onChangePic} src={aquarius} alt="aquarius" />
                    <img id={pisces} onClick={onChangePic} src={pisces} alt="pisces" />
                </div>
            </div>
        </div>
    );
}

export default Choose;

