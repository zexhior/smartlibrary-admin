import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './modules/views/home/home';
import Login from './modules/views/login/login';
import Users from './modules/views/users/users';
import Books from './modules/views/books/books';
import AuthGuard from './utils/authguard';
import ListUsers from './modules/views/users/listusers/listusers';
import InfoUser from './modules/views/users/infouser/Infouser';

const App : React.FC= () => {

  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/' element={<AuthGuard children={<Home/>}/>}>
          <Route path='/users' element={<Users/>}>
            <Route index path='/users/' element={<ListUsers/>}/>
            <Route path='/users/:id' element={<InfoUser/>}/>
          </Route>
          <Route path='/books' element={<Books/>}/>
        </Route>
        <Route path='*' element={<AuthGuard children={<Home/>}/>}/>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
