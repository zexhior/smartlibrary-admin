import { Category } from './../models/category';
import { useSelector } from 'react-redux';
import { Api } from '../../utils/api';
const CreateManyClassifications = (book_id:string)=>{
    //const categories : Array<Category> = useSelector((state:any)=>state.book.categories);

    function create(){
        /*const temp = Object.assign(new Array<Category>(),categories);
        temp.forEach(async (category)=>{
            const response = await Api.post('classifications',{book: book_id, category: category._id});
            console.log(response);
        });*/
    }
    create();
}

export default CreateManyClassifications;