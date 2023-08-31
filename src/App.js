import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home/HomeLayout/HomeLayout";
import Login from "./pages/Login/Login";
import User from "./pages/User/UserLayout/UserLayout";
import BookingsList from "./pages/User/BookingList/BookingList";
import Admin from "./pages/Admin/AdminLayout/AdminLayout";
import Navbar from "./Components/common/Navbar/Navbar";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

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
