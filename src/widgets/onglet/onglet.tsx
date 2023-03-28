import { ReactNode } from 'react';
import './onglet.scss';

interface OngletProps{
    options: Array<string>,
}

const Onglet : React.FC<OngletProps> = ({options})=>{
    return (<div className='onglet-container'>
        <div className='onglet-nav'>
            {
                options.map(option=>{
                    return (
                        <div className='onglet'>
                        {
                            option
                        }
                        </div>
                    );
                })
            }
        </div>
        <div className='onglet-page'>

        </div>
    </div>)
}

export default Onglet;