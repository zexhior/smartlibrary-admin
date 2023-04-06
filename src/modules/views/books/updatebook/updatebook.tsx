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
        _id: "",
        title: "Toute une nuit", 
        isbn: "4", 
        star: 3, 
        publishing_date: "2022-09-18", 
        category: [{wording: "Comedie"}],
        authors: [{
                name : "Gilles", 
                last_Name : "Bindi", 
                star : 4, 
                photo : "",
                description : "",
            },
            {
                name : "Gilles", 
                last_Name : "Bindi", 
                star : 4, 
                photo : "",
                description : "",
            }
            ,
        ],
        cover: "",
        synopsis: `8 personnages. 8 trajectoires qui se croisent. 
        Toutes leurs vies en une nuit.  Reda, Alexis, Marco, Greg 
        / Melissa, Joao, Marina, X, François, … Ils sont pute, 
        étudiant débarqué de province, en sursis, 
        DRH, star de téléréalité, dealer, serveur ou encore loser. 
        Cette nuit ils vont sortir, ils vont clubber, ils vont 
        travailler, ils vont se rencontrer, ils vont se désirer, 
        gagner de l’argent, dealer des ecstas, s’embrasser, 
        s’oublier, se perdre, rentrer chez eux, ou pas.  8. 
        TOUTE UNE NUIT. est un Short Cuts dans le monde 
        désenchanté des nuits parisiennes à l’aube de l’an 2000.
        `, 
        file: "pdf/8-toute_une_nuit_roman_ok.pdf"
    });
    const [categories,setCategories] = useState<string[]>(['aventure']);
    const [search, setSearch] = useState<string>(" ");
    const [results, setResults] = useState<Authors[]>([]);
    const dispatch = useDispatch();

    const authors= [
        {
            name: "Gilles", 
            last_Name: "Bindi", 
            star: 0, 
            photo: "authors/couv_8.png",
            description: ""
        }, 
        {
            name: "Cecil", 
            last_Name: "B.", 
            star: 0, 
            photo: "authors/compositioncec3ok_12.jpg",
            description: ""
        }, 
        {
            name: "Cécile", 
            last_Name: "de LAGET", 
            star: 0, 
            photo: "authors/1_1.jpg",
            description: ""
        }, 
        {
            name: "Serge", 
            last_Name: "BOUDOUX", 
            star: 0, 
            photo: "authors/1_1_MmUk7UV.jpg",
            description: ""
        }, 
        {
            name: "Philippe", 
            last_Name: "Clearque", 
            star: 0, 
            photo: "authors/screenshot_2022-01-22_at_14.42.41.png",
            description: ""
        }, 
        {
            name: "Pascal", 
            last_Name: "Mary", 
            star: 0, 
            photo: "authors/partitionkindle.jpg",
            description: ""
        },
        {
            name: "Pierre", 
            last_Name: "d'Arlet", 
            star: 0, 
            photo: "authors/le_hable7.jpg",
            description: ""
        },
        {
            name: "REYNAUD", 
            last_Name: "Isabelle", 
            star: 0, 
            photo: "authors/loriana_couverture.jpg",
            description: ""
        }
    ];

    useEffect(()=>{

    },[search]);

    const category = ['aventure','psychologie','comedie','policier'];

    const title = ['Nom','Prenoms'];
    const proprieties = ['name','last_Name'];

    const HandlerAddAuthorInBook = (value:boolean, i:number)=>{
        if(value){
            let data = new Array<Authors>();
            book.authors.forEach(author=>{data.push(author)});
            data.push(results[i]);
            setBook({...book,authors: data});
        }else{
            setBook({...book,authors: book.authors.filter(author=>author.name!==results[i].name)})
        }
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
        dispatch(changeContent(<AddAuthorModal/>));
        dispatch(changeModal(true));
    }

    const HandlerSearchAuthor = (e:any)=>{
        e.preventDefault();
        dispatch(setUpdateBook(book));
        setResults(_prevlist=>authors.filter(data=>data.name===search))
    }

    const HandlerSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

    return (<div className='updatebook'>
        <TitleColored className='title'>{action==="create"?"Formulaire d'ajout de livre":"Formulaire de mise a jour"}</TitleColored>
        <form onSubmit={(e)=>HandlerSubmit(e)}>
            <InputComponent label={'Titre : '} type={'text'} placeholder={'Titre'} required={true} state={book} name={'title'} setState={setBook} data={null}/>
            <InputComponent label={'ISBN : '} type={'text'} placeholder={'ISBN'} required={true} state={book} name={'isbn'} setState={setBook} data={null}/>
            <InputComponent label={'Date de publication : '} type={'date'} placeholder={''} required={true} state={book} name={'publishing_date'} setState={setBook} data={null}/>
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
                <div className='section-author-list'>
                    <TableComponent titles={title} keys={proprieties} users={book.authors}/>
                </div>
            </div>
            <InputComponent label={'Couverture : '} type={'file'} placeholder={''} required={true} state={book} name={'cover'} setState={setBook} data={null}/>
            <InputComponent label={'Fichier : '} type={'file'} placeholder={''} required={true} state={book} name={'file'} setState={setBook} data={null}/>
            <InputComponent label={'Synopsis : '} type={'textarea'} placeholder={'Texte'} required={true} state={book} name={'synopsis'} setState={setBook} data={null}/>
            <Button type='submit' className='button animation'>{action==='create'?'Creer':'Modifier'}</Button>
        </form>
    </div>)
}

export default UpdateBook;