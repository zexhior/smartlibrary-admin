import axios from "axios";

let token = localStorage.getItem('bearer');

let config = {
    headers: {
        'authorization' : 'Bearer '+token
    }
}

export class Api{
    static root = "http://127.0.0.1:3400/api/v1/";

    static get(url:string){
        return axios.get(Api.root+url, config);
    }

    static put(url:string,data: any){
        return axios.put(Api.root+url, data, config);
    }

    static post(url:string, data:any){
        return axios.post(Api.root+url, data, config);
    }

    static delete(url:string){
        return axios.delete(Api.root+url, config);
    }
}