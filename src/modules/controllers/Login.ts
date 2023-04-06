import axios from 'axios';

const useLogin = (email:string,password:string)=>{
    function login(){
        return axios.post("http://127.0.0.1:3400/api/v1/users/login",{email, password}).then(response=>{
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