import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCar from "./components/AddCar";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Error404 from "./components/Error404";
import EditCar from "./components/EditCar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CarList />}></Route>
          <Route path="/add" element={<AddCar />}></Route>
          <Route path="/edit/:id" element={<EditCar />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
