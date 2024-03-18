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

const Choose = () => {

    const navigate = useNavigate()
    const [selectedId, setSelectedId] = useState(null);

    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    const onChangePic = (id) => {
        setSelectedId(id);
        navigate(`/newSign/${id}`);
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
                    <img id={1} onClick={() => onChangePic(1)} src={aries} alt="aries" />
                    <img id={2} onClick={() => onChangePic(2)} src={taurus} alt="taurus" />
                </div>
                <div className={s.sector}>
                    <img id={3} onClick={() => onChangePic(3)} src={gemini} alt="gemini" />
                    <img id={4} onClick={() => onChangePic(4)} src={cancer} alt="cancer" />
                </div>
                <div className={s.sector}>
                    <img id={5} onClick={() => onChangePic(5)} src={leo} alt="leo" />
                    <img id={6} onClick={() => onChangePic(6)} src={virgo} alt="virgo" />
                </div>
                <div className={s.sector}>
                    <img id={7} onClick={() => onChangePic(7)} src={libra} alt="libra" />
                    <img id={8} onClick={() => onChangePic(8)} src={scorpio} alt="scorpio" />
                </div>
                <div className={s.sector}>
                    <img id={9} onClick={() => onChangePic(9)} src={sagittarius} alt="sagittarius" />
                    <img id={10} onClick={() => onChangePic(10)} src={capricorn} alt="capricorn" />
                </div>
                <div className={s.sector}>
                    <img id={11} onClick={() => onChangePic(11)} src={aquarius} alt="aquarius" />
                    <img id={12} onClick={() => onChangePic(12)} src={pisces} alt="pisces" />
                </div>
            </div>
        </div>
    );
}

export default Choose;

