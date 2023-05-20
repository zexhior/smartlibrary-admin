import React from 'react';
import './generatorlistbook.scss';
import { TitleColored } from '../../../../styles/titlescolored';
import { Button } from '../../../../styles/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeContent, changeModal, closeModal } from '../../../../redux/redux';
import {Book} from '../../../models/books';
import CardComponent from '../../../../widgets/card/card';
import StarsComponent from '../../../../widgets/stars/stars';
import Message from '../../modal/message/message';
import DeleteElement from '../../../controllers/DeleteElement';
import Loading from '../../../../common/loading/loading';

interface GeneratorListBookProps{
    books: Array<Book>;
}

const GeneratorListBook : React.FC<GeneratorListBookProps>= ({books})=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Body = (element: Book)=>{
        const HandlerDeleteBook = (id:string)=>{
            dispatch(changeContent(<Message message='Voulez-vous vraiment supprimer ce livre?' 
            allowedfunction={()=>{
                DeleteElement('books/',id);
                dispatch(closeModal(false));
                window.location.reload();
            }}/>));
            dispatch(changeModal(true))
        }

        const HandlerViewBook = (id: string)=>{
            navigate(`/books/${id}`);
        }

        return (<>
            <h3>{element.title}</h3>
            <p>{element.publishing_date}</p>
            <StarsComponent star={element.star}/>
            <div className='options-button'>
                <Button className='button animation' onClick={(e)=>HandlerViewBook(element._id)}>Voir</Button>
                <Button className='button animation' onClick={(e)=>HandlerDeleteBook(element._id)}>Supprimer</Button>
            </div>
        </>)
    };

    return (<div className="listbooks-container">
                <TitleColored>Liste Livres</TitleColored>
                {
                    (books?.length > 0)?
                    (<>
                        <div className='listbooks-list'>
                            {
                                books.map((element:any,i)=>{
                                    return (<div key={i} >
                                        <CardComponent img={element.cover} body={Body(element)}/>
                                    </div>);
                                })
                            }
                        </div>
                    </>):(
                        <Loading/>
                    )
                }
            </div>);
}

export default GeneratorListBook;