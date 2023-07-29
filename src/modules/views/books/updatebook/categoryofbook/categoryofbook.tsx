import React from "react";
import { ImCross } from 'react-icons/im';
import { Label } from '../../../../../styles/label';
import { Button } from '../../../../../styles/button';
import AddCategoryModal from '../../../modal/addcategorymodal/addcategorymodal';
import { setListCategory } from '../../../../../redux/categoryredux';
import { Category } from '../../../../models/category';
import GetAllElement from '../../../../controllers/GetAllElement';
import { changeContent, changeModal } from '../../../../../redux/redux';
import './categoryofbook.scss';
import { useDispatch } from "react-redux";
import GetCategoriesByClassification from "../../../../controllers/GetCategoriesByClassification";

interface CategoryOfBookProps{
    id: string,
    categories: Array<any>,
    delCategories: Array<string>,
    setDelCategories: React.Dispatch<React.SetStateAction<Array<string>>>,
    setCategories: React.Dispatch<React.SetStateAction<Array<any>>>
}

const CategoryOfBook : React.FC<CategoryOfBookProps> = ({id, delCategories, setDelCategories, categories, setCategories})=>{
    const dispatch = useDispatch();
    const category = GetAllElement<Category>('categories',0,setListCategory);
    
    const HandlerAddCategory = (i:number)=>{
        if(categories && !categories.includes(category.elements[i])){
            setCategories(prevlist=>[...prevlist,{category: category.elements[i]}]);
        }
    }

    const HandlerDeleteCategory = (index:number)=>{
        const element = categories[index]._id;
        setDelCategories([...delCategories, element]);
        setCategories(prevlist=>prevlist.filter((_,i)=>i!==index));
    }
    
    const HandlerCreateCategory = (e:any)=>{
        e.preventDefault();
        dispatch(changeContent(<AddCategoryModal action="create"/>));
        dispatch(changeModal(true));
    }

    return (<div>
        <Label>Categorie : </Label><br/>
            <div className='category'>
                <select>
                    {
                        category.elements?.map((element:Category,i:number)=>{
                            return (<option key={i} onClick={(e)=>HandlerAddCategory(i)}>
                                {element.wording}   
                            </option>)
                        })
                    }
                </select>
                <Button type='button' className='button animation add-category' onClick={(e)=>HandlerCreateCategory(e)}>+</Button>
            </div>
            <div className='category-list'>
                {
                    categories?.map((categorie:any, i:number)=>{
                        return (<div className='categorie' key={i}>
                            <button onClick={(_e)=>HandlerDeleteCategory(i)}><ImCross/></button>
                            <p style={{margin:'0 0 0 5px'}}>{categorie.category.wording}</p>
                        </div>)
                    })
                }
            </div>
    </div>)
}

export default CategoryOfBook;