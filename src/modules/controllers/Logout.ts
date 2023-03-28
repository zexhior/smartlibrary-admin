export const LogOut = ()=>{
    localStorage.removeItem("bearer");
    localStorage.removeItem("id");
}