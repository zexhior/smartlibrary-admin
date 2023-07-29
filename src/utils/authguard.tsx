import { Navigate } from 'react-router-dom';
import Home from '../modules/views/home/home';

const AuthGuard = ({children = <Home/>})=>{
    if(!localStorage.getItem("bearer")){
        return <Navigate to='/login'/>
    }
    return children;
}

export default AuthGuard;