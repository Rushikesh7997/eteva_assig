import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes></AllRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
