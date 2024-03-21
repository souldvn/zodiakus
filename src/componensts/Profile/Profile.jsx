import React, {useState, useEffect} from 'react'
import s from './Profile.module.css'
import close from '../../icons/close.svg'
import man from '../../icons/genMan.svg'
import woman from '../../icons/genWoman.svg'
import star from '../../icons/star.svg'
import coin from '../../icons/coin.svg'
import edit from '../../icons/edit.svg'
import { useNavigate } from 'react-router-dom'
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




const Profile = ({nameClient, birthDate, gender}) => {

    
    
    const dateParts = birthDate.split('-');
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
    const signImage = getSign(month, day);


    const [nickClient, setNickClient] = useState(nameClient);
    const [newNickName, setNewNickName] = useState('');
    const [pol, setPol] = useState(gender)

    const [pic, setPic] = useState(signImage)



    const changeGender = (item) => {
        if(item === 'malec'){
          setPol('malec');
          localStorage.setItem('gender', 'malec'); // сохраняем пол в localStorage
        } else {
          setPol('female');
          localStorage.setItem('gender', 'female'); // сохраняем пол в localStorage
        }
      };


    
    const sex = () =>{
        if(pol === 'malec'){
            return <img src={man}/>
        } else {
            return <img src={woman}/>
        }
    }


    function scrollToPosition(position) {
        // Вычисляем высоту на 25% от высоты страницы
        const scrollTo = window.innerHeight * position;
        // Плавно прокручиваем страницу к заданной позиции
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth' // Для плавного скролла
        });
      }

    const onChangePic = (id) => {
        id = parseInt(id); // Convert id to integer
        if (id === 1) {
            setPic(aries);
        } else if (id === 2) {
            setPic(taurus);
        } else if (id === 3) {
            setPic(gemini);
        } else if (id === 4) {
            setPic(cancer);
        } else if (id === 5) {
            setPic(leo);
        } else if (id === 6) {
            setPic(virgo);
        } else if (id === 7) {
            setPic(libra);
        } else if (id === 8) {
            setPic(scorpio);
        } else if (id === 9) {
            setPic(sagittarius);
        } else if (id === 10) {
            setPic(capricorn);
        } else if (id === 11) {
            setPic(aquarius);
        } else if (id === 12) {
            setPic(pisces);
        }
        scrollToPosition(0.95)
        localStorage.setItem('sign', id.toString());
    };
    

    



    useEffect(() => {
        const storedName = localStorage.getItem('nickname');
        const storedGender = localStorage.getItem('gender');
        const storedSign = localStorage.getItem('sign');


        if (storedName) {
            setNickClient(storedName);
        }

        if (storedGender) {
            setPol(storedGender);
          }

          if (storedSign) {
            onChangePic(parseInt(storedSign)); // вызываем функцию с учётом сохранённого знака
          }
    }, []);

    const onChangeName = () => {
        if (newNickName.length >= 3 && newNickName.length <= 15) {
            setNickClient(newNickName);
            localStorage.setItem('nickname', newNickName); // Сохраняем новый никнейм в локальное хранилище
        }
    };

    const formattedBirthDate = birthDate ? new Date(birthDate).toLocaleDateString('en-GB') : '';

    const navigate = useNavigate()
    const onClose = () =>{
        
        navigate('/main') 
    }

  return (
    <div className={s.profile}>
        <div className={s.top}>
            <p>Профиль</p>
            <img onClick={onClose} src={close}></img>
            
        </div>
        <div className={s.profileInfo}>
            <p>Информация о пользователе</p>
            <div className={s.progress}>

                {sex()}

                <div className={s.grind}>
                    <div className={s.points}>
                    <div className={s.stargroup}>
                        <img className={s.star} src={star}></img>
                        <p className={s.starlevel}>0</p>
                    </div>
                    
                    <div className={s.starline}></div>
                    </div>
                    <div className={s.money}>
                    <div className={s.moneygroup}>
                        <img className={s.coin} src={coin}></img>
                    <div className={s.coinline}>4567</div>
                    </div>                   
                    </div>       
                </div>
            </div>
        </div>
        <div className={s.editComp}>
            <div className={s.name}>
                <div className={s.edit}>
                    <p>Имя</p>
                <img onClick={onChangeName} src={edit}/>
                </div>                
                <input
                className={s.inputName}
              type='text' 
              placeholder={nickClient}
              onChange={(e) => setNewNickName(e.target.value)}
            />
            </div>
            <div className={s.name}>
                <div className={s.edit}>
                    <p>Дата рождения</p>
                <img src={edit}/>
                </div>                
                <input
                className={s.inputName}
              type='text' 
              placeholder={formattedBirthDate}
            />
            </div>
            <div className={s.name}>
                <div className={s.edit}>
                    <p>Пол аватара</p>
                </div>
                <div className={s.gender}>
                    <img onClick={() => changeGender('malec')} className={pol === 'female' ? s.notSelected : ''} src={man} alt="Male" />
                    <img onClick={() => changeGender('female')} className={pol === 'malec' ? s.notSelected : ''} src={woman} alt="Male" />
                </div>                
            </div>
            <div className={s.name}>
                <div className={s.edit}>
                    <p>Знак зодиака</p>
                </div>
                <div className={s.sign}>
                    <img src={pic}/>
                </div>                
            </div>         
        </div>
        <div className={s.signList}>
            <div className={s.edit}>
                    <p>Все знаки</p>
            </div>
            <div className={s.choose}>
            <div>
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
        </div>
    </div>
  )
}

export default Profile