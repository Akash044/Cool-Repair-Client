import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createContext, useState } from "react";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

export const UsersContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
  <UsersContext.Provider value={[user, setUser]}>
    <Router>
          <Switch>
            <Route exact path="/">
             <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
            <Login></Login>
            </Route>
            <PrivateRoute path="/appointment/:id">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AdminPage></AdminPage>
            </PrivateRoute>
          </Switch>
        </Router>
  </UsersContext.Provider>
  );
}
export default App;

