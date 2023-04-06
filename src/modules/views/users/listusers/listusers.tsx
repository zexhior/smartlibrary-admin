import TableComponent from '../../../../widgets/table/table';
import UserImage from '../../../../common/images/user.jpg';
import './listusers.scss';
import { TitleColored } from '../../../../styles/titlescolored';
import { User } from '../../../models/users';
import { Link } from 'react-router-dom';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import { Button } from '../../../../styles/button';
import { useDispatch } from 'react-redux';
import { changeContent, changeModal } from '../../../../redux/redux';
import DeleteUser from '../../modal/deleteuser/deleteuser';
import Message from '../../modal/message/message';

const ListUsers = ()=>{
    const dispatch = useDispatch();

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

    const title = ["User", "Nom", "E-mail","Adresse","Date de naissance"]
    const title2 = ["User", "Nom"];
    const keys = ["photo","name","email","address","birth_date"];
    const keys2 = ["photo","name"];

    const HandlerDeleteUser = (e:any)=>{
        e.preventDefault();
        dispatch(changeContent(<Message message='Voulez-vous vraiment supprimer cet utilisateur?'
        allowedfunction={()=>{}}/>));
        dispatch(changeModal(true));
    }

    return (<div className='users-container-content-info'>
                <TitleColored className='full-width'>Utilisateurs</TitleColored>
                <div className='info-window'>
                    <TableComponent titles={title} users={users} keys={keys}/>
                    <div className='option-element'>
                        <div className='option-title'>Option</div>
                        {
                            users.map((user:User,i:number)=>{
                                if(i%2===0)
                                    return (<div className='option' style={{backgroundColor: 'rgb(226, 226, 226)'}}>
                                                <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                                    <FaEye></FaEye>
                                                </Button></Link>
                                                <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e)}>
                                                    <FaTrashAlt></FaTrashAlt>
                                                </Button>
                                            </div>);
                                else
                                    return (<div className='option' style={{backgroundColor: 'rgb(247, 247, 247)'}}>
                                                <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                                    <FaEye></FaEye>
                                                </Button></Link>
                                                <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e)}>
                                                    <FaTrashAlt></FaTrashAlt>
                                                </Button>
                                            </div>);
                            })
                        }
                    </div>
                </div>
                <div className='mini-info-window'>
                    <TableComponent titles={title2} users={users} keys={keys2}/>
                    <div className='option-element'>
                        <div className='option-title'>Option</div>
                        {
                            users.map((user:User,i:number)=>{
                                if(i%2===0)
                                    return (<div className='option' style={{backgroundColor: 'rgb(226, 226, 226)'}}>
                                                <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                                    <FaEye></FaEye>
                                                </Button></Link>
                                                <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e)}>
                                                    <FaTrashAlt></FaTrashAlt>
                                                </Button>
                                            </div>);
                                else
                                    return (<div className='option' style={{backgroundColor: 'rgb(247, 247, 247)'}}>
                                                <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                                    <FaEye></FaEye>
                                                </Button></Link>
                                                <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e)}>
                                                    <FaTrashAlt></FaTrashAlt>
                                                </Button>
                                            </div>);
                            })
                        }
                    </div>
                </div>
            </div>);
}

export default ListUsers;