import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import { changeContent, changeModal } from '../../../redux/redux';
import FloatButton from '../../../widgets/floatbutton/floatbutton';
import AddCategoryModal from '../modal/addcategorymodal/addcategorymodal';
import './category.scss';
import { Button } from '../../../styles/button';
import { changePageSearch } from '../../../redux/searchredux';

const Category = ()=>{
    const dispatch = useDispatch();
    dispatch(changePageSearch('category'));

    const HandlerCloseModal = (e:any)=>{
        e.preventDefault();
        dispatch(changeContent(<AddCategoryModal action="create"/>));
        dispatch(changeModal(true));
    }

    return (<div className='category-container'>
        <Navigation/>
        <Button className='button animation add' onClick={(e)=>HandlerCloseModal(e)}>+</Button>
        <Outlet/>
    </div>)
}

export default Category;