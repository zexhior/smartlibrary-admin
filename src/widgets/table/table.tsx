import styled from 'styled-components';
import { Button } from '../../styles/button';
import {FaTrashAlt, FaEye} from 'react-icons/fa';
import { Table } from '../../styles/table';
import './table.scss';
import { User } from '../../modules/models/users';
import { useNavigate,Link } from 'react-router-dom';

const TRLightGray = styled.tr`
    background-color: rgb(247, 247, 247);
`
const TRGray = styled.tr`
    background-color: rgb(226, 226, 226);
`
const TRColored = styled.tr`
    background-color: #00001A;
    padding: 5px;
    color: rgb(226, 226, 226);
    font-weight: 500;
`
const TDTitle = styled.td`
    padding: 10px;
`


const TableComponent = ({titles=[""],users=new Array<User>()})=>{
    const navigate = useNavigate();

    const HandlerViewUser = ()=>{
        navigate('/users/info/1');
    }
    
    
    return (<Table className='table-window'>
                <TRColored>
                    {
                        titles.map((element,i)=>{
                            return (<TDTitle>{element}</TDTitle>)
                        })
                    }
                </TRColored>
                {
                    users.map((element,i)=>{
                        if(i%2!==0){
                            return(<TRLightGray>
                                <td><img src={element.photo.toString()} alt='user' width="50px" height="50px"/></td>
                                <td>{`${element.name} ${element.first_name}`}</td>
                                <td>{element.email}</td>
                                <td>{element.address}</td>
                                <td>{element.birth_date}</td>
                                <td className='options'>
                                    <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                        <FaEye></FaEye>
                                    </Button></Link>
                                    <Button className='button animation'>
                                        <FaTrashAlt></FaTrashAlt>
                                    </Button>
                                </td>
                            </TRLightGray>)
                        }else{
                            return(<TRGray>
                                <td><img src={element.photo.toString()} alt='user' width="50px" height="50px"/></td>
                                <td>{`${element.name} ${element.first_name}`}</td>
                                <td>{element.email}</td>
                                <td>{element.address}</td>
                                <td>{element.birth_date}</td>
                                <td className='options'>
                                    <Link to='/users/1' style={{textDecoration : "none"}}><Button className='button animation'>
                                        <FaEye></FaEye>
                                    </Button></Link>
                                    <Button className='button animation'>
                                        <FaTrashAlt></FaTrashAlt>
                                    </Button>
                                </td>
                            </TRGray>)
                        }
                        
                    })
                }
            </Table>);
}

export default TableComponent;

