import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import admincomponent from './components/admincomponent';
import usercomponent from './components/usercomponent';
import adminoptions from './components/adminoptions';
import addProduct from './components/addProduct';
import deleteProduct from './components/deleteProduct';
import searchProducts from './components/searchProducts';
import createuser from './components/createuser';
import deleteuser from './components/deleteuser';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/admin" Component={admincomponent}/>
      <Route path="/user" Component={usercomponent}/>
      <Route path="/adminoptions" Component={adminoptions}/>
      <Route path="/addProduct" Component={addProduct}/>
      <Route path="/deleteProduct" Component={deleteProduct}/>
      <Route path="/searchProducts" Component={searchProducts}/>
      <Route path="/createuser" Component={createuser}/>
      <Route path="/deleteuser" Component={deleteuser}/>
      </Routes>
    </Router>
    );
}

export default App;
