import {FiSearch} from 'react-icons/fi';
import './searchbar.scss';

const SearchBar = ()=>{
    return (<div className='searchbar-container'>
        <input type='text' className='searchbar-container-input' placeholder='Tapez-ici'/>
        <button className='searchbar-container-button button animation'>Rechercher</button>
    </div>)
}

export default SearchBar;