import {FormEvent, SetStateAction, useState } from 'react';
import { Button } from '../../../../styles/button';
import InputComponent from '../../../../widgets/input/input';
import {Book} from '../../../models/books';
import './updatebook.scss';
import { useSelector } from 'react-redux';
import { TitleColored } from '../../../../styles/titlescolored';
import CreateOneElement from '../../../controllers/CreateOneElement';
import UpdateElement from '../../../controllers/UpdateElement';
import CategoryOfBook from './categoryofbook/categoryofbook';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../../models/category';
import GetCategoriesByClassification from '../../../controllers/GetCategoriesByClassification';
import AuthorOfBook from './authorofbook/authorofbook';
import GetAuthorsByWork from '../../../controllers/GetAuthorsByWork';
import { Authors } from '../../../models/authors';
import DeleteElement from '../../../controllers/DeleteElement';

interface UpdateBookProps{
    action: string
}

const UpdateBook : React.FC<UpdateBookProps>= ({action})=>{
    const update = useSelector((state:any)=>state.book.updatebook);
    const [book,setBook] = useState<Book>(action==='create'?{
        _id: '',
        title: '',
        isbn: '',
        star: 0,
        publishing_date: '',
        cover: '',
        synopsis: '',
        file: '',
    }:update);
    const [file,setFile] = useState<File>();
    const [cover,setCover] = useState<File>();
    const { categories, setCategories, lastCategories } = GetCategoriesByClassification(book?._id);
    const { authors, setAuthors, lastAuthors } = GetAuthorsByWork(book?._id);
    const navigate = useNavigate();
    const [delCategories,setDelCategories] = useState<Array<string>>(new Array<string>());

    const HandlerSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('book',file as Blob);
        formdata.append('image',cover as Blob);
        formdata.append('title',book.title);
        formdata.append('isbn',book.isbn);
        formdata.append('publishing_date',book.publishing_date.split('T')[0]);
        formdata.append('star',book.star.toString());
        formdata.append('synopsis',book.synopsis);
        if(action === 'create'){
            const new_book = await CreateOneElement('books',formdata);
            categories.forEach((data:Category)=>{
                CreateOneElement('classifications',{book: new_book._id, category: data._id});
            });
            authors.forEach((data:Authors)=>{
                CreateOneElement('works',{book: new_book._id, author: data._id})
            })
        }else{
            UpdateElement('books/',book._id,formdata);
            console.log(lastCategories);
            categories.forEach((data:Category,i:number)=>{
                if(i >= lastCategories)
                    CreateOneElement('classifications',{book: book._id, category: data._id});
            });
            authors.forEach((data:Authors, i:number)=>{
                if(i >= lastAuthors)
                    CreateOneElement('works',{book: book._id, author: data._id})
            });
            delCategories.forEach(element=>{
                DeleteElement('classifications/',element);
            });
        }
        navigate('/books/');
    }

    return (<div className='updatebook'>
        <TitleColored className='title'>{action==="create"?"Formulaire d'ajout de livre":"Formulaire de mise a jour"}</TitleColored>
        <form onSubmit={(e)=>HandlerSubmit(e)}>
            <InputComponent label={'Titre : '} type={'text'} placeholder={'Titre'} required={true} state={book} name={'title'} setState={setBook}/>
            <InputComponent label={'ISBN : '} type={'text'} placeholder={'ISBN'} required={true} state={book} name={'isbn'} setState={setBook}/>
            <InputComponent label={'Date de publication : '} type={'date'} placeholder={''} required={true} state={book} name={'publishing_date'} setState={setBook}/>
            <AuthorOfBook authors={authors} setAuthors={setAuthors}/>
            <CategoryOfBook id={book?._id} categories={categories} delCategories={delCategories} setDelCategories={setDelCategories} setCategories={setCategories}/>
            <InputComponent label={'Couverture : '} type={'file'} placeholder={''} required={false} state={cover} name={'cover'} setState={setCover}/>
            <InputComponent label={'Fichier : '} type={'file'} placeholder={''} required={false} state={file} name={'file'} setState={setFile}/>
            <InputComponent label={'Synopsis : '} type={'textarea'} placeholder={'Texte'} required={true} state={book} name={'synopsis'} setState={setBook}/>
            <Button type='submit' className='button animation'>{action==='create'?'Creer':'Modifier'}</Button>
        </form>
    </div>)
}

export default UpdateBook;