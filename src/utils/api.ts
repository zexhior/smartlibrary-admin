import axios from "axios";

let token = localStorage.getItem('bearer');

let config = {
    headers: {
        'authorization' : 'Bearer '+token
    }
}

export class Api{
    //static root = "http://127.0.0.1:3400";
    //static root = "http://192.168.100.168:3400";
    //static root = "http://10.42.0.1:3400";
    //static root = "http://192.168.100.125:3400"
    static root = "http://192.168.1.134:3400";
    static version = "/api/v1/"

    static get(url:string){
        return axios.get(Api.root+Api.version+url, config);
    }

    static put(url:string,data: any){
        return axios.put(Api.root+Api.version+url, data, config);
    }

    static post(url:string, data:any){
        return axios.post(Api.root+Api.version+url, data, config);
    }

    static delete(url:string){
        return axios.delete(Api.root+Api.version+url, config);
    }
}