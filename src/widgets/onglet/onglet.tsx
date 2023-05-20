import { useEffect, useRef, useState } from 'react';
import { Link,Outlet, useNavigate } from 'react-router-dom';
import './onglet.scss';

interface OngletProps{
    options: Array<{text:string, link:string}>,
}

const Onglet : React.FC<OngletProps> = ({options})=>{
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const HandlerClick = (index:number)=>{
        if(ref.current){
            const elements = ref.current.querySelectorAll<HTMLElement>('.onglet');
            elements.forEach((element,i)=>{
                if(index === i){
                    element.style.backgroundColor = 'white';
                    element.style.color = 'black';
                    element.style.transform = 'scaleX(1.1)';
                }
                else{
                    element.style.backgroundColor = 'rgba(5, 3, 133, 0.795)';
                    element.style.color = 'white';
                    element.style.transform = 'scaleX(1)';
                    element.style.marginLeft = '10px';
                }
            })
        }
        navigate(options[index].link);
    }

    useEffect(()=>{
        HandlerClick(0);
    },[])

    return (<div className='onglet-container'>
        <div ref={ref} className='onglet-nav'>
            {
                options.map((option,i)=>{
                    return (
                        <div key={i} className='onglet' onClick={(e)=>HandlerClick(i)}>
                            {
                                option.text
                            }
                        </div>
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