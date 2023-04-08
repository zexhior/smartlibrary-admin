import { Api } from './../../utils/api';
import { useEffect, useState } from 'react';
import { Book } from '../models/books';
const GetAllBooks = (page:number)=>{
    const [books,setBooks] = useState<Array<Book>>();

    useEffect(()=>{
        const api = new Api();
        function getManyBooks(){
            api.get('books/').then((data) => {
                setBooks(data.data.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getManyBooks();
    },[])

    return {books,setBooks};
}

export default GetAllBooks;