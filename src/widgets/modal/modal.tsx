import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../styles/button';
import './modal.scss';

const Modal = ()=>{
    const content = useSelector((state:any)=>state.modal.content);
    const dispatch = useDispatch()

    return (<div className='modal'>
        <Button className='animation button cancel' onClick={(e)=>dispatch({type:"modal/changeModal"})}><ImCross/></Button>
        {
            content
        }
    </div>)
}

export default Modal;