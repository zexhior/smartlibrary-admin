import AuthorImg from '../../../../common/images/authors/administrator.png';
import CardComponent from '../../../../widgets/card/card';
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
        <p>`${author.name} ${author.last_Name}`</p>
        <Stars star={star}/>
    </>)

    const AuthorsRecommended = [
        author,
        author,
        author,
    ]

    return (<div className='userauthors'>
        <p>Recommondation : </p>
        <div className='authorrecommended'>
            {
                AuthorsRecommended.map((element:any,i)=>{
                    return (<CardComponent img={element.cover} body={Body(element.star)}/>);
                })
            }
        </div>
        <p>Auteurs favoris : </p>
        <div className='favauthor'>
            {
                AuthorsRecommended.map((element:any,i)=>{
                    return (<CardComponent img={element.cover} body={Body(element.star)}/>);
                })
            }
        </div>
    </div>)
}

export default UserAuthors;