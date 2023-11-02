import { Api } from "../../utils/api";

const UpdateElement = (url:string,id:string,data:any)=>{
    function Update(){
        Api.put(`${url}/${id}`,data).then((data)=>{
            console.log(data);
            window.location.reload();
        }).catch((error)=>{
            console.log(data);
        })
    }
    Update();
}

export default UpdateElement;