import React from "react";
import { TitleColored } from "../../../../styles/titlescolored";
import AddAuthorModal from '../../modal/addauthormodal/addauthormodal';
import './createauthor.scss';

const CreateAuthor = ()=>{
    return (<div className="createauthor-container">
        <TitleColored>Creer un auteur</TitleColored>
        <AddAuthorModal action={"create"}/>
    </div>)
}

export default CreateAuthor;