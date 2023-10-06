import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import React from "react";
import Login from "./pages/login";

import getTokenRefresh from "./helpers/tokenHelper";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const token = localStorage.getItem("token");

  async function setLoggedInState() {
    if (token) {
      let tokenRefreshResponse = await getTokenRefresh();
      if (tokenRefreshResponse != null) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        localStorage.clear("token");
      }
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    setLoggedInState();
  }, []);

  return loggedIn == undefined ? (
    <div className="test">hey</div>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/app/*"
            element={loggedIn ? <LoggedIn /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/app" />
              ) : (
                <Login setLoggedIn={setLoggedIn} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
