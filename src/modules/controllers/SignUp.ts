import { User } from './../models/users';
import { Api } from '../../utils/api';

const SignUp = (user: User)=>{
    //const dispatch = useDispatch();

    function signup(){
        return Api.post("users/signup",user).then(response=>{
            localStorage.setItem("bearer",response.data.token);
            localStorage.setItem("id",response.data.data.user._id);
            //dispatch(getCurrentUser(response.data.data));
            return response.data.data;
        }).catch(error=>{
            console.log(error);
            return error.message;
        });
    }
    return signup();
}

export default SignUp;