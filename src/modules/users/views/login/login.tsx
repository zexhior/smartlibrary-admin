import { Button } from '../../../../styles/button';
import { Card } from '../../../../styles/card';
import InputComponent from '../../../../widgets/Input/input';
import LoginImage from '../../../../common/images/login.png';
import Logo from '../../../../common/images/logo/colored_logo.png';
import './login.scss';
import { Title } from '../../../../styles/title';
import { SideTitle } from '../../../../styles/sidetitle';
import Register from '../register/register';
import { useEffect, useRef, useState } from 'react';

const Login = ()=>{
    const [style,setStyle] = useState("");
    const container = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(container.current){
            container.current.style.animation = style;
        }
    },[style]);

    const MovePage = (e:any)=>{
        e.preventDefault();
        console.log("Hello");
        if(container.current){
            container.current.style.animation = "changepage 600ms ease-in-out forwards";
            setStyle("changepage 600ms ease-in-out forwards");
        }
    }

    return(<div className='body-login color-gray'>
        <Card className='section'>
            <div className='container' ref={container}>
                <div className='container-deco'>
                    <img className='container-deco-image' width='450px' src={LoginImage} alt='deco-login'/>
                </div>
                <div className='container-body'>
                    <div className='container-body-img'>
                        <img src={Logo} alt='logo' width="100px" height="100px"/>
                    </div>
                    <Title className='text-color-main'>Salutation!</Title>
                    <SideTitle className='text-color-lightgray'>Veuillez-vous connecter</SideTitle>
                    <form>
                        <InputComponent label='E-mail' type='email' placeholder='mail@mail'/>
                        <InputComponent label='Mot de passe' type='password' placeholder='mot de passe'/>
                        <div className='container-body-button'>
                            <Button className='button-login button'>Connexion</Button>
                            <Button className='button-login button' onClick={MovePage}>Creer</Button>
                        </div>
                    </form>
                </div>
            </div>
            <Register style={style} setStyle={setStyle}/>
        </Card>
    </div>);
}

export default Login;