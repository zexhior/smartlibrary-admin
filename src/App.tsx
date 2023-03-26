import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './modules/views/home/home';
import Login from './modules/views/login/login';

function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
