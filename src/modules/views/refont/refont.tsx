import './refont.scss';
import { FaBookOpen, FaPen, FaUser } from 'react-icons/fa';
import Logo from '../../../common/images/logo/logo-gray.png';
import User from '../../../common/images/user.jpg';
import Reading from "../../../common/images/reading.png";
import Writer from "../../../common/images/writer.png";
import Admin from "../../../common/images/admin.png";
import ISPM from "../../../common/images/logo/ispm.png";
import WriterImg from "../../../common/images/profile.jpg";
import Book from "../../../common/images/books/couv_8.png";
import Stars from '../../../widgets/stars/stars';

const ReFont = () => {
    return (<div className="refont">
        <div className='sidebar-left'>
            <div className='sidebar-left-head'>
                <img src={Logo} alt="logo" className='logo'/>
            </div>
            <div className='sidebar-left-body'>
                <div className='sidebar-element'>
                    <FaUser className='icon' size='15'/>
                    <span>Utilisateurs</span>
                </div>
                <div className='sidebar-element'>
                    <FaBookOpen className='icon' size='15'/>
                    <span>Livres</span>
                </div>
                <div className='sidebar-element'>
                    <FaPen className='icon' size='15'/>
                    <span>Auteurs</span>
                </div>
                <div className='sidebar-element'>
                    <FaUser className='icon' size='15'/>
                    <span>Categories</span>
                </div>
            </div>
            <div className='sidebar-left-foot'>
                <div className='user-image bubble'>
                    <img src={User} alt="user"/>
                </div>
                <div className='user-name'>
                    <h5>RASOLONJATOVO Brice Herizo</h5>
                    <button className='button animation main-background'>Deconnexion</button>
                </div>
            </div>
        </div>
        <div className='body'>
            <div className='body-head'>
                <div className='body-head-text'>
                    <h3>Administrateur de l'application SmartLibrary</h3>
                    <p>Administrer les différents livres et auteurs de l'application SmartLibrary et trier les livres selon leur genre en les classifiant par catégorie.</p>
                </div>
                <div className='body-head-img'>
                    <img src={Admin} alt="body-head" className='head-img'/>
                </div>
            </div>
            <div className='body-content'>
                <h4>Les differentes fonctionnalites</h4>
                <div className='body-content-cntr'>
                <div className='body-content-cntr-left'>
                    <h5>Les nouveaux utilisateurs</h5>
                    <div className='body-content-cntr-left-list'>
                        <div className='new-user'>
                            <div className='user-img-new '>
                                <img src={User} alt="new-user" className='bubble'/>
                            </div>
                        </div>
                        <div className='new-user'>
                            <div className='user-img-new '>
                                <img src={User} alt="new-user" className='bubble'/>
                            </div>
                        </div>
                        <div className='new-user'>
                            <div className='user-img-new '>
                                <img src={User} alt="new-user" className='bubble'/>
                            </div>
                        </div>
                        <div className='new-user'>
                            <div className='user-img-new '>
                                <img src={User} alt="new-user" className='bubble'/>
                            </div>
                        </div>
                        <div className='new-user'>
                            <div className='user-img-new '>
                                <img src={User} alt="new-user" className='bubble'/>
                            </div>
                        </div>
                    </div>
                    <h5>Nombre total de livre, auteur et utilisateur</h5>
                    <div className='body-content-cntr-left-total'>
                        <div className='total'>
                            <FaBookOpen color='white' size={50} className='icon'/>
                            <span> 123 Livres</span>
                        </div>
                        <div className='total'>
                            <FaBookOpen color='white' size={50} className='icon'/>
                            <span> 25 Auteurs</span>
                        </div>
                        <div className='total'>
                            <FaUser color='white' size={50} className='icon'/>
                            <span> 30 Utilisateurs</span>
                        </div>
                    </div>
                </div>
                <div className='body-content-cntr-right'>
                    <div id="book" 
                     className='body-content-cntr-right-feature'>
                        <div id="book-bar" className='feature-bar'></div>
                        <img src={Reading} alt="feature-img" className='feature-img'/>
                        <div className='feature-detail'>
                            <h3>Liste des livres</h3>
                            <p>Vous pouvez voir la liste des livres dans la base de données et vous pouvez ajouter ou modifier les déscriptions d'un livre ainsi que son auteur.</p>
                        </div>
                    </div>
                    <div id="author" className='body-content-cntr-right-feature'>
                        <div id="author-bar" className='feature-bar'></div>
                        <img src={Writer} alt="feature-img" className='feature-img'/>
                        <div className='feature-detail'>
                            <h3>Liste des auteurs</h3>
                            <p>Vous pouvez voir la liste des auteurs dans la base de données et vous pouvez ajouter ou modifier les déscriptions d'un auteur.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='body-footer'>

            </div>
        </div>
        <div className='sidebar-right'>
            <div className='sidebar-right-ispm'>
                <img src={ISPM} alt="ispm"/>
                <div>
                    <h4>Institut Superieur Polytechnique de Madagascar</h4>
                    <p>Fahaizana - Fampandrosoana - Fihavanana</p>
                </div>
            </div>
            <h5>Les meilleurs ecrivains</h5>
            <div className='best-writer'>
                <div className='writer'>
                    <img src={WriterImg} alt="writer-img" className='bubble'/>
                    <h5>John Harry</h5>
                </div>
                <div className='writer'>
                    <img src={WriterImg} alt="writer-img" className='bubble'/>
                    <h5>John Harry</h5>
                </div>
                <div className='writer'>
                    <img src={WriterImg} alt="writer-img" className='bubble'/>
                    <h5>John Harry</h5>
                </div>
            </div>
            <h5>Les meilleurs livres</h5>
            <div className='best-book'>
                <div className='book'>
                    <img src={Book} alt="book"/>
                    <div className='book-description'>
                        <h5>Tout une nuit</h5>
                        <Stars star={3}/>
                        <div className='book-writer'>
                            <img src={WriterImg} alt="book-writer"/>
                            <h5>John Harry</h5>
                        </div>
                    </div>
                </div>
                <div className='book'>
                    <img src={Book} alt="book"/>
                    <div className='book-description'>
                        <h5>Tout une nuit</h5>
                        <Stars star={3}/>
                        <div className='book-writer'>
                            <img src={WriterImg} alt="book-writer"/>
                            <h5>John Harry</h5>
                        </div>
                    </div>
                </div>
                <div className='book'>
                    <img src={Book} alt="book"/>
                    <div className='book-description'>
                        <h5>Tout une nuit</h5>
                        <Stars star={3}/>
                        <div className='book-writer'>
                            <img src={WriterImg} alt="book-writer"/>
                            <h5>John Harry</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default ReFont;