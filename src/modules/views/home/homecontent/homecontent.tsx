import Hello from '../../../../common/images/hello.png';
import Ispm from '../../../../common/images/logo/ispm.png';
import SmartLibrary from '../../../../common/images/logo/colored_logo.png';
import { Title } from '../../../../styles/title';
import './homecontent.scss';

const HomeContent = () => {
    return (<div className="homecontent-container">
        <div className='homecontent-container-logo'>
            <img className='smartlibrary' src={SmartLibrary} alt='logo-sl'/>
            <img className='ispm' src={Ispm} alt='logo-ispm'/>
        </div>
        <div className='homecontent-container-text'>
            <Title>Bienvenue sur le site moderateur de SmartLibrary</Title>
            <p>Ici, vous allez pouvoir surveiller les différents utilisateurs de
                de l'application mobile smartlibrary ainsi que d'ajouter, de supprimer
                et de modifier les livers, les auteurs et les catégories de livres de
                SmartLibrary. Les données sont très sensibles alors soyer prudent lorsque
                vous manipuleraient les données.
            </p>
        </div>
        <div className="homecontent-container-image">
            <img src={Hello} alt='home'/>
        </div>
    </div>)
}

export default HomeContent;