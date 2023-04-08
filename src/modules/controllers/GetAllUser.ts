import { User } from './../models/users';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Api } from '../../utils/api';

const GetAllUser = ()=>{
    const state = useSelector((state:any)=>state)
    const [users,setUsers] = useState<Array<User>>()

    useEffect(()=>{
        function getAllUser(){
            const api = new Api();
            api.get(`users/`).then((data)=>{
                console.log(data.data.data);
                setUsers(data.data.data);              
            }).catch((error)=>{
                console.log(error)
            })
        }
        getAllUser();
    },[state.page])

    return {users,setUsers};
}

export default GetAllUser;