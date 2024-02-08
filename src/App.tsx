import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./modules/views/refont/body/home/home";
import Users from "./modules/views/refont/body/users/users";
import AuthGuard from "./utils/authguard";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthGuardLogin from "./utils/authguardlogin";
import Books from "./modules/views/refont/body/books/books";
import Authors from "./modules/views/refont/body/authors/authors";
import UserPage from "./modules/views/refont/body/users/userpage/userpage";
import BookInfo from "./modules/views/refont/body/books/bookinfo/bookinfo";
import AuthorInfo from "./modules/views/refont/body/authors/authorinfo/authorinfo";
import Login from "./modules/views/refont/body/login/login";
import Refont from "./modules/views/refont/refont";
import Page404 from "./modules/views/404/404";
import SearchPage from "./modules/views/refont/searchpage/searchpage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route
              path="/login"
              element={<AuthGuardLogin children={<Login />} />}
            />
            <Route path="/" element={<AuthGuard children={<Refont />} />}>
              <Route index element={<Home />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserPage />} />
              <Route path="books" element={<Books />} />
              <Route path="books/:id" element={<BookInfo />} />
              <Route path="authors" element={<Authors />} />
              <Route path="authors/:id" element={<AuthorInfo />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
