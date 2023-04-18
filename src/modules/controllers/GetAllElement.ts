import { useDispatch } from 'react-redux';
import { ConvertListDate } from './../../utils/convertlistdate';
import { useEffect, useState} from 'react';
import { Api } from '../../utils/api';

const useGetAllElement = <Type>(url:string, page: number, reducer: any)=>{
    const [elements,setElements] = useState<Array<Type>>(new Array<Type>());
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getAll(){
            let path = url;
            if(page !== 0)
                path = `${path}?page=${page}&limit=${8}`;
            Api.get(path).then((data:any)=>{
                data.data.data = ConvertListDate(data.data.data);
                setElements(data.data.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
        getAll();
    },[url,page])
    dispatch(reducer(elements));
    return {elements,setElements};
}

export default useGetAllElement;