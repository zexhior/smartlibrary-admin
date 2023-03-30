import { UserImage } from '../../../../styles/userimages';
import './infouser.scss';
import User from '../../../../common/images/user.jpg';
import Onglet from '../../../../widgets/onglet/onglet';
import { SideTitle } from '../../../../styles/sidetitle';
import React from 'react';
import { TitleColored } from '../../../../styles/titlescolored';
import { Title } from '../../../../styles/title';
import { FaCalendarWeek, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';

const InfoUser = ()=>{
    const options = [{text:'Livres',link:''},
    {text:'Auteurs',link:'authors'}];

    const user = {
        _id: "",
        name: "Ravelomanantsoa",
        first_name: "Richard",
        address: "Lot II A 45 Talata",
        birth_date: "12/02/23",
        phone_number: "0341500516",
        email: "ravelorichard12@gmail.com",
        photo: User,
        password: "",
        passwordConfirm: "",
        role: "Administrateur"
    }
    
    return (<div className='infouser-container'>
        <div className='couverture'>
        </div>
        <div className='infouser'>
            <UserImage className='infouser-img' src={user.photo} alt='user'/>
            <div className='infouser-detail'>
                <Title className='last-name'>{user.name}</Title>
                <SideTitle className='first-name'>{user.first_name}</SideTitle>
                <div className='contact'>
                    <div className='infouser-detail-container'>
                        <FaHome className='icon'/>
                        <p>{user.address}</p>
                    </div>
                    <div className='infouser-detail-container'>
                        <FaCalendarWeek className='icon'/>
                        <p>{user.birth_date}</p>
                    </div>
                    <div className='infouser-detail-container'>
                        <FaMailBulk className='icon'/>
                        <p>{user.email}</p>
                    </div>
                    <div className='infouser-detail-container'>
                        <FaPhone className='icon'/>
                        <p>{user.phone_number}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='infouser-container-data'>
            <TitleColored>Utilisateurs</TitleColored>
            <Onglet options={options}/>
        </div>
    </div>);
}

export default InfoUser;