import { Api } from './../../utils/api';
const SearchElement = (url:string,query:string)=>{

    async function search(){
        const response = await Api.get(`${url}?${query}`);
        return response.data.data;    
    }
    return search();

}

export default SearchElement;