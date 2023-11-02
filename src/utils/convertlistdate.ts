export const ConvertListDate = (objs:Array<any>)=>{
    if(objs?.length > 0){
        if(objs[0]['publishing_date']){
            for(let i = 0; i < objs.length; i++)
                objs[i] = {...objs[i],publishing_date: objs[i].publishing_date.split('T')[0]};
        }
        if(objs[0]['birthday']){
            for(let i = 0; i < objs.length; i++)
                objs[i] = {...objs[i],birthday: objs[i].birthday.split('T')[0]};
        }
        return objs;
    }
    else{
        return [];
    }
}