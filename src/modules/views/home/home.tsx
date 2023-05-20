import { FaBookOpen, FaPen, FaUser } from 'react-icons/fa';
import SideBar from '../../../widgets/sidebar/sidebar';
import GroupSideBar from '../../../widgets/sidebar/groupsidebar/groupsidebar';
import './home.scss';
import SideBarContent from '../../../widgets/sidebar/sidebarcontent/sidebarcontent';
import { Link, Outlet } from 'react-router-dom';
import Modal from '../../../widgets/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import useGetUser from '../../controllers/GetUser';
import { switchActivation } from '../../../redux/searchredux';

const Home = ()=>{
    const modal = useSelector((state:any)=>state.modal.activation);
    const dispatch = useDispatch();
    const user = useGetUser(localStorage.getItem('id'));
    
    const HandlerClickSection = ()=>{
        dispatch(switchActivation(false));
    }

    const elements = [
            <Link to='/users' className='no-style' onClick={(e)=>HandlerClickSection()}><SideBarContent icon={<FaUser width={""} fill='#FFFFFF'/>} element="Utilisateurs"/></Link>,
            /*<SideBarContent icon={<FaUser fill='#FFFFFF'/>} element="Administrateurs"/>,*/
            <Link to='/books' className='no-style' onClick={(e)=>HandlerClickSection()}><SideBarContent icon={<FaBookOpen fill='#FFFFFF'/>} element="Livres"/></Link>,
            <Link to='/authors' className='no-style' onClick={(e)=>HandlerClickSection()}><SideBarContent icon={<FaPen fill='#FFFFFF' />} element="Auteurs" /></Link>,
            <Link to='/categories' className='no-style' onClick={(e)=>HandlerClickSection()}><SideBarContent icon={<FaPen fill='#FFFFFF' />} element="Categories" /></Link>,
        ];

    const group = [
        <GroupSideBar elements={elements}/>
    ]

    return (<div className='home'>
        <div className='container-home'>
            {modal?(<Modal/>):(<></>)}
            <div>
                <SideBar groupelements={group}/>
            </div>  
            <div className='home-content'>
                <Outlet/>
            </div>
        </div>
    </div>);
}

export default Home;