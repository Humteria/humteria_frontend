import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./pages/component/navbar";
import HomePage from "./pages/homePage";

function LoggedIn() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="home" element={<HomePage />} />

        <Route index element={<Navigate to="home" />} />
      </Routes>
    </>
  );
}
export default LoggedIn;
