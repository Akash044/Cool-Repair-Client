import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createContext, useState } from "react";
import Home from './Components/HomePage/Home/Home';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingsList from './Components/User/BookingList/BookingList';
import User from './Components/User/User/User';
import Admin from './Components/AdminPage/Admin/Admin';
import Navbar from './Components/HomePage/Navbar/Navbar';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
  <UserContext.Provider value={[user, setUser]}>
    <Router>
      <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
             <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
            <Login />
            </Route>
            <PrivateRoute path="/service/:id">
              <User />
            </PrivateRoute>
            <PrivateRoute path="/appointment/:email">
              <BookingsList />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <User />
            </PrivateRoute>
          </Switch>
        </Router>
  </UserContext.Provider>
  );
}
export default App;

