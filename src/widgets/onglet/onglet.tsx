import { Link,Outlet } from 'react-router-dom';
import './onglet.scss';

interface OngletProps{
    options: Array<{text:string, link:string}>,
}

const Onglet : React.FC<OngletProps> = ({options})=>{
    return (<div className='onglet-container'>
        <div className='onglet-nav'>
            {
                options.map((option,i)=>{
                    return (
                        <Link key={i} to={option.link} style={{textDecoration:"none"}}><div className='onglet'>
                        {
                            option.text
                        }
                        </div></Link>
                    );
                })
            }
        </div>
        <div className='onglet-page'>
            <Outlet/>
        </div>
    </div>)
}

export default Onglet;