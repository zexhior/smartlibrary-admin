import TableComponent from '../../../../widgets/table/table';
import User from '../../../../common/images/user.jpg';
import './listusers.scss';

const ListUsers = ()=>{
    const users = [{
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
        },
        {
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },
    ]

    const title = ["User", "Nom & Prenom", "E-mail","Adresse","Date de naissance","Options"]

    return (<div className='users-container-content-info'>
                <div className='info-window'>
                    <p className='title-window text-color-lightgray'>Utilisateurs</p>
                    <TableComponent titles={title} users={users}/>
                </div>
            </div>);
}

export default ListUsers;