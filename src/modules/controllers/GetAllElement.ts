import { useEffect, useState, useRef } from 'react';
import { Api } from '../../utils/api';

const GetAllElement = <Type>(url:string, page: number)=>{
    const [elements,setElements] = useState<Array<Type>>([]);
    const fetchDataRef = useRef(false);

    useEffect(()=>{
        if(fetchDataRef.current) return;
        fetchDataRef.current = true;
        async function getAll(){
            Api.get(url).then((data:any)=>{
                setElements(data.data.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
        getAll();
    },[url,page])
    
    return {elements,setElements};
}

export default GetAllElement;