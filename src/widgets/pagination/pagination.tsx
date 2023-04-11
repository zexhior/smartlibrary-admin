import { Button } from '../../styles/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './pagination.scss';

interface PaginationProps{
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const PaginationComponent : React.FC<PaginationProps> = ({page, setPage})=>{
    const HandlerChangePage = (action:boolean)=>{
        if(action)
            setPage((state:number)=>state+1);
        else{
            if(page > 1)
                setPage((state:number)=>state-1);
        }
    }
    return (<div className='page-favbook'>
        <Button className='button animation' onClick={(e)=>HandlerChangePage(false)}><FaArrowLeft/></Button>
        <p>{page}</p>
        <Button className='button animation' onClick={(e)=>HandlerChangePage(true)}><FaArrowRight/></Button>
    </div>)
}

export default PaginationComponent;