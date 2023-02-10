import "./App.css";
import AuthNavbar from "./Components/AuthNavbar";
import AuthRoutes from "./Pages/AuthRoutes";
import MainRoute from "./Pages/MainRoute";

function App() {
  return (
    <div className="App">
      <AuthNavbar />
      <AuthRoutes />
      <MainRoute />
    </div>
  );
}

export default App;
