import React from "react";
import { TitleColored } from "../../../../styles/titlescolored";
import Onglet from "../../../../widgets/onglet/onglet";
import Book from '../../../../common/images/books/couv_8.png';
import './infobook.scss';
import Stars from "../../../../widgets/stars/stars";
import { Title } from "../../../../styles/title";
import { SideTitle } from "../../../../styles/sidetitle";

const InfoBook = ()=>{
    const book = {
        title: "Toute une nuit", 
        isbn: "4", 
        star: 3, 
        publishing_date: "2022-09-18", 
        category: "Comedie",
        author: {
            name : "Gilles", 
            last_Name : "Bindi", 
            star : 4, 
        },
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

    const tab_titles = [
        {text:'Synopsis',link:''},
        {text:'Mise a jour',link:''}
    ];

    return (<div className="infobook-container">
        <TitleColored>Detail du livre</TitleColored>
        <div className="book-header">
            <div className="book-background">

            </div>
            <div className="book-header-content">
                <div className='book-cover'>
                    <img src={book.cover} alt='book'/>
                </div>
                <div className="book-info">
                    <Title>{book.title}</Title>
                    <SideTitle>{book.author.name} {book.author.last_Name}</SideTitle>
                    <p>{book.publishing_date}</p>
                    <p>{book.category}</p>
                    <Stars star={book.star}/>
                </div>
            </div>
        </div>
        <div className="book-description">
            <SideTitle>Synopsis : </SideTitle>
            {/*<p className="synopsis">
                {
                    book.synopsis
                }
            </p>*/}
            <Onglet options={tab_titles}/>
        </div>
    </div>)
}

export default InfoBook;