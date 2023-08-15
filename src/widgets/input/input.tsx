import { ChangeEvent } from "react";
import { Input } from "../../styles/input";
import { Label } from "../../styles/label";
import "./input.scss";

interface MyStateInput {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  state: any;
  name: string;
  activation: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const InputComponent: React.FC<MyStateInput> = ({
  label = "",
  type = "text",
  placeholder = "",
  required = true,
  state,
  setState,
  name,
  activation,
}) => {
  const HandlerChange = (name: string, value: string) => {
    let new_value = value;
    if (name !== "") {
      if (name === "birthdate" || name === "publishing_date") {
        new_value = value.split("T")[0];
      }
      setState({ ...state, [name]: new_value });
    }
  };

  const HandlerGetFile = (files: FileList | null) => {
    if (files) setState(files[0]);
  };

  if (type === "textarea") {
    return activation ? (
      <div className="input">
        <Label>{label}</Label>
        <textarea
          value={state ? state[name] : " "}
          name={name}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            HandlerChange(e.target.name, e.target.value);
          }}
          required={required}
        ></textarea>
      </div>
    ) : (
      <div className="affichage">
        <Label>{label}</Label>
        <p>{state[name]}</p>
      </div>
    );
  } else {
    return activation ? (
      <div className="input">
        <Label> {label} </Label>
        <Input
          className="input"
          type={type}
          placeholder={placeholder}
          name={name}
          value={state ? state[name] : ""}
          onChange={
            type === "file"
              ? (e: ChangeEvent<HTMLInputElement>) => {
                  HandlerGetFile(e.target.files);
                }
              : (e: ChangeEvent<HTMLInputElement>) => {
                  HandlerChange(e.target.name, e.target.value);
                }
          }
          required={required}
        ></Input>
      </div>
    ) : (
      <div className="affichage">
        <Label>{label}</Label>
        <p>{state[name]}</p>
      </div>
    );
  }
};

export default InputComponent;
