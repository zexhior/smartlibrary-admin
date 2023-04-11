import {FormEvent, useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { Button } from '../../../../styles/button';
import { Label } from '../../../../styles/label';
import InputComponent from '../../../../widgets/input/input';
import SearchBar from '../../../../widgets/searchbar/searchbar';
import TableComponent from '../../../../widgets/table/table';
import {Book} from '../../../models/books';
import './updatebook.scss';
import { useDispatch } from 'react-redux';
import AddAuthorModal from '../../modal/addauthormodal/addauthormodal';
import { changeContent, changeModal } from '../../../../redux/redux';
import { setUpdateBook } from '../../../../redux/bookredux';
import styled from 'styled-components';
import { Authors } from '../../../models/authors';
import { TitleColored } from '../../../../styles/titlescolored';
import { Category } from '../../../models/category';

const TRLightGray = styled.tr`
    background-color: rgb(247, 247, 247);
`
const TRGray = styled.tr`
    background-color: rgb(226, 226, 226);
`

interface UpdateBookProps{
    action: string
}

const UpdateBook : React.FC<UpdateBookProps>= ({action})=>{
    const [book,setBook] = useState<Book>({
        _id: '',
        title: '',
        isbn: '',
        star: 0,
        publishing_date: '',
        cover: '',
        synopsis: '',
        file: '',
    });
    const [categories,setCategories] = useState<string[]>(['aventure']);
    const [search, setSearch] = useState<string>(" ");
    const [results, setResults] = useState<Authors[]>([]);
    const dispatch = useDispatch();

    useEffect(()=>{

    },[search]);

    const category = ['aventure','psychologie','comedie','policier'];

    const title = ['Nom','Prenoms'];
    const proprieties = ['name','last_Name'];

    const HandlerAddAuthorInBook = (value:boolean, i:number)=>{
        /*if(book){
            if(value){
                let data = new Array<Authors>();
                book.authors.forEach(author=>{data.push(author)});
                data.push(results[i]);
                setBook({...book,authors: data});
            }else{
                setBook({...book,authors: book.authors.filter(author=>author.first_name!==results[i].first_name)})
            }
        }*/
    }

    const HandlerAddCategory = (value:string)=>{
        if(!categories.includes(value)){
            setCategories(prevlist=>[...prevlist,value]);
        }
    }

    const HandlerDeleteCategory = (index:number)=>{
        setCategories(prevlist=>prevlist.filter((_,i)=>i!==index));
    }

    const HandlerAddAuthor = (e:any)=>{
        e.preventDefault();
        dispatch(changeContent(<AddAuthorModal action="create"/>));
        dispatch(changeModal(true));
    }

    const HandlerSearchAuthor = (e:any)=>{
        e.preventDefault();
        dispatch(setUpdateBook(book));
        //setResults(_prevlist=>authors.filter(data=>data.name===search))
    }

    const HandlerSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

    return (<div className='updatebook'>
        <TitleColored className='title'>{action==="create"?"Formulaire d'ajout de livre":"Formulaire de mise a jour"}</TitleColored>
        <form onSubmit={(e)=>HandlerSubmit(e)}>
            <InputComponent label={'Titre : '} type={'text'} placeholder={'Titre'} required={true} state={book} name={'title'} setState={setBook}/>
            <InputComponent label={'ISBN : '} type={'text'} placeholder={'ISBN'} required={true} state={book} name={'isbn'} setState={setBook}/>
            <InputComponent label={'Date de publication : '} type={'date'} placeholder={''} required={true} state={book} name={'publishing_date'} setState={setBook}/>
            <Label>Categorie : </Label><br/>
            <select onChange={(e)=>HandlerAddCategory(e.target.value)}>
                {
                    category?.map((element:string,i:number)=>{
                        return (<option key={i}>
                            {element}   
                        </option>)
                    })
                }
            </select>
            <div className='category-list'>
                {
                    categories.map((categorie:string, i:number)=>{
                        return (<div className='categorie' key={i}>
                            <button onClick={(_e)=>HandlerDeleteCategory(i)}><ImCross/></button>
                            <p style={{margin:'0 0 0 5px'}}>{categorie}</p>
                        </div>)
                    })
                }
            </div>
            <Label>Auteurs : </Label>
            <div className='section-author'>
                <div className='section-author-option'>
                    <SearchBar text={search} setText={setSearch}/>
                    <Button className='search-button' onClick={(e)=>HandlerSearchAuthor(e)}>Rechercher</Button>
                    <Button type='button' className='button animation add-author' onClick={(e)=>HandlerAddAuthor(e)}>+</Button>
                </div>
                {
                    results.length===0?(<></>):
                    (
                        <div className='section-author-list'>
                            <TableComponent titles={title} keys={proprieties} users={results}/>
                            <table>
                                <tr className='title-option'>
                                    <td>Options</td>
                                </tr>
                                {
                                    results.map((_author:any,i:number)=>{
                                        if(i%2===0)
                                            return (
                                                <TRGray>
                                                    <td><input type='checkbox' onChange={(e)=>HandlerAddAuthorInBook(e.target.checked,i)}/></td>
                                                </TRGray>
                                            );
                                        else
                                            return (
                                                <TRLightGray>
                                                    <td><input type='checkbox' onChange={(e)=>HandlerAddAuthorInBook(e.target.checked,i)}/></td>
                                                </TRLightGray>
                                            );
                                    })
                                }
                            </table>
                        </div>
                    )
                }
                {/*
                    book.authors.length!==0?(<div className='section-author-list'>
                        <TableComponent titles={title} keys={proprieties} users={book.authors}/>
                    </div>):
                    (<></>)
                */}
            </div>
            <InputComponent label={'Couverture : '} type={'file'} placeholder={''} required={true} state={book} name={'cover'} setState={setBook}/>
            <InputComponent label={'Fichier : '} type={'file'} placeholder={''} required={true} state={book} name={'file'} setState={setBook}/>
            <InputComponent label={'Synopsis : '} type={'textarea'} placeholder={'Texte'} required={true} state={book} name={'synopsis'} setState={setBook}/>
            <Button type='submit' className='button animation'>{action==='create'?'Creer':'Modifier'}</Button>
        </form>
    </div>)
}

export default UpdateBook;