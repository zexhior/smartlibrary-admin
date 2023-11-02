import {RiWifiOffLine} from 'react-icons/ri'
import './offline.scss';

const Offline = ()=>{
    return (<div className='offline'>
        <RiWifiOffLine size={150}/>
        <h3>Vous etes hors ligne</h3>
    </div>)
}

export default Offline;