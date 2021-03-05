import { useState, useEffect, Fragment } from "react";
import { signup, isAuth } from "./auth";
import { Redirect } from "react-router-dom";
import register from "../../assets/register.svg";
const Register = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && <Redirect to="login" />;
  });

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-info">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
        });
        history.push("/login");
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const signUpForm = () => {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src={register} alt="" className="responsive" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="card">
              <h2 className="text-center py-3">Register</h2>
              <form onSubmit={handleSubmit} className="container">
                <div className="form-group">
                  <input
                    value={name}
                    type="text"
                    onChange={handleChange("name")}
                    className="form-control form-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={email}
                    type="email"
                    onChange={handleChange("email")}
                    className="form-control form-input"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={password}
                    type="text"
                    onChange={handleChange("password")}
                    className="form-control form-input"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary signInButton">
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signUpForm()}
    </Fragment>
  );
};

export default Register;
