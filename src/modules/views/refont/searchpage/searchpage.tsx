import { useDispatch, useSelector } from "react-redux";
import "./searchpage.scss";
import { useEffect, useState } from "react";
import SearchElement from "../../../controllers/SearchElement";
import { setSearchAuthors } from "../../../../redux/authorredux";
import AuthorList from "../body/authors/authorlist/authorlist";
import { Authors } from "../../../models/authors";
import MainList from "../body/books/mainlist/mainlist";
import { Book } from "../../../models/books";
import { User } from "../../../models/users";
import UserList from "../body/users/userlist/userlist";
import UserInfo from "../body/users/userinfo/userinfo";

interface UserSearchPageProps {
  users: User[];
}

const UserSearchPage: React.FC<UserSearchPageProps> = ({ users }) => {
  const [user, setUser] = useState<User | undefined>(users[0]);

  return (
    <div className="users-search">
      <UserList users={users} setUser={setUser} />
      <UserInfo user={user} />
    </div>
  );
};

const SearchPage = () => {
  const search = useSelector((state: any) => state.search.text);
  const [pos, setPos] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [authors, setAuthors] = useState<Array<any>>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      if (search) {
        const authorsData = await SearchElement(
          "authors/search",
          `first_name=${search}&last_name=${search}`,
          setSearchAuthors
        );
        setAuthors(authorsData);
        const booksData = await SearchElement(
          "books/search",
          `title=${search}`,
          null
        );
        console.log(booksData);
        setBooks(booksData as Array<Book>);
        const usersData = await SearchElement(
          "users/search",
          `first_name=${search}`,
          null
        );
        console.log(usersData);
        setUsers(usersData as Array<User>);
      }
    }
    fetch();
  }, [search]);

  const List = ["Utilisateurs", "Livres", "Auteurs"];

  const HandlerClickItem = (index: number) => {
    setPos(index);
  };

  const ShowData = [
    <UserSearchPage users={users} />,
    <MainList books={books} />,
    <AuthorList authors={authors} />,
  ];

  return (
    <div className="search__page">
      <div className="search__page-bar">
        {List.map((item: string, index: number) => (
          <div className="card" onClick={(e) => HandlerClickItem(index)}>
            {item}
          </div>
        ))}
      </div>
      <div className="search__page-content">{ShowData[pos]}</div>
    </div>
  );
};

export default SearchPage;
