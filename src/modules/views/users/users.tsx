import { Outlet } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import './users.scss';
import React from 'react';

const Users = ()=>{

    return (<div className='users-container'>
        <Navigation/>
        <div className='users-container-content'>
            <Outlet/>
        </div>
    </div>)
}

export default Users;