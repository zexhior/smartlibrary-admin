import TableComponent from '../../../../widgets/table/table';
import UserImage from '../../../../common/images/user.jpg';
import './listusers.scss';
import { TitleColored } from '../../../../styles/titlescolored';
import { User } from '../../../models/users';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import { Button } from '../../../../styles/button';
import { useDispatch } from 'react-redux';
import { changeContent, changeModal } from '../../../../redux/redux';
import Message from '../../modal/message/message';
import GetAllUser from '../../../controllers/GetAllUser';
import { setUser } from '../../../../redux/userredux';

const ListUsers = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users} = GetAllUser();

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

    const HandlerViewUser = (e:any,i:number)=>{
        e.preventDefault();
        if(users){
            dispatch(setUser(users[i]));
            navigate(`/users/${users[i]._id}`);
        }
    }

    return (<div className='users-container-content-info'>
                <TitleColored className='full-width'>Utilisateurs</TitleColored>
                <div className='info-window'>
                    <TableComponent titles={title} users={users} keys={keys}/>
                    <div className='option-element'>
                        <div className='option-title'>Option</div>
                        {
                            users?.map((user:User,i:number)=>{
                                if(i%2===0)
                                    return (<div className='option' key={i} style={{backgroundColor: 'rgb(226, 226, 226)'}}>
                                                <Button className='button animation' onClick={(e)=>HandlerViewUser(e,i)}>
                                                    <FaEye></FaEye>
                                                </Button>
                                                <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e)}>
                                                    <FaTrashAlt></FaTrashAlt>
                                                </Button>
                                            </div>);
                                else
                                    return (<div className='option' key={i} style={{backgroundColor: 'rgb(247, 247, 247)'}}>
                                                <Button className='button animation' onClick={(e)=>HandlerViewUser(e,i)}>
                                                    <FaEye></FaEye>
                                                </Button>
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
                            users?.map((user:User,i:number)=>{
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