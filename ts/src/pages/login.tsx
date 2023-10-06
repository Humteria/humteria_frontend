import React from 'react';
import { checkMailRequirements, setLocalStorageItem } from '../helpers/globalHelper';
import Loading from './component/loading';

function Login(props: any) {
  document.title = 'Humteria | Login';
  const [loading, setLoading] = React.useState(false);
  const [formData, setFromData] = React.useState({ mail: '', pwd: '' });
  const [checkIfInputWrong, setCheckIfInputWrong] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (formData.pwd != '' && checkMailRequirements(formData.mail)) {
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
              setformData((prev) => {
                return { ...prev, mail: e.target.value };
              });
            }}
            placeholder='your.name@autismuslink.ch'
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
              setformData((prev) => {
                return { ...prev, psw: e.target.value };
              });
            }}
            className={'Login-input-field Login-input-field-psw ' + (checkIfInputWrong && formData.psw == '' && ' Login-input-field-wrong')}
          />
          <div className='Login-form-link-div'>
            <Link to='/register' className='Login-register-link'>
              Register
            </Link>
            <Link to='/request-reset' state={formData.mail} className='Login-register-link'>
              Forgot your password
            </Link>
          </div>
          <button type='submit' className='Login-submit-btn button'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
