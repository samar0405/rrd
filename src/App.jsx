import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Cars from "./components/cars/cars";
const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Learn react-router-dom</h1>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="cars" element={<Cars />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
