import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import { closeModal } from '../../../redux/redux';
import { Button } from '../../../styles/button';
import './books.scss';

const Books = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const HandlerCloseModal = (e:any)=>{
        e.preventDefault();
        dispatch(closeModal(false));
        navigate('/books/create');
        console.log('test');
    }

    return (<div className='books-container'>
        <Navigation/>
        <Button className='button animation add' onClick={(e)=>HandlerCloseModal(e)}>+</Button>
        <Outlet/>
    </div>)
}

export default Books;