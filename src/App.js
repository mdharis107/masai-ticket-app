import { useSelector } from "react-redux";
import "./App.css";
import AuthNavbar from "./Components/AuthNavbar";
import MainNavbar from "./Components/MainNavbar";
import NavBar from "./Components/NavBar";
import AuthRoutes from "./Pages/AuthRoutes";
import MainRoute from "./Pages/MainRoute";

function App() {
  // const app = useSelector((state) => console.log(state.AuthReducer.isAuth));
  return (
    <div className="App">
      <NavBar/>
      {/* <AuthNavbar /> */}
      {/* <AuthRoutes /> */}
      {/* <MainNavbar /> */}
      <MainRoute />
    </div>
  );
}

export default App;
