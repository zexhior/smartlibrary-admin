export const FilterId = <Type>(Obj: Type)=>{
    const data = {...Obj};
    Reflect.deleteProperty(data as object,'_id');
    return data;
}