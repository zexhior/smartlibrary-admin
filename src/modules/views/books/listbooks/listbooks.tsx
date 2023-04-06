import React from 'react';
import Book from '../../../../common/images/books/couv_8.png';
import CardComponent from '../../../../widgets/card/card';
import StarsComponent from '../../../../widgets/stars/stars';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import './listbooks.scss';
import { TitleColored } from '../../../../styles/titlescolored';
import { Button } from '../../../../styles/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeContent, changeModal } from '../../../../redux/redux';
import DeleteBook from '../../modal/deletebook/deletebook';
import Message from '../../modal/message/message';

const ListBooks = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const book = {
        title: "Toute une nuit", 
        isbn: "4", 
        star: 3, 
        publishing_date: "2022-09-18", 
        category: 3, 
        cover: Book,
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
    }

    const BooksRecommended = [
        book,
        book,
        book,
        book,
        book,
        book,
    ]

    const Body = (star:number,id:number)=>{
        const HandlerDeleteBook = (id:number)=>{
            dispatch(changeContent(<Message message='Voulez-vous vraiment supprimer ce livre?' 
            allowedfunction={()=>{}}/>));
            dispatch(changeModal(true))
        }

        const HandlerViewBook = (id: number)=>{
            navigate(`/books/${id}`);
        }

        return (<>
            <h3>{book.title}</h3>
            <p>{book.publishing_date}</p>
            <StarsComponent star={book.star}/>
            <div className='options-button'>
                <Button className='button animation' onClick={(e)=>HandlerViewBook(id)}>Voir</Button>
                <Button className='button animation' onClick={(e)=>HandlerDeleteBook(id)}>Supprimer</Button>
            </div>
        </>)
    };


    return (<div className="listbooks-container">
        <TitleColored>Liste Livres</TitleColored>
        <div className='listbooks-list'>
            {
                BooksRecommended.map((element:any,i)=>{
                    return (<>
                        <CardComponent key={i} img={element.cover} body={Body(element.star,i)}/>
                    </>);
                })
            }
        </div>
        <PaginationComponent/>
    </div>)
}

export default ListBooks;