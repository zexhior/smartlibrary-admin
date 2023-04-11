import { useState, useEffect, useRef } from 'react';
import { Api } from '../../utils/api';
const GetOneElement = <Type>(url:string, id:string | undefined | null)=>{
    const [element,setElement] = useState<Type>();

    useEffect(()=>{
        function getOne(){
            Api.get(url+id).then((data)=>{
                setElement(data.data.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
        getOne();
    },[url,id]);

    return {element,setElement};
}

export default GetOneElement;