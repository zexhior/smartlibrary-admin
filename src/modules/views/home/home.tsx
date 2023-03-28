import { FaBookOpen, FaPen, FaUser } from 'react-icons/fa';
import SideBar from '../../../widgets/sidebar/sidebar';
import GroupSideBar from '../../../widgets/sidebar/groupsidebar/groupsidebar';
import './home.scss';
import SideBarContent from '../../../widgets/sidebar/sidebarcontent/sidebarcontent';
import { Button } from '../../../styles/button';
import Users from '../users/users';
import { Link, Outlet } from 'react-router-dom';

const Home = ()=>{
    const elements = [
        <Link to='/users' style={{textDecoration:'none'}}><SideBarContent icon={<FaUser width={""} fill='#FFFFFF'/>} element="Utilisateurs"/></Link>,
        <SideBarContent icon={<FaUser fill='#FFFFFF'/>} element="Administrateurs"/>,
        <Link to='/books' style={{textDecoration:'none'}}><SideBarContent icon={<FaBookOpen fill='#FFFFFF'/>} element="Livres"/></Link>,
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
            <Outlet/>
        </div>
    </div>)
}

export default Home;