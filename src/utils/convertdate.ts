export const ConvertDate = (obj:any)=>{
    if(obj['publishing_date'])
        return {...obj,publishing_date: obj.publishing_date.split('T')[0]};
    return obj;
}