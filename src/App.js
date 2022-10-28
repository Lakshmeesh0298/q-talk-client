import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CustomeRoute from "./CustomeRoute/customeRouter";
import Loginusers from "./contextapi/loginusers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Loginusers>
          <CustomeRoute />
        </Loginusers>
      </BrowserRouter>
    </div>
  );
}

export default App;
