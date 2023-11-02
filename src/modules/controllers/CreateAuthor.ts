import { Api } from './../../utils/api';

const CreateController = (url:string, data:any)=>{
    async function create(){
        const response = await Api.post(url,data);
        console.log(response);
    }
    create();
}

export default CreateController;