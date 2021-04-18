import "./Login.css";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/fontawesome-free-brands";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "../../Config/firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  document.title = "Login";
  const provider = new firebase.auth.GoogleAuthProvider();
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        sessionStorage.setItem("email", user.email);
        setLoggedUser({
          userName: user.displayName,
          email: user.email,
          photo: user.photoURL,
        });
      
        history.replace(from);
      })
      .catch(() => {});
  };
  return (
      <div className=" display-position">
        <div>
          <h3>Sign in</h3>
          <button
            className="btn violet-color text-white"
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon className="font-awesome me-2" icon={faGoogle} />
            Continue with Google
          </button>
        </div>
      </div>
  );
};

export default Login;
