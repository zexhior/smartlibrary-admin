import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import { closeModal } from '../../../redux/redux';
import FloatButton from '../../../widgets/floatbutton/floatbutton';
import './category.scss';

const Category = ()=>{
    const dispatch = useDispatch();

    const HandlerCloseModal = (e:any)=>{
        e.preventDefault();
        dispatch(closeModal(false));
    }

    return (<div className='category-container'>
        <Navigation/>
        <FloatButton fonction={HandlerCloseModal}/>
        <Outlet/>
    </div>)
}

export default Category;