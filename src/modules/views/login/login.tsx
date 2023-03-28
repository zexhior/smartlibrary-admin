import { Button } from '../../../styles/button';
import { Card } from '../../../styles/card';
import InputComponent from '../../../widgets/input/input';
import LoginImage from '../../../common/images/login.png';
import Logo from '../../../common/images/logo/colored_logo.png';
import './login.scss';
import { Title } from '../../../styles/title';
import { SideTitle } from '../../../styles/sidetitle';
import Register from '../register/register';
import { useEffect, useRef, useState } from 'react';
import useLogin from '../../controllers/Login';
import { useNavigate } from 'react-router-dom';

interface DataLogin{
    email: string,
    password: string,
}

const Login = ()=>{
    const [style,setStyle] = useState("");
    const [data,setData] = useState<DataLogin | object>({email:"",password:""});
    const container = useRef<HTMLDivElement>(null);
    const navigation = useNavigate();

    useEffect(()=>{
        if(container.current){
            container.current.style.animation = style.toString();
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

    const SendDataLogin = async (e:any)=>{
        e.preventDefault();
        const value = data as DataLogin;
        const response = await useLogin(value.email, value.password);
        if(response.user._id){
            navigation('/');
        }else{
            console.log(response);
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
                        <img className='deco-img'src={Logo} alt='logo' width="100px" height="100px"/>
                    </div>
                    <Title className='text-color-main'>Salutation!</Title>
                    <SideTitle className='text-color-lightgray'>Veuillez-vous connecter</SideTitle>
                    <form onSubmit={SendDataLogin}>
                        <InputComponent label='E-mail' type='email' placeholder='mail@mail' required={true} name='email' state={data} setState={setData}/>
                        <InputComponent label='Mot de passe' type='password' placeholder='mot de passe' required={true} name='password' state={data} setState={setData}/>
                        <div className='container-body-button'>
                            <Button type='submit' className='button-login button' >Connexion</Button>
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