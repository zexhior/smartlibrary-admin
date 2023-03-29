import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import './books.scss';

const Books = ()=>{
    return (<div className='books-container'>
        <Navigation/>
        <Outlet/>
    </div>)
}

export default Books;