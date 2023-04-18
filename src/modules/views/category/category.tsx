import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import { changeContent, changeModal, closeModal } from '../../../redux/redux';
import FloatButton from '../../../widgets/floatbutton/floatbutton';
import AddCategoryModal from '../modal/addcategorymodal/addcategorymodal';
import './category.scss';

const Category = ()=>{
    const dispatch = useDispatch();

    const HandlerCloseModal = (e:any)=>{
        e.preventDefault();
        dispatch(changeContent(<AddCategoryModal action="create"/>));
        dispatch(changeModal(true));
    }

    return (<div className='category-container'>
        <Navigation/>
        <FloatButton fonction={HandlerCloseModal}/>
        <Outlet/>
    </div>)
}

export default Category;