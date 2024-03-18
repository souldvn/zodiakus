
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Loading.module.css';

const Loading = () => {
    const [loadingText, setLoadingText] = useState('Обрабатываем данные');
    const navigate = useNavigate();

    useEffect(() => {
        const texts = ['Подбираем знак зодиака', 'Почти закончили', 'Готово!'];

        let currentIndex = 0;
        const interval = setInterval(() => {
            setLoadingText(texts[currentIndex]);
            currentIndex = (currentIndex + 1) % texts.length;
        }, 1250);

        setTimeout(() => {
            clearInterval(interval);
            
            navigate('/sign');
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [navigate]);

    return (
        <div className={s.loading}>
            <div className={s.container}>
                <div className={s.flex}>
                    <div className={s.loader}></div>
                </div>
                <p className={s.text}>{loadingText}</p>
            </div>
        </div>
    );
};

export default Loading;
