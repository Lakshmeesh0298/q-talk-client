import { BrowserRouter } from "react-router-dom";
import CustomeRoute from "./CustomeRoute/customeRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <CustomeRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
