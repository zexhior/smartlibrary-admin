import { useState } from 'react';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import './listbooks.scss';
import GeneratorListBook from '../generatorlistbook/generatorlistbook';
import GetAllElement from '../../../controllers/GetAllElement';
import { Book } from '../../../models/books';
import { setListBook } from '../../../../redux/bookredux';

const ListBooks = ()=>{
    const [page,setPage] = useState<number>(1);
    const {elements} = GetAllElement<Book>('books',page,setListBook);
    /*const book = {
        _id: '0',
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

    const books = [
        book,
        book,
        book,
        book,
        book,
        book,
    ]*/

    if(elements){
        if(elements.length > 0){
            return (<div className='main-listbook'>
                <GeneratorListBook books={elements}/>
                <PaginationComponent page={page} setPage={setPage}/>
            </div>)
        }
        else{
            return <GeneratorListBook books={elements}/>
        }
    }
    else{
        return (<></>);
    }
    
}

export default ListBooks;