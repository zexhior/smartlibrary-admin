import { FavoriBooks } from './../models/favoriteBooks';
import { useEffect, useState } from "react";
import { Book } from "../models/books";
import { Api } from "../../utils/api";
import { useDispatch } from 'react-redux';
import { setListFavoriteBook } from '../../redux/userredux';
import { ConvertDate } from '../../utils/convertdate';

export const GetUserFavoriteBook = (url:string, id:string | undefined)=>{
    const [books,setBooks] = useState<Array<Book>>([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        async function fetch(){
            if(id){
                let favorites = await Api.get(`${url}search/${id}`);
                if(favorites){
                    let temp : Array<Book> = [];
            favorites.data.data.forEach(async (favorite:any) => { 
                        temp.push(ConvertDate( favorite.book));
                    });
                    setBooks(temp);
                }
            }  
        }
        fetch();
    },[url,id]);

    dispatch(setListFavoriteBook(books));
    return {books, setBooks};
}