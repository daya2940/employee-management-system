import React from "react";
import landing from "../../assets/landing.svg";
import { isAuth } from "../auth/auth";

const Landing = () => {
  return (
    <div className="container">
      <h2 className="text-center py-5 font-weight-bold">
        Welcome to Employee Management dashboard
      </h2>
      {!isAuth() && (
        <h3 className="text-center">
          Please register or Login to view your data
        </h3>
      )}
      <div className="d-flex justify-content-center">
        <img
          src={landing}
          alt=""
          className=" mt-lg-5"
          height="500px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Landing;
