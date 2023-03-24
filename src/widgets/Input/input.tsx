import { Input } from "../../styles/input";
import { Label } from "../../styles/label";
import './input.scss';

const InputComponent = ({label="", type="text", placeholder=""})=>{
    return (
        <div className=''>
            <Label> {label} </Label><br/>
            <Input className='input' type={type} placeholder={placeholder} onChange={()=>{}}></Input>
        </div>
    );
}

export default InputComponent;