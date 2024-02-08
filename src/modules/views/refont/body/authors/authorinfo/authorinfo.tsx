import { useParams } from "react-router-dom";
import "./authorinfo.scss";
import { useEffect, useState } from "react";
import { Authors } from "../../../../../models/authors";
import { AuthorsData } from "../../../../../../mock/database";
import Info from "./info/info";
import Describe from "./describe/describe";
import AuthorWorks from "./authorworks/authorworks";
import AuthorFavorites from "./authorfavorites/authorfavorites";
import GetOneElement from "../../../../../controllers/GetOneElement";
import { setUpdateAuthor } from "../../../../../../redux/authorredux";
import UpdateElement from "../../../../../controllers/UpdateElement";

const AuthorInfo = () => {
  const { id } = useParams();
  const { element, setElement } = GetOneElement<Authors>(
    "authors/",
    id,
    setUpdateAuthor
  );

  const HandlerSaveAuthor = () => {
    if (element) UpdateElement("authors", element._id, element);
  };

  return (
    <div className="authorinfo">
      <div className="authorinfo-body">
        <Info author={element} setAuthor={setElement} />
        <div className="authorinfo-body-detail">
          <div>
            <Describe author={element} setAuthor={setElement} />
            {/* <button className="button" onClick={HandlerSaveAuthor}>
              Sauvegarder les modifications
            </button> */}
          </div>
          <div>
            <AuthorWorks author_id={element?._id} />
          </div>
        </div>
      </div>
      <div className="authorinfo-sidebar">
        <AuthorFavorites author={element} />
      </div>
    </div>
  );
};

export default AuthorInfo;
