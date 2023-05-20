import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../../../../../styles/button';
import { Label } from '../../../../../styles/label';
import SearchBar from '../../../../../widgets/searchbar/searchbar';
import TableComponent from '../../../../../widgets/table/table';
import { Authors } from '../../../../models/authors';
import AddAuthorModal from '../../../modal/addauthormodal/addauthormodal';
import SearchElement from '../../../../controllers/SearchElement';
import { changeContent, changeModal } from '../../../../../redux/redux';
import { addAuthorBook, deleteAuthorBook } from '../../../../../redux/bookredux';
import './authorofbook.scss';
import { setListAuthors } from "../../../../../redux/authorredux";

interface AuthorOfBookProps{
    authors: Array<Authors>
    setAuthors: React.Dispatch<React.SetStateAction<Array<Authors>>>;
}

const AuthorOfBook : React.FC<AuthorOfBookProps>= ({authors,setAuthors})=>{
    const [search, setSearch] = useState<string>(" ");
    const [results, setResults] = useState<Authors[]>([]);
    const title = ['Nom','Prenoms'];
    const proprieties = ['first_name','last_name'];
    const dispatch = useDispatch();

    const HandlerAddAuthorInBook = (value:boolean, i:number)=>{
        if(value){
            const doublon = authors.find((data:Authors)=>data._id===results[i]._id);
            if(!doublon){
                dispatch(addAuthorBook(results[i]));
                setAuthors(prevlist=>[...prevlist,results[i]])
            }
        }else{
            dispatch(deleteAuthorBook(results[i]));
            setAuthors(prevlist=>prevlist.filter(data=>data!==results[i]));
        }
    }

    const HandlerSearchAuthor = async (e:any)=>{
        e.preventDefault();
        const res = await SearchElement('authors/search',`first_name=${search}`);
        setResults(res);
    }

    const HandlerAddAuthor = (e:any)=>{
        e.preventDefault();
        dispatch(changeContent(<AddAuthorModal action="create"/>));
        dispatch(changeModal(true));
    }

    return (<div>
        <Label>Auteurs : </Label>
            <div className='section-author'>
                <div className='section-author-option'>
                    <SearchBar text={search} setText={setSearch}/>
                    <Button className='search-button' onClick={(e)=>HandlerSearchAuthor(e)}>Rechercher</Button>
                    <Button type='button' className='animation ajout-author' onClick={(e)=>HandlerAddAuthor(e)}>+</Button>
                </div>
                {
                    results.length===0?(<div className='section-author-empty'>
                        Pas de resultat
                    </div>):
                    (
                        <div className='section-author-list'>
                            <TableComponent titles={title} keys={proprieties} users={results}/>
                            <div className="table">
                                <div className='title-option'>
                                    Options
                                </div>
                                {
                                    results.map((_author:any,i:number)=>{
                                        if(i%2===0)
                                            return (
                                                <div className='td gray' key={i}>
                                                    <input type='checkbox' onChange={(e)=>HandlerAddAuthorInBook(e.target.checked,i)}/>
                                                </div>
                                            );
                                        else
                                            return (
                                                <div className='td white' key={i}>
                                                    <input type='checkbox' onChange={(e)=>HandlerAddAuthorInBook(e.target.checked,i)}/>
                                                </div>
                                            );
                                    })
                                }
                            </div>
                        </div>
                    )
                }
                {
                    authors?.length>0?(<div className='section-author-list'>
                        <TableComponent titles={title} keys={proprieties} users={authors}/>
                    </div>):
                    (<div className='section-author-empty'>
                        Liste vide
                    </div>)
                }
            </div>
    </div>);
}

export default AuthorOfBook;
