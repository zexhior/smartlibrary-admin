import { Api } from './../../utils/api';
import { useEffect, useState } from 'react';
import { Book } from '../models/books';
const GetAllBooks = (page:number)=>{
    const [books,setBooks] = useState<Array<Book>>();

    useEffect(()=>{
        function getManyBooks(){
            Api.get('books/').then((data) => {
                setBooks(data.data.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getManyBooks();
    },[page])

    return {books,setBooks};
}

export default GetAllBooks;