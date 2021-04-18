import './Navbar.css'
import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
import logo from '../../../images/logo.jpg'

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const {email} = loggedUser;
  const history = useHistory()

  useEffect(() => {
    fetch(`https://fierce-waters-48255.herokuapp.com/isAdmin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedUser({
          ...loggedUser,
          isAdmin:data});
      });
  },[email])

  const handleSignOut = () =>{
    setLoggedUser({});
    history.push('/')
  }
  const handleSignIn = () =>{
    history.push('/login')
  }
  console.log(loggedUser);
  return (
    <nav className="navbar navbar-expand-lg bg-gradient navbar-light nav-bg nv">
      <div className="container-fluid">
        <img src={logo} style={{width:"4rem", borderRadius:"30px"}} alt=""/>
        <Link className="navbar-brand ms-2" to="/">
          <h3>COOL REPAIR</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-5 "
          id="navbarNav"
        >
          <ul className="navbar-nav text-dark ">
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to='/home'
              >
                <h5>Home</h5>
              </Link>
            </li>
            <li className="nav-item">
              { loggedUser.isAdmin? <Link className="nav-link active" to='/admin'>
               <h5>Admin</h5>
              </Link>:
                 ( email?
                   <Link className="nav-link active" to='/dashboard'>
                 <h5>DashBoard</h5>
                </Link>:
                  <h6></h6>

                )
              }
              
            </li>
            <li className="nav-item pe-2 ps-3">
            {loggedUser.photo && <img src={loggedUser.photo} alt="" className="me-2" style={{ width:"50px",borderRadius:"50px"}}/>}
               <i>{loggedUser.userName}</i>
            </li>
            <li className="nav-item">
              <button className="btn violet-color text-white" onClick={email? handleSignOut: handleSignIn}><h6>{email ? 'Log out' : 'Login'}</h6></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
