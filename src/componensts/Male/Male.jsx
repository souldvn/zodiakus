import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import s from './Male.module.css'
import male from '../../img/male.svg'
import female from '../../img/female.svg'

const Male = () => {
    const [selectedGender, setSelectedGender] = useState(null)

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender === selectedGender ? null : gender)
    }

    const navigate = useNavigate()

    const onNextPage = () =>{
        navigate ('/main')
    }

    return (
        <div className={s.male}>
            <div className={s.choose}>
                <p>Выберите пол для аватара</p>
                <div className={s.icon}>
                    <img 
                        className={selectedGender === 'malec' ? `${s.gender} ${s.selected}` : s.malec} 
                        onClick={() => handleGenderSelect('malec')} 
                        src={male} alt="male" 
                    />
                    <img 
                        className={selectedGender === 'female' ? `${s.gender} ${s.selected}` : s.female} 
                        onClick={() => handleGenderSelect('female')} 
                        src={female} alt="female" 
                    />
                </div>
            </div>
            <button onClick={selectedGender ? onNextPage : ''} className={selectedGender ? s.active : s.next}>Далее</button>
        </div>
    )
}

export default Male
