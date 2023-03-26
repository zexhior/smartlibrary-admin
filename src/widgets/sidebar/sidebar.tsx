import { ReactNode } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { SideTitle } from '../../styles/sidetitle';
import './sidebar.scss';
import User from '../../common/images/user.jpg';
import SideBarContent from './sidebarcontent/sidebarcontent';

interface SideBarProps{
    groupelements: ReactNode[]
}

const SideBar : React.FC<SideBarProps> = ({groupelements})=>{
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
                return group;
            })
        }
        <div className='sidebar-bottom animation'>
            <SideBarContent icon={<FaSignOutAlt fill='#FFFFFF'/>} element='Deconnexion'/>
        </div>
    </div>)
}

export default SideBar;