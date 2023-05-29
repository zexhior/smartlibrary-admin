import React, { useState } from 'react';
import Book from '../../../../common/images/books/couv_8.png';
import CardComponent from '../../../../widgets/card/card';
import StarsComponent from '../../../../widgets/stars/stars';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import './userbooks.scss';
import { TitleColored } from '../../../../styles/titlescolored';

const UserBooks = ()=>{
    const [page,setPage] = useState<number>(1);

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

    const Body = (star:number)=>{
        return (<>
            <h3>{book.title}</h3>
            <p>{book.publishing_date}</p>
            <StarsComponent star={book.star}/>
        </>)
    };

    const BooksRecommended = [
        book,
        book,
        book,
        book,
        book,
        book,
    ]

    return (<div className='userbooks'>
        <TitleColored className='title-section'>Recommandation : </TitleColored>
        <div className='bookrecommended'>
            {
                BooksRecommended.map((element:any, i:number)=>{
                    return (<CardComponent key={i} img={element.cover} body={Body(element.star)}/>);
                })
            }
        </div>
        <TitleColored className='title-section'>Livres favoris : </TitleColored>
        <div className='favbook'>
            {
                BooksRecommended.map((element:any, i:number)=>{
                    return (<CardComponent key={i} img={element.cover} body={Body(element.star)}/>);
                })
            }
        </div>
        <PaginationComponent page={page} setPage={setPage}/>
    </div>)
}

export default UserBooks;