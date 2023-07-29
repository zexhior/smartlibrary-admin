import { useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import { Api } from '../../utils/api';
import { ConvertDate } from '../../utils/convertdate';
const GetOneElement = <Type>(url:string, id:string | undefined | null, reducer: any)=>{
    const [element,setElement] = useState<Type>();
    const dispatch = useDispatch();

    useEffect(()=>{
        function getOne(){
            Api.get(url+id).then((data)=>{
                setElement(ConvertDate(data.data.data));
            }).catch((error)=>{
                console.log(error);
            })
        }
        getOne();
    },[url,id]);
    dispatch(reducer(element));
    return {element,setElement};
}

export default GetOneElement;