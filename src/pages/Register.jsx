import { useNavigate, Link } from "react-router-dom";
import {
  validateLastName,
  validateFirstName,
  checkMailRequirements,
  checkPasswordRequirements,
} from "../helpers/validationHelper";
import Loading from "./component/loading";
import React from "react";

function Register() {
  document.title = "Humteria | Register";
  const [loading, setLoading] = React.useState(false);
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [checkIfInputWrong, setCheckIfInputWrong] = React.useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (
      validateFirstName(formData.firstName) &&
      validateLastName(formData.lastName) &&
      checkMailRequirements(formData.email) &&
      checkPasswordRequirements(formData.password) &&
      checkPasswordRequirements(formData.passwordConfirmation) &&
      formData.password === formData.passwordConfirmation
    ) {
      //go to endpoint for registration (in registerhelper), when done navigate to login
      navigate("/login");
    }
    setLoading(false);
  }
  return (
    <div className="Register">
      {loading && <Loading />}
      <form onSubmit={handleSubmit} className="Register-form">
        <h1>Humteria Register</h1>
        <label htmlFor="firstName" className="Register-input-field-label">
          First Name:
        </label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
          placeholder="First Name"
          className={
            "Register-input-field Register-input-field-first-name " +
            (checkIfInputWrong &&
              !validateFirstName(formData.firstName) &&
              " Register-input-field-wrong")
          }
        />
        <label htmlFor="lastName" className="Register-input-field-label">
          Last Name:
        </label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, lastName: e.target.value };
            });
          }}
          placeholder="Last Name"
          className={
            "Register-input-field Register-input-field-last-name " +
            (checkIfInputWrong &&
              !validateLastName(formData.lastName) &&
              " Register-input-field-wrong")
          }
        />
        <label htmlFor="email" className="Register-input-field-label">
          Email:
        </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          placeholder="name.name@autismuslink.ch"
          className={
            "Register-input-field Register-input-field-last-name " +
            (checkIfInputWrong &&
              !checkMailRequirements(formData.email) &&
              " Register-input-field-wrong")
          }
        />
        <label htmlFor="password" className="Register-input-field-label">
          Password:
        </label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          placeholder="8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special"
          className={
            "Register-input-field Register-input-field-last-name " +
            (checkIfInputWrong &&
              !checkPasswordRequirements(formData.password) &&
              " Register-input-field-wrong")
          }
        />
        {checkIfInputWrong && (
          <div className="Register-input-field-tooltip">
            <p className="Register-input-field-tooltip-title">
              Password Requirements:
            </p>
            <ul className="Register-input-field-tooltip-list">
              <li className="Register-input-field-tooltip-item">
                Minimum of 8 characters.
              </li>
              <li className="Register-input-field-tooltip-item">
                Must include at least one uppercase letter.
              </li>
              <li className="Register-input-field-tooltip-item">
                Must include at least one lowercase letter.
              </li>
              <li className="Register-input-field-tooltip-item">
                Must include at least one digit.
              </li>
              <li className="Register-input-field-tooltip-item">
                Must include at least one special character.
              </li>
            </ul>
          </div>
        )}

        <label
          htmlFor="passwordConfirmation"
          className="Register-input-field-label"
        >
          Confirm Password:
        </label>
        <input
          name="passwordConfirmation"
          type="password"
          value={formData.passwordConfirmation}
          placeholder="8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special"
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, passwordConfirmation: e.target.value };
            });
          }}
          className={
            "Register-input-field Register-input-field-last-name " +
            (checkIfInputWrong &&
              !checkPasswordRequirements(formData.password) &&
              formData.password != formData.passwordConfirmation &&
              " Register-input-field-wrong")
          }
        />
        <div className="Register-buttons-div">
          <Link to="/login" className="Register-login-link">
            <button type="button" className="Register-submit-btn button">
              Back to login
            </button>
          </Link>
          <button type="submit" className="Register-submit-btn button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
