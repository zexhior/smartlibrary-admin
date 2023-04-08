import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { User } from '../models/users';
import { Api } from './../../utils/api';
import { getCurrentUser } from '../../redux/myaccountredux';

const useGetUser = (_id:string | null)=>{
    const [user,setUser] = useState<User>();
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getUser(){
            const api = new Api();
            api.get(`users/${_id}`).then((data)=>{
                setUser(data.data.data);
                dispatch(getCurrentUser(data.data.data));
            }).catch((error)=>{
                console.log(error);
            });
        }
        getUser();
    },[_id])

    return user;
}

export default useGetUser;