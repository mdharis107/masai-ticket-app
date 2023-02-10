import "./App.css";
import AuthRoutes from "./Pages/AuthRoutes";
import MainRoute from "./Pages/MainRoute";

function App() {
  return (
    <div className="App">
      <AuthRoutes />
      <MainRoute/>
    </div>
  );
}

export default App;
