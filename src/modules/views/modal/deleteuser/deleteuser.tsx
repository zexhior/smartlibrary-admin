import { useDispatch } from "react-redux"
import { changeModal } from "../../../../redux/redux";
import { Button } from "../../../../styles/button"

const DeleteUser = ()=>{
    const dispatch = useDispatch();

    const HandlerCancelAction = ()=>{
        dispatch(changeModal(false));
    }

    return (<div className='deleteuser-container'>
        <p>Vous voulez vraiment supprimer cet utilisateur?</p>
        <div className='options'>
            <Button>Oui</Button>
            <Button onClick={(e)=>HandlerCancelAction}>Non</Button>
        </div>
    </div>)   
}

export default DeleteUser;