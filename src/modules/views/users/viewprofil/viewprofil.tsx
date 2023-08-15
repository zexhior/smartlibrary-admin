import { useEffect, useState } from "react";
import { TitleColored } from "../../../../styles/titlescolored";
import InputComponent from "../../../../widgets/input/input";
import "./viewprofil.scss";
import { User } from "../../../models/users";
import { useSelector } from "react-redux";
import { Button } from "../../../../styles/button";
import { UserImage } from "../../../../styles/userimages";
import UserDefault from "../../../../common/images/profil.jpg";
import { AiFillCamera } from "react-icons/ai";
import UpdateElement from "../../../controllers/UpdateElement";

const ViewProfil = () => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const [photo, setPhoto] = useState<File>();
  const [user, setUser] = useState<User>(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const HandlerEditUser = (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("id", user._id);
    formdata.append("name", user.name);
    formdata.append("first_name", user.first_name);
    formdata.append("birth_date", user.birth_date);
    formdata.append("phone_number", user.phone_number);
    formdata.append("email", user.email);
    formdata.append("role", user.role);
    if (photo) formdata.append("photo", photo as Blob);
    UpdateElement("users/updateMe/", "", formdata);
    if (user.password) {
      if (user.password === user.passwordConfirm) {
        console.log("test");
        //formdata.append('password', user.password);
        //formdata.append('passwordConfirm', user.passwordConfirm);
        const data = {
          passwordCurrent: user.password,
          password: user.passwordConfirm,
        };
        UpdateElement("users/updateMyPassword/", "", data);
      }
    }
  };

  const HandlerGetFile = (files: FileList | null) => {
    if (files) {
      var file = files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        const urlImage = reader.result?.toString();
        if (urlImage) setUser({ ...user, photo: urlImage });
      };
      setPhoto(file);
    }
  };

  return (
    <div className="viewprofil-container">
      <TitleColored>Votre profil</TitleColored>
      <div className="viewprofil-edit">
        <div className="viewprofil-photo">
          <UserImage
            className="infouser-img"
            src={user?.photo === "default.jpg" ? UserDefault : user?.photo}
            alt="user"
          />
          <Button className="button animation">
            <span>
              <AiFillCamera size={20} color={"white"} />
            </span>
            <input
              type="file"
              onChange={(e) => HandlerGetFile(e.target.files)}
            />
          </Button>
        </div>
        <form onSubmit={HandlerEditUser}>
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
            label="Mot de passe actuel"
            placeholder="Mot de passe"
            required={false}
            name="password"
            state={user}
            setState={setUser}
            activation={false}
          />
          <InputComponent
            type="password"
            label="Nouveau mot de passe"
            placeholder="Mot de passe"
            required={false}
            name="passwordConfirm"
            state={user}
            setState={setUser}
            activation={false}
          />
          <div className="container-body-button">
            <Button type="submit" className="button button-login button-signup">
              Modifier
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewProfil;
