import React from 'react';
import { FaBeer } from 'react-icons/fa';
import './sidebarcontent.scss';

const SideBarContent = ({icon=<FaBeer/>,element=""})=>{
    return (<div className='sidebarcontent-container animation'>
        {icon}
        <p>{element}</p>
    </div>);
}

export default SideBarContent;