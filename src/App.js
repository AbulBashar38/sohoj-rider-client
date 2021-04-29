
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import CreateUser from './Components/CreateUser/CreateUser';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <Route path='/createUser'>
        <CreateUser></CreateUser>
        </Route>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
