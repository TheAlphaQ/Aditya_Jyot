import React from "react";

function Form1() {
  return (
    <div>
      <div className="container-fluid form rounded">
        <div className="form-navbar">
          <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active fs-4"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                New Registration
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-4"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Already Registered
              </button>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            {/* <!-- New Registration --> */}
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="form-content">
                <form>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">First Name:</span>
                        </div>
                        <input
                          name="Fname"
                          id="Fname"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Last Name:</span>
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
                          maxLength="10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-sm-6 ">
                      <div className="input-group mb-3 input-group-sm">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Address:</span>
                        </div>
                        <textarea
                          type="text"
                          id="Address"
                          name="Address"
                          className="form-control"
                          required="Please fill this"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <div className="input-group mb-3 input-group-sm">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Email:</span>
                        </div>
                        <textarea
                          type="text"
                          id="Email"
                          name="Email"
                          className="form-control"
                          required="Please fill this"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Telephone:</span>
                        </div>
                        <input
                          name="Telephone"
                          id="Telephone"
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Gender:</span>
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
                    <div className="col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Age:</span>
                        </div>
                        <input
                          name="Age"
                          id="Age"
                          type="Number"
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
                            Source of Referral:
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="Source of Referral"
                          name="Source of Referral"
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
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Language:</span>
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
                            Literacy Status:
                          </span>
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
                          <option value="L">Literate</option>
                          <option value="I">Illiterate</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Family Income/month:
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="Family Income"
                          name="Family Income"
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
                          maxLength="10"
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
                          maxLength="12"
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
                          maxLength="12"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-9">
                      <div
                        className="input-group"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            How often you get your sugar tested?
                          </span>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="Weekly"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Weekly
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check2"
                            name="Monthly"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Monthly
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Yearly"
                            value="something"
                          />
                          <label className="form-check-label">Yearly</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="Do not remember"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Do not remember
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="col-md-9">
                      <div
                        className="input-group"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            When was the last blood sugar tested?
                          </span>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="Weekly"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Weekly
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check2"
                            name="Monthly"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Monthly
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Yearly"
                            value="something"
                          />
                          <label className="form-check-label">Yearly</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="Do not remember"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Do not remember
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row form-row">
                    <div className="col-md-9">
                      <div
                        className="input-group"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Do you have any of these symptoms?{" "}
                          </span>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="Polyuria"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            POLYURIA
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check2"
                            name="Polydypsia"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            POLYDYPSIA
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Weight Loss"
                            value="something"
                          />
                          <label className="form-check-label">
                            WEIGHT LOSS
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

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

              {/* <!-- Already Registered --> */}
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="form-content mt-4">
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
