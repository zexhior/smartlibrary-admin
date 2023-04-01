import React, { ChangeEvent } from 'react';
import './searchbar.scss';

interface SearchBarProps{
    text: string | undefined,
    setText: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar : React.FC<SearchBarProps> = ({text,setText})=>{
    const HandlerChangeText = (value:string)=>{
        setText(value);
    }

    return (<div className='searchbar-container'>
        <input onChange={(e:ChangeEvent<HTMLInputElement>)=>HandlerChangeText(e.target.value)} type='text' className='searchbar-container-input' placeholder='Tapez-ici'/>
        <button className='searchbar-container-button button animation'>Rechercher</button>
    </div>)
}

export default SearchBar;