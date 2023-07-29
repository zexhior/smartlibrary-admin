import { useState } from "react";
import PaginationComponent from "../../../../widgets/pagination/pagination";
import GetBookByClassification from "../../../controllers/GetBookByClassification";
import GeneratorListBook from "../../books/generatorlistbook/generatorlistbook";

interface BookCategoryProps{
    id:string | undefined
}

const BookCategory : React.FC<BookCategoryProps>= ({id})=>{
    const {books,setBooks} = GetBookByClassification(id);
    const [page,setPage] = useState<number>(0);

    return (<>
        <GeneratorListBook books={books}/>
        {/*(books.length > 0)?
        <PaginationComponent page={page} setPage={setPage}/>:<></>*/}
    </>)
}

export default BookCategory;