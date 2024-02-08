import { Button } from "../../../styles/button";
import { Card } from "../../../styles/card";
import InputComponent from "../../../widgets/input/input";
import LoginImage from "../../../common/images/login.png";
//import Logo from '../../../common/images/logo/colored_logo.png';
import "./login.scss";
import { Title } from "../../../styles/title";
import { SideTitle } from "../../../styles/sidetitle";
import Register from "../register/register";
import { useEffect, useRef, useState } from "react";
import useLogin from "../../controllers/Login";
import { useDispatch } from "react-redux";
import Load from "../../../common/load/load";
import { setCurrentUser } from "../../../redux/userredux";

interface DataLogin {
  email: string;
  password: string;
}

const Login = () => {
  const [style, setStyle] = useState("");
  const [data, setData] = useState<DataLogin | object>({
    email: "",
    password: "",
  });
  const container = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const loading = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.style.animation = style.toString();
    }
  }, [style]);

  const MovePage = (e: any) => {
    e.preventDefault();
    if (container.current) {
      container.current.style.animation =
        "changepage 600ms ease-in-out forwards";
      setStyle("changepage 600ms ease-in-out forwards");
    }
  };

  const SendDataLogin = async (e: any) => {
    e.preventDefault();
    const value = data as DataLogin;
    if (loading.current) {
      loading.current.style.display = "flex";
    }
    useLogin(value.email, value.password)
      .then((data) => {
        dispatch(setCurrentUser(data.user));
        window.location.reload();
      })
      .catch((error) => {});
  };

  return (
    <div className="body-login color-gray">
      <div className="body-loading" ref={loading}>
        <div className="body-loading-container">
          <Load />
        </div>
      </div>
      <Card className="section">
        <div className="container" ref={container}>
          <div className="container-deco">
            <img
              className="container-deco-image"
              width="450px"
              src={LoginImage}
              alt="deco-login"
            />
          </div>
          <div className="container-body">
            {/*<div className='container-body-img'>
                        <img className='deco-img'src={Logo} alt='logo' width="100px" height="100px"/>
                    </div>*/}
            <Title className="text-color-main">Salutation!</Title>
            <SideTitle className="text-color-lightgray">
              Veuillez-vous connecter
            </SideTitle>
            <form onSubmit={SendDataLogin}>
              <InputComponent
                label="E-mail"
                type="email"
                placeholder="mail@mail"
                required={true}
                name="email"
                state={data}
                setState={setData}
                activation={false}
              />
              <InputComponent
                label="Mot de passe"
                type="password"
                placeholder="mot de passe"
                required={true}
                name="password"
                state={data}
                setState={setData}
                activation={false}
              />
              <div className="container-body-button">
                <Button
                  type="submit"
                  className="button-login button"
                  onClick={(e) => SendDataLogin(e)}
                >
                  Connexion
                </Button>
                <Button className="button-login button" onClick={MovePage}>
                  Creer
                </Button>
              </div>
            </form>
          </div>
        </div>
        <Register style={style} setStyle={setStyle} />
      </Card>
    </div>
  );
};

export default Login;
