import { FaBookOpen, FaPen, FaUser } from 'react-icons/fa';
import SideBar from '../../../widgets/sidebar/sidebar';
import GroupSideBar from '../../../widgets/sidebar/groupsidebar/groupsidebar';
import './home.scss';
import SideBarContent from '../../../widgets/sidebar/sidebarcontent/sidebarcontent';
import { Button } from '../../../styles/button';
import Users from '../users/users';

const Home = ()=>{
    const elements = [
        <SideBarContent icon={<FaUser width={""} fill='#FFFFFF'/>} element="Utilisateurs"/>,
        <SideBarContent icon={<FaUser fill='#FFFFFF'/>} element="Administrateurs"/>,
        <SideBarContent icon={<FaBookOpen fill='#FFFFFF'/>} element="Livres"/>,
        <SideBarContent icon={<FaPen fill='#FFFFFF'/>} element="Auteurs"/>,
        ];

    const group = [
        <GroupSideBar elements={elements}/>
    ]

    return (<div className='container-home'>
        <div>
            <SideBar groupelements={group}/>
        </div>  
        <div className='home-content'>
            <Users/>
        </div>
    </div>)
}

export default Home;