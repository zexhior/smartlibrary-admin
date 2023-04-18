import { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TitleColored } from "../../../../styles/titlescolored";
import EmptyList from "../../../../widgets/emptylist/emptylist";
import PaginationComponent from "../../../../widgets/pagination/pagination";
import GetAllElement from "../../../controllers/GetAllElement";
import { Category } from "../../../models/category";
import GeneratorListBook from "../../books/generatorlistbook/generatorlistbook";
import './listcategory.scss';
import { Book } from "../../../models/books";
import DeleteElement from "../../../controllers/DeleteElement";
import { useDispatch } from "react-redux";
import { changeContent, changeModal, closeModal } from "../../../../redux/redux";
import Message from "../../modal/message/message";
import AddCategoryModal from "../../modal/addcategorymodal/addcategorymodal";
import { setListCategory } from "../../../../redux/categoryredux";
import GetBookByClassification from "../../../controllers/GetBookByClassification";
import BookCategory from "../bookcategory/bookcategory";

const ListCategory = ()=>{
    const [page,setPage] = useState<number>(1);
    const dispatch = useDispatch();
    const {elements,setElements} = GetAllElement<Category>('categories',page,setListCategory);
    const [category,setCategory] = useState<Category>(elements[0]);
    
    const CardCategory = (category:Category, index:number)=>{
        
        const HandlerViewBooks = (e:any)=>{
            e.preventDefault();
            setCategory(elements[index]);
        }

        const HandlerUpdateCategory = (e:any)=>{
            e.preventDefault();
            dispatch(changeContent(<AddCategoryModal action='update' data={category}/>));
            dispatch(changeModal(true));
        }

        const HandlerDeleteCateogory = (e:any)=>{
            e.preventDefault();
            dispatch(changeContent(<Message message={"Voulez-vous vraiment supprimer ce categorie avec ses livres?"} 
            allowedfunction={()=>{
                DeleteElement('categories/',elements[index]._id);
                setElements((state:any)=>state.filter((data:Category)=>data._id!==elements[index]._id));
                dispatch(closeModal(false));
            }}/>));
            dispatch(changeModal(true));
        }
        
        return (<div className="card">
            <div className="wording">{category.wording}</div>
            <div className="options">
                <button onClick={HandlerViewBooks}><FaEye size={18}/></button>
                <button onClick={HandlerUpdateCategory}><FaEdit size={18}/></button>
                <button onClick={HandlerDeleteCateogory}><ImCross size={18}/></button>
            </div>
        </div>)
    }

    if(elements && elements.length > 0){
        return (<div className="listcategory-container">
                <TitleColored>Liste des categories</TitleColored>
                <div className="listcategory-list">
                {
                    elements.map((data:Category,i:number)=>{
                        return CardCategory(data,i);
                    })
                }
                </div>
                {(category?._id)?<div className="listcategory-livre">
                    <BookCategory id={category._id}/>
                </div>:<></>}
            </div>);
    }else{
        return (<div className='listcategory-container'>
            <TitleColored>Liste des categories</TitleColored>
            <EmptyList/>
        </div>);
    }
}

export default ListCategory;