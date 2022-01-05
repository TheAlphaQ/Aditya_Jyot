import React from "react";

function Form2() {
  return (
    <div>
      <div className="container-fluid form rounded">
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
                  <div className="mt-4 fs-4">Medical History</div>
                  <hr />
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Family History of Diabetes
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="FamilyHistory"
                          name="FamilyHistory"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="Y">Yes</option>
                          <option value="N">No</option>
                          <option value="NK">Not Known</option>
                        </select>
                        <span className="input-group-text">Relation</span>
                        <select
                          className="form-control"
                          id="FamilyHistory"
                          name="FamilyHistory"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Brother">Brother</option>
                          <option value="Sister">Sister</option>
                          <option value="Maternal GF">Maternal GF</option>
                          <option value="Maternal GM">Maternal GM</option>
                          <option value="Paternal GF">Paternal GF</option>
                          <option value="Paternal GM">Paternal GM</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group ">
                        <span className="input-group-text">
                          Duration of Diabetes in
                        </span>
                        <input
                          name="Years"
                          id="Years"
                          type="number"
                          className="form-control"
                          maxLength="3"
                        />
                        <span className="input-group-text">Years</span>
                        <input
                          name="Months"
                          id="Months"
                          type="number"
                          className="form-control"
                          maxLength="3"
                        />
                        <span className="input-group-text">Months</span>
                      </div>
                    </div>
                  </div>
                  <div className="row form-row">
                    <div className="col-md-5">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            How is your Diabetes currently treated?
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="FamilyHistory"
                          name="FamilyHistory"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="Diet">Diet</option>
                          <option value="Tablets">Tablets</option>
                          <option value="With Insulin">With Insulin</option>
                          <option value="Insulin & Tablets">
                            Insulin & Tablets
                          </option>
                          <option value="Unsure">Unsure</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="input-group ">
                        <span className="input-group-text">
                          How long has your Diabetes been treated this way?
                        </span>
                        <input
                          name="DiabeticYears"
                          id="DiabeticYears"
                          type="number"
                          className="form-control"
                          maxLength="3"
                        />
                        <span className="input-group-text">Years</span>
                        <input
                          name="DiabeticMonths"
                          id="DiabeticMonths"
                          type="number"
                          className="form-control"
                          maxLength="3"
                        />
                        <span className="input-group-text">Months</span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      border: "2px solid #e9ecef",
                    }}
                  >
                    <span
                      style={{
                        position: "relative",
                        bottom: "10px",
                        pointerEvents: "none",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "white",
                          padding: "0 0.8rem",
                        }}
                        className="fs-6"
                      >
                        History of Smoking:
                      </span>
                    </span>
                    <div className="row form-row" style={{ margin: "1rem 0" }}>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <span className="input-group-text">
                            Are you currently a smoker?
                          </span>
                          <select
                            className="form-control"
                            id="CurrentSmoking"
                            name="CurrentSmoking"
                            required="Please fill this"
                          >
                            <option selected disabled>
                              Select
                            </option>
                            <option value="YR">Yes, Regularly</option>
                            <option value="YO">Yes, Occasionally</option>
                            <option value="N">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <span className="input-group-text">
                            Did you smoke in the past?
                          </span>
                          <select
                            className="form-control"
                            id="PastSmoking"
                            name="PastSmoking"
                            required="Please fill this"
                          >
                            <option selected disabled>
                              Select
                            </option>
                            <option value="YR">Yes, Regularly</option>
                            <option value="YO">Yes, Occasionally</option>
                            <option value="N">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row form-row" style={{ margin: "1rem 0" }}>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <span className="input-group-text">
                            How many cigarettes do/did you smoke per day?
                          </span>
                          <select
                            className="form-control"
                            id="CurrentSmokingCount"
                            name="CurrentSmokingCount"
                            required="Please fill this"
                          >
                            <option selected disabled>
                              Select
                            </option>
                            <option value="<5">&lt;5</option>
                            <option value="5-20">5-20</option>
                            <option value="21-40">21-40</option>
                            <option value=">40">&gt;40</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group ">
                          <span className="input-group-text">
                            How old have you been when you started smoking?
                          </span>
                          <input
                            name="SmokingStartAge"
                            id="SmokingStartAge"
                            type="number"
                            className="form-control"
                            maxLength={3}
                            step={1}
                            placeholder="Age in Years"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            History of Drinking
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="DrinkingHistory"
                          name="DrinkingHistory"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="Light (0-6 drinks/week)">
                            Light (0-6 drinks/week)
                          </option>
                          <option value="Moderate (7-20 drinks/week)">
                            Moderate (7-20 drinks/week)
                          </option>
                          <option value="Heavy (21-53drinks/week) ">
                            Heavy (21-53drinks/week){" "}
                          </option>
                        </select>
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
                          <span className="input-group-text">Past History</span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check4"
                            name="Hypertension"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check4">
                            Hypertension
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check5"
                            name="IHD"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check5">
                            IHD
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Stroke"
                            id="check6"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check6">
                            Stroke
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Neuropathy"
                            id="check7"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check7">
                            Neuropathy
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="Nephropathy"
                            id="check8"
                            value="something"
                          />
                          <label className="form-check-label" htmlFor="check8">
                            Nephropathy
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 fs-4">Physical Examination</div>
                  <hr />
                  <div className="row form-row">
                    <div className="col-md-2">
                      <div className="input-group ">
                        <span className="input-group-text">Weight</span>
                        <input
                          name="Weight"
                          id="Weight"
                          type="number"
                          className="form-control"
                          maxLength={3}
                          placeholder="in Kg"
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group ">
                        <span className="input-group-text">Height</span>
                        <input
                          name="Height"
                          id="Height"
                          type="number"
                          className="form-control"
                          maxLength={3}
                          placeholder="in cm"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group ">
                        <span className="input-group-text">
                          Abdominal Circumference
                        </span>
                        <input
                          name="Waist"
                          id="Waist"
                          type="number"
                          className="form-control"
                          maxLength={3}
                          placeholder="in cm"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group ">
                        <span className="input-group-text">BP :</span>
                        <span className="input-group-text">Systolic</span>
                        <input
                          name="Systolic"
                          id="Systolic"
                          type="number"
                          className="form-control"
                        />
                        <span className="input-group-text">Diastolic</span>
                        <input
                          name="Diastolic"
                          id="Diastolic"
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 fs-4">Past Ophthalmic History</div>
                  <hr />
                  <div className="row form-row">
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            History of any Ocular Surgery
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="OcularSurgery"
                          name="OcularSurgery"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            History of any Eye Surgery
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="OcularSurgeryEye"
                          name="OcularSurgeryEye"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="OD">OD</option>
                          <option value="OS">OS</option>
                          <option value="OU">OU</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group ">
                        <span className="input-group-text">
                          If known type of surgery, specify
                        </span>
                        <input
                          name="KnownSurgery"
                          id="KnownSurgery"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Whether underwent any Laser Photocoagulation
                          </span>
                        </div>
                        <select
                          className="form-control"
                          id="LaserPhotocoagulation"
                          name="LaserPhotocoagulation"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Eye</span>
                        </div>
                        <select
                          className="form-control"
                          id="LaserPhotocoagulationEye"
                          name="LaserPhotocoagulationEye"
                          required="Please fill this"
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option value="OD">OD</option>
                          <option value="OS">OS</option>
                          <option value="OU">OU</option>
                        </select>
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
            </div>
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
                    type="reset"
                    form="form2"
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

export default Form2;
