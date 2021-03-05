import { useState, useEffect, Fragment } from "react";
import { signin, authenticate, isAuth } from "./auth";
import { Redirect } from "react-router-dom";
import login from "../../assets/login.svg";

const Login = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && <Redirect to="/dashboard" />;
  });

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-info">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          if (isAuth()) {
            history.push("/dashboard");
            window.location.reload();
          } else {
            history.push("/");
          }
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const signInForm = () => {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src={login} alt="" className="responsive" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="card request-demo-form">
              <h2 className="text-center">Sign In</h2>
              <form onSubmit={handleSubmit} className="container mt-3">
                <div className="form-group">
                  <input
                    value={email}
                    type="email"
                    onChange={handleChange("email")}
                    className="form-control form-input"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group ">
                  <input
                    value={password}
                    type="text"
                    onChange={handleChange("password")}
                    className="form-control form-input"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary signInButton "
                  >
                    SignIn
                  </button>
                </div>
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
      {showForm && signInForm()}
    </Fragment>
  );
};

export default Login;
