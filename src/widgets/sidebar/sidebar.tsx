import { ReactNode } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import './sidebar.scss';
import User from '../../common/images/user.jpg';
import SideBarContent from './sidebarcontent/sidebarcontent';
import { LogOut } from '../../modules/controllers/Logout';
import { useNavigate } from 'react-router-dom';

interface SideBarProps{
    groupelements: ReactNode[]
}

const SideBar : React.FC<SideBarProps> = ({groupelements})=>{
    const navigate = useNavigate();
    
    const HandlerLogOut = ()=>{
        LogOut();
        navigate('/login');
    }

    return (<div className='sidebar-container'>
        <div className='sidebar-profil animation'>
            <img  className='sidebar-profil-img' src={User} alt='profil-user'/>
            <div className='sidebar-profil-name'>
                <p className='sidebar-profil-name-last text-color-white'>RAVELOMANANTSOA</p>
                <p className='sidebar-profil-name-first text-color-white'>Brice Herizo</p>
            </div>
        </div>
        {
            groupelements.map((group,i)=>{
                return (<span key={i}>
                    {group}
                </span>);
            })
        }
        <div className='sidebar-bottom animation' onClick={HandlerLogOut}>
            <SideBarContent icon={<FaSignOutAlt fill='#FFFFFF'/>} element='Deconnexion'/>
        </div>
    </div>)
}

export default SideBar;