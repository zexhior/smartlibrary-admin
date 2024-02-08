import { Button } from "../../../styles/button";
import { SideTitle } from "../../../styles/sidetitle";
import { Title } from "../../../styles/title";
import SignUpImage from "../../../common/images/signup.png";
import InputComponent from "../../../widgets/input/input";
//import Logo from '../../../common/images/logo/colored_logo.png';
import "./register.scss";
import { useEffect, useRef, useState } from "react";
import { User } from "../../models/users";
import SignUp from "../../controllers/SignUp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../redux/userredux";

interface MyStyle {
  style: String;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<MyStyle> = ({ style, setStyle }) => {
  const container = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<User>();
  const [message, setMessage] = useState<string>("");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (container.current) {
      container.current.style.animation = style.toString();
    }
  }, [style]);

  const Back = (e: any) => {
    setStyle("backfirstpage 600ms ease-in-out forwards");
  };

  const SendDataSignUp = async (e: any) => {
    e.preventDefault();
    console.log("test");
    /*if (user?.password === user?.passwordConfirm) {
      const response = await SignUp(user as User);
      if (response.user._id) {
        dispatch(setCurrentUser(response.user));
        navigation("/");
      } else {
        console.log(response);
      }
    } else {
      setMessage("Mot de passe different!");
    }*/
  };

  return (
    <div className="container" ref={container}>
      <div className="container-deco">
        <Button className="button button-login button-back" onClick={Back}>
          Retour
        </Button>
        <img
          className="container-deco-image"
          width="450px"
          src={SignUpImage}
          alt="deco-login"
        />
      </div>
      <div className="container-body">
        {/*<div className='container-body-img'>
            <img src={Logo} alt='logo' width="100px" height="100px"/>
        </div>*/}
        <Title className="text-color-main">Bienvenue a vous!</Title>
        <SideTitle className="text-color-lightgray">
          Remplissez le formulaire
        </SideTitle>
        <form onSubmit={SendDataSignUp}>
          <InputComponent
            type="text"
            label="Nom"
            placeholder="Nom"
            required={true}
            name="name"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="text"
            label="Prenom"
            placeholder="Prenom"
            required={true}
            name="first_name"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="text"
            label="Adresse"
            placeholder="Adresse"
            required={true}
            name="address"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="date"
            label="Date de naissance"
            placeholder=""
            required={true}
            name="birth_date"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="tel"
            label="Telephone"
            placeholder="0000000000"
            required={true}
            name="phone_number"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="email"
            label="E-mail"
            placeholder="mail@mail"
            required={true}
            name="email"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="password"
            label="Mot de passe"
            placeholder="Mot de passe"
            required={true}
            name="password"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="password"
            label="Confirmer mot de passe"
            placeholder="Mot de passe"
            required={true}
            name="passwordConfirm"
            state={user}
            setState={setUser}
            activation={false}
          />
          <p className="warning" style={{ color: "red", textAlign: "center" }}>
            {message}
          </p>
          <div className="container-body-button">
            <Button type="submit" className="button button-login button-signup">
              Creer mon compte
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
