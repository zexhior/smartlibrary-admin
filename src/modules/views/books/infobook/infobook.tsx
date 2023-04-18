import { TitleColored } from "../../../../styles/titlescolored";
import Onglet from "../../../../widgets/onglet/onglet";
import './infobook.scss';
import Stars from "../../../../widgets/stars/stars";
import { Title } from "../../../../styles/title";
import { useParams } from "react-router-dom";
import GetOneElement from "../../../controllers/GetOneElement";
import { Book } from "../../../models/books";
import { setUpdateBook } from "../../../../redux/bookredux";
import GetCategoriesByClassification from "../../../controllers/GetCategoriesByClassification";
import { Category } from "../../../models/category";
import GetAuthorsByWork from "../../../controllers/GetAuthorsByWork";
import { SideTitle } from "../../../../styles/sidetitle";

const InfoBook = ()=>{
    const {id} = useParams();
    const book = GetOneElement<Book>('books/',id,setUpdateBook).element;
    const {authors,setAuthors} = GetAuthorsByWork(id as string);
    const {categories,setCategories} = GetCategoriesByClassification(id as string);

    const tab_titles = [
        {text:'Synopsis',link:`/books/${id}`},
        {text:'Mise a jour',link:`/books/${id}/update`}
    ];

    if(book && categories ){
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
                        <SideTitle>
                        {
                            authors?.map((author:any,i:number)=>{
                                return(<>{author.first_name} {author.last_name} {i!==authors?.length-1?"/":""}</>)
                            })
                        }
                        </SideTitle>
                        <SideTitle>
                        {
                            categories.map((category:Category,i:number)=>{
                                return(<>{category.wording} {i!==categories.length-1?"/ ":""}</>)          
                            })
                        }
                        </SideTitle>
                        <p>{book.publishing_date}</p>
                        <Stars star={book?.star}/>
                    </div>
                </div>
            </div>
            <div className="book-description">
                <Onglet options={tab_titles}/>
            </div>
        </div>)
    }else{
        return (<></>);
    }
}

export default InfoBook;