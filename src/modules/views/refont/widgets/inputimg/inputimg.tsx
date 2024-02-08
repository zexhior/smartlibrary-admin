import { useEffect, useState } from "react";
import "./inputimg.scss";
import { FaPlus } from "react-icons/fa";

interface InputImageProps {
  name: string;
  state: File | undefined;
  setState: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const InputImage: React.FC<InputImageProps> = ({ name, state, setState }) => {
  const HandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setState(e.target.files[0]);
      InitImage(e.target.files[0]);
    }
  };

  const [img, setImg] = useState<any>("");

  const InitImage = (file: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImg(reader.result);
    };
  };

  useEffect(() => {
    if (state) InitImage(state);
  }, [state]);

  return (
    <>
      <div className="input-img  border-radius2">
        <p>Photo</p>
        {state ? (
          <>
            <img src={state ? img : ""} alt="cover" />
          </>
        ) : (
          <></>
        )}
        <div className="input-img-addcover">
          <FaPlus color="white" size={50} />
          <input type="file" onChange={HandlerChange} />
        </div>
      </div>
    </>
  );
};

export default InputImage;
