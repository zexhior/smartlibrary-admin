import { User } from './../models/users';
import axios from 'axios';

const useSignUp = (user: User)=>{
    
    function signup(){
        return axios.post("http://127.0.0.1:3400/api/v1/users/signup",user).then(response=>{
            localStorage.setItem("bearer",response.data.token);
            localStorage.setItem("id",response.data.data.user._id);
            return response.data.data;
        }).catch(error=>{
            return error.message;
        });
    }
    return signup();
}

export default useSignUp;