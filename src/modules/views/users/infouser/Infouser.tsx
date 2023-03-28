import { UserImage } from '../../../../styles/userimages';
import './infouser.scss';
import User from '../../../../common/images/user.jpg';
import Onglet from '../../../../widgets/onglet/onglet';
import { SideTitle } from '../../../../styles/sidetitle';

const InfoUser = ()=>{
    const options = [{text:'Livres',link:''},
    {text:'Auteurs',link:'authors'}];

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
    
    return (<div className='infouser-container'>
        <div className='mini-infouser'>
            <UserImage className='infouser-img' src={user.photo} alt='user'/>
            <div>
                <p>{user.name} {user.first_name}</p>
                <p>{user.address}</p>
                <p>{user.birth_date}</p>
                <p>{user.email}</p>
                <p>{user.phone_number}</p>
            </div>
        </div>
        <div className='infouser-container-data'>
            <SideTitle>Utilisateurs</SideTitle>
            <Onglet options={options}/>
        </div>
        <div className='infouser-container-detail'>
            <UserImage className='infouser-img' src={user.photo} alt='user'/>
            <div className='detail-section'>
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
        </div>
    </div>);
}

export default InfoUser;