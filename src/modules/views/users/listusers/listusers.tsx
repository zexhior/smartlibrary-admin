import TableComponent from '../../../../widgets/table/table';
import './listusers.scss';
import { TitleColored } from '../../../../styles/titlescolored';
import { User } from '../../../models/users';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import { Button } from '../../../../styles/button';
import { useDispatch, useSelector } from 'react-redux';
import { changeContent, changeModal } from '../../../../redux/redux';
import Message from '../../modal/message/message';
import { setListUser, setUser } from '../../../../redux/userredux';
import useGetAllElement from '../../../controllers/GetAllElement';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import { useState } from 'react';
import Loading from '../../../../common/loading/loading';
import DeleteElement from '../../../controllers/DeleteElement';

const ListUsers = ()=>{
    const [page,setPage] = useState<number>(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useGetAllElement<User>('users',0,setListUser);
    const elements = useSelector((state:any)=>state.user.users);
    //const result = useSelector((state:any)=>state.search.users);
    //const activated = useSelector((state:any)=>state.search.activated);

    const title = ["User", "Nom", "E-mail","Adresse","Date de naissance"]
    const title2 = ["User", "Nom"];
    const keys = ["photo","name","email","address","birth_date"];
    const keys2 = ["photo","name"];

    const HandlerDeleteUser = (e:any,i:number)=>{
        e.preventDefault();
        dispatch(changeContent(<Message message='Voulez-vous vraiment supprimer cet utilisateur?'
        allowedfunction={async ()=>{
            await DeleteElement('users/',elements[i]._id);
            window.location.reload();
        }}/>));
        dispatch(changeModal(true));
    }

    const HandlerViewUser = (e:any,i:number)=>{
        e.preventDefault();
        if(elements){
            dispatch(setUser(elements[i]));
            navigate(`/users/${elements[i]._id}`);
        }
    }

    return (
        <div className='users-container-content-info'>
            <TitleColored className='full-width'>Utilisateurs</TitleColored>
            <div className='info-window'>
                {
                    (elements?.length > 0)?
                    (
                        <>
                            <TableComponent titles={title} users={elements} keys={keys}/>
                            <div className='option-element'>
                                <div className='option-title'>Option</div>
                                {
                                    elements?.map((user:User,i:number)=>{
                                        if(i%2===0)
                                            return (<div className='option' key={i} >
                                                        <Button className='button animation' onClick={(e)=>HandlerViewUser(e,i)}>
                                                            <FaEye size={"10px"}></FaEye>
                                                        </Button>
                                                        <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e,i)}>
                                                            <FaTrashAlt></FaTrashAlt>
                                                        </Button>
                                                    </div>);
                                        else
                                            return (<div className='option' key={i}>
                                                        <Button className='button animation' onClick={(e)=>HandlerViewUser(e,i)}>
                                                            <FaEye></FaEye>
                                                        </Button>
                                                        <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e,i)}>
                                                            <FaTrashAlt></FaTrashAlt>
                                                        </Button>
                                                    </div>);
                                    })
                                }
                            </div>
                        </>
                    ):(
                        <Loading/>
                    )
                }
            </div>
            <div className='mini-info-window'>
                <TableComponent titles={title2} users={elements} keys={keys2}/>
                <div className='option-element'>
                    <div className='option-title'>Option</div>
                    {
                        elements?.map((user:User,i:number)=>{
                            if(i%2===0)
                                return (<div className='option'>
                                            <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                                <FaEye></FaEye>
                                            </Button></Link>
                                            <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e,i)}>
                                                <FaTrashAlt></FaTrashAlt>
                                            </Button>
                                        </div>);
                            else
                                return (<div className='option'>
                                            <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                                <FaEye></FaEye>
                                            </Button></Link>
                                            <Button className='button animation' onClick={(e)=>HandlerDeleteUser(e,i)}>
                                                <FaTrashAlt></FaTrashAlt>
                                            </Button>
                                        </div>);
                        })
                    }
                </div>
            </div>
            <PaginationComponent page={page} setPage={setPage}/>
        </div>);
}

export default ListUsers;