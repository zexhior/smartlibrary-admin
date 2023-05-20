import { useEffect, useState } from 'react';
import './loading.scss';
import EmptyList from '../../widgets/emptylist/emptylist';
import Offline from '../offline/offline';
import axios from 'axios';
import { Api } from '../../utils/api';

const Loading = ()=>{
    const [page,setPage] = useState<number>(0);

    setTimeout(async ()=>{
        try{
            await Api.get('authors');
            setPage(1);
        }catch(e){
            setPage(2);
        }
    },10000)

    if(page === 0)
        return (<div className='loading-container'>
            <div className="load">
                <div className="load__bar load__bar--1"></div>
                <div className="load__bar load__bar--2"></div>
                <div className="load__bar load__bar--3"></div>
                <div className="load__bar load__bar--4"></div>
                <div className="load__bar load__bar--5"></div>
            </div>
        </div>);
    else if(page === 2)
        return (<Offline/>);
    else
        return (<EmptyList/>)
}

export default Loading;