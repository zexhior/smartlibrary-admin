import { useDispatch } from 'react-redux';
import { changeModal } from '../../../../redux/redux';
import { Button } from '../../../../styles/button';
import './message.scss';

interface MessageProps{
    message: string,
    allowedfunction: Function,
}

const Message : React.FC<MessageProps> = ({message, allowedfunction})=>{
    const dispatch = useDispatch();

    const HandlerCancelAction = (e:any)=>{
        e.preventDefault();
        dispatch(changeModal(false));
    }

    return (<div className='message-container'>
        <p>{message}</p>
        <div className='options'>
            <Button className='animation button' onClick={(e)=>allowedfunction(e)}>Oui</Button>
            <Button className='animation button' onClick={(e)=>HandlerCancelAction(e)}>Non</Button>
        </div>
    </div>) 
}

export default Message;