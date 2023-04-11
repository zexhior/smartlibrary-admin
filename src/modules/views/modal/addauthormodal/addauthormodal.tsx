import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../styles/button';
import InputComponent from '../../../../widgets/input/input';
import CreateController from '../../../controllers/CreateAuthor';
import UpdateElement from '../../../controllers/UpdateElement';
import { Authors } from '../../../models/authors';
import './addauthormodal.scss';

interface AddAuthorModalProps{
    action: string,
}

const AddAuthorModal : React.FC<AddAuthorModalProps>= ({action})=>{
    const updateAuthor = useSelector((state:any)=>state.author.updateauthor);
    const [author,setAuthor] = useState<Authors>({
        _id: "",
        first_name: "",
        last_name: "",
        star: 0,
        description: "",
        photo: ""
    });
    const [authorImage,setAuthorImage] = useState<File>();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(action==="update")
            setAuthor(updateAuthor);
    },[action,updateAuthor])

    const HandlerCreate = (e:any)=>{
        e.preventDefault();
        let formdata = new FormData();
        formdata.append('image',authorImage as Blob);
        formdata.append('last_name',author.first_name);
        formdata.append('first_name',author.last_name);
        formdata.append('star',author.star.toString());
        formdata.append('description', author.description);
        CreateController('authors/',formdata);
        navigate('/authors/');
    }

    const HandlerUpdate = (e:any)=>{
        e.preventDefault();
        let formdata = new FormData();
        if(authorImage)
            formdata.append('image',authorImage as Blob);
        formdata.append('last_name',author.first_name);
        formdata.append('first_name',author.last_name);
        formdata.append('photo',author.photo);
        formdata.append('star',author.star.toString());
        formdata.append('description', author.description);
        UpdateElement('authors/',author._id,formdata);
        navigate('/authors/');
    }

    return (<div className='addauthormodal'>
        <form >
            <InputComponent label={'Nom : '} type={'text'} placeholder={'Nom'} required={true} state={author} name={'last_name'} setState={setAuthor} />
            <InputComponent label={'Prénoms : '} type={'text'} placeholder={'Prénoms'} required={true} state={author} name={'first_name'} setState={setAuthor}/>
            <InputComponent label={'Description : '} type={'textarea'} placeholder={'Description'} required={true} state={author} name={'description'} setState={setAuthor}/>
            <InputComponent label={'Photo : '} type={'file'} placeholder={''} required={false} state={authorImage} name={'photo'} setState={setAuthorImage}/>
            {
                action==='create'?<Button  onClick={(e)=>HandlerCreate(e)} className="button animation">Creer</Button>:
                <Button  onClick={(e)=>HandlerUpdate(e)} className="button animation">Mettre a jour</Button>
            }
            
        </form>
    </div>)
}

export default AddAuthorModal;