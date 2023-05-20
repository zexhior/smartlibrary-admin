import { Api } from "../../utils/api";

export const LogOut = async ()=>{
    localStorage.removeItem("bearer");
    localStorage.removeItem("id");
    await Api.get('users/logout');
}