import "./App.css";
import AuthNavbar from "./Components/AuthNavbar";
import MainNavbar from "./Components/MainNavbar";
import AuthRoutes from "./Pages/AuthRoutes";
import MainRoute from "./Pages/MainRoute";

function App() {
  return (
    <div className="App">
      {/* <AuthNavbar /> */}
      {/* <AuthRoutes /> */}
      <MainNavbar />
      <MainRoute />
    </div>
  );
}

export default App;
