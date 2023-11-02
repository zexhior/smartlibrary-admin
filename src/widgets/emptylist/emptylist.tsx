import { ImFileEmpty } from 'react-icons/im';
import './emptylist.scss';

const EmptyList = ()=>{
    return (<div className='emptylist'>
        <ImFileEmpty size={200}/>
        <p>Liste vide</p>
    </div>)
}

export default EmptyList;