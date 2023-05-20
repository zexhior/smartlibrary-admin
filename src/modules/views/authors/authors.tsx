
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../../../common/navigation/navigation';
import FloatButton from '../../../widgets/floatbutton/floatbutton';
import './authors.scss';
import { Button } from '../../../styles/button';
import { useDispatch } from 'react-redux';
import { changePageSearch } from '../../../redux/searchredux';

const Authors = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(changePageSearch('author'));

    const HandlerCloseModal = (e:any)=>{
        e.preventDefault();
        navigate('/authors/create');
    }

    return (<div className='authors-container'>
        <Navigation/>
        <Button className='button animation add' onClick={(e)=>HandlerCloseModal(e)}>+</Button>
        <Outlet/>
    </div>)
}

export default Authors;