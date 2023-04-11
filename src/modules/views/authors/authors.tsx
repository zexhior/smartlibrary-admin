import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import { Button } from '../../../styles/button';
import FloatButton from '../../../widgets/floatbutton/floatbutton';
import './authors.scss';

const Authors = ()=>{
    const navigate = useNavigate();

    const HandlerCloseModal = (e:any)=>{
        e.preventDefault();
        navigate('/authors/create');
    }

    return (<div className='authors-container'>
        <Navigation/>
        <FloatButton fonction={HandlerCloseModal}/>
        <Outlet/>
    </div>)
}

export default Authors;