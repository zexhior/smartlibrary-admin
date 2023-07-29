import React from "react";
import './floatbutton.scss';

interface FloatButtonProps{
    fonction : Function;
}

const FloatButton : React.FC<FloatButtonProps> = ({fonction}) => {
    return (<div className='test' onClick={(e)=>fonction(e)}>+</div>)
}

export default FloatButton;