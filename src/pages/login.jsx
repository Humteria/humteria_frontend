import React from "react";
import { setLocalStorageItem } from "../helpers/localStorageHelper";
import {
  checkMailRequirements,
  checkPasswordRequirements,
} from "../helpers/validationHelper";
import Loading from "./component/loading";
import { Link } from "react-router-dom";

function Login(props) {
  document.title = "Humteria | Login";
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({ mail: "", pwd: "" });
  const [checkIfInputWrong, setCheckIfInputWrong] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (
      checkPasswordRequirements(formData.pwd) &&
      checkMailRequirements(formData.mail)
    ) {
      //needs to be await, as soon as actual endpoint
      setLocalStorageItem("token", "test");
      props.setLoggedIn(true);
      console.debug(props);
    } else {
      setCheckIfInputWrong(true);
    }
    setLoading(false);
  }
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="Login">
        <form onSubmit={handleSubmit} className="Login-form">
          <h1>Humteria Login</h1>
          <label htmlFor="mail" className="Login-input-field-label">
            Email:
          </label>
          <input
            name="mail"
            type="email"
            value={formData.mail}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, mail: e.target.value };
              });
            }}
            placeholder="your.name@test.ch"
            className={
              "Login-input-field Login-input-field-mail " +
              (checkIfInputWrong &&
                formData.mail == "" &&
                !checkMailRequirements(formData.mail) &&
                " Login-input-field-wrong")
            }
          />
          <label htmlFor="password" className="Login-input-field-label">
            Password:
          </label>
          <input
            name="password"
            type="password"
            value={formData.pwd}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, pwd: e.target.value };
              });
            }}
            className={
              "Login-input-field Login-input-field-psw " +
              (checkIfInputWrong &&
                formData.psw == "" &&
                " Login-input-field-wrong")
            }
          />
          <button type="submit" className="Login-submit-btn button">
            Login
          </button>
        </form>
        <Link to="/register" className="Login-register-link">
          Register
        </Link>
      </div>
    );
  }
}

export default Login;
