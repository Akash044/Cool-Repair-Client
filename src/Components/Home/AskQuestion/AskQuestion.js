import "./AskQuestion.css";
import React from "react";

const AskQuestion = () => {
  return (
    <div className="row">
      <div className="col-md-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Write your query:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
      <div className="col-md-7">
          <h4>FAQ</h4>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Question-01</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Question-02</div>
             Earum nostrum quod soluta architecto aliquam ipsa corrupti adipisci, 
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Question-03</div>
              laudantium esse voluptate ab quibusdam non vitae?
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AskQuestion;
