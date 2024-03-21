import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

const NewSign = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const selectImg = (id) => {
        if (id === '1') {
            return aries;
        } else if (id === '2') {
            return taurus;
        } else if (id === '3') {
            return gemini;
        } else if (id === '4') {
            return cancer;
        } else if (id === '5') {
            return leo;
        } else if (id === '6') {
            return virgo;
        } else if (id === '7') {
            return libra;
        } else if (id === '8') {
            return scorpio;
        } else if (id === '9') {
            return sagittarius;
        } else if (id === '10') {
            return capricorn;
        } else if (id === '11') {
            return aquarius;
        } else if (id === '12') {
            return pisces;
        }
    };

    const onChoose = () => {
        navigate('/choose');
    };

    const onNext = () => {
        navigate('/main');
    };

    const endSign = selectImg(id)

    return (
        <div className={s.main}>
            <div className={s.info}>
                <p>Ваш знак зодиака</p>
                <img src={endSign} alt={`sign_${id}`} />
            </div>
            <div className={s.buttons}>
                <button onClick={onNext} className={s.next}>Далее</button>
                <button onClick={onChoose} className={s.skip}>Выбрать вручную</button>
            </div>
        </div>
    );
};

export default NewSign;
