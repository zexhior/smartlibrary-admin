import { ConvertDate } from './../../utils/convertdate';
import { useState } from 'react';
import { Api } from "../../utils/api";
import { Book } from '../models/books';
import { Work } from '../models/work';

const GetBookByWork = (id:string | undefined) => {
    const [books,setBooks] = useState<Array<Book>>(new Array<Book>());
    
    async function fetch(){
        if(id){
            const works = await Api.get(`works/search?author=${id}`);
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

    return {books,setBooks};
}

export default GetBookByWork;