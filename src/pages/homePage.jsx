import { removeLocalStorageItem } from "../helpers/localStorageHelper";

function HomePage() {
  document.title = "Humteria | Home";
  function logout() {
    removeLocalStorageItem("token");
  }
  return (
    <div>
      <h1>Humteria</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default HomePage;
