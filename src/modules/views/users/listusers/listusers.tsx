import TableComponent from '../../../../widgets/table/table';
import UserImage from '../../../../common/images/user.jpg';
import './listusers.scss';
import React from 'react';
import { TitleColored } from '../../../../styles/titlescolored';
import { User } from '../../../models/users';

const ListUsers = ()=>{
    const users : Array<User> = [{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },
        {
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },{
            _id: "",
            name: "Ravelomanantsoa",
            first_name: "Richard",
            address: "Lot II A 45 Talata",
            birth_date: "12/02/23",
            phone_number: "0341500516",
            email: "ravelorichard12@gmail.com",
            photo: UserImage,
            password: "",
            passwordConfirm: "",
            role: "Administrateur"
        },
    ]

    const title = ["User", "Nom", "E-mail","Adresse","Date de naissance","Options"]
    const title2 = ["User", "Nom","Options"];
    const keys = ["name","email","address","birth_date"];
    const keys2 = ["name"];

    return (<div className='users-container-content-info'>
                <div className='info-window'>
                    <TitleColored className='full-width'>Utilisateurs</TitleColored>
                    <TableComponent titles={title} users={users} keys={keys}/>
                </div>
                <div className='mini-info-window'>
                    <TitleColored className='full-width'>Utilisateurs</TitleColored>
                    <TableComponent titles={title2} users={users} keys={keys2}/>
                </div>
            </div>);
}

export default ListUsers;