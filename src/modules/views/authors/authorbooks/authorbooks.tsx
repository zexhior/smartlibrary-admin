import { useState } from "react";
import { useParams } from "react-router-dom";
import GetBookByWork from "../../../controllers/GetBookbyWork";
import GeneratorListBook from "../../books/generatorlistbook/generatorlistbook";
import './authorbooks.scss';
import PaginationComponent from "../../../../widgets/pagination/pagination";

const Authorbooks = ()=>{
    const {id} = useParams();
    const {books} = GetBookByWork(`works/`,id);
    const [page,setPage] = useState<number>(1);

    return (<div className='authorbooks-container'>
        <GeneratorListBook books={books}/>
        <PaginationComponent page={page} setPage={setPage}/>
    </div>)
}

export default Authorbooks;