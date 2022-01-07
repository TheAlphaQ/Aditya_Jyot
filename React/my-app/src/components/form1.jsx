import React from "react";
import {Link } from "react-router-dom";

function Form1() {
  return (
    <div>
      <div className="container-fluid form">
        <div className="form-navbar">
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <button
                className="nav-link active fs-4"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                New Registration
              </button>
              <button
                className="nav-link nav-fill fs-4"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Already Registered
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {/* <!-- New Registration --> */}
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="form-content">
                <form>
                  <div className="mt-4 fs-4">Identification Data</div>
                  <hr />
                  <div className="row form-row">
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">First Name</span>
                        </div>
                        <input
                          name="Fname"
                          id="Fname"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Middle Name</span>
                        </div>
                        <input
                          name="Mname"
                          id="Mname"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Last Name</span>
                        </div>
                        <input
                          name="Lname"
                          id="Lname"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-4">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Age</span>
                        </div>
                        <input
                          name="Age"
                          id="Age"
                          type="number"
                          className="form-control"
                          maxLength="3"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Address</span>
                        </div>
                        <textarea
                          type="text"
                          id="Address"
                          name="Address"
                          className="form-control"
                          required="Please fill this"
                          rows="1"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-4">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Telephone Number
                          </span>
                        </div>
                        <input
                          name="Tele"
                          id="Tele"
                          type="number"
                          className="form-control"
                          maxLength="12"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Email</span>
                        </div>
                        <input
                          name="Email"
                          id="Email"
                          type="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Gender</span>
                        </div>
                        <select
                          className="form-control"
                          id="Gender"
                          name="Gender"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select Gender
                          </option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="O">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Aadhaar number
                          </span>
                        </div>
                        <input
                          name="Aadhaar"
                          id="Aadhaar"
                          type="number"
                          className="form-control"
                          maxLength="12"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Religion</span>
                        </div>
                        <input
                          name="Religion"
                          id="Religion"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Literacy Status
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="Literacy Status"
                          name="Literacy Status"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="L">Literate</option>
                          <option value="I">Illiterate</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Language</span>
                        </div>
                        <select
                          className="form-control"
                          id="Language"
                          name="Language"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="E">English</option>
                          <option value="H">Hindi</option>
                          <option value="M">Marathi</option>
                          <option value="O">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Family Income/month
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="FamilyIncome"
                          name="FamilyIncome"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select Family Income/month
                          </option>
                          <option value="E">
                            Extreme Lower: Less than Rs.200/-{" "}
                          </option>
                          <option value="L">Lower: Rs.201/-to Rs. 500/-</option>
                          <option value="M">
                            Middle: Rs.501/- to Rs.2,000/-
                          </option>
                          <option value="U">Upper :More than Rs.2000/-</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Source of Referral
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="Source_Referral"
                          name="Source_Referral"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="O">Ophthalmologist </option>
                          <option value="D"> Diabetologist</option>
                          <option value="G">GPs</option>
                          <option value="Dd">Door to door survey</option>
                          <option value="Ot">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-12"></div>
                  </div>

                  <div className="mt-4 fs-4">Known Diabetics</div>
                  <hr />

                  <div className="row form-row">
                    <div className="col-md-8">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            How was the Diabetes Diagnosed
                          </span>
                        </div>
                        <input
                          name="How was the Diabetes Diagnosed"
                          id="How was the Diabetes Diagnosed"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Duration of Diabetes in years
                          </span>
                        </div>
                        <input
                          name="Duration of Diabetes in years"
                          id="Duration of Diabetes in years"
                          type="number"
                          className="form-control"
                          maxLength="3"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-5">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            What was the value?(in mg%)
                          </span>
                        </div>
                        <input
                          name="What was the value?"
                          id="What was the value?"
                          type="number"
                          className="form-control"
                          maxLength="10"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            When was your last eye examination done (in years)
                          </span>
                        </div>
                        <input
                          name="When was your last eye examination done (in years)"
                          id="When was your last eye examination done (in years)"
                          type="number"
                          className="form-control"
                          maxLength="3"
                          min="1"
                          max="150"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-12">
                      <div
                        className="input-group1"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            How often you get your sugar tested?
                          </span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio1"
                            value="Weekly"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Weekly
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio2"
                            value="Monthly"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Monthly
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio3"
                            value="Yearly"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            Yearly
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio4"
                            value="Do not remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                          >
                            Do not remember
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-12">
                      <div
                        className="input-group2"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            When was the last blood sugar tested?
                          </span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio5"
                            value="Weekly"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                          >
                            Weekly
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio6"
                            value="Monthly"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio6"
                          >
                            Monthly
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio7"
                            value="Yearly"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio7"
                          >
                            Yearly
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio8"
                            value="Do not remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio8"
                          >
                            Do not remember
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-sm-12">
                      <div
                        className="input-group3"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Do you have any of these symptoms?
                          </span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="Polyuria"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Polyuria
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check2"
                            name="Polydypsia"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Polydypsia
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Weight Loss"
                            id="check3"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check3">
                            Weight Loss
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="button-container mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                  >
                    Refresh
                  </button>

                  <Link to="/form2">
                  <button type="button" className="btn btn-success btn-lg">
                    Submit
                  </button>
                  </Link>

                </div>
              </div>
            </div>

            {/* Already Registered */}
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="form-content my-4">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search UID"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      id="Search-btn"
                      name="Search-btn"
                    >
                      Search
                    </button>
                  </div>
                </div>

                <ul
                  className="nav nav-pills nav-fill mt-3 mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-Form1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Form1"
                      type="button"
                      role="tab"
                      aria-controls="pills-Form1"
                      aria-selected="true"
                    >
                      Form1
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-Form2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Form2"
                      type="button"
                      role="tab"
                      aria-controls="pills-Form2"
                      aria-selected="false"
                    >
                      Form2
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-Form1"
                    role="tabpanel"
                    aria-labelledby="pills-Form1-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Form2"
                    role="tabpanel"
                    aria-labelledby="pills-Form2-tab"
                  >
                    ...
                  </div>
                </div>
                <div className="button-container ">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                  >
                    Refresh
                  </button>
                  
                  
                  <button type="button" className="btn btn-success btn-lg">
                    Submit
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form1;
