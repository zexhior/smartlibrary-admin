import AuthorImg from '../../../../common/images/authors/administrator.png';
import { SideTitle } from '../../../../styles/sidetitle';
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
        <p>Recommondation : </p>
        <div className='authorrecommended'>
            {
                AuthorsRecommended.map((element:any,i)=>{
                    return (<CardComponent img={element.photo} body={Body(element.star)}/>);
                })
            }
        </div>
        <p>Auteurs favoris : </p>
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