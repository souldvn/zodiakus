import React from 'react'
import s from './Main.module.css'
import cookie from '../../icons/cookie.svg'
import coin from '../../icons/coin.svg'
import star from '../../icons/star.svg'
import man from '../../icons/man.svg'
import invent from '../../icons/invent.svg'
import task from '../../icons/navbar/task.svg'
import main from '../../icons/navbar/main.svg'
import circle from '../../icons/navbar/circle.svg'
import games from '../../icons/navbar/games.svg'
import store from '../../icons/navbar/store.svg'
import helperdefault from '../../img/helperdefault.svg'
import helperthink from '../../img/helperthink.svg'
import helperidea from '../../img/helperidea.svg'



import { useNavigate } from 'react-router-dom'



const Main = () => {

  const navigate = useNavigate()


  const onOpenProfile = () =>{
    navigate('/profile')
  }




  return (
    <div className={s.general}>
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
      <div className={s.other}>
        <div className={s.cookie}>
          <img src={cookie}/>
          <div className={s.timer}>
            23ч 59м 34с
          </div>
        </div>
        <div className={s.profileinfo}>
          <img onClick={onOpenProfile} src={man}/>
          <img src={invent}/>

        </div>
       
      </div>
        <div className={s.helper}>
            <img className={s.helperimg} src={helperdefault}/>
        </div>
        <div className={s.navbar}>
          <div className={`${s.tasks} ${s.navitem}`}>
            <img src={task}/>
            <p>Задания</p>
          </div>
          <div className={`${s.mainslide} ${s.navitem}`}>
            <img src={main}/>
            <p>Главная</p>
          </div>
          <div className={`${s.circle} ${s.navitem}`}>
            <img src={circle}/>   
          </div>
          <div className={`${s.games} ${s.navitem}`}>
            <img src={games}/>
            <p>Игры</p>
          </div>
          <div className={`${s.store} ${s.navitem}`}>
            <img src={store}/>
            <p>Магазин</p>
          </div>
        </div>

    </div>
  )
}

export default Main