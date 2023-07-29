import { changeModal } from '../../../../redux/redux';
import { Button } from '../../../../styles/button';
import DeleteElement from '../../../controllers/DeleteElement';
import './deletebook.scss';

const DeleteBook = ()=>{
    const HandlerDelete = ()=>{
        //const response = DeleteElement('books/',)
    }
    
    const HandlerCancelAction = ()=>{
        dispatch(changeModal(false));
    }

    return (<div className='deletebook-container'>
        <p>Vous voulez vraiment supprimer ce livre?</p>
        <div className='options'>
            <Button>Oui</Button>
            <Button onClick={(e)=>HandlerCancelAction}>Non</Button>
        </div>
    </div>)   
}

export default DeleteBook;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
