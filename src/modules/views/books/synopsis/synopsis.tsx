import { useSelector } from 'react-redux';
import './synopsis.scss';
import { TitleColored } from '../../../../styles/titlescolored';

const Synopsis = ()=>{
    const book = useSelector((state:any)=>state.book.updatebook);

    return (<div className='synopsis'>
        <TitleColored>Resume du livre : </TitleColored>
        <p>{book.synopsis}</p>
    </div>);
}

export default Synopsis;