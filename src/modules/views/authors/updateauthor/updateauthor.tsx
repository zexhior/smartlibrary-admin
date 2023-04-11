import React from "react";
import { TitleColored } from "../../../../styles/titlescolored";
import AddAuthorModal from '../../modal/addauthormodal/addauthormodal';
import './updateauthor.scss';

const UpdateAuthor = () => {
    return (<div className="updateauthor-container">
        <TitleColored>Mise a jour auteur</TitleColored>
        <AddAuthorModal action="update"/>
    </div>)
}

export default UpdateAuthor;