import React, { ReactNode, useEffect, useRef } from 'react';
import './groupsidebar.scss';

interface SideBarParameter{
    elements: ReactNode[]
}

const GroupSideBar : React.FC<SideBarParameter> = ({elements})=>{
    const sidebarelement = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(sidebarelement){
            const elements = sidebarelement.current?.querySelectorAll<HTMLElement>('.sidebarcontent-container');
            if(elements){
                elements[0].style.backgroundColor = '#0000b138';
                elements[0].style.borderRadius = '10px';
            }
        }
    },[])

    const HandlerClick = (index:number)=>{
        if(sidebarelement){
            const elements = sidebarelement.current?.querySelectorAll<HTMLElement>('.sidebarcontent-container');
            elements?.forEach((element,i)=>{
                if(index === i ){
                    element.style.backgroundColor = '#0000b138';
                    element.style.borderRadius = '10px';
                }
                else{
                    element.style.backgroundColor = 'transparent';
                }
            });
        }
    }

    return (<div className='groupsidebar-container' ref={sidebarelement}>
        {
            elements.map((element,i)=>{
                return (<span key={i} onClick={(e)=>HandlerClick(i)}>
                    {element}
                </span>);
            })
        }
    </div>);
}

export default GroupSideBar;