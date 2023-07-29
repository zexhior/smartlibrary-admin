import { useDispatch, useSelector } from 'react-redux';
import { Work } from './../models/work';
import { useState, useEffect } from 'react';
import { Authors } from '../models/authors';
import { Api } from '../../utils/api';
import { setBookAuthor } from '../../redux/bookredux';

const GetAuthorsByWork = (id:string | undefined)=>{
    const [authors,setAuthors] = useState<Array<Authors>>(new Array<Authors>());
    const [lastAuthors,setLastAuthors] = useState<number>(0);
    const last = useSelector((state:any)=>state.book.sizeauthors);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch(){
            if(id){
                const works = await Api.get(`works/${id}`);
                setLastAuthors(works.data.data.length);
                if(works.data.data){
                    const temp = new Array<any>();
                    works?.data.data.forEach(async (element:Work)=>{
                        temp.push(element.author);
                    })
                    setAuthors(temp);
                }
            }
        }
        fetch();
    }, [id]);
    
    //dispatch(setBookAuthor(authors));
        
    return {authors,setAuthors,lastAuthors};
}

export default GetAuthorsByWork;