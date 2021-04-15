import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createContext, useState } from "react";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import AdminPage from './Components/AdminPage/AdminPage/AdminPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Book from './Components/User/Book/Book';
import BookingsList from './Components/User/BookingList/BookingList';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
  <UserContext.Provider value={[user, setUser]}>
    <Router>
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
            <PrivateRoute path="/appointment/:email">
              <AdminPage />
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/appointment/:email">
              <BookingsList />
            </PrivateRoute>
          </Switch>
        </Router>
  </UserContext.Provider>
  );
}
export default App;

