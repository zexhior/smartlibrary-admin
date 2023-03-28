import { ReactNode, useEffect } from 'react';
import './card.scss';

interface CardComponentProps{
    img: string,
    body: ReactNode
}

const CardComponent : React.FC<CardComponentProps>= ({img, body})=>{

    return (<div className='card'>
        <div className='card-header'>
            <img src={img} alt='header'/>
        </div>
        <div className='card-body'>
            {body}
        </div>
    </div>);
}

export default CardComponent;