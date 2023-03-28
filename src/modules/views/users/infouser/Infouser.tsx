import { UserImage } from '../../../../styles/userimages';
import './infouser.scss';
import User from '../../../../common/images/user.jpg';
import Book from '../../../../common/images/books/couv_8.png';
import CardComponent from '../../../../widgets/card/card';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import Onglet from '../../../../widgets/onglet/onglet';

const StarStyle = styled.div`
    display: flex;
`;

const InfoUser = ()=>{
    const options = ['Livres','Auteurs'];

    const book = {
        title: "Toute une nuit", 
        isbn: "4", 
        star: 3, 
        publishing_date: "2022-09-18", 
        category: 3, 
        cover: Book,
        synopsis: `8 personnages. 8 trajectoires qui se croisent. 
        Toutes leurs vies en une nuit.  Reda, Alexis, Marco, Greg 
        / Melissa, Joao, Marina, X, François, … Ils sont pute, 
        étudiant débarqué de province, en sursis, 
        DRH, star de téléréalité, dealer, serveur ou encore loser. 
        Cette nuit ils vont sortir, ils vont clubber, ils vont 
        travailler, ils vont se rencontrer, ils vont se désirer, 
        gagner de l’argent, dealer des ecstas, s’embrasser, 
        s’oublier, se perdre, rentrer chez eux, ou pas.  8. 
        TOUTE UNE NUIT. est un Short Cuts dans le monde 
        désenchanté des nuits parisiennes à l’aube de l’an 2000.
        `, 
        file: "pdf/8-toute_une_nuit_roman_ok.pdf"
    }

    const user = {
        _id: "",
        name: "Ravelomanantsoa",
        first_name: "Richard",
        address: "Lot II A 45 Talata",
        birth_date: "12/02/23",
        phone_number: "0341500516",
        email: "ravelorichard12@gmail.com",
        photo: User,
        password: "",
        passwordConfirm: "",
        role: "Administrateur"
    }

    const Body = (star:number)=>{
        const all_star = [];
        for(let i = 0; i < 5; i++){
            if(i<star){
                all_star.push(<FaStar fill="#DECC16"/>);
            }
            else{
                all_star.push(<FaStar fill="#B6A58A"/>)
            }
        } 

        return (<>
            <h3>{book.title}</h3>
            <p>{book.publishing_date}</p>
            <StarStyle className='star-container'>
                    {
                        all_star.map((element,i)=>{
                            return element;
                        })
                    }
            </StarStyle>
        </>)
    };
    
    return (<div className='infouser-container'>
        <div className='infouser-container-data'>
            <p className='text-color-lightgray'>Utilisateurs</p>
            <Onglet options={options}/>
            {/*<div className='infouser-container-data-bookrecommended'>
                <CardComponent img={book.cover} body={Body(book.star)}/>
                <CardComponent img={book.cover} body={Body(book.star)}/>
                <CardComponent img={book.cover} body={Body(book.star)}/>
            </div>
            <div className='infouser-favbook'>
                <CardComponent img={book.cover} body={Body(book.star)}/>
                <CardComponent img={book.cover} body={Body(book.star)}/>
                <CardComponent img={book.cover} body={Body(book.star)}/>
            </div>
            <div className='infouser-authorecommended'>
                
            </div>
            <div className='infouser-favauthor'>

            </div>*/}
        </div>
        <div className='infouser-container-detail'>
            <UserImage className='infouser-img' src={user.photo} alt='user'/>
            <div className='section'>
                <div className='section-label'>Nom</div>
                <div className='section-detail'>{user.name}</div>
            </div>
            <div className='section'>
                <div className='section-label'>Prenom</div>
                <div className='section-detail'>{user.first_name}</div>
            </div>
            <div className='section'>
                <div className='section-label'>Adresse</div>
                <div className='section-detail'>{user.address}</div>
            </div>
            <div className='section'>
                <div className='section-label'>Date de naissance</div>
                <div className='section-detail'>{user.birth_date}</div>
            </div>
            <div className='section'>
                <div className='section-label'>Telephone</div>
                <div className='section-detail'>{user.phone_number}</div>
            </div>
            <div className='section'>
                <div className='section-label'>Email</div>
                <div className='section-detail'>{user.email}</div>
            </div>
        </div>
    </div>);
}

export default InfoUser;