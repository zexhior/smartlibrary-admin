import axios from "axios";
import { LogOut } from "../modules/controllers/Logout";

let token = localStorage.getItem("bearer");

let config = {
  headers: {
    authorization: "Bearer " + token,
  },
};

const interceptResponse = axios.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    let statusCode = 0;
    if (error.response) statusCode = error.response.status;
    console.log(statusCode);
    // if (statusCode === 403) {
    //   LogOut();
    // }
    return Promise.reject(error);
  }
);

const interceptRequest = axios.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export class Api {
  static root = "http://127.0.0.1:3400";
  //static root = "http://192.168.100.168:3400";
  //static root = "http://10.42.0.1:3400";
  //static root = "http://192.168.100.125:3400"
  //static root = "http://192.168.1.134:3400";
  //static root = "https://smartlibrary-vercel.vercel.app";
  static version = "/api/v1/";

  constructor() {
    axios.interceptors.response.eject(interceptResponse);
    axios.interceptors.request.eject(interceptRequest);
  }

  static get(url: string) {
    return axios.get(Api.root + Api.version + url, config);
  }

  static put(url: string, data: any) {
    return axios.put(Api.root + Api.version + url, data, config);
  }

  static post(url: string, data: any) {
    return axios.post(Api.root + Api.version + url, data, config);
  }

  static delete(url: string) {
    return axios.delete(Api.root + Api.version + url, config);
  }
}
