import { Api } from './../../utils/api';

const useLogin = (email:string,password:string)=>{

    function login(){
        return Api.post("users/login",{email, password}).then(response=>{
            localStorage.setItem("bearer",response.data.token);
            localStorage.setItem("id",response.data.data.user._id);
            return response.data.data;
        })
        .catch((error:any)=>{
            return error.message;
        });
    }
    return login();
}

export default useLogin;