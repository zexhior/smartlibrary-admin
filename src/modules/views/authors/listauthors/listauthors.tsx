import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../common/loading/loading';
import { setListAuthors, setUpdateAuthor } from '../../../../redux/authorredux';
import { changeContent, changeModal } from '../../../../redux/redux';
import { Button } from '../../../../styles/button';
import {TitleColored} from '../../../../styles/titlescolored';
import CardComponent from '../../../../widgets/card/card';
import EmptyList from '../../../../widgets/emptylist/emptylist';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import StarComponent from '../../../../widgets/stars/stars';
import DeleteElement from '../../../controllers/DeleteElement';
import useGetAllElement from '../../../controllers/GetAllElement';
import { Authors } from '../../../models/authors';
import Message from '../../modal/message/message';
import './listauthors.scss';

const ListAuthors = ()=>{
    const [page,setPage] = useState<number>(1);
    useGetAllElement<Authors>('authors',page,setListAuthors);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const elements = useSelector((state:any)=>state.author.authors);

    const Body = (author:Authors)=>{
        const HandlerViewAuthor = (e:any,id:string)=>{
            e.preventDefault();
            dispatch(setUpdateAuthor(author));
            navigate(`/authors/${id}`);
        }

        const HandlerDeleteAuthor = (e:any,id:string)=>{
            e.preventDefault();
            dispatch(changeContent(<Message 
                message={'Voulez-vous vraiment supprimer cet auteur?'} 
                allowedfunction={(e:any)=>{
                    e.preventDefault();
                    DeleteElement('authors/',id);
                    dispatch(changeModal(false));
                }}/>
            ));
            dispatch(changeModal(true));
        }

        return (<div className=''>
            <h3>{author.last_name}</h3>
            <p>{author.first_name}</p>
            <StarComponent star={author.star}/>
            <div className='options-button'>
                <Button className='button animation' onClick={(e)=>HandlerViewAuthor(e,author?._id)}>Voir</Button>
                <Button className='button animation' onClick={(e)=>HandlerDeleteAuthor(e,author?._id)}>Supprimer</Button>
            </div>
        </div>)
    }

    return (<div className='listauthors-container'>
            <TitleColored>Liste des auteurs</TitleColored>
            {
                (elements?.length > 0)?
                (<>
                    <div className='listauthors-list'>
                        {
                            elements.map((data:Authors,i:number)=>{
                                return (<div key={i}>
                                    <CardComponent img={data.photo} body={Body(data)}/>
                                </div>);
                            })
                        }
                    </div>
                    <PaginationComponent page={page} setPage={setPage}/>
                </>):(
                    <Loading/>
                )
            }
        </div>);
}

export default ListAuthors;