import { Api } from './../../utils/api';

const CreateOneElement = (url:string,data:any)=>{
    function createOne(){
        return Api.post(url,data).then((data)=>{
            return data.data.data;
        }).catch((error)=>{
            return error;
        })
    }
    return createOne();
}

export default CreateOneElement;