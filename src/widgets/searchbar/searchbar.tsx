import React, { ChangeEvent } from 'react';
import './searchbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import SearchElement from '../../modules/controllers/SearchElement';
import { switchActivation } from '../../redux/searchredux';
import { useNavigate } from 'react-router-dom';
import { setListAuthors } from '../../redux/authorredux';
import { setListBook } from '../../redux/bookredux';
import { setListUser } from '../../redux/userredux';
import { setListCategory } from '../../redux/categoryredux';

interface SearchBarProps{
    text: string | undefined,
    setText: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar : React.FC<SearchBarProps> = ({text,setText})=>{
    const page = useSelector((state:any)=>state.search.page);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandlerSearch = async (e:any)=>{
        e.preventDefault();
        switch (page){
            case 'book':
                console.log('book');
                const books = await SearchElement('books/search',`title=${text}`);
                console.log(books);
                navigate('/books');
                dispatch(setListBook(books));
                break;
            case 'author':
                console.log('author');
                const authors = await SearchElement('authors/search',`first_name=${text}&last_name=${text}`);
                console.log(authors);
                navigate('/authors');
                dispatch(setListAuthors(authors));
                break;
            case 'user' :
                console.log('user');
                const users = await SearchElement('users/search',`first_name=${text}&name=${text}`);
                navigate('/users');
                dispatch(setListUser(users));
                break;
            case 'category' :
                console.log('category');
                const categories = await SearchElement('categories/search',`wording=${text}`);
                navigate('/categories');
                console.log(categories);
                dispatch(setListCategory(categories));
                break;
            default :
                console.log('nothing');
        }
        dispatch(switchActivation(true));
    }
    
    const HandlerChangeText = (value:string)=>{
        setText(value);
    }

    return (<div className='searchbar-container'>
        <input onChange={(e:ChangeEvent<HTMLInputElement>)=>HandlerChangeText(e.target.value)} type='text' className='searchbar-container-input' placeholder='Tapez-ici'/>
        <button className='searchbar-container-button button animation' onClick={(e)=>HandlerSearch(e)}>Rechercher</button>
    </div>)
}

export default SearchBar;