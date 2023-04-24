import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Headeer from './composants/header/Headeer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './composants/footer/Footer';
import Register from './composants/login/Register';
import Login from './composants/login/Login';
import Account from './composants/login/Account';
function App() {
  return (
    <div className="App">
      <Headeer/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/register" exact element={<Register/>} />
        <Route  path="/login" exact element={<Login/>} />
        <Route  path="/account" exact element={<Account/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
