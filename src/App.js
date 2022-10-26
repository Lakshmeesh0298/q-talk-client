import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CustomeRoute from "./CustomeRoute/customeRouter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomeRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
