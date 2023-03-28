import { Button } from '../../styles/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './pagination.scss';

const PaginationComponent = ()=>{
    return (<div className='page-favbook'>
        <Button className='button animation'><FaArrowLeft/></Button>
        <p>1</p>
        <Button className='button animation'><FaArrowRight/></Button>
    </div>)
}

export default PaginationComponent;