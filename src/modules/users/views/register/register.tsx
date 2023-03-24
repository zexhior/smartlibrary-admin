import { Button } from "../../../../styles/button";
import { SideTitle } from "../../../../styles/sidetitle";
import { Title } from "../../../../styles/title";
import SignUpImage from '../../../../common/images/signup.png';
import InputComponent from "../../../../widgets/Input/input";
import Logo from '../../../../common/images/logo/colored_logo.png';
import './register.scss';
import { useEffect, useRef } from "react";

interface MyStyle{
    style: String,
    setStyle: React.Dispatch<React.SetStateAction<string>>; 
}

const Register: React.FC<MyStyle> = ({style, setStyle})=>{
    const container = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(container.current){
            container.current.style.animation = style.toString();
        }
    },[style])

    const Back = (e:any)=>{
        setStyle("backfirstpage 600ms ease-in-out forwards");
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
        <form>
            <InputComponent type='text' label='Nom' placeholder="Nom"/>
            <InputComponent type='text' label='Prenom' placeholder="Prenom"/>
            <InputComponent type='text' label='Adresse' placeholder="Adresse"/>
            <InputComponent type='date' label='Date de naissance'/>
            <InputComponent type='tel' label='Telephone' placeholder="0000000000"/>
            <InputComponent type='email' label='E-mail' placeholder="mail@mail"/>
            <InputComponent type='password' label='Mot de passe' placeholder="Mot de passe"/>
            <InputComponent type='password' label='Confirmer mot de passe' placeholder="Mot de passe"/>
        </form>
        <div>
            <Button className='button button-login button-signup'>Creer</Button>
        </div>  
    </div>
</div>);
}

export default Register;