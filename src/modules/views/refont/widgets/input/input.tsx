import "./input.scss";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  label: string;
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  state,
  label,
  setState,
}) => {
  const HandlerChange = (text: string | File) => {
    setState({ ...state, [name]: text });
  };

  return type === "textarea" ? (
    <div className="textarea">
      <p>{label}</p>
      <textarea
        defaultValue={state[name]}
        onChange={(e) => HandlerChange(e.target.value)}
      />
    </div>
  ) : (
    <div className="input">
      <p>{label}</p>
      {type === "file" ? (
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => () => {
            if (e.target.files) HandlerChange(e.target.files[0]);
          }}
          className="custom-input"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={state[name]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            type === "file"
              ? () => {
                  if (e.target.files) HandlerChange(e.target.files[0]);
                }
              : HandlerChange(e.target.value)
          }
          className="custom-input"
        />
      )}
    </div>
  );
};

export default Input;
