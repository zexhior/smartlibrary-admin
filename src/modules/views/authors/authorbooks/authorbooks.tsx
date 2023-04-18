import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Book from '../../../../common/images/books/couv_8.png';
import PaginationComponent from "../../../../widgets/pagination/pagination";
import GetBookByWork from "../../../controllers/GetBookbyWork";
import GeneratorListBook from "../../books/generatorlistbook/generatorlistbook";
import './authorbooks.scss';

const Authorbooks = ()=>{
    const {id} = useParams();
    const {books, setBooks} = GetBookByWork(id);
    const [page,setPage] = useState<number>(1);

    return (<div>
        <GeneratorListBook books={books}/>
        {/*<PaginationComponent page={page} setPage={setPage}/>*/}
    </div>)
}

export default Authorbooks;