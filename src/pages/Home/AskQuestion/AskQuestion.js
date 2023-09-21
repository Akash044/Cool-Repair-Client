import "./AskQuestion.css";
import React from "react";
import { FAQ_DATA } from "./faq_data";

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
        <div className="FAQ-Q-A-section">
          <ol className="list-group list-group-numbered">
            {FAQ_DATA.map((faq, i) => (
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{faq.Question}</div>
                  {faq.Answer}
                </div>
                <span className="badge bg-primary rounded-pill">
                  {Math.round(Math.random() * 10)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
