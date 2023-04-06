import { useState } from 'react';
import { Button } from '../../../../styles/button';
import InputComponent from '../../../../widgets/input/input';
import { Authors } from '../../../models/authors';
import './addauthormodal.scss';

const AddAuthorModal = ()=>{
    const [author,setAuthor] = useState<Authors | Object>({});
    const [authorImage,setAuthorImage] = useState<File>();

    return (<div className='addauthormodal'>
        <InputComponent label={'Nom : '} type={'text'} placeholder={'Nom'} required={true} state={author} name={'name'} setState={setAuthor} data={null} />
        <InputComponent label={'Prénoms : '} type={'text'} placeholder={'Prénoms'} required={true} state={author} name={'last_Name'} setState={setAuthor} data={{state:authorImage,mutator:setAuthorImage}} />
        <InputComponent label={'Photo : '} type={'file'} placeholder={''} required={false} state={author} name={'photo'} setState={setAuthor} data={null}/>
        <Button>Creer</Button>
    </div>)
}

export default AddAuthorModal;