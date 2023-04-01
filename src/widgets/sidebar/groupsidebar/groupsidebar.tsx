import React, { ReactNode } from 'react';
import { SideTitle } from '../../../styles/sidetitle';
import './groupsidebar.scss';

interface SideBarParameter{
    elements: ReactNode[]
}

const GroupSideBar : React.FC<SideBarParameter> = ({elements})=>{
    return (<div className='groupsidebar-container'>
        {/*<SideTitle className='groupsidebar-container-title text-color-white'>Element</SideTitle>*/}
        {
            elements.map((element,i)=>{
                return (<span key={i}>
                    {element}
                </span>);
            })
        }
    </div>);
}

export default GroupSideBar;