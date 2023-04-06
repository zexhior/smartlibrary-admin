import { Button } from "../../../styles/button";
import { SideTitle } from "../../../styles/sidetitle";
import { Title } from "../../../styles/title";
import SignUpImage from '../../../common/images/signup.png';
import InputComponent from "../../../widgets/input/input";
import Logo from '../../../common/images/logo/colored_logo.png';
import './register.scss';
import { useEffect, useRef, useState } from "react";
import { User } from "../../models/users";
import useSignUp from "../../controllers/SignUp";
import { useNavigate } from "react-router-dom";

interface MyStyle{
    style: String,
    setStyle: React.Dispatch<React.SetStateAction<string>>; 
}

const Register: React.FC<MyStyle> = ({style, setStyle})=>{
    const container = useRef<HTMLDivElement>(null)
    const [user,setUser] = useState<User | object | string>({});
    const navigation = useNavigate();

    useEffect(()=>{
        if(container.current){
            container.current.style.animation = style.toString();
        }
    },[style])

    const Back = (e:any)=>{
        setStyle("backfirstpage 600ms ease-in-out forwards");
    }

    const SendDataSignUp = async (e:any)=>{
        e.preventDefault();
        const response = await useSignUp(user as User);
        if(response.user._id){
            navigation('/')
        }else{
            console.log(response);
        }
    }

    return (<div className='container' ref={container}>
    <div className='container-deco'>
        <Button className="button button-login button-back" onClick={Back}>Retour</Button>
        <img className='container-deco-image' width='450px' src={SignUpImage} alt='deco-login'/>
    </div>
    <div className="container-body">
        <div className='container-body-img'>
            <img src={Logo} alt='logo' width="100px" height="100px"/>
        </div>
        <Title className="text-color-main">Bienvenue a vous!</Title>
        <SideTitle className='text-color-lightgray'>Remplissez le formulaire</SideTitle>
        <form onSubmit={SendDataSignUp}>
            <InputComponent type='text' label='Nom' placeholder="Nom" required={true} name="name" state={user} setState={setUser} data={null}/>
            <InputComponent type='text' label='Prenom' placeholder="Prenom" required={true} name="first_name" state={user} setState={setUser} data={null}/>
            <InputComponent type='text' label='Adresse' placeholder="Adresse" required={true} name="address" state={user} setState={setUser} data={null}/>
            <InputComponent type='date' label='Date de naissance' placeholder='' required={true} name="birth_date" state={user} setState={setUser} data={null}/>
            <InputComponent type='tel' label='Telephone' placeholder="0000000000" required={true} name="phone_number" state={user} setState={setUser} data={null}/>
            <InputComponent type='email' label='E-mail' placeholder="mail@mail" required={true} name="email" state={user} setState={setUser} data={null}/>
            <InputComponent type='password' label='Mot de passe' placeholder="Mot de passe" required={true} name="password" state={user} setState={setUser} data={null}/>
            <InputComponent type='password' label='Confirmer mot de passe' placeholder="Mot de passe" required={true} name='passwordConfirm' state={user} setState={setUser} data={null}/>
            <div className='container-body-button'>
                <Button type='submit' className='button button-login button-signup'>Creer mon compte</Button>
            </div>  
        </form>
    </div>
</div>);
}

export default Register;