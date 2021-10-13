import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration';
import Login from './components/Login';
import User from './components/User';
import Delete from './components/Delete';
import Update from './components/Update';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios'
function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>CRUD-Mern Authentication</h1>
      <strong> <hr/></strong>
    <div className="App container">
      <div className="row">
          <div className="col-md-6">
              <Registration/>
          </div>
          <div className="col-md-6">
              <Login/>
          </div>
      </div>
      <div className="row">
          <div className="col-md-6">
               <Delete/>
          </div>
          <div className="col-md-6">
               <Update/>
          </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-8">
              <User/>
          </div>
      </div>
    </div>
    <strong> <hr/></strong>
    <h6 className="text-center">Made with <span className="Faheart"><FaHeart /></span> by Vijay</h6>
     <br/>
    </div>
  );
}

export default App;
