import { useEffect, useState } from 'react';
import './loading.scss';
import EmptyList from '../../widgets/emptylist/emptylist';
import Offline from '../offline/offline';
import axios from 'axios';
import { Api } from '../../utils/api';
import Load from '../load/load';

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
        return (<Load/>);
    else if(page === 2)
        return (<Offline/>);
    else
        return (<EmptyList/>)
}

export default Loading;