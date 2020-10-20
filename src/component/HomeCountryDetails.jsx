import React from "react";

const HomeCountryDetails = (props) => {
  const { active, cases, deaths, recovered, country } = props.name;
  return (
    <>
    <div className="card-wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="card-body">
            <div className="card-title h5">
              <h2>confirmed</h2>
            </div>
            <div className="card-title h5">
              <h3>
                <span>{cases}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="card-title h5">
              <h2>Active </h2>
            </div>
            <div className="card-title h5">
              <h3>
                <span>{active}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="card-title h5">
              <h2>recovered </h2>
            </div>
            <div className="card-title h5">
              <h3>
                <span>{recovered}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="card-title h5">
              <h2>deaths</h2>
            </div>
            <div className="card-title h5">
              <h3>
                <span>{deaths}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomeCountryDetails;
