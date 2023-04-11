import React, { useState } from "react";
import { TitleColored } from "../../../../styles/titlescolored";
import EmptyList from "../../../../widgets/emptylist/emptylist";
import GetAllElement from "../../../controllers/GetAllElement";
import { Category } from "../../../models/category";
import './listcategory.scss';

const ListCategory = ()=>{
    const [page,setPage] = useState<number>(1);
    const {elements} = GetAllElement<Category>('category',page);

    if(elements && elements.length > 0){
        return (<div className="listcategory-container">
                <TitleColored>Liste des categories</TitleColored>
            </div>);
    }else{
        return (<div className='listauthors-container'>
            <TitleColored>Liste des auteurs</TitleColored>
            <EmptyList/>
        </div>);
    }
}

export default ListCategory;