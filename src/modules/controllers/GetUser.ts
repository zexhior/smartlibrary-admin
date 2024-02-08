import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { User } from '../models/users';
import { Api } from './../../utils/api';
import { setCurrentUser } from '../../redux/userredux';

const useGetUser = (_id:string | null)=>{
    const [user,setUser] = useState<User>();
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getUser(){
            Api.get(`users/${_id}`).then((data)=>{
                setUser(data.data.data);
                dispatch(setCurrentUser(data.data.data));
            }).catch((error)=>{
                console.log(error);
            });
        }
        getUser();
    },[])

    return user;
}

export default useGetUser;