import UpdateBook from "../updatebook/updatebook"
import './createbook.scss';

const CreateBook = ()=>{
    return (<div className='createbook-container'>
        <UpdateBook action='create'/>
    </div>)
}

export default CreateBook;