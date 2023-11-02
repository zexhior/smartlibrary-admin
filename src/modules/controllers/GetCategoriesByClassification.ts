import { Classification } from './../models/classification';
import { Api } from './../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from './../models/category';
import { useState, useEffect } from 'react';
import { setBookCategory } from '../../redux/bookredux';

const GetCategoriesByClassification = (url:string,id:string | undefined)=>{
    const [categories,setCategories] = useState<Array<Category>>(new Array<Category>());
    const [lastCategories,setLastCategories] = useState<number>(0);
    const dispatch = useDispatch();
    const last = useSelector((state:any)=>state.book.sizecategories);
    
    useEffect(() => {
        async function fetch(){
            if(id){
                const classifications = await Api.get(`${url}${id}`);
                setLastCategories(classifications.data.data.length);
                if(classifications.data.data && last === 0){
                    let temp : Array<Category>= [];
                    classifications.data.data.forEach((element: any)=> {
                        temp.push(element.category);
                    });
                    setCategories([...temp]);
                }
            }
        }
        fetch();
    },[id])

    dispatch(setBookCategory(categories));

    return {categories,setCategories,lastCategories};
}

export default GetCategoriesByClassification;