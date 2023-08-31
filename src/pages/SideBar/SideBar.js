import React, { useContext } from "react";
import { UserContext } from "../../App";

const SideBar = (props) => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  console.log(props);
  return (
    <div className="">
      {!loggedUser.isAdmin ? (
        <div className="row">
          <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                <li className="nav-item">
                  <button
                    onClick={() => props.handleDisplay(1)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Home"
                  >
                    <i className="bi-house fs-1">BOOK</i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.handleDisplay(2)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Dashboard"
                  >
                    <i className="bi-speedometer2 fs-1">Booking List</i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.handleDisplay(3)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <i className="bi-table fs-1">Write Review</i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                <li className="nav-item">
                  <button
                    onClick={() => props.handleDisplay(1)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Home"
                  >
                    <i className="bi-house fs-1">Order List</i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.handleDisplay(2)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Dashboard"
                  >
                    <i className="bi-speedometer2 fs-1">Add Service</i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.handleDisplay(3)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <i className="bi-table fs-1">Make Admin</i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.handleDisplay(4)}
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <i className="bi-table fs-1">Manage Services</i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
