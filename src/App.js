
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import CreateUser from './Components/CreateUser/CreateUser';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import { createContext, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <ProtectedRoute path='/destination'>
            <Destination></Destination>
          </ProtectedRoute>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
