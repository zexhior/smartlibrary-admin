import React from "react";
import { Button } from "../../styles/button";
import './floatbutton.scss';

interface FloatButtonProps{
    fonction : Function;
}

const FloatButton : React.FC<FloatButtonProps> = ({fonction}) => {
    return (<>
        <Button className='button animation add' onClick={(e)=>fonction(e)}>+</Button>
    </>)
}

export default FloatButton;