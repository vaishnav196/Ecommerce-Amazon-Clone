import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Component/Header/Navbar";
import Newnav from "./Component/Newnavbar/Newnav";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Newnav/>
      <Home/>
    </div>
  );
}

export default App;
