import { Navigate } from 'react-router-dom';
import Home from '../modules/views/home/home';

const AuthGuardLogin = ({children = <Home/>})=>{
    if(localStorage.getItem("bearer")){
        return <Navigate to='/'/>
    }
    return children;
}

export default AuthGuardLogin;