import { useState } from 'react';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import './listbooks.scss';
import GeneratorListBook from '../generatorlistbook/generatorlistbook';
import GetAllElement from '../../../controllers/GetAllElement';
import { Book } from '../../../models/books';
import { setListBook } from '../../../../redux/bookredux';
import { useSelector } from 'react-redux';
import Loading from '../../../../common/loading/loading';

const ListBooks = ()=>{
    const [page,setPage] = useState<number>(1);
    GetAllElement<Book>('books',page,setListBook);
    const elements = useSelector((state:any)=>state.book.books);

    return (<div className='main-listbook'>
                <GeneratorListBook books={elements}/>
                <PaginationComponent page={page} setPage={setPage}/>
            </div>);
    
}

export default ListBooks;