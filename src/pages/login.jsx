import React from 'react';
import { checkMailRequirements, checkPasswordRequirements, setLocalStorageItem } from '../helpers/globalHelper';
import Loading from './component/loading';

function Login(props) {
  document.title = 'Humteria | Login';
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({ mail: '', pwd: '' });
  const [checkIfInputWrong, setCheckIfInputWrong] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (checkPasswordRequirements(formData.pwd) && checkMailRequirements(formData.mail)) {
      await setLocalStorageItem('token', 'test');
      props.setLoggedIn(true);
    } else {
      setCheckIfInputWrong(true);
    }
    setLoading(false);
  }
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='Login'>
        <form onSubmit={handleSubmit} className='Login-form'>
          <h1>CAS Login</h1>
          <label htmlFor='mail' className='Login-input-field-label'>
            Email:
          </label>
          <input
            name='mail'
            type='email'
            value={formData.mail}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, mail: e.target.value };
              });
            }}
            placeholder='your.name@test.ch'
            className={'Login-input-field Login-input-field-mail ' + (checkIfInputWrong && formData.mail == '' && !checkMailRequirements(formData.mail) && ' Login-input-field-wrong')}
          />
          <label htmlFor='password' className='Login-input-field-label'>
            Password:
          </label>
          <input
            name='password'
            type='password'
            value={formData.pwd}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, pwd: e.target.value };
              });
            }}
            className={'Login-input-field Login-input-field-psw ' + (checkIfInputWrong && formData.psw == '' && ' Login-input-field-wrong')}
          />
          <button type='submit' className='Login-submit-btn button'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
