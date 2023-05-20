import { Classification } from './../models/classification';
import { useState, useEffect } from 'react';
import { Api } from '../../utils/api';
import { Book } from './../models/books';
import { ConvertListDate } from '../../utils/convertlistdate';

const GetBookByClassification = (id:string | undefined)=>{
    const [books,setBooks] = useState<Array<Book>>(new Array<Book>());
    
    useEffect(()=>{
        async function fetch(){
            if(id){
                const classification = await Api.get(`classifications/search?category=${id}`);
                if(classification.data.data){
                    const temp = new Array<Book>();
                    classification.data.data.forEach((element:Classification)=>{
                        temp.push(element.book);
                    });
                    setBooks(ConvertListDate(temp));
                }
            }
        }
        fetch();
    },[id])

    return {books,setBooks};
}

export default GetBookByClassification;