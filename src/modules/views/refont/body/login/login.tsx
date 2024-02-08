import { useState } from "react";
import { User } from "../../../../models/users";
import Input from "../../widgets/input/input";
import "./login.scss";
import { UsersData } from "../../../../../mock/database";
import Logo from "../../../../../common/images/logo/logo-gray.png";
import RegisterImage from "../../../../../common/images/signup.png";
import LoginImage from "../../../../../common/images/login.png";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../../controllers/Login";
import { setCurrentUser } from "../../../../../redux/userredux";
import SignUp from "../../../../controllers/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal, setUpdatePlace } from "../../../../../redux/modalredux";
import Modal from "../modal/modal";

const Login = () => {
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<User>(UsersData[0]);
  const [toggle, setToggle] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const show = useSelector((state: any) => state.modal.show);

  const Connexion = async () => {
    dispatch(setUpdatePlace(8));
    dispatch(setShowModal(true));
    useLogin(user.email, user.password)
      .then((data) => {
        dispatch(setShowModal(false));
        dispatch(setCurrentUser(data.user));
        window.location.reload();
      })
      .catch((error) => {
        setMessage("Mot de passe ou adresse e-mail incorrect");
      });
  };

  const CreateHandler = async (e: any) => {
    e.preventDefault();
    if (user?.password === user?.passwordConfirm) {
      const response = await SignUp(user as User);
      if (response.user._id) {
        dispatch(setCurrentUser(response.user));
        navigate("/");
      } else {
        console.log(response);
      }
    } else {
      setMessage("Mot de passe different!");
    }
  };

  return (
    <div className="login">
      {show ? <Modal /> : <></>}
      {toggle ? (
        <div className="login-content border-radius">
          <div className="login-content-img">
            <img src={LoginImage} alt="login" />
          </div>
          <div className="login-content-form">
            <div className="login-content-form-logo">
              <img src={Logo} alt="logo" className="smartlibrary" />
            </div>
            <Input
              type={"email"}
              placeholder={"adresse e-mail"}
              name={"email"}
              label={"E-mail"}
              state={user}
              setState={setUser}
            />
            <Input
              type={"password"}
              placeholder={"mot de passe"}
              name={"password"}
              label={"Mot de passe"}
              state={user}
              setState={setUser}
            />
            <button className="button" onClick={(e) => Connexion()}>
              Connexion
            </button>
            <button className="button" onClick={(e) => setToggle(false)}>
              Créer un compte
            </button>
          </div>
        </div>
      ) : (
        <div className="register">
          <div className="register-img">
            <img src={RegisterImage} alt="login" />
          </div>
          <div className="register-form">
            <div className="register-form-logo">
              <img src={Logo} alt="logo" className="smartlibrary" />
            </div>
            <Input
              type={"text"}
              placeholder={"Nom"}
              name={"name"}
              label={"Nom"}
              state={user}
              setState={setUser}
            />
            <Input
              type={"text"}
              placeholder={"Prénoms"}
              name={"first_name"}
              label={"Prénom(s)"}
              state={user}
              setState={setUser}
            />
            <Input
              type={"text"}
              placeholder={"Téléphone"}
              name={"phone_number"}
              label={"Téléphone"}
              state={user}
              setState={setUser}
            />

            <Input
              type={"date"}
              placeholder={"2010-01-03"}
              name={"birthdate"}
              label={"Date de naissance"}
              state={user}
              setState={setUser}
            />
            <Input
              type={"email"}
              placeholder={"adresse e-mail"}
              name={"email"}
              label={"E-mail"}
              state={user}
              setState={setUser}
            />
            <Input
              type={"password"}
              placeholder={"mot de passe"}
              name={"password"}
              label={"Mot de passe"}
              state={user}
              setState={setUser}
            />
            <Input
              type={"password"}
              placeholder={"mot de passe"}
              name={"passwordConfirm"}
              label={"Confirmer mot de passe"}
              state={user}
              setState={setUser}
            />
            <button className="button" onClick={(e) => CreateHandler(e)}>
              Créer
            </button>
            <button className="button" onClick={(e) => setToggle(true)}>
              Authentification
            </button>
            <h3 className="message">{message}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
