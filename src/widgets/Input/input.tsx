import { ChangeEvent } from "react";
import { User } from "../../modules/models/users";
import { Input } from "../../styles/input";
import { Label } from "../../styles/label";
import './input.scss';

interface MyStateInput{
    label: string,
    type: string,
    placeholder: string,
    required: true,
    state: Object,
    name: string,
    setState: React.Dispatch<React.SetStateAction<Object>>
}

const InputComponent : React.FC<MyStateInput> = ({label="", type="text", placeholder="", required=true, state, setState, name})=>{
    
    const HandlerChange = (name:string,value:string) =>{
        let new_value = value;
        if(name !== ''){
            if(name === "birthdate"){
                new_value = value.split('T')[0];
                console.log(value);
            }
            setState({...state,[name]:new_value});
        }
    }
    
    return (
        <div className=''>
            <Label> {label} </Label><br/>
            <Input className='input' type={type} placeholder={placeholder} name={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>{HandlerChange(e.target.name,e.target.value)}} required={required}></Input>
        </div>
    );
}

export default InputComponent;