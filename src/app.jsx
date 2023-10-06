import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loading from './pages/component/loading';
import React from 'react';
import Login from './pages/login';

import getTokenRefresh from './helpers/tokenHelper';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const token = localStorage.getItem('token');

  async function setLoggedInState() {
    if (token) {
      let tokenRefreshResponse = await getTokenRefresh();
      if (tokenRefreshResponse != null) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        localStorage.clear('token');
      }
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    setLoggedInState();
  }, []);

  return loggedIn == undefined ? (
    <Loading />
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={loggedIn ? <Navigate to='/app' /> : <Login setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
