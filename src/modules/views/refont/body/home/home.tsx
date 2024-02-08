import { FaBook, FaEdit, FaUser } from "react-icons/fa";
import "./home.scss";
import Book from "../../../../../common/images/reading.png";
import Writer from "../../../../../common/images/writer.png";
import Users from "../../../../../common/images/users.png";
import Welcome from "../../../../../common/images/hello.png";
import Image2 from "../../../../../common/images/zelda/1.png";
import Image3 from "../../../../../common/images/zelda/3.webp";
import Image4 from "../../../../../common/images/zelda/4.jpg";
import Stars from "../../../../../widgets/stars/stars";
import useGetAllElement from "../../../../controllers/GetAllElement";
import { setListUser } from "../../../../../redux/userredux";
import { User } from "../../../../models/users";
import { Api } from "../../../../../utils/api";
import { setListBook } from "../../../../../redux/bookredux";
import { Authors } from "../../../../models/authors";
import { setListAuthors } from "../../../../../redux/authorredux";
import { Book as Books } from "../../../../models/books";

const Home = () => {
  const users = useGetAllElement<User>("users", 1, setListUser);
  const authors = useGetAllElement<Authors>("authors", 1, setListAuthors);
  const books = useGetAllElement<Books>("books", 1, setListBook);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-header">
          <div className="home-content-header-element">
            <div className="home-content-header-element-icon">
              <FaUser color="white" size={35} />
            </div>
            <div className="home-content-header-element-text">
              <h3>{users.size}</h3>
              <p>Utilisateurs</p>
            </div>
          </div>
          <div className="home-content-header-element">
            <div className="home-content-header-element-icon">
              <FaEdit color="white" size={35} />
            </div>
            <div className="home-content-header-element-text">
              <h3>{authors.size}</h3>
              <p>Auteurs</p>
            </div>
          </div>
          <div className="home-content-header-element">
            <div className="home-content-header-element-icon">
              <FaBook color="white" size={35} />
            </div>
            <div className="home-content-header-element-text">
              <h3>{books.size}</h3>
              <p>Livres</p>
            </div>
          </div>
        </div>
        <div className="home-content-body">
          <div className="home-content-body-welcome">
            <h3>
              Bienvenue dans notre application SmartLibrary côté administrateur
            </h3>
            <img src={Welcome} alt="welcome" />
          </div>
          <h4>Les différents rôles de l'administrateur</h4>
          <div className="home-content-body-content">
            <div className="home-content-body-content-book">
              <img src={Book} alt="book" />
              <div className="home-content-body-content-book-text">
                <h3>Livres : </h3>
                <p>
                  Vous allez enregistrer les livres que les écrivains qui sont
                  enregistrés dans l'application smartlibrary veulent publier
                  dans l'application. Vous allez enregistrer les détails du
                  livre comme les synopsis, la date de publication et ainsi de
                  suite. Il vous suffit de remplir le formulaire pour
                  enregistrer les détails du livre.
                </p>
              </div>
            </div>
            <div className="home-content-body-content-right">
              <div
                id="author"
                className="home-content-body-content-right-element"
              >
                <img src={Writer} alt="writer" />
                <div className="home-content-body-right-element-text">
                  <h3>Auteurs : </h3>
                  <p>
                    Vous allez ajouter les nouveaux auteurs qui cherchent à
                    publier leur livre dans notre application.
                  </p>
                </div>
              </div>
              <div
                id="users"
                className="home-content-body-content-right-element"
              >
                <img src={Users} alt="users" className="image" />
                <div className="home-content-body-right-element-text">
                  <h3>Utilisateurs : </h3>
                  <p>
                    Vous allez gérer les utilisateurs qui utilisent SmartLibrary
                    et vérifier s'il n'y a pas d'erreur dans le prôtocole
                    d'utilisation des données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sidebar">
        <div className="home-sidebar-element">
          <h5>Les nouveaux utilisateurs</h5>
          <div className="home-sidebar-element-section">
            {users.elements.map((user: User, key: number) => (
              <div key={key}>
                <img
                  src={Api.root + user.photo}
                  alt="user"
                  className="bubble"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="home-sidebar-element">
          <h5>Les meilleurs auteurs</h5>
          <div className="home-sidebar-element-section">
            {authors.elements
              .slice(0, 5)
              .map((author: Authors, key: number) => (
                <div key={key}>
                  <img
                    src={Api.root + author.photo}
                    alt="writer"
                    className="bubble"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="home-sidebar-element">
          <h5>Les meilleurs livres</h5>
          {books.elements.slice(0, 3).map((book: Books, key: number) => (
            <div key={key} className="home-sidebar-element-book">
              <img src={Api.root + book.cover} alt="book" />
              <div className="home-sidebar-element-book-text">
                <h4>{book.title}</h4>
                <Stars star={3} />
                <div className="home-sidebar-element-book-text-author">
                  <img src={Image2} alt="author" className="bubble" />
                  <img src={Image3} alt="author" className="bubble" />
                  <img src={Image4} alt="author" className="bubble" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
