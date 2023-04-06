import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './modules/views/home/home';
import Login from './modules/views/login/login';
import Users from './modules/views/users/users';
import Books from './modules/views/books/books';
import AuthGuard from './utils/authguard';
import ListUsers from './modules/views/users/listusers/listusers';
import InfoUser from './modules/views/users/infouser/Infouser';
import UserBooks from './modules/views/users/userbooks/userbooks';
import UserAuthors from './modules/views/users/userauthors/userauthors';
import React from 'react';
import ListBooks from './modules/views/books/listbooks/listbooks';
import InfoBook from './modules/views/books/infobook/infobook';
import Synopsis from './modules/views/books/synopsis/synopsis';
import UpdateBook from './modules/views/books/updatebook/updatebook';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CreateBook from './modules/views/books/createbook/createbook';

const App : React.FC= () => {
  

  return (<div>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/' element={<AuthGuard children={<Home/>}/>}>
            <Route path='users' element={<Users/>}>
              <Route index element={<ListUsers/>}/>
              <Route path=':id' element={<InfoUser/>}>
                <Route index element={<UserBooks/>}/>
                <Route path='authors' element={<UserAuthors/>}/>
              </Route>
            </Route>
            <Route path='/books' element={<Books/>}>
              <Route index element={<ListBooks/>}/>
              <Route path=':id' element={<InfoBook/>}>
                <Route index element={<Synopsis/>}/>
                <Route path='update' element={<UpdateBook action="update"/>}/>
              </Route>
              <Route path='create' element={<CreateBook/>}/>
            </Route>
          </Route>
          <Route path='*' element={<AuthGuard children={<Home/>}/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </div>);
}

export default App;
