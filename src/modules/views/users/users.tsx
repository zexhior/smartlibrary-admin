import { Outlet } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import './users.scss';
import { useDispatch } from 'react-redux';
import { changePageSearch } from '../../../redux/searchredux';

const Users = ()=>{
    const dispatch = useDispatch();
    dispatch(changePageSearch('user'));

    return (<div className='users-container'>
        <Navigation/>
        <div className='users-container-content'>
            <Outlet/>
        </div>
    </div>)
}

export default Users;