import { UserImage } from '../../../../styles/userimages';
import './infouser.scss';
import UserDefault from '../../../../common/images/profil.jpg';
import Onglet from '../../../../widgets/onglet/onglet';
import { SideTitle } from '../../../../styles/sidetitle';
import { TitleColored } from '../../../../styles/titlescolored';
import { Title } from '../../../../styles/title';
import { FaCalendarWeek, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import GetOneElement from '../../../controllers/GetOneElement';
import { User } from '../../../models/users';
import { setUpdateUser } from '../../../../redux/userredux';
import Loading from '../../../../common/loading/loading';

const InfoUser = ()=>{
    const {id} = useParams();
    const options = [{text:'Livres',link:''},
    {text:'Auteurs',link:'authors'}];
    const {element} = GetOneElement<User>('users/',id,setUpdateUser);

    if(element){
        return (<div className='infouser-container'>
                    <div className='couverture'>
                    </div>
                    <div className='infouser'>
                        <UserImage className='infouser-img' src={element?.photo==='default.jpg'?UserDefault:element?.photo} alt='user'/>
                        <div className='infouser-detail'>
                            <Title className='last-name'>{element?.name}</Title>
                            <SideTitle className='first-name'>{element?.first_name}</SideTitle>
                            <div className='contact'>
                                <div className='infouser-detail-container'>
                                    <FaHome className='icon'/>
                                    <p>{element?.address}</p>
                                </div>
                                <div className='infouser-detail-container'>
                                    <FaCalendarWeek className='icon'/>
                                    <p>{element?.birth_date}</p>
                                </div>
                                <div className='infouser-detail-container'>
                                    <FaMailBulk className='icon'/>
                                    <p>{element?.email}</p>
                                </div>
                                <div className='infouser-detail-container'>
                                    <FaPhone className='icon'/>
                                    <p>{element?.phone_number}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='infouser-container-data'>
                        <TitleColored>Utilisateurs</TitleColored>
                        <Onglet options={options}/>
                    </div>
                </div>);
    }else{
        return(<Loading/>)
    }
}

export default InfoUser;