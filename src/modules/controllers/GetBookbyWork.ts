import { ConvertDate } from './../../utils/convertdate';
import { useEffect, useState } from 'react';
import { Api } from "../../utils/api";
import { Book } from '../models/books';
import { Work } from '../models/work';

const GetBookByWork = (url:string, id:string | undefined) => {
    const [books,setBooks] = useState<Array<Book>>(new Array<Book>());
    
    useEffect(()=>{
        async function fetch(){
            if(id){
                const works = await Api.get(`${url}search?author=${id}`);
                if(works.data.data){
                    const temp = new Array<any>();
                    works.data.data.forEach((element:Work) => {
                        temp.push(ConvertDate(element.book));
                    });
                    setBooks(temp);
                }
            }
        }
        fetch();
    },[url,id]);

    return {books,setBooks};
}

export default GetBookByWork;