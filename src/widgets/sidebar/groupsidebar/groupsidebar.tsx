import React, { ReactNode, useRef } from 'react';
import './groupsidebar.scss';

interface SideBarParameter{
    elements: ReactNode[]
}

const GroupSideBar : React.FC<SideBarParameter> = ({elements})=>{
    const sidebarelement = useRef<HTMLDivElement>(null);
    
    return (<div className='groupsidebar-container' ref={sidebarelement}>
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