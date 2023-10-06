function HomePage() {
  document.title = "Humteria | Home";
  function logout() {
    try {
      localStorage.removeItem("token");
    } catch {}
    location.reload(true);
  }
  return (
    <div>
      <h1>Humteria</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default HomePage;
