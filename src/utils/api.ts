import axios from "axios";

let token = localStorage.getItem('bearer');

let config = {
    headers: {
        'authorization' : 'Bearer '+token
    }
}

export class Api{
    root = "http://127.0.0.1:3400/api/v1/";

    get(url:string){
        return axios.get(this.root+url, config);
    }

    put(url:string,data: any){
        return axios.put(this.root+url,data, config);
    }

    post(url:string, data:any){
        return axios.post(this.root+url, data, config);
    }

    delete(url:string){
        return axios.delete(this.root+url, config);
    }
}