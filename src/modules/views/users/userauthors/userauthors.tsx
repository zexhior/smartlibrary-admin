import React from 'react';
import AuthorImg from '../../../../common/images/authors/administrator.png';
import { SideTitle } from '../../../../styles/sidetitle';
import { TitleColored } from '../../../../styles/titlescolored';
import CardComponent from '../../../../widgets/card/card';
import PaginationComponent from '../../../../widgets/pagination/pagination';
import Stars from '../../../../widgets/stars/stars';
import './userauthors.scss';

const UserAuthors = ()=>{

    const author = {
        name : "Gilles", 
        last_Name : "Bindi", 
        star : 4, 
        photo: AuthorImg
    }

    const Body = (star:number)=>(<>
        <SideTitle>{author.name} {author.last_Name}</SideTitle>
        <Stars star={star}/>
    </>)

    const AuthorsRecommended = [
        author,
        author,
        author,
        author,
        author,
        author,
    ]

    return (<div className='userauthors'>
        <TitleColored className='title-section'>Recommondation : </TitleColored>
        <div className='authorrecommended'>
            {
                AuthorsRecommended.map((element:any,i)=>{
                    return (<CardComponent img={element.photo} body={Body(element.star)}/>);
                })
            }
        </div>
        <TitleColored className='title-section'>Auteurs favoris : </TitleColored>
        <div className='favauthor'>
            {
                AuthorsRecommended.map((element:any,i)=>{
                    return (<CardComponent img={element.photo} body={Body(element.star)}/>);
                })
            }
        </div>
        <PaginationComponent/>
    </div>)
}

export default UserAuthors;